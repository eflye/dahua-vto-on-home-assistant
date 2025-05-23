# Dahua VTO on Home Assistant

My personal Dahua VTO doorbell setup in Home Assistant, with no VTH or cloud dependency.

## Demos

### The card when the doorbell is ringing

https://github.com/user-attachments/assets/cef14806-f0c4-4c4b-a5e0-5cdcab07ff95

### The card when the doorbell is not ringing

https://github.com/user-attachments/assets/0cc0a9d8-984f-4946-a7a1-14fab96c9920

### The card in a tablet, combined with phone and TV notifications

The card on this demo is slighty outdated.

https://github.com/felipecrs/dahua-vto-on-home-assistant/assets/29582865/3aa5be77-995b-4858-91db-e60be104a70e

## Goals

- No cloud services (no Dahua app)
- No VTH (indoor station)
- No communication over SIP
- Use Home Assistant for notifications
- Use Home Assistant for 2-way audio communication (accepting the call, talking to the visitor)
- Use Frigate for object detection of the doorbell camera
- Use Frigate for recording of the doorbell camera

While my own setup is working fine, this guide is work in progress, but I plan to explain every bit of it (even if just to myself).

## Why not SIP?

I was using a fully SIP setup before, using Asterisk and the [SIP card](https://github.com/TECH7Fox/sip-hass-card). I decided to move away because:

1. Asterisk is too complicated to manage. I don't want to deal with it.
2. I could not find a nice way to make it beautiful in my dashboard. It always felt out of place.
3. Answering the doorbell when outside home would require to open UDP ports in my router, which I don't want to do.

## Caveats

I could not yet [get rid of Asterisk](https://github.com/felipecrs/dahua-vto-on-home-assistant/issues/1). Since I am not using a VTH, I still need Asterisk so that the doorbell can attempt to call a SIP extension.

And only in such case the button pressed event will be detected by the Home Assistant Dahua integration.

So, until I find a better solution, I am running Asterisk to create a dummy extension for the doorbell to call.

## Components

- Dahua VTO Doorbell VTO2202F-P-S2
- Home Assistant server
- [Dahua Home Assistant integration](https://github.com/rroller/dahua) to capture the button pressed event, cancel the call after the button is pressed, and unlock the door
- [Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons) to get the [button pressed event](https://github.com/rroller/dahua/issues/359) by the Dahua integration, and also so that the doorbell can announce _Calling now_ when the button is pressed
- [Frigate](https://github.com/blakeblackshear/frigate) for object detection and recording
- [go2rtc](https://github.com/AlexxIT/go2rtc) for 2-way audio communication, running inside Frigate in this example
- [Frigate Home Assistant integration](https://github.com/blakeblackshear/frigate-hass-integration), which allows the Advanced Camera Card to communicate with go2rtc within Frigate without needing external exposure of the go2rtc server
- [Advanced Camera Card](https://github.com/dermotduffy/advanced-camera-card) for 2-way audio communication within the Home Assistant dashboard (at least version [7.0.0](https://github.com/dermotduffy/advanced-camera-card/releases/tag/v7.0.0))
- [Fully Kiosk Browser](https://www.fully-kiosk.com/) on a tablet for the doorbell interface
- [Fully Kiosk Browser Home Assistant official integration](https://www.home-assistant.io/integrations/fully_kiosk/)
- [layout-card](https://github.com/thomasloven/lovelace-layout-card/) to allow the doorbell dashboard to use full width of my tablet screen in vertical orientation, while still displaying other larger displays in horizontal orientation nicely
- [Home Assistant companion app](https://companion.home-assistant.io), to receive notifications when someone rings the doorbell
- [Notifications for Android TV Home Assistant integration](https://www.home-assistant.io/integrations/nfandroidtv/), to receive notifications on my TVs when someone rings the doorbell

## How to

This is not a step-by-step guide. This is just a reference for the specific configurations of each of the components above to make it work like in the demo.

### Configuring Asterisk

You need to [install the Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons/blob/main/asterisk/DOCS.md) and then add a PJSIP extension for the VTO. Also, you need a "virtual" number/extension for the VTO to call to. The VTO will later connect to Asterisk and when someone rings it, it will call such number.

The relevant Asterisk configuration files can be found at [`asterisk/custom`](./asterisk/custom/).

### Configuring the VTO

The VTO SIP server configuration should be as following:

![VTO SIP server configuration](./vto/sip-server-configuration.png)

Also, this is how I configure my video stream in the VTO:

![VTO video configuration](./vto/video-configuration.png)

It works well for me. I use the sub stream to record in Frigate.

### Configuring Frigate

Nothing outside of the usual. You can check [Frigate docs](https://docs.frigate.video).

The relevant section of my `frigate.yaml` can be found [here](./frigate/frigate.yaml).

Make sure the [Frigate Home Assistant integration](https://docs.frigate.video/integrations/home-assistant) is also configured.

> **Note**
> This setup uses Frigate, but it is not strictly necessary. You can also use go2rtc in the Advanced Camera Card without Frigate itself. You will need to use its [proxy functionality](https://card.camera/#/configuration/cameras/README?id=proxy) to make it work outside your local network.

### Configuring go2rtc

go2rtc runs inside Frigate in this setup. The go2rtc configuration is included in the Frigate configuration. The important thing here is to use the [`fix_vto_codecs.sh`](./go2rtc/fix_vto_codecs.sh) script to `echo` your VTO RTSP URLs.

In my case, I added such script to `/config/scripts/fix_vto_codecs.sh`. Make sure it has execution permission with `chmod +x /config/scripts/fix_vto_codecs.sh`, otherwise go2rtc will not be able to execute it.

Note the script provides a `--https` flag in case your VTO has HTTPS enabled. Mine doesn't.

### Configuring the Advanced Camera Card

The minimum version of the Advanced Camera Card required for this setup is [7.0.0](https://github.com/dermotduffy/advanced-camera-card/releases/tag/v7.0.0).

The code for my dashboard with the Advanced Camera Card configured can be found [here](./home-assistant/dashboard/doorbell.yaml).

My dashboard is configured to use [layout-card](https://github.com/thomasloven/lovelace-layout-card/), but you are free to make it use other dashboard types.

### Configuring Fully Kiosk Browser

My [Fully Kiosk Browser](https://www.fully-kiosk.com) `settings.json` can be found [here](./fully-kiosk-browser/fully-settings.json). Do not forget to have the [Fully Kiosk Browser official Home Assistant integration](https://www.home-assistant.io/integrations/fully_kiosk) configured, since it is used in the automations.

### Configuring Home Assistant

Make sure to have the [Home Assistant Dahua integration](https://github.com/rroller/dahua) configured.

Then, pretty much everything is orchestrated through Home Assistant automations.

I left a reference of my automations [here](./home-assistant/automations/).

You can pick the ones you want, and then edit them to fit your needs.

The main one is [`doorbell-ringed.yaml`](./home-assistant/automations/doorbell-ringed.yaml), which starts when someone rings the doorbell and performs the necessary actions like you saw in the demo video.

For example, the first action is to cancel the call in the VTO. This is important so that 2-way audio communication can work well within go2rtc and the Advanced Camera Card.

You will need to [create two `input_boolean`s](https://www.home-assistant.io/integrations/input_boolean/) as well. In my automations they are named `input_boolean.doorbell_calling` and `input_boolean.do_not_disturb` (suggested icon is `mdi:bell-off`).

The integration also uses the [`ringtone.mp3`](./www/asterisk/ringtone.mp3) to emulate a call by playing it on the tablet. Make sure such file is in your `/config/www/asterisk/` folder.

I created notification groups for my mobile devices and for my TVs to simplify my automation. If you want to do the same, it's as simple as adding this to your Home Assistant `configuration.yaml`:

```yaml
notify:
  - name: all_phones
    platform: group
    services:
      - service: mobile_app_phone_a
      - service: mobile_app_phone_b
  - name: all_tvs
    platform: group
    services:
      - service: kitchen_tv
      - service: bedroom_tv
```
