// SELECTOR --------------------------------------------------->
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelectorAll(".bar");
const navMenu = document.querySelector(".nav-menu");
const sovaImg = document.querySelector(".sova-img");
const skillRadio = document.getElementsByName("skill-btn");
const abilitiesBtn = document.querySelectorAll(".abilities-ico");
const abilitiesTextHead = document.getElementById("abilities-text-head");
const abilitiesTextBody = document.getElementById("abilities-text-body");
const abilitiesSrc = document.getElementById("abilities-src");
const agentName = document.querySelector("#agent-name");
const agentPict = document.querySelectorAll(".agent");
const abilities = [
  [
    {
      skill: "Q - FLECHA DE CHOQUE",
      desc: "EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha, que explode com o impacto causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4",
    },
    {
      skill: "E - FLECHA RASTREADORA",
      desc: "EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e Revela a localização de quaisquer inimigos próximos da linha de visão. Inimigos podem destruí-la. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4",
    },
    {
      skill: "C - DRONE CORUJA",
      desc: "EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. Inimigos podem destruir o Drone Coruja.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4",
    },
    {
      skill: "X - FÚRIA DO CAÇADOR",
      desc: "EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - PULSO NOVA",
      desc: "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4",
    },
    {
      skill: "E - NEBULOSA",
      desc: "Posicione Estrelas na Forma Astral (X). ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). USE uma Estrela para dissipá-la, retornando a Estrela para ser posicionada em um novo local após um período. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4",
    },
    {
      skill: "C - POÇO GRAVITACIONAL",
      desc: "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4",
    },
    {
      skill: "X - FORMA ASTRAL / DIVISA CÓSMICA",
      desc: "ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com o DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, use o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, o DISPARO para escolher dois locais. Uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4",
    },
  ],
  [
    {
      skill: "Q - ESTOPIM",
      desc: "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4",
    },
    {
      skill: "E - FALHA TECTÔNICA",
      desc: "EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4",
    },
    {
      skill: "C - PÓS-CHOQUE",
      desc: "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4",
    },
    {
      skill: "X - ONDA TROVEJANTE",
      desc: "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - INCENDIÁRIO",
      desc: "EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4",
    },
    {
      skill: "E - FUMAÇA CELESTE",
      desc: "EQUIPE um mapa tático. DISPARE para marcar os locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4",
    },
    {
      skill: "C - SINALIZADOR ESTIMULANTE",
      desc: "EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4",
    },
    {
      skill: "X - ATAQUE ORBITAL",
      desc: "EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - JAULA CIBERNÉTICA",
      desc: "INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4",
    },
    {
      skill: "E - CÂMERA DE VIGILÂNCIA",
      desc: "EQUIPE uma Câmera de Vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. A câmera pode ser recuperada e REPOSICIONADA.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4",
    },
    {
      skill: "C - FIO-ARMADILHA",
      desc: "EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4",
    },
    {
      skill: "X - ASSALTO NEURAL",
      desc: "Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - CORRENTE ASCENDENTE",
      desc: "INSTANTANEAMENTE impele Jett bem alto no ar.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4",
    },
    {
      skill: "E - BRISA DE IMPULSO",
      desc: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4",
    },
    {
      skill: "C - ERUPÇÃO DAS BRUMAS",
      desc: "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4",
    },
    {
      skill: "X - TORMENTA DE AÇO",
      desc: "EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - GRANADA/CLARÃO",
      desc: "EQUIPE uma granada de clarão. DISPARE para jogá-la por cima. Use o DISPARO ALTERNATIVO para arremessar a curta distância uma versão mais fraca que explode mais rápido. A granada de clarão explode após um curto período, Cegando qualquer um que estiver na linha de visão.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4",
    },
    {
      skill: "E - PONTO/ZERO",
      desc: "EQUIPE uma lâmina de supressão. DISPARE para lançar. A lâmina se fixa à primeira superfície que atingir e explode, Suprimindo qualquer um que estiver dentro do raio da explosão. Inimigos podem destruir a lâmina.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4",
    },
    {
      skill: "C - FRAG/MENTO",
      desc: "EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4",
    },
    {
      skill: "X - ANULAR/CMD",
      desc: "INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são Suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4",
    },
  ],
  [
    {
      skill: "Q - ROBÔ DE ALARME",
      desc: "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4",
    },
    {
      skill: "E - TORRETA",
      desc: "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4",
    },
    {
      skill: "C - NANOENXAME",
      desc: "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4",
    },
    {
      skill: "X - CONFINAMENTO",
      desc: "EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4",
    },
  ],
  [
    {
      skill: "Q - Paranoia",
      desc: "INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4",
    },
    {
      skill: "E - MANTO SOMBRIO",
      desc: "EQUIPE um orbe sombrio e entre em um universo distorcido para posicionar os orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO enquanto mira para afastar o marcador. SEGURE O DISPARO ALTERNATIVO enquanto mira para aproximar o marcador. PRESSIONE RECARREGAR para alternar para a visão de mira normal.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4",
    },
    {
      skill: "C - PASSOS TENEBROSOS",
      desc: "EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4",
    },
    {
      skill: "X - SALTO DAS SOMBRAS",
      desc: "EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - BOLA CURVA",
      desc: "EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4",
    },
    {
      skill: "E - MÃOS QUENTES",
      desc: "EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4",
    },
    {
      skill: "C - LABAREDA",
      desc: "EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4",
    },
    {
      skill: "X - RENASCIMENTO",
      desc: "INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - CARGA DE EXPLOSIVOS",
      desc: "INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4",
    },
    {
      skill: "E - CARTUCHOS DE TINTA",
      desc: "EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A carga dos Cartuchos de Tinta é redefinida a cada dois abates.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4",
    },
    {
      skill: "C - BUMBA",
      desc: "EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4",
    },
    {
      skill: "X - ESTRAGA-PRAZERES",
      desc: "EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - DEVORAR",
      desc: "Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4",
    },
    {
      skill: "E - DISPENSAR",
      desc: "INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4",
    },
    {
      skill: "C - OLHAR VORAZ",
      desc: "EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4",
    },
    {
      skill: "X - IMPERATRIZ",
      desc: "INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - ORBE DE LENTIDÃO",
      desc: "EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4",
    },
    {
      skill: "E - ORBE CURATIVO",
      desc: "EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4",
    },
    {
      skill: "C -  ORBE DE BARREIRA",
      desc: "EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida. DISPARO ALTERNATIVO gira o marcador de alvo.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4",
    },
    {
      skill: "X - RESSURREIÇÃO",
      desc: "EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - PREDADOR EXPLOSIVO",
      desc: "EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4",
    },
    {
      skill: "E - LUZ DESBRAVADORA",
      desc: "EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4",
    },
    {
      skill: "C - REFLORESCER",
      desc: "EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4",
    },
    {
      skill: "X - RASTREADORES",
      desc: "EQUIPE um amuleto de Rastreador. DISPARE para enviar três Rastreadores que localizarão os três inimigos mais próximos. Se um Rastreador alcançar um alvo, causará Visão Turva a ele. Inimigos podem destruir os Rastreadores.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4",
    },
  ],
  [
    {
      skill: "Q - NUVEM VENENOSA",
      desc: "EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez e pode ser recolhida para ser REPOSICIONADA.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4",
    },
    {
      skill: "E - CORTINA TÓXICA",
      desc: "EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4",
    },
    {
      skill: "C - VENENO DE COBRA",
      desc: "EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4",
    },
    {
      skill: "X - POÇO PEÇONHENTO",
      desc: "EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4",
    },
  ],
  [
    {
      skill: "Q - PONTO CEGO",
      desc: "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4",
    },
    {
      skill: "E - PASSAGEM DIMENSIONAL",
      desc: "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/5ff77b51b529867fcec28402/Yoru_Abilities_Teleport_1_1.mp4",
    },
    {
      skill: "C - DISTRAÇÃO",
      desc: "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/5ff77bc5b47cdf7fc7d6cd31/Yoru_Abilities_Footsteps_1.mp4",
    },
    {
      skill: "X - ESPIONAGEM DIMENSIONAL",
      desc: "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora. REATIVE para sair da dimensão do Yoru mais cedo.",
      video:
        "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/5ff77c0e6aab641cd100f638/Yoru_Abilities_ULT_3_1.mp4",
    },
  ],
];

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "200px",
  duration: 2000,
});

