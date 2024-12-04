#!/bin/bash
#
# This script fixes the VTO audio codecs before supplying the stream url to go2rtc.
#
# Usage: ./fix_vto_codecs.sh [--debug] [--https] <VTO stream URL>
#
# Examples:
#
#   ./fix_vto_codecs.sh rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif
#   ./fix_vto_codecs.sh rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=1
#
#   If the VTO has HTTPS enabled:
#   ./fix_vto_codecs.sh --https rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=0
#
#   With ffmpeg prefix:
#   ./fix_vto_codecs.sh ffmpeg:rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=0#video=copy#audio=copy
#

set -euo pipefail

usage() {
  echo "Usage: ${0} [--debug] [--https] <VTO stream URL>" >&2
  exit "${1}"
}

debug=false
protocol="http"
extra_curl_args=()

positional_args=()
while [[ $# -gt 0 ]]; do
  case $1 in
    --debug)
      debug=true
      shift
      ;;
    --https)
      protocol="https"
      extra_curl_args+=("--insecure")
      shift
      ;;
    -*)
      echo "Unknown option ${1}" >&2
      usage 1
      ;;
    *)
      positional_args+=("$1")
      shift
      ;;
  esac
done

set -- "${positional_args[@]}"
unset positional_args

if [[ $# -ne 1 ]]; then
  echo "Expected 1 positional argument, got $#" >&2
  usage 1
fi

rtsp_vto_stream_url="${1}"

if [[ "${rtsp_vto_stream_url}" != "rtsp://"* && "${rtsp_vto_stream_url}" != "ffmpeg:rtsp://"* ]]; then
  echo "VTO stream URL does not start with rtsp:// or ffmpeg:rtsp://" >&2
  usage 1
fi

if [[ "${debug}" == "true" ]]; then
  set -x
  extra_curl_args+=("--verbose")
fi

vto_host_with_creds="${rtsp_vto_stream_url#"ffmpeg:"}"
vto_host_with_creds="${vto_host_with_creds#"rtsp://"}"
vto_host_with_creds="${vto_host_with_creds%%"/"*}"

query="action=setConfig"
# PCMA: good for webrtc and 2-way audio
query+="&Encode[0].MainFormat[0].Audio.Compression=G.711A"
# AAC: good for Frigate
query+="&Encode[0].ExtraFormat[0].Audio.Compression=AAC"

output=$(
  curl --fail --silent --show-error --digest --globoff "${extra_curl_args[@]}" \
    "${protocol}://${vto_host_with_creds}/cgi-bin/configManager.cgi?${query}"
)

if [[ "${output}" != $'OK\r' ]]; then
  echo "Failed to set VTO codecs. Response:" >&2
  echo "${output}" >&2
  exit 1
fi

echo -n "${rtsp_vto_stream_url}"
