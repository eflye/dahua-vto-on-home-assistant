var e={frigate_card:"Cartão Frigate",frigate_card_description:"Um cartão da Lovelace para usar com Frigate",live:"Ao Vivo",no_media:"Nenhuma mídia para exibir",recordings:"Gravações",version:"Versão"},a={cameras:{camera_entity:"Entidade da Câmera",cast:{dashboard:{dashboard_path:"",view_path:""},editor_label:"",method:"",methods:{dashboard:"",standard:""}},dependencies:{all_cameras:"Mostrar eventos para todas as câmeras nesta câmera",cameras:"Mostrar eventos para câmeras específicas nesta câmera",editor_label:"Opções de dependência"},engines:{editor_label:"Opções do motor da câmera"},frigate:{camera_name:"Nome da câmera do Frigate (detectado automaticamente pela entidade)",client_id:"ID do cliente do Frigate (para >1 servidor Frigate)",editor_label:"Opções do Frigate",labels:"Rótulos do Frigate/filtros de objetos",url:"URL do servidor Frigate",zones:"Zonas do Frigate"},go2rtc:{editor_label:"Opções do go2rtc",modes:{editor_label:"Modos do go2rtc",mjpeg:"Motion JPEG (MJPEG)",mp4:"MPEG-4 (MP4)",mse:"Media Source Extensions (MSE)",webrtc:"Web Real-Time Communication (WebRTC)"},stream:"Nome do stream do go2rtc"},hide:"Ocultar câmera da interface do usuário",icon:"Ícone para esta câmera (detectado automaticamente pela entidade)",id:"ID exclusivo para esta câmera nesse cartão",image:{editor_label:"Opções de Imagem",refresh_seconds:"Número de segundos após os quais atualizar a imagem ao vivo (0=nunca)",url:"URL da imagem para usar em vez do instantâneo da entidade da câmera"},live_provider:"Provedor de visualização ao vivo para esta câmera",live_provider_options:{editor_label:"Opções do provedor de visualização ao vivo"},live_providers:{auto:"Automatico",go2rtc:"go2rtc",ha:"Stream de vídeo do Home Assistant (ou seja, HLS, LL-HLS, WebRTC via HA)",image:"Imagens do Home Assistant",jsmpeg:"JSMpeg","webrtc-card":"Cartão WebRTC (de @AlexxIT)"},motioneye:{editor_label:"Opções do MotionEye",images:{directory_pattern:"Padrão de diretório de imagens",file_pattern:"Padrão de arquivo de imagens"},movies:{directory_pattern:"Padrão de diretório de filmes",file_pattern:"Padrão de arquivo de filmes"},url:"URL da interface de usuário do MotionEye"},title:"Título para esta câmera (detectado automaticamente pela entidade)",triggers:{editor_label:"Opções de acionamento",entities:"Acionar a partir de outras entidades",motion:"Acionar detectando automaticamente o sensor de movimento",occupancy:"Acionar detectando automaticamente o sensor de ocupação"},webrtc_card:{editor_label:"Opções do cartão WebRTC",entity:"Entidade de câmera de cartão WebRTC (não é uma câmera Frigate)",url:"URL da câmera do cartão WebRTC"}},common:{controls:{builtin:"",filter:{editor_label:"Filtro de Mídia",mode:"Modo do filtro",modes:{left:"Filtro de mídia em uma gaveta à esquerda",none:"Sem filtro de mídia",right:"Filtro de mídia em uma gaveta à direita"}},next_previous:{editor_label:"Próximo",size:"Tamanho de controle próximo e anterior",style:"Estilo do controle próximo e anterior",styles:{chevrons:"Setas",icons:"Ícones",none:"Nenhum",thumbnails:"Miniaturas"}},thumbnails:{editor_label:"Miniaturas",events_media_type:"Se deve mostrar miniaturas de clipes ou snapshots",events_media_types:{clips:"Miniaturas de clipes",snapshots:"Miniaturas de Snapshots"},media_type:"",media_types:{events:"",recordings:""},mode:"Modo de miniaturas",modes:{above:"Miniaturas acima da mídia",below:"Miniaturas abaixo da mídia",left:"Miniaturas em uma gaveta à esquerda",none:"Sem miniaturas",right:"Miniaturas em uma gaveta à direita"},show_details:"Mostrar detalhes com miniaturas",show_download_control:"Mostrar controle de download nas miniaturas",show_favorite_control:"Mostrar controle de favorito nas miniaturas",show_timeline_control:"Mostrar controle da linha do tempo nas miniaturas",size:"Tamanho das miniaturas em pixels"},timeline:{editor_label:"Controles da linha do tempo",mode:"Modo",modes:{above:"Acima",below:"Abaixo",none:"Nenhum"}},title:{duration_seconds:"Segundos para exibir o pop-up (0 = para sempre)",editor_label:"Controles do pop-up de título",mode:"Modo de exibição de título de mídia",modes:{none:"Sem exibição de título","popup-bottom-left":"Pop-up no canto inferior esquerdo","popup-bottom-right":"Pop-up no canto inferior direito","popup-top-left":"Pop-up no canto superior esquerdo","popup-top-right":"Pop-up no canto superior direito"}}},display:{editor_label:"",grid_columns:"",grid_max_columns:"",grid_selected_width_factor:"",mode:""},layout:{fit:"Ajuste de layout",fits:{contain:"A mídia é contida no cartão",cover:"A mídia se expande proporcionalmente para cobrir o cartão",fill:"A mídia é esticada para preencher o cartão"},position:{x:"Porcentagem do posicionamento horizontal",y:"Porcentagem do posicionamento vertical"}},media_action_conditions:{all:"Todas as oportunidades",hidden:"Ao ocultar o navegador/aba",microphone_mute:"",microphone_unmute:"",never:"Nunca",selected:"Ao selecionar",unselected:"Ao desselecionar",visible:"Ao mostrar o navegador/aba"},timeline:{clustering_threshold:"A contagem de eventos nos quais eles são agrupados (0 = sem agrupamento)",events_media_type:"A mídia que a linha do tempo exibe",events_media_types:{all:"Todos os tipos de mídia",clips:"Clipes",snapshots:"Instantâneos"},show_recordings:"Mostrar gravações",style:"",styles:{ribbon:"",stack:""},window_seconds:"A duração padrão da visualização da linha do tempo em segundos"}},dimensions:{aspect_ratio:"Proporção padrão (e.g. '16:9')",aspect_ratio_mode:"Modo de proporção",aspect_ratio_modes:{dynamic:"A proporção se ajusta à mídia",static:"Proporção estática",unconstrained:"Proporção irrestrita"},max_height:"",min_height:""},image:{layout:"Layout da imagem",mode:"Modo de visualização de imagem",modes:{camera:"Instantâneo da câmera do Home Assistant, da entidade de câmera",screensaver:"Logo Frigate embutido",url:"Imagem arbitrária especificada por URL"},refresh_seconds:"Número de segundos após o qual atualizar (0 = nunca)",url:"Imagem arbitrária especificada por URL",zoomable:""},live:{auto_mute:"Silenciar câmeras ao vivo automaticamente",auto_pause:"Pausar câmeras ao vivo automaticamente",auto_play:"Reproduzir câmeras ao vivo automaticamente",auto_unmute:"Ativar automaticamente o som das câmeras ao vivo",controls:{editor_label:"Controles da visualização ao vivo",ptz:{editor_label:"",hide_home:"",hide_pan_tilt:"",hide_zoom:"",mode:"",modes:{auto:"",off:"",on:""},orientation:"",orientations:{horizontal:"",vertical:""},position:"",positions:{"bottom-left":"","bottom-right":"","top-left":"","top-right":""}}},draggable:"A visualização ao vivo das câmeras pode ser arrastada/deslizada",layout:"Layout dinâmico",lazy_load:"As câmeras ao vivo são carregadas lentamente",lazy_unload:"As câmeras ao vivo são descarregadas preguiçosamente",microphone:{always_connected:"",disconnect_seconds:"",editor_label:"",enabled:"",mute_after_microphone_mute_seconds:""},preload:"Pré-carregar a visualização ao vivo em segundo plano",show_image_during_load:"Mostrar imagem estática enquanto a transmissão ao vivo está carregando",transition_effect:"Efeito de transição de câmera ao vivo",zoomable:""},media_viewer:{auto_mute:"Silenciar mídia automaticamente",auto_pause:"Pausar mídia automaticamente",auto_play:"Reproduzir mídia automaticamente",auto_unmute:"Ativar mídia automaticamente",controls:{editor_label:"Controles do visualizador de mídia"},draggable:"Visualizador de eventos pode ser arrastado/deslizado",layout:"Layout do visualizador de mídia",lazy_load:"A mídia do Visualizador de eventos é carregada lentamente no carrossel",snapshot_click_plays_clip:"Clicar em um instantâneo reproduz um clipe relacionado",transition_effect:"Efeito de transição do Visualizador de eventos",transition_effects:{none:"Sem transição",slide:"Transição de slides"},zoomable:""},menu:{alignment:"Alinhamento do menu",alignments:{bottom:"Alinhado à parte inferior",left:"Alinhado à esquerda",right:"Alinhado à direita",top:"Alinhado ao topo"},button_size:"Tamanho do botão de menu (e.g. '40px')",buttons:{alignment:"Alinhamento do botão",alignments:{matching:"Mesmo alinhamento do menu",opposing:"Opor-se ao alinhamento do menu"},camera_ui:"Interface de usuário da câmera",cameras:"Selecionar câmera",clips:"Clipes",display_mode:"",download:"Baixe a mídia do evento",enabled:"Botão ativado",expand:"Expandir",frigate:"Frigate menu / Visualização padrão",fullscreen:"Tela cheia",icon:"Ícone",image:"Imagem",live:"Ao vivo",media_player:"Enviar para o reprodutor de mídia",mute:"",play:"",priority:"Prioridade",ptz:"",recordings:"Gravações",screenshot:"",snapshots:"Instantâneos",substreams:"Substream(s)",timeline:"Linha do tempo",type:"",types:{momentary:"",toggle:""}},position:"Posição do menu",positions:{bottom:"Posicionado na parte inferior",left:"Posicionado à esquerda",right:"Posicionado à direita",top:"Posicionado no topo"},style:"Estilo do menu",styles:{hidden:"Menu oculto",hover:"Menu suspenso","hover-card":"Menu suspenso (em todo o cartão)",none:"Sem menu",outside:"Menu externo",overlay:"Menu sobreposto"}},overrides:{info:"Esta configuração do cartão especificou manualmente as substituições configuradas que podem substituir os valores mostrados no editor visual, consulte o editor de código para visualizar/modificar essas substituições"},performance:{features:{animated_progress_indicator:"Indicador de Carregamento Animado",editor_label:"Opções de recursos",media_chunk_size:"Tamanho do bloco de mídia"},profile:"Perfil de desempenho",profiles:{high:"Alto desempenho/completo",low:"Baixo desempenho"},style:{border_radius:"Curvas",box_shadow:"Sombras",editor_label:"Opções de estilo"},warning:"Este cartão está no modo de baixo desempenho, então os padrões foram alterados para otimizar o desempenho"},view:{camera_select:"Visualização de câmeras recém-selecionadas",dark_mode:"Modo escuro",dark_modes:{auto:"Automático",off:"Desligado",on:"Ligado"},default:"Visualização padrão",interaction_seconds:"",reset_after_interaction:"",scan:{actions:{editor_label:"",interaction_mode:"",interaction_modes:{active:"",all:"",inactive:""},trigger:"",triggers:{live:"",none:""},untrigger:"",untriggers:{default:"",none:""}},editor_label:"Modo scan",enabled:"Modo scan ativado",filter_selected_camera:"",show_trigger_status:"Pulsar borda quando acionado",untrigger_seconds:"Segundos após a mudar para o estado inativo para desacionar"},update_cycle_camera:"Percorrer as câmeras quando a visualização padrão for atualizada",update_force:"Forçar atualizações do cartão (ignore a interação do usuário)",update_seconds:"Atualize a visualização padrão a cada X segundos (0 = nunca)",views:{clip:"Clipe mais recente",clips:"Galeria de clipes",current:"Visualização atual",image:"Imagem estática",live:"Visualização ao vivo",recording:"Gravação mais recente",recordings:"Galeria de gravações",snapshot:"Snapshot mais recente",snapshots:"Galeria de Snapshots",timeline:"Visualização da linha do tempo"}}},o={grid:"",single:""},i={add_new_camera:"Adicionar nova câmera",button:"Botão",camera:"Câmera",cameras:"Câmeras",cameras_secondary:"Quais câmeras renderizar neste cartão",delete:"Excluir",dimensions:"Dimensões",dimensions_secondary:"Dimensões e opções de forma",image:"Imagem",image_secondary:"Opções de visualização de imagem estática",live:"Ao vivo",live_secondary:"Opções de visualização da câmera ao vivo",media_gallery:"Galeria de mídia",media_gallery_secondary:"Opções da galeria de mídia",media_viewer:"Visualizador de eventos",media_viewer_secondary:"Opções do visualizador de Snapshots e clipes",menu:"Menu",menu_secondary:"Opções de aparência do menu",move_down:"Descer",move_up:"Subir",overrides:"As substituições estão ativas",overrides_secondary:"Substituições de configuração dinâmica detectadas",performance:"Desempenho",performance_secondary:"Opções de desempenho do cartão",timeline:"Linha do tempo",timeline_secondary:"Opções do evento da linha do tempo",upgrade:"Upgrade",upgrade_available:"Um upgrade automático da configuração de cartão está disponível",view:"Visualizar",view_secondary:"O que o cartão deve mostrar e como mostrá-lo"},r={ptz:{down:"Baixo",home:"Casa",left:"Esquerda",right:"Direita",up:"Cima",zoom_in:"Aumentar Zoom",zoom_out:"Reduzir Zoom"}},t={awaiting_live:"",could_not_render_elements:"Não foi possível renderizar os elementos da imagem",could_not_resolve:"Não foi possível resolver o URL de mídia",diagnostics:"Diagnósticos do cartão. Revise as informações confidenciais antes de compartilhar",download_no_media:"Nenhuma mídia para download",download_sign_failed:"Não foi possível assinar o URL de mídia para download",duplicate_camera_id:"Duplique o ID da câmera Frigate para a câmera a seguir, use o parâmetro 'id' para identificar exclusivamente as câmeras",empty_response:"Sem resposta do Home Assistant para a solicitação",failed_response:"Falha ao receber resposta do Home Assistant para solicitação",failed_retain:"Não foi possível reter o evento",failed_sign:"Não foi possível assinar a URL do Home Assistant",image_load_error:"A imagem não pôde ser carregada",invalid_configuration:"Configuração inválida",invalid_configuration_no_hint:"Nenhuma dica de local disponível (tipo incorreto ou ausente?)",invalid_elements_config:"Configuração de elementos de imagem inválida",invalid_response:"Resposta inválida recebida do Home Assistant para a solicitação",jsmpeg_no_player:"Não foi possível iniciar o player JSMPEG",live_camera_no_endpoint:"Não foi possível obter o endereço da câmera para este provedor ao vivo (configuração incompleta?)",live_camera_not_found:"A entidade de câmera configurada não foi encontrada",live_camera_unavailable:"Câmera indisponível",no_camera_engine:"Não foi possível determinar o motor adequado para a câmera",no_camera_entity:"Não foi possível encontrar a entidade da câmera",no_camera_entity_for_triggers:"Uma entidade de câmera é necessária para detectar automaticamente os gatilhos",no_camera_id:"Não foi possível determinar o ID da câmera para a câmera a seguir, pode ser necessário definir o parâmetro 'id' manualmente",no_camera_name:"Não foi possível determinar o nome da câmera da Frigate, especifique 'camera_entity' ou 'camera_name' para a câmera a seguir",no_dashboard_or_view:"",no_live_camera:"O parâmetro camera_entity deve ser definido e válido para este provedor ativo",no_visible_cameras:"Nenhuma câmera visível encontrada, você deve configurar pelo menos uma câmera não oculta",reconnecting:"Reconectando",timeline_no_cameras:"Nenhuma câmera do Frigate para mostrar na linha do tempo",too_many_automations:"",troubleshooting:"Verifique a solução de problemas",unknown:"Erro desconhecido",upgrade_available:"Uma atualização automatizada da configuração do cartão está disponível, visite o editor visual do cartão",webrtc_card_reported_error:"O cartão WebRTC relatou um erro",webrtc_card_waiting:"Aguardando o cartão WebRTC carregar ..."},s={camera:"Câmera",duration:"Duração",in_progress:"Em andamento",score:"Pontuação",seek:"Procurar",start:"Início",tag:"Etiqueta",what:"O que",where:"Onde"},d={all:"Todos",camera:"Câmera",favorite:"Favorito",media_type:"Tipo de mídia",media_types:{clips:"Clipes",recordings:"Gravações",snapshots:"Instantâneos"},not_favorite:"Não favorito",select_camera:"Selecione a câmera...",select_favorite:"Selecione favorito...",select_media_type:"Selecione o tipo de mídia...",select_tag:"Selecione a etiqueta...",select_what:"Selecione o que...",select_when:"Selecione quando...",select_where:"Selecione onde...",tag:"Etiqueta",what:"O que",when:"Quando",whens:{custom:"",past_month:"Mês passado",past_week:"Semana passada",today:"Hoje",yesterday:"Ontem"},where:"Onde"},n={unseekable:""},m={camera:"Câmera",duration:"Duração",events:"Eventos",in_progress:"Em andamento",seek:"Procurar",start:"Começar"},c={download:"Baixar mídia",no_thumbnail:"Nenhuma miniatura disponível",retain_indefinitely:"Evento será retido por tempo indeterminado",timeline:"Ver evento na linha do tempo"},l={pan_behavior:{pan:"",seek:"","seek-in-camera":"","seek-in-media":""},select_date:"Escolha a data"},u={common:e,config:a,display_modes:o,editor:i,elements:r,error:t,event:s,media_filter:d,media_viewer:n,recording:m,thumbnail:c,timeline:l};export{e as common,a as config,u as default,o as display_modes,i as editor,r as elements,t as error,s as event,d as media_filter,n as media_viewer,m as recording,c as thumbnail,l as timeline};