// EVENT ------------------------------------------------------>

// Header Reveal
sr.reveal(".sova-img-container", { distance: "200px", reset: false });
sr.reveal("#agent-name", {});
sr.reveal(".desc-container", {});

// Abilities
sr.reveal(".skill-container h1", { origin: "left" });
sr.reveal(".abilities-ico", { origin: "left" });
sr.reveal(".abilities-text", { origin: "left" });

// Agents Reveal
sr.reveal(".other-agents h1", { origin: "left" });
sr.reveal(".agent", { delay: 300 });
sr.reveal(".play-now", {});

// Add event listener to hamburger bar
hamburger.addEventListener("click", mobileMenu);

// Add class to give animation
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar.forEach((el) => {
    el.classList.toggle("active");
  });
}

// Make hamburger menu closed once we clicked a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

// Give sova image animation
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  sovaImg.style.top = value * -0.2 + "px";

  if (value > 250) {
    sovaImg.style.top = -50 + "px";
  }
  if (value === 0) {
    sovaImg.style.top = 10 + "%";
  }
});

var imported = document.createElement("script");
imported.src = "./agents.mjs";
document.head.appendChild(imported);

// FUNCTION ----------------------------------------------------->
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  bar.forEach((el) => {
    el.classList.remove("active");
  });
}

function addBtn0(n) {
  switch (n) {
    case 0:
      abilitiesBtn[0].classList.add("animate");
      abilitiesBtn[1].classList.remove("animate");
      abilitiesBtn[2].classList.remove("animate");
      abilitiesBtn[3].classList.remove("animate");
      break;
    case 1:
      abilitiesBtn[1].classList.add("animate");
      abilitiesBtn[0].classList.remove("animate");
      abilitiesBtn[2].classList.remove("animate");
      abilitiesBtn[3].classList.remove("animate");
      break;
    case 2:
      abilitiesBtn[2].classList.add("animate");
      abilitiesBtn[0].classList.remove("animate");
      abilitiesBtn[1].classList.remove("animate");
      abilitiesBtn[3].classList.remove("animate");
      break;
    case 3:
      abilitiesBtn[3].classList.add("animate");
      abilitiesBtn[0].classList.remove("animate");
      abilitiesBtn[1].classList.remove("animate");
      abilitiesBtn[2].classList.remove("animate");
      break;
  }
}
