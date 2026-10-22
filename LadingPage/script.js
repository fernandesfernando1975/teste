/**
 * REAL SENSATION — FUTURISTIC SENSORY CINEMA
 * Interactive Engine: Multi-language (PT/EN/ES), Countdown, Particle Canvas,
 * FAQ Accordion, VIP Pass Generator, and Smooth Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MULTI-LANGUAGE SYSTEM (PORTUGUÊS, INGLÊS, ESPANHOL)
     ========================================================================== */
  const translations = {
    pt: {
      // Nav
      nav_brand_sub: "CINEMA DO FUTURO",
      nav_home: "Início",
      nav_about: "O Projeto",
      nav_experience: "Imersão",
      nav_video: "Demonstração",
      nav_schedule: "Programação",
      nav_location: "Local",
      nav_faq: "Dúvidas",
      nav_cta: "Garantir Acesso",

      // Hero
      hero_badge: "EVENTO DE AMOSTRA TECNOLÓGICA CINEMATOGRÁFICA",
      hero_title_1: "O FUTURO DO CINEMA",
      hero_title_2: "NÃO CABE EM CASA.",
      hero_desc: "Redefinindo a sétima arte através da imersão sensorial absoluta, inteligência artificial generativa em tempo real e experiências físicas coletivas impossíveis de replicar na sua sala de estar.",
      hero_date_label: "DATA DO EVENTO",
      hero_date_val: "1 e 2 de Novembro de 2026",
      hero_date_sub: "Sábado e Domingo • Das 10h às 22h",
      hero_loc_label: "LOCALIZAÇÃO",
      hero_loc_val: "MASP — São Paulo",
      hero_loc_sub: "Avenida Paulista, 1578 • SP",
      hero_access_label: "ACESSO",
      hero_access_val: "Entrada Gratuita",
      hero_access_sub: "Credenciamento VIP Antecipado",
      countdown_title: "CONTAGEM REGRESSIVA PARA A REVOLUÇÃO",
      cd_days: "DIAS",
      cd_hours: "HORAS",
      cd_minutes: "MINUTOS",
      cd_seconds: "SEGUNDOS",
      hero_btn_rsvp: "GARANTIR CREDENCIAL VIP",
      hero_btn_watch: "Ver Demonstração",

      // Metrics
      metric_audio: "Áudio Neuroacústico",
      metric_latency: "Latência Háptica Ultra-Baixa",
      metric_collective: "Imersão Física Coletiva",
      metric_ai: "Renderização Generativa em Tempo Real",

      // About
      about_tag: "O PROJETO REAL SENSATION",
      about_title: "Uma Nova Era Cinematográfica Forjada Pela Tecnologia",
      about_intro: "Inspirado nas maiores convenções globais de inovação e entretenimento interativo, a Real Sensation surge para responder à pergunta definitiva: o que faz o cinema valer a pena quando as telas domésticas se tornaram gigantes?",
      badge_immersion: "IMERSÃO COLETIVA",
      about_card1_title: "A Sétima Arte Reconstruída do Zero",
      about_card1_text: "O streaming e as TVs de alta resolução acomodaram o público no sofá. A Real Sensation quebra essa barreira com uma infraestrutura arquitetônica impossível de reproduzir em ambientes domésticos. É a convergência máxima entre tecnologia de games de última geração, neurociência auditiva e efeitos de teatro físico.",
      about_b1: "Telas volumétricas curvas de campo visual periférico expandido",
      about_b2: "Sincronização neural coletiva com a audiência",
      about_b3: "Atmosfera climática e pulsos táteis milimétricos",

      badge_haptics: "PODS SENSORIAIS 4D",
      about_card2_title: "Cápsulas Sensoriais Hápticas",
      about_card2_text: "Cada espectador ocupa uma estação biométrica sensorial autônoma dotada de transdutores subgraves que transmitem impacto cinematográfico direto na estrutura óssea e muscular, em harmonia com sintetizadores de aromas e rajadas microclimáticas sincronizadas à narrativa.",
      about_b4: "Feedback tátil de alta fidelidade com resposta tátil a cada batimento",
      about_b5: "Controle dinâmico individual de intensidade e acessibilidade",
      about_b6: "Química olfativa digitalizada sem resíduos ou desconforto",

      badge_ai: "IA GENERATIVA EM TEMPO REAL",
      about_card3_title: "IA Generativa e Emoção Coletiva",
      about_card3_text: "Pela primeira vez no mundo, motores de inteligência artificial monitoram a respiração e a tensão da sala para modular sutilmente frequências sonoras, iluminação periférica e ramificações sensoriais da cena. Cada sessão no MASP será irrepetível e singular.",
      about_b7: "Redes neurais adaptativas que reagem à pulsação do público",
      about_b8: "Áudio adaptativo posicional 3D sem perda de diálogo",
      about_b9: "Experiência verdadeiramente social e compartilhada",

      // Pillars
      pillars_tag: "DIMENSÕES DA IMERSÃO",
      pillars_title: "Os 4 Pilares da Experiência Real Sensation",
      pillars_sub: "Uma sinestesia calculada milissegundo a milissegundo para despertar sentidos adormecidos.",
      pillar_1_t: "Óptica Quântica Periférica",
      pillar_1_d: "Campo de visão de 220 graus que abraça completamente a retina humana. Elimina os limites da moldura da tela tradicional e transporta sua consciência para dentro da narrativa visual.",
      pillar_2_t: "Neuroacústica Espacial Holística",
      pillar_2_d: "Mais de 128 canais sonoros independentes com calibração psicoacústica. Sinta a trajetória de cada sussurro, onda de choque ou acorde passando através de cada centímetro da plateia.",
      pillar_3_t: "Sintetizador Atmosférico & 4D",
      pillar_3_d: "Microclima térmico instantâneo, névoa criogênica e difusão de fragrâncias orgânicas projetadas por perfumistas para associar emoções cinematográficas à memória sensorial profunda.",
      pillar_4_t: "Sinergia Coletiva Presencial",
      pillar_4_d: "O cinema como ritual social sagrado. O arrepio comunitário, o suspiro sincronizado de centenas de pessoas reunidas no MASP vivendo um momento que não pode ser pausado ou experimentado isoladamente.",

      // Video Demo
      video_tag: "EXPERIÊNCIA EM VÍDEO",
      video_title: "A Ciência da Imersão Sensorial",
      video_sub: "Confira abaixo a demonstração de como a engenharia multi-sensorial, assentos dinâmicos e atmosferas físicas transformam espectadores passivos em participantes vivos da ação cinematográfica.",
      video_status: "CANAL SENSORIAL ATIVO • ULTRA HD • 60 FPS",
      pill_seats: "Movimentação Tridimensional",
      pill_weather: "Vento, Calor e Névoa",
      pill_scent: "Dispersão Olfativa Submicrônica",
      pill_sub: "Transdutores de Subgrave Ósseo",

      // Schedule
      sched_tag: "CRONOGRAMA OFICIAL",
      sched_title: "Amostra Tecnológica: 1 e 2 de Novembro de 2026",
      sched_sub: "Dois dias intensos de exibições imersivas, testes ao vivo das cápsulas sensoriais e masterclasses com engenheiros de efeitos.",
      tab_sat: "SÁBADO • ABERTURA & IA",
      tab_sun: "DOMINGO • IMERSÃO TOTAL",
      badge_keynote: "KEYNOTE MAGNA",
      d1_item1_t: "O Nascimento do Cinema Sensorial",
      d1_item1_d: "Apresentação inaugural com os idealizadores da Real Sensation e demonstração do protótipo acústico e óptico no Auditório Principal do MASP.",
      badge_hands_on: "HANDS-ON EM PODS",
      d1_item2_t: "Sessões de Teste: Cápsulas Hápticas 4D",
      d1_item2_d: "O público experimenta cenas curtas de ação, ficção científica e natureza com acionamento pleno de vento, choques táteis e aromas sincronizados.",
      badge_panel: "PAINEL GAMING & TECH",
      d1_item3_t: "IA Generativa em Tempo Real na Narrativa",
      d1_item3_d: "Mesa redonda com diretores de cinema, programadores de games AAA e neurocientistas sobre o futuro da imersão cinematográfica coletiva.",
      badge_premiere: "PREMIÈRE EXCLUSIVA",
      d1_item4_t: "Cine-Concerto \"Synesthesia 2026\"",
      d1_item4_d: "Exibição especial combinando música eletrônica ao vivo, projeção volumétrica panorâmica e reações táteis coletivas.",

      badge_family: "TODAS AS IDADES",
      d2_item1_t: "Cinema Sensorial Para Toda a Família",
      d2_item1_d: "Sessões lúdicas e interativas adequadas para crianças e idosos com parâmetros sensoriais suaves explorando os mistérios do oceano e do cosmos.",
      badge_challenge: "DESAFIO DE CRIAÇÃO",
      d2_item2_t: "Mostra de Curtas Imersivos Independentes",
      d2_item2_d: "Exibição de obras produzidas por cineastas brasileiros e internacionais utilizando o kit de ferramentas e sensores da Real Sensation.",
      badge_workshop: "BASTIDORES",
      d2_item3_t: "Engenharia Háptica: Como Criar para os Sentidos",
      d2_item3_d: "Workshop prático ensinando como programar atuadores de vibração, síntese química de aromas e algoritmos de áudio 3D binaural.",
      badge_closing: "GRANDE ENCERRAMENTO",
      d2_item4_t: "Experiência Coletiva: O Manifesto Real Sensation",
      d2_item4_d: "Apresentação final sincronizada com todos os 300 pods simultâneos ativando a capacidade sensorial máxima no Vão Livre e Auditório do MASP.",

      // Audience
      aud_tag: "PÚBLICO-ALVO",
      aud_title: "Criado Para Quem Quer Viver o Próximo Salto Cultural",
      aud_sub: "Um evento aberto e acessível para pessoas de todas as idades que buscam uma experiência sem precedentes na capital paulista.",
      aud_c1_t: "Gamers & Entusiastas de Tech",
      aud_c1_d: "Para quem já ama feedback háptico, motores gráficos avançados e busca a sensação de \"estar dentro\" de uma cena de ficção interativa.",
      aud_c2_t: "Cinéfilos & Amantes da Arte",
      aud_c2_d: "Para quem sente falta da magia e grandiosidade do cinema coletivo e quer ver a evolução natural da narrativa dramática e sensorial.",
      aud_c3_t: "Famílias & Todas as Idades",
      aud_c3_d: "Estrutura segura, acessível e surpreendente tanto para jovens curiosos quanto para adultos e idosos que querem se maravilhar.",
      aud_c4_t: "Criadores & Estudantes",
      aud_c4_d: "Ideal para estudantes de audiovisual, design, robótica, inteligência artificial e futuros diretores do audiovisual moderno.",

      // Location
      loc_tag: "LOCALIZAÇÃO PRIVILEGIADA",
      loc_title: "No Coração Cultural de São Paulo: MASP",
      loc_sub: "O Museu de Arte de São Paulo Assis Chateaubriand será o palco histórico deste encontro entre arte clássica e tecnologia futurista.",
      venue_label: "LOCAL OFICIAL DO EVENTO",
      perk_metro_t: "Metrô Fácil",
      perk_metro_d: "A apenas 50m da Estação Trianon-MASP (Linha 2 - Verde).",
      perk_access_t: "100% Acessível",
      perk_access_d: "Elevadores, rampas de acesso e pods com adaptação sensorial.",
      perk_parking_t: "Estacionamentos",
      perk_parking_d: "Diversos estacionamentos conveniados ao longo da Av. Paulista.",
      btn_maps: "Abrir Rota no Google Maps",

      // FAQ
      faq_tag: "DÚVIDAS FREQUENTES",
      faq_title: "Tudo O Que Você Precisa Saber",
      faq_sub: "Confira as principais dúvidas sobre a Amostra Tecnológica Real Sensation no MASP.",
      faq_q1: "O evento é gratuito ou pago?",
      faq_a1: "A entrada para a Amostra Tecnológica é 100% gratuita! No entanto, devido à limitação de assentos das cápsulas sensoriais, é obrigatório realizar o credenciamento prévio através do botão \"Garantir Acesso\" nesta página para receber sua credencial digital VIP.",
      faq_q2: "Pessoas com sensibilidade sensorial podem participar?",
      faq_a2: "Sim! Cada cápsula Real Sensation conta com um console tátil ergonômico individual onde você pode modular a intensidade dos efeitos de vibração física, desativar aromas ou ajustar o volume acústico binaural ao seu nível de conforto a qualquer segundo da sessão.",
      faq_q3: "Qual a classificação etária do evento?",
      faq_a3: "A classificação é livre para todas as idades. Temos programações e exibições adaptadas tanto para famílias com crianças quanto para amantes da ficção científica e jogos de alta voltagem. Menores de 12 anos devem estar acompanhados de pais ou responsáveis.",
      faq_q4: "O que difere a Real Sensation de salas 4DX ou IMAX convencionais?",
      faq_a4: "Enquanto salas convencionais utilizam efeitos pré-gravados em caixas coletivas, a Real Sensation emprega inteligência artificial generativa em tempo real para sincronizar o biofeedback do público, áudio neuroacústico intra-auricular e transdutores ósseos que transmitem ondas táteis de alta resolução impossíveis de reproduzir fora dali.",
      faq_q5: "Onde será a entrada no MASP e quais os horários?",
      faq_a5: "O evento ocorrerá tanto no emblemático Vão Livre quanto no Grande Auditório e Espaço Multiuso do MASP nos dias 1 e 2 de novembro de 2026, com funcionamento ininterrupto das 10h00 às 22h00 no sábado e domingo.",
      faq_q6: "Como recebo minha credencial após o cadastro?",
      faq_a6: "Assim que você preencher seus dados no modal do site, um passe digital futurista com QR Code exclusivo será gerado instantaneamente na tela, com a opção de download para o seu celular e envio de confirmação direta via WhatsApp.",

      // CTA Banner
      cta_tag: "VAGAS LIMITADAS POR SESSÃO",
      cta_head: "Esteja Entre os Primeiros a Sentir o Cinema do Futuro",
      cta_body: "Junte-se a nós no MASP nos dias 1 e 2 de Novembro de 2026. Garanta seu passaporte gratuito e prepare-se para uma experiência inesquecível.",
      cta_btn: "CREDENCIAR AGORA GRATUITAMENTE",
      cta_loc: "COMO CHEGAR AO MASP",

      // Footer
      footer_desc: "Redefinindo a sétima arte através de inteligência artificial, imersão multissensorial absoluta e conexão física coletiva.",
      footer_nav_t: "Navegação",
      footer_dates_t: "Informações do Evento",

      // Modal
      modal_badge: "CREDENCIAMENTO GRATUITO",
      modal_title: "Garanta Sua Credencial VIP",
      modal_sub: "Evento nos dias 1 e 2 de Novembro de 2026 no MASP. Preencha seus dados para receber o passe digital interativo.",
      form_label_name: "Nome Completo",
      form_label_email: "E-mail Principal",
      form_label_day: "Dia de Preferência",
      opt_both: "Ambos os Dias (01 e 02/11/2026)",
      opt_sat: "Sábado (01/11/2026)",
      opt_sun: "Domingo (02/11/2026)",
      form_label_age: "Faixa Etária",
      opt_age_all: "Livre (Todas as Idades)",
      opt_age_fam: "Família com Crianças",
      form_consent: "Concordo em receber a credencial digital e atualizações sobre a amostra tecnológica.",
      form_btn_submit: "GERAR CREDENCIAL DIGITAL",
      pass_success_t: "Credenciamento Confirmado!",
      pass_success_d: "Sua credencial holográfica foi emitida com sucesso para o MASP.",
      pass_holder: "ESPECTADOR:",
      pass_loc: "LOCAL:",
      pass_dates: "DATAS:",
      btn_print: "Salvar / Imprimir",
      btn_done: "Concluído",

      // WhatsApp text
      wa_tooltip: "Dúvidas sobre o evento? Fale com a equipe Real Sensation!",
      wa_msg: "Olá! Gostaria de mais informações sobre o evento de amostra tecnológica Real Sensation no MASP nos dias 1 e 2 de novembro de 2026."
    },

    en: {
      // Nav
      nav_brand_sub: "CINEMA OF THE FUTURE",
      nav_home: "Home",
      nav_about: "The Project",
      nav_experience: "Immersion",
      nav_video: "Demo",
      nav_schedule: "Schedule",
      nav_location: "Location",
      nav_faq: "FAQ",
      nav_cta: "Get Access",

      // Hero
      hero_badge: "CINEMATIC TECHNOLOGY SHOWCASE EVENT",
      hero_title_1: "THE FUTURE OF CINEMA",
      hero_title_2: "CANNOT FIT AT HOME.",
      hero_desc: "Redefining the seventh art through absolute sensory immersion, real-time generative artificial intelligence, and collective physical experiences impossible to replicate in your living room.",
      hero_date_label: "EVENT DATE",
      hero_date_val: "November 1 & 2, 2026",
      hero_date_sub: "Saturday & Sunday • From 10 AM to 10 PM",
      hero_loc_label: "LOCATION",
      hero_loc_val: "MASP — São Paulo",
      hero_loc_sub: "Paulista Avenue, 1578 • SP, Brazil",
      hero_access_label: "ACCESS",
      hero_access_val: "Free Admission",
      hero_access_sub: "Early VIP Digital Credential",
      countdown_title: "COUNTDOWN TO THE CINEMATIC REVOLUTION",
      cd_days: "DAYS",
      cd_hours: "HOURS",
      cd_minutes: "MINUTES",
      cd_seconds: "SECONDS",
      hero_btn_rsvp: "CLAIM FREE VIP PASS",
      hero_btn_watch: "Watch Demonstration",

      // Metrics
      metric_audio: "Neuroacoustic 360° Sound",
      metric_latency: "Ultra-Low Haptic Latency",
      metric_collective: "Collective Physical Immersion",
      metric_ai: "Real-Time Generative AI Rendering",

      // About
      about_tag: "THE REAL SENSATION PROJECT",
      about_title: "A New Cinematic Era Forged by Cutting-Edge Tech",
      about_intro: "Inspired by global gaming and tech innovation summits, Real Sensation is born to answer the ultimate question: what makes cinema worth visiting when home entertainment screens have become gigantic?",
      badge_immersion: "COLLECTIVE IMMERSION",
      about_card1_title: "The Seventh Art Rebuilt from Scratch",
      about_card1_text: "Streaming and OLED TVs made audiences comfortable on their couches. Real Sensation demolishes this barrier with an architectural infrastructure impossible to duplicate at home. It is the pinnacle synthesis of next-gen game engines, auditory neuroscience, and physical theater effects.",
      about_b1: "Curved volumetric screens with expanded peripheral visual fields",
      about_b2: "Collective neural biofeedback synchronization",
      about_b3: "Atmospheric microclimates and millimetric tactile pulses",

      badge_haptics: "4D SENSORY PODS",
      about_card2_title: "Autonomous Haptic Sensory Pods",
      about_card2_text: "Every visitor occupies an ergonomic biometric pod equipped with bone-conduction sub-bass transducers, transmitting visceral cinematic impacts directly through muscle and skeletal structures, synchronized with digital scent synthesizers and thermal micro-bursts.",
      about_b4: "Ultra-high fidelity tactile feedback matching every heartbeat",
      about_b5: "Dynamic personalized intensity and accessibility controls",
      about_b6: "Digitalized aromatic synthesis with zero residue or discomfort",

      badge_ai: "REAL-TIME GENERATIVE AI",
      about_card3_title: "Generative AI & Collective Emotion",
      about_card3_text: "For the first time in history, artificial intelligence neural models monitor ambient respiration and collective tension in the theater to subtly modulate sound frequencies, peripheral illumination, and sensory plot variations. Every single screening at MASP is unrepeatable.",
      about_b7: "Adaptive neural networks responding to audience biometrics",
      about_b8: "Positional 3D binaural sound preserving crisp dialogue clarity",
      about_b9: "A truly social and shared collective cultural event",

      // Pillars
      pillars_tag: "DIMENSIONS OF IMMERSION",
      pillars_title: "The 4 Core Pillars of Real Sensation",
      pillars_sub: "A synesthesia calibrated millisecond by millisecond to reawaken dormant human senses.",
      pillar_1_t: "Peripheral Quantum Optics",
      pillar_1_d: "A 220-degree visual field enveloping the human retina. Removing conventional screen borders to transport your consciousness right into the heart of the visual narrative.",
      pillar_2_t: "Holistic Spatial Neuroacoustics",
      pillar_2_d: "Over 128 discrete audio channels with psychoacoustic fine-tuning. Feel the vector of every whisper, sonic shockwave, or orchestral crescendo sweeping across the theater.",
      pillar_3_t: "4D Atmospheric Synthesizer",
      pillar_3_d: "Instantaneous thermal microclimates, cryogenic mist, and organic aromatic diffusion engineered by master perfumers to link cinematic emotions to deep sensory memory.",
      pillar_4_t: "Synchronous Collective Presence",
      pillar_4_d: "Cinema as a sacred social ritual. The communal goosebumps, the synchronized gasp of hundreds of people gathered at MASP experiencing moments that cannot be paused or lived in isolation.",

      // Video Demo
      video_tag: "VIDEO DEMONSTRATION",
      video_title: "The Science of Sensory Immersion",
      video_sub: "Watch below how multi-sensory engineering, dynamic motion seating, and physical environmental atmospheres transform passive spectators into active participants.",
      video_status: "SENSORY CHANNEL ONLINE • ULTRA HD • 60 FPS",
      pill_seats: "3D Dynamic Kinetic Motion",
      pill_weather: "Wind, Heat & Cryo-Mist",
      pill_scent: "Sub-Micron Olfactory Diffusion",
      pill_sub: "Skeletal Sub-Bass Transducers",

      // Schedule
      sched_tag: "OFFICIAL SCHEDULE",
      sched_title: "Tech Showcase: November 1 & 2, 2026",
      sched_sub: "Two intense days of immersive screenings, live sensory pod hands-on trials, and masterclasses with effects engineers.",
      tab_sat: "SATURDAY • OPENING & AI",
      tab_sun: "SUNDAY • TOTAL IMMERSION",
      badge_keynote: "KEYNOTE MAGNA",
      d1_item1_t: "The Genesis of Sensory Cinema",
      d1_item1_d: "Inaugural presentation with Real Sensation founders demonstrating optical and acoustic prototypes in MASP's Main Auditorium.",
      badge_hands_on: "HANDS-ON POD TESTING",
      d1_item2_t: "Live Testing: 4D Haptic Capsules",
      d1_item2_d: "Audience trials with sci-fi, high-speed action, and nature shorts featuring full wind, kinetic impulses, and scent synchronization.",
      badge_panel: "GAMING & TECH PANEL",
      d1_item3_t: "Real-Time Generative AI in Storytelling",
      d1_item3_d: "Roundtable featuring film directors, AAA game programmers, and neuroscientists discussing the future of shared cinematic immersion.",
      badge_premiere: "EXCLUSIVE PREMIERE",
      d1_item4_t: "Cine-Concert \"Synesthesia 2026\"",
      d1_item4_d: "Special evening showcase merging live electronic audio, panoramic volumetric projection, and synchronized tactile pulses.",

      badge_family: "ALL AGES",
      d2_item1_t: "Sensory Cinema for the Whole Family",
      d2_item1_d: "Gentle and magical interactive sessions exploring cosmic wonders and deep oceanic ecosystems, customized for children and elders.",
      badge_challenge: "CREATIVE CHALLENGE",
      d2_item2_t: "Independent Immersive Short Film Exhibition",
      d2_item2_d: "Showcase of exclusive works created by Brazilian and international filmmakers utilizing the Real Sensation sensory sensor SDK.",
      badge_workshop: "BEHIND THE SCENES",
      d2_item3_t: "Haptic Engineering: Designing for Human Senses",
      d2_item3_d: "Hands-on workshop teaching vibration actuator programming, aroma chemistry synthesis, and binaural 3D audio algorithms.",
      badge_closing: "GRAND FINALE",
      d2_item4_t: "Collective Experience: The Real Sensation Manifesto",
      d2_item4_d: "Spectacular synchronized climax across 300 simultaneous pods reaching peak sensory bandwidth in MASP's iconic Free Span.",

      // Audience
      aud_tag: "TARGET AUDIENCE",
      aud_title: "Built for Anyone Seeking the Next Cultural Leap",
      aud_sub: "An open, inclusive, and accessible showcase welcoming people of all ages looking for a revolutionary experience in São Paulo.",
      aud_c1_t: "Gamers & Tech Enthusiasts",
      aud_c1_d: "For those who love haptic feedback, cutting-edge graphics engines, and yearn to step inside an interactive sci-fi world.",
      aud_c2_t: "Cinephiles & Art Lovers",
      aud_c2_d: "For those longing for the awe and collective magic of true cinema, exploring the natural evolution of dramatic and sensory art.",
      aud_c3_t: "Families & All Ages",
      aud_c3_d: "Safe, welcoming, and accessible setup inspiring curiosity in youngsters and wonder in adults and seniors alike.",
      aud_c4_t: "Creators & Students",
      aud_c4_d: "Ideal for students and practitioners of filmmaking, sound design, robotics, generative AI, and next-generation storytelling.",

      // Location
      loc_tag: "PRIME LOCATION",
      loc_title: "In the Cultural Heart of São Paulo: MASP",
      loc_sub: "The São Paulo Museum of Art (MASP) will host this historic convergence of classical architecture and futuristic technology.",
      venue_label: "OFFICIAL EVENT VENUE",
      perk_metro_t: "Easy Subway Transit",
      perk_metro_d: "Just 50m from Trianon-MASP Subway Station (Green Line 2).",
      perk_access_t: "100% Accessible",
      perk_access_d: "Wheelchair ramps, elevators, and sensory pod intensity customization.",
      perk_parking_t: "Nearby Parking",
      perk_parking_d: "Multiple affiliated secure parking garages along Paulista Avenue.",
      btn_maps: "Open Directions on Google Maps",

      // FAQ
      faq_tag: "FREQUENTLY ASKED QUESTIONS",
      faq_title: "Everything You Need to Know",
      faq_sub: "Find answers to key questions about the Real Sensation Cinematic Showcase at MASP.",
      faq_q1: "Is admission free or paid?",
      faq_a1: "Admission to the Technology Showcase is 100% free! However, due to limited physical sensory pod capacities, prior registration via the 'Get Access' button is mandatory to receive your VIP digital pass.",
      faq_q2: "Can people with sensory sensitivities attend?",
      faq_a2: "Yes! Every single Real Sensation pod features an intuitive ergonomic touch console allowing you to soften physical vibration, turn off scent diffusion, or adjust binaural volume to your personal comfort level at any moment.",
      faq_q3: "What is the age rating for the event?",
      faq_a3: "The event is rated for all ages. We offer tailored screenings for both families with children and sci-fi fans seeking intense experiences. Children under 12 must be accompanied by parents or legal guardians.",
      faq_q4: "How does Real Sensation differ from 4DX or standard IMAX?",
      faq_a4: "Unlike theaters with pre-recorded generalized effects, Real Sensation utilizes real-time generative AI modulated by collective biometrics, intra-aural neuroacoustics, and localized bone-conduction transducers impossible to recreate elsewhere.",
      faq_q5: "Where will the event take place inside MASP and what are the hours?",
      faq_a5: "The event occupies both MASP's iconic Free Span (Vão Livre) and the Main Auditorium on November 1 & 2, 2026, operating continuously from 10:00 AM to 10:00 PM on both Saturday and Sunday.",
      faq_q6: "How do I receive my pass after signing up?",
      faq_a6: "As soon as you complete the registration form on our website, a futuristic holographic digital pass with a unique QR code will appear on screen, ready to save or confirm directly on WhatsApp.",

      // CTA Banner
      cta_tag: "LIMITED SEATS PER SESSION",
      cta_head: "Be Among the First to Feel the Cinema of the Future",
      cta_body: "Join us at MASP on November 1 & 2, 2026. Secure your free digital pass and get ready for an unforgettable journey.",
      cta_btn: "CLAIM FREE VIP PASS NOW",
      cta_loc: "HOW TO GET TO MASP",

      // Footer
      footer_desc: "Redefining cinematic art through real-time AI, absolute multisensory immersion, and collective physical synchronization.",
      footer_nav_t: "Navigation",
      footer_dates_t: "Event Information",

      // Modal
      modal_badge: "FREE REGISTRATION",
      modal_title: "Secure Your VIP Digital Pass",
      modal_sub: "Showcase on November 1 & 2, 2026 at MASP. Enter your details to generate your interactive pass.",
      form_label_name: "Full Name",
      form_label_email: "Primary E-mail",
      form_label_day: "Preferred Attendance Day",
      opt_both: "Both Days (Nov 01 & 02, 2026)",
      opt_sat: "Saturday (Nov 01, 2026)",
      opt_sun: "Sunday (Nov 02, 2026)",
      form_label_age: "Age Bracket",
      opt_age_all: "Open (All Ages)",
      opt_age_fam: "Family with Children",
      form_consent: "I agree to receive my digital credential and event updates regarding the showcase.",
      form_btn_submit: "GENERATE DIGITAL CREDENTIAL",
      pass_success_t: "Registration Confirmed!",
      pass_success_d: "Your holographic pass has been officially issued for MASP.",
      pass_holder: "ATTENDEE:",
      pass_loc: "LOCATION:",
      pass_dates: "DATES:",
      btn_print: "Save / Print Pass",
      btn_done: "Done",

      // WhatsApp text
      wa_tooltip: "Questions about the event? Chat with the Real Sensation team!",
      wa_msg: "Hello! I would like more information about the Real Sensation technology showcase event at MASP on November 1 & 2, 2026."
    },

    es: {
      // Nav
      nav_brand_sub: "CINE DEL FUTURO",
      nav_home: "Inicio",
      nav_about: "El Proyecto",
      nav_experience: "Inmersión",
      nav_video: "Demostración",
      nav_schedule: "Programa",
      nav_location: "Ubicación",
      nav_faq: "Preguntas",
      nav_cta: "Obtener Pase",

      // Hero
      hero_badge: "MUESTRA TECNOLÓGICA CINEMATOGRÁFICA",
      hero_title_1: "EL FUTURO DEL CINE",
      hero_title_2: "NO CABE EN CASA.",
      hero_desc: "Redefiniendo el séptimo arte a través de la inmersión sensorial absoluta, inteligencia artificial generativa en tiempo real y experiencias físicas colectivas imposibles de replicar en tu sala de estar.",
      hero_date_label: "FECHA DEL EVENTO",
      hero_date_val: "1 y 2 de Noviembre de 2026",
      hero_date_sub: "Sábado y Domingo • De 10:00 a 22:00",
      hero_loc_label: "UBICACIÓN",
      hero_loc_val: "MASP — São Paulo",
      hero_loc_sub: "Avenida Paulista, 1578 • SP, Brasil",
      hero_access_label: "ACCESO",
      hero_access_val: "Entrada Gratuita",
      hero_access_sub: "Acreditación VIP Anticipada",
      countdown_title: "CUENTA REGRESIVA PARA LA REVOLUCIÓN",
      cd_days: "DÍAS",
      cd_hours: "HORAS",
      cd_minutes: "MINUTOS",
      cd_seconds: "SEGUNDOS",
      hero_btn_rsvp: "OBTENER CREDENCIAL VIP",
      hero_btn_watch: "Ver Demostración",

      // Metrics
      metric_audio: "Audio Neuroacústico 360°",
      metric_latency: "Latencia Háptica Ultra-Baja",
      metric_collective: "Inmersión Física Colectiva",
      metric_ai: "Renderizado Generativo con IA en Vivo",

      // About
      about_tag: "EL PROYECTO REAL SENSATION",
      about_title: "Una Nueva Era Cinematográfica Forjada por la Tecnología",
      about_intro: "Inspirado en las mayores convenciones mundiales de gaming e innovación tecnológica, Real Sensation nace para responder a la pregunta definitiva: ¿qué hace que valga la pena ir al cine cuando las pantallas del hogar ya son gigantescas?",
      badge_immersion: "INMERSIÓN COLECTIVA",
      about_card1_title: "El Séptimo Arte Reconstruido Desde Cero",
      about_card1_text: "El streaming y las pantallas de alta gama acomodaron al público en su sofá. Real Sensation derriba esa barrera con una infraestructura arquitectónica imposible de reproducir en casa. Es la máxima unión entre motores de videojuegos de última generación, neuroacústica y efectos de teatro sensorial físico.",
      about_b1: "Pantallas volumétricas curvas con visión periférica inmersiva",
      about_b2: "Sincronización neuronal colectiva con la audiencia",
      about_b3: "Atmósfera microclimática e impulsos táctiles milimétricos",

      badge_haptics: "CÁPSULAS HÁPTICAS 4D",
      about_card2_title: "Cápsulas Sensoriales Hápticas",
      about_card2_text: "Cada espectador ocupa un pod biométrico dotado de transductores subgraves que transmiten el impacto cinematográfico directamente a la estructura muscular y ósea, en armonía con sintetizadores aromáticos y ráfagas térmicas sincronizadas con la trama.",
      about_b4: "Respuesta táctil de ultra-alta fidelidad en cada escena de acción",
      about_b5: "Control dinámico individual de intensidad y accesibilidad",
      about_b6: "Química olfativa digitalizada sin residuos ni molestias",

      badge_ai: "IA GENERATIVA EN TIEMPO REAL",
      about_card3_title: "IA Generativa y Emoción Colectiva",
      about_card3_text: "Por primera vez en la historia, motores de inteligencia artificial monitorean la respiración y la tensión comunitaria de la sala para modular sutilmente las frecuencias sonoras, la iluminación periférica y matices narrativos. Cada sesión en el MASP es irrepetible.",
      about_b7: "Redes neuronales que reaccionan a la respiración y pulso del público",
      about_b8: "Audio espacial 3D adaptativo que conserva la nitidez de los diálogos",
      about_b9: "Una experiencia social y compartida verdaderamente transformadora",

      // Pillars
      pillars_tag: "DIMENSIONES DE LA INMERSIÓN",
      pillars_title: "Los 4 Pilares de Real Sensation",
      pillars_sub: "Una sinestesia calculada al milisegundo para despertar todos tus sentidos.",
      pillar_1_t: "Óptica Cuántica Periférica",
      pillar_1_d: "Campo de visión de 220 grados envolviendo completamente la retina humana. Elimina los marcos de la pantalla clásica y sitúa tu mente dentro de la narrativa visual.",
      pillar_2_t: "Neuroacústica Espacial Holística",
      pillar_2_d: "Más de 128 canales de audio independientes calibrados psicoacústicamente. Siente la trayectoria exacta de cada susurro u onda expansiva atravesando la audiencia.",
      pillar_3_t: "Sintetizador Atmosférico & 4D",
      pillar_3_d: "Microclima térmico instantáneo, niebla criogénica y difusión de fragancias orgánicas desarrolladas por perfumistas para ligar las emociones fílmicas a la memoria sensorial profunda.",
      pillar_4_t: "Sinergia Colectiva Presencial",
      pillar_4_d: "El cine como rito social sagrado. La piel de gallina comunitaria, el suspiro sincronizado de cientos de personas reunidas en el MASP viviendo algo irrepetible.",

      // Video Demo
      video_tag: "DEMOSTRACIÓN EN VIDEO",
      video_title: "La Ciencia de la Inmersión Sensorial",
      video_sub: "Descubre a continuación cómo la ingeniería multisensorial, los asientos dinámicos y las atmósferas físicas convierten a espectadores pasivos en protagonistas activos.",
      video_status: "CANAL SENSORIAL EN LÍNEA • ULTRA HD • 60 FPS",
      pill_seats: "Movimiento Cinético Tridimensional",
      pill_weather: "Viento, Calor y Niebla Criogénica",
      pill_scent: "Dispersión Olfativa Submicrónica",
      pill_sub: "Transductores Óseos de Subgraves",

      // Schedule
      sched_tag: "PROGRAMA OFICIAL",
      sched_title: "Muestra Tecnológica: 1 y 2 de Noviembre de 2026",
      sched_sub: "Dos jornadas intensas de proyecciones inmersivas, pruebas en vivo de cápsulas hápticas y conferencias con ingenieros sensoriales.",
      tab_sat: "SÁBADO • APERTURA E IA",
      tab_sun: "DOMINGO • INMERSIÓN TOTAL",
      badge_keynote: "KEYNOTE MAGNA",
      d1_item1_t: "El Nacimiento del Cine Sensorial",
      d1_item1_d: "Presentación inaugural con los creadores de Real Sensation y demostración acústica y óptica en el Auditorio Principal del MASP.",
      badge_hands_on: "TEST EN VIVO EN PODS",
      d1_item2_t: "Pruebas de Cápsulas Hápticas 4D",
      d1_item2_d: "Pruebas interactivas con cortometrajes de ciencia ficción, acción y naturaleza con viento, impulsos físicos y aromas sincronizados.",
      badge_panel: "PANEL GAMING Y TECNOLOGÍA",
      d1_item3_t: "IA Generativa en Tiempo Real en la Narrativa",
      d1_item3_d: "Mesa de debate con directores de cine, creadores de videojuegos AAA y neurocientíficos sobre el futuro de la inmersión.",
      badge_premiere: "ESTRENO EXCLUSIVO",
      d1_item4_t: "Cine-Concierto \"Synesthesia 2026\"",
      d1_item4_d: "Espectáculo especial combinando música electrónica en vivo, proyección volumétrica y sincronización háptica comunitaria.",

      badge_family: "TODAS LAS EDADES",
      d2_item1_t: "Cine Sensorial Para Toda la Familia",
      d2_item1_d: "Sesiones mágicas e interactivas adaptadas para niños y adultos mayores, con parámetros suaves explorando los misterios del cosmos.",
      badge_challenge: "MUESTRA DE CORTOS",
      d2_item2_t: "Cortometrajes Inmersivos Independientes",
      d2_item2_d: "Exhibición de obras producidas por cineastas brasileños e internacionales usando el kit de sensores de Real Sensation.",
      badge_workshop: "DETRÁS DE CÁMARAS",
      d2_item3_t: "Ingeniería Háptica: Crear Para los Sentidos",
      d2_item3_d: "Taller práctico sobre programación de transductores, química de fragancias y diseño de sonido binaural 3D.",
      badge_closing: "GRAN CLAUSURA",
      d2_item4_t: "Experiencia Colectiva: El Manifiesto Real Sensation",
      d2_item4_d: "Clímax sincronizado con 300 cápsulas operando a máxima potencia sensorial en el emblemático Vano Libre y Auditorio del MASP.",

      // Audience
      aud_tag: "PÚBLICO OBJETIVO",
      aud_title: "Diseñado Para Quienes Buscan el Próximo Salto Cultural",
      aud_sub: "Un evento abierto, inclusivo y accesible para personas de todas las edades que deseen vivir algo sin precedentes en São Paulo.",
      aud_c1_t: "Gamers y Fans de la Tecnología",
      aud_c1_d: "Para quienes aman la respuesta táctil, motores gráficos avanzados y sueñan con estar 'dentro' de una escena interactiva.",
      aud_c2_t: "Cinéfilos y Amantes del Arte",
      aud_c2_d: "Para quienes extrañan la grandeza y comunión del cine auténtico y buscan la evolución natural de la narrativa dramática.",
      aud_c3_t: "Familias y Todas las Edades",
      aud_c3_d: "Entorno seguro y accesible tanto para jóvenes curiosos como para adultos y adultos mayores que deseen maravillarse.",
      aud_c4_t: "Creadores y Estudiantes",
      aud_c4_d: "Ideal para estudiantes de cine, animación, robótica, inteligencia artificial y futuros directores del entretenimiento inmersivo.",

      // Location
      loc_tag: "UBICACIÓN PRIVILEGIADA",
      loc_title: "En el Corazón Cultural de São Paulo: MASP",
      loc_sub: "El Museo de Arte de São Paulo (MASP) será la sede histórica de este encuentro entre arquitectura clásica y tecnología futurista.",
      venue_label: "SEDE OFICIAL DEL EVENTO",
      perk_metro_t: "Metro Cercano",
      perk_metro_d: "A solo 50 metros de la Estación Trianon-MASP (Línea 2 - Verde).",
      perk_access_t: "100% Accesible",
      perk_access_d: "Rampas, ascensores y cápsulas con adaptación sensorial individual.",
      perk_parking_t: "Estacionamientos",
      perk_parking_d: "Múltiples estacionamientos asociados en la Avenida Paulista.",
      btn_maps: "Abrir Ruta en Google Maps",

      // FAQ
      faq_tag: "PREGUNTAS FRECUENTES",
      faq_title: "Todo Lo Que Necesitas Saber",
      faq_sub: "Conoce las respuestas a las principales consultas sobre la Muestra Tecnológica Real Sensation en el MASP.",
      faq_q1: "¿El evento es gratuito o de pago?",
      faq_a1: "¡La entrada es 100% gratuita! No obstante, debido a la capacidad de las cápsulas sensoriales, es indispensable registrarse con anticipación a través del botón 'Obtener Pase' en esta página.",
      faq_q2: "¿Pueden asistir personas con sensibilidad sensorial?",
      faq_a2: "¡Sí! Cada cápsula Real Sensation cuenta con una consola táctil ergonómica individual que te permite modular la intensidad de las vibraciones, apagar aromas o ajustar el volumen a tu comodidad en cualquier segundo.",
      faq_q3: "¿Cuál es la clasificación por edad?",
      faq_a3: "La entrada es libre para todas las edades. Contamos con sesiones suaves para familias y proyecciones de alta intensidad para aficionados de la ciencia ficción. Menores de 12 años deben asistir con adultos acompañantes.",
      faq_q4: "¿Qué diferencia a Real Sensation de una sala 4DX o IMAX convencional?",
      faq_a4: "A diferencia de salas convencionales con pistas fijas, Real Sensation utiliza IA generativa en vivo que modula la experiencia con base en el pulso colectivo, audio neuroacústico intrauricular y vibración ósea milimétrica.",
      faq_q5: "¿Dónde será exactamente en el MASP y cuáles son los horarios?",
      faq_a5: "Tendrá lugar tanto en el emblemático Vano Libre como en el Gran Auditorio del MASP los días 1 y 2 de noviembre de 2026, de 10:00 a 22:00 ininterrumpidamente ambos días.",
      faq_q6: "¿Cómo recibo mi credencial tras registrarme?",
      faq_a6: "Al completar el formulario en la web, se generará de inmediato en pantalla un pase holográfico digital con código QR exclusivo, listo para descargar o confirmar vía WhatsApp.",

      // CTA Banner
      cta_tag: "PLAZAS LIMITADAS POR SESIÓN",
      cta_head: "Sé de los Primeros en Sentir el Cine del Futuro",
      cta_body: "Acompáñanos en el MASP los días 1 y 2 de Noviembre de 2026. Reserva tu pase gratuito y vive una experiencia inolvidable.",
      cta_btn: "REGISTRARME GRATIS AHORA",
      cta_loc: "CÓMO LLEGAR AL MASP",

      // Footer
      footer_desc: "Redefiniendo el séptimo arte a través de inteligencia artificial, inmersión multisensorial absoluta y sincronía física colectiva.",
      footer_nav_t: "Navegación",
      footer_dates_t: "Información del Evento",

      // Modal
      modal_badge: "ACREDITACIÓN GRATUITA",
      modal_title: "Obtén Tu Credencial VIP",
      modal_sub: "Evento los días 1 y 2 de Noviembre de 2026 en el MASP. Completa tus datos para recibir tu pase interactivo.",
      form_label_name: "Nombre Completo",
      form_label_email: "Correo Electrónico",
      form_label_day: "Día de Preferencia",
      opt_both: "Ambos Días (01 y 02/11/2026)",
      opt_sat: "Sábado (01/11/2026)",
      opt_sun: "Domingo (02/11/2026)",
      form_label_age: "Rango de Edad",
      opt_age_all: "Libre (Todas las Edades)",
      opt_age_fam: "Familia con Niños",
      form_consent: "Acepto recibir la credencial digital y actualizaciones sobre la muestra tecnológica.",
      form_btn_submit: "GENERAR CREDENCIAL DIGITAL",
      pass_success_t: "¡Registro Confirmado!",
      pass_success_d: "Tu credencial holográfica ha sido emitida con éxito para el MASP.",
      pass_holder: "ASISTENTE:",
      pass_loc: "LUGAR:",
      pass_dates: "FECHAS:",
      btn_print: "Guardar / Imprimir",
      btn_done: "Finalizar",

      // WhatsApp text
      wa_tooltip: "¿Dudas sobre el evento? ¡Habla con el equipo de Real Sensation!",
      wa_msg: "¡Hola! Me gustaría más información sobre el evento de muestra tecnológica Real Sensation en el MASP los días 1 y 2 de noviembre de 2026."
    }
  };

  let currentLang = localStorage.getItem('rs_lang') || 'pt';

  const updateLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('rs_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Update all elements with data-i18n
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update WhatsApp link & Tooltip
    const waLink = document.getElementById('whatsapp-link');
    const waTooltip = document.getElementById('whatsapp-tooltip-text');
    if (waLink && dict.wa_msg) {
      const encodedMsg = encodeURIComponent(dict.wa_msg);
      waLink.href = `https://wa.me/5511999999999?text=${encodedMsg}`;
    }
    if (waTooltip && dict.wa_tooltip) {
      waTooltip.textContent = dict.wa_tooltip;
    }

    // Update Form placeholders
    const nameInput = document.getElementById('rsvp-name');
    if (nameInput) {
      nameInput.placeholder = lang === 'en' ? 'e.g. Alex Johnson' : lang === 'es' ? 'Ej.: Carlos Mendoza' : 'Ex.: Lucas Fernandes';
    }
  };

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      updateLanguage(selected);
    });
  });

  // Init language
  updateLanguage(currentLang);


  /* ==========================================================================
     2. COUNTDOWN TIMER TO NOVEMBER 1, 2026
     ========================================================================== */
  const eventTargetDate = new Date('2026-11-01T10:00:00-03:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventTargetDate - now;

    if (distance <= 0) {
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minsEl = document.getElementById('minutes');
      const secsEl = document.getElementById('seconds');
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(minutes);
    if (secsEl) secsEl.textContent = pad(seconds);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ==========================================================================
     3. CYBER CANVAS PARTICLES (Synaptic Neural Nodes)
     ========================================================================== */
  const canvas = document.getElementById('cyber-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 24), 55);
    const mouse = { x: null, y: null, radius: 120 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.4 ? 'rgba(0, 242, 254,' : 'rgba(157, 78, 221,';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction with mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2;
            this.y -= (dy / dist) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color} 0.75)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f2fe';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Connect close particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = 1 - dist / 130;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.22})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }


  /* ==========================================================================
     4. NAVBAR SCROLL EFFECT & SPY
     ========================================================================== */
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy active link
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });
  });


  /* ==========================================================================
     5. MOBILE MENU TOGGLE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-links-list');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const isActive = navList.classList.toggle('active');
      mobileToggle.classList.toggle('active', isActive);
      mobileToggle.setAttribute('aria-expanded', isActive);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ==========================================================================
     6. SCHEDULE TABS SWITCHER (DAY 1 & DAY 2)
     ========================================================================== */
  const tabDay1 = document.getElementById('tab-day1');
  const tabDay2 = document.getElementById('tab-day2');
  const panelDay1 = document.getElementById('panel-day1');
  const panelDay2 = document.getElementById('panel-day2');

  if (tabDay1 && tabDay2 && panelDay1 && panelDay2) {
    tabDay1.addEventListener('click', () => {
      tabDay1.classList.add('active');
      tabDay1.setAttribute('aria-selected', 'true');
      tabDay2.classList.remove('active');
      tabDay2.setAttribute('aria-selected', 'false');

      panelDay1.classList.add('active');
      panelDay2.classList.remove('active');
    });

    tabDay2.addEventListener('click', () => {
      tabDay2.classList.add('active');
      tabDay2.setAttribute('aria-selected', 'true');
      tabDay1.classList.remove('active');
      tabDay1.setAttribute('aria-selected', 'false');

      panelDay2.classList.add('active');
      panelDay1.classList.remove('active');
    });
  }


  /* ==========================================================================
     7. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this item
        item.classList.toggle('active', !isOpen);
        questionBtn.setAttribute('aria-expanded', !isOpen);
      });
    }
  });


  /* ==========================================================================
     8. MODAL & VIP HOLOGRAPHIC PASS GENERATOR
     ========================================================================== */
  const modal = document.getElementById('rsvp-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const rsvpForm = document.getElementById('rsvp-form');
  const modalFormStep = document.getElementById('modal-form-step');
  const modalPassStep = document.getElementById('modal-pass-step');
  const btnClosePass = document.getElementById('btn-close-pass');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // Reset form after short delay
      setTimeout(() => {
        if (modalFormStep) modalFormStep.style.display = 'block';
        if (modalPassStep) modalPassStep.style.display = 'none';
        if (rsvpForm) rsvpForm.reset();
      }, 300);
    }
  };

  openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (btnClosePass) btnClosePass.addEventListener('click', closeModal);

  // Close when clicking outside overlay
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle Form Submission & Pass Generation
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('rsvp-name').value.trim();
      const emailVal = document.getElementById('rsvp-email').value.trim();
      const dayVal = document.getElementById('rsvp-day').value;

      if (!nameVal || !emailVal) {
        alert(currentLang === 'en' ? 'Please fill in all required fields.' : currentLang === 'es' ? 'Por favor completa todos los campos requeridos.' : 'Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      // Generate random ticket code
      const randomCode = 'RS-' + Math.floor(1000 + Math.random() * 9000) + '-MASP';
      const attendeeNameEl = document.getElementById('pass-attendee-name');
      const passCodeEl = document.getElementById('pass-code-val');
      const passDatesEl = document.getElementById('pass-dates-val');

      if (attendeeNameEl) attendeeNameEl.textContent = nameVal;
      if (passCodeEl) passCodeEl.textContent = randomCode;

      if (passDatesEl) {
        if (dayVal === 'sat') {
          passDatesEl.textContent = '01 Nov 2026';
        } else if (dayVal === 'sun') {
          passDatesEl.textContent = '02 Nov 2026';
        } else {
          passDatesEl.textContent = '01 & 02 Nov 2026';
        }
      }

      // Transition to holographic pass step
      modalFormStep.style.display = 'none';
      modalPassStep.style.display = 'block';
    });
  }


  /* ==========================================================================
     9. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

});
