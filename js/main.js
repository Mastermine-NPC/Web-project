const imagenesFondo = [
    "../img/fondo1.jpg",
    "../img/fondo2.jpg",
    "../img/fondo3.jpg",

];

let indice = 0;

function cambiarFondo() {
    document.body.style.backgroundImage = `url(${imagenesFondo[indice]})`;
    indice = (indice + 1) % imagenesFondo.length;
}

// Fondo inicial
cambiarFondo();

// Cambia cada 3 segundos
setInterval(cambiarFondo, 3000);


// productos.js - renderizado dinámico de productos, búsqueda, filtrado y carrito (localStorage)

const products = [
	{
		id: 'p1',
		name: 'Lámpara de mesa Aurora',
		category: 'Iluminación',
		price: 45.99,
		img: '../img/imagenes/imagen_empresa_historia.webp',
		description: 'Lámpara elegante para ambientar salas y dormitorios.'
	},
	{
		id: 'p2',
		name: 'Set de cojines Velvet',
		category: 'Textiles',
		price: 29.5,
		img: '../img/imagenes/logros.webp',
		description: 'Juego de 3 cojines en colores neutros.'
	},
	{
		id: 'p3',
		name: 'Mesa auxiliar Nordic',
		category: 'Muebles',
		price: 89.0,
		img: '../img/imagenes/vision.webp',
		description: 'Mesa compacta con diseño escandinavo.'
	},
	{
		id: 'p4',
		name: 'Cuadro Abstracto 80x60',
		category: 'Decoración',
		price: 120.0,
		img: '../img/imagenes/imagen_historia_2.webp',
		description: 'Obra decorativa ideal para salones y recibidores.'
	},
	{
		id: 'p5',
		name: 'Manta Cozy',
		category: 'Textiles',
		price: 34.99,
		img: '../img/imagenes/logros.webp',
		description: 'Manta suave y cálida para tardes de frío.'
	},
	{
		id: 'p6',
		name: 'Espejo Oval Moderno',
		category: 'Decoración',
		price: 65.0,
		img: '../img/imagenes/imagen_empresa_historia.webp',
		description: 'Espejo con marco fino, perfecto para baños y entradas.'
	},
	// --- Categoría: Accesorios ---
  {
    id: 'a2',
    name: 'Alargo Aluminio',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/alargo-aluminio.webp',
    description: 'Accesorio de aluminio extensible.'
  },
  {
    id: 'a4',
    name: 'Lámina Fachada Acanalado Cal',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/D_Q_NP_2X_925943-MLM48498576043_122021-E-lamina-fachada-acabado-acanalado-mxlgn-018-072x732m-cal.webp',
    description: 'Lámina para fachada con acabado especial.'
  },
  {
    id: 'a7',
    name: 'HERO Acabados M',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/HERO_acabados_M.webp',
    description: 'Imagen principal de acabados.'
  },
  {
    id: 'a8',
    name: 'Intro Pipe Sanders',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/intro-pipe-sanders.webp',
    description: 'Accesorio para lijadoras de tubería.'
  },
  {
    id: 'a9',
    name: 'Intro Surfin Accessories',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/intro-surfin-accessories.webp',
    description: 'Accesorios para trabajos de superficie.'
  },
  {
    id: 'a10',
    name: 'Media',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/media.webp',
    description: 'Contenido multimedia relacionado.'
  },
  {
    id: 'a11',
    name: 'ptx-on-angle_1',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/ptx-on-angle_1.webp',
    description: 'Accesorio PTX con ángulo.'
  },
  {
    id: 'a12',
    name: 'Contenedor Surtido Stroitelnyy',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/stroitelnyy_conteiner_assorti-500x500.webp',
    description: 'Contenedor de surtido de construcción.'
  },
  {
    id: 'a13',
    name: 'Caja de Herrajes Utility',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/utility-box-hardware.webp',
    description: 'Caja de herramientas y herrajes.'
  },
  {
    id: 'a14',
    name: 'Imagen Ajustada',
    category: 'Accesorios',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Accesorios/width=240,height=240,quality=70,format=webp,fit=pad.webp',
    description: 'Imagen con ajustes de tamaño y calidad.'
  },

  // --- Categoría: Adhesivos ---
  {
    id: 'd1',
    name: 'Adhesivo Cerámico Pro',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoCerámicoPro.webp',
    description: 'Adhesivo profesional para cerámica.'
  },
  {
    id: 'd2',
    name: 'Adhesivo de Madera Premium',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivodeMaderaPremium.webp',
    description: 'Adhesivo de alta calidad para madera.'
  },
  {
    id: 'd3',
    name: 'Adhesivo de Montaje',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivodeMontaje.webp',
    description: 'Adhesivo de fácil montaje.'
  },
  {
    id: 'd4',
    name: 'Adhesivo Madera Clásico',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoMaderaClásico.webp',
    description: 'Adhesivo clásico para madera.'
  },
  {
    id: 'd5',
    name: 'Adhesivo Multiuso Max',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoMultiusoMax.webp',
    description: 'Adhesivo multiusos de máxima resistencia.'
  },
  {
    id: 'd6',
    name: 'Adhesivo Multiuso ProFix',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoMultiusoProFix.webp',
    description: 'Adhesivo multiusos de fijación profesional.'
  },
  {
    id: 'd7',
    name: 'Adhesivo Profesional X',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoProfesionalX.webp',
    description: 'Adhesivo profesional de fórmula X.'
  },
  {
    id: 'd8',
    name: 'Adhesivo Rápido Pro Ceram',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoRápidoProCeram.webp',
    description: 'Adhesivo de secado rápido para cerámica.'
  },
  {
    id: 'd9',
    name: 'Adhesivo Rápido Ultra',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoRápidoUltra.webp',
    description: 'Adhesivo ultra-rápido.'
  },
  {
    id: 'd10',
    name: 'Adhesivo Super Fijación',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/AdhesivoSuperFijación.webp',
    description: 'Adhesivo con super fijación.'
  },
  {
    id: 'd11',
    name: 'Cola Blanca Extra Fuerte',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/ColaBlancaExtraFuerte.webp',
    description: 'Cola blanca de agarre extra fuerte.'
  },
  {
    id: 'd12',
    name: 'Cola de Carpintero Max',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/ColadeCarpinteroMax.webp',
    description: 'Cola para carpintería de máxima calidad.'
  },
  {
    id: 'd13',
    name: 'Cola Sintética Ultra',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/ColaSintéticaUltra.webp',
    description: 'Cola sintética ultra resistente.'
  },
  {
    id: 'd14',
    name: 'Pegamento Epóxico Fuerte',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/PegamentoEpóxicoFuerte.webp',
    description: 'Pegamento epóxico de gran fuerza.'
  },
  {
    id: 'd15',
    name: 'Pegamento Extra Resistencia',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/PegamentoExtraResistencia.webp',
    description: 'Pegamento con resistencia superior.'
  },
  {
    id: 'd16',
    name: 'Pegamento Ultra Fix',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/PegamentoUltraFix.webp',
    description: 'Pegamento de fijación ultrarrápida.'
  },
  {
    id: 'd17',
    name: 'Pega Todo Industrial',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/PegaTodoIndustrial.webp',
    description: 'Adhesivo apto para uso industrial.'
  },
  {
    id: 'd18',
    name: 'Pega Ultra Ceram',
    category: 'Adhesivos',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Adhesivos/PegaUltraCeram.webp',
    description: 'Adhesivo ultra para cerámica.'
  },

  // --- Categoría: Cintas ---
  {
    id: 'c1',
    name: '416E68S-+LL._AC._SR180,230',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/416E68S-+LL._AC._SR180,230.webp',
    description: 'Cinta con código de producto.'
  },
  {
    id: 'c2',
    name: '81lygYZoomL',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/81lygYZoomL.webp',
    description: 'Cinta de alta visibilidad.'
  },
  {
    id: 'c3',
    name: 'AVD8401_533x',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/AVD8401_533x.webp',
    description: 'Cinta con código de referencia.'
  },
  {
    id: 'c4',
    name: 'Cinta Técnica Espuma 3m',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/CEA025YCEA131cintatecnicaespuma3mVG532C2-copia_533x.webp',
    description: 'Cinta técnica de espuma.'
  },
  {
    id: 'c5',
    name: 'Cinta Espuma Doble Cara Adhesiva',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/cinta-espuma-de-doble-cara-adhesiva-artemio-1cmx27m.webp',
    description: 'Cinta de espuma doble cara.'
  },
  {
    id: 'c6',
    name: 'Cinta Juntas Cartón Yeso',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/cinta-juntas-carton-yeso-rollo-23-metros.webp',
    description: 'Cinta para juntas de cartón-yeso.'
  },
  {
    id: 'c7',
    name: 'Cinta Para Césped Sintético',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/CP3104-CINTA-PARA-CESPED-SINTETICO-300x300.webp',
    description: 'Cinta para instalación de césped sintético.'
  },
  {
    id: 'c8',
    name: 'Cinta Doble Cara PET',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/CP3304-CINTA-DOBLE-CARA-PET-300x300.webp',
    description: 'Cinta doble cara de PET.'
  },
  {
    id: 'c9',
    name: 'Media (1)',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/media (1).webp',
    description: 'Contenido multimedia relacionado.'
  },
  {
    id: 'c10',
    name: 'Media',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/media.webp',
    description: 'Contenido multimedia relacionado.'
  },
  {
    id: 'c11',
    name: 'Montaje Cinta Impresa',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/montaje-cinta-impresa-1-.webp',
    description: 'Cinta impresa para montaje.'
  },
  {
    id: 'c12',
    name: 'Scotch 35 Tapes',
    category: 'Cintas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Cintas/scotch-35-tapes-side-01-tif.webp',
    description: 'Cintas Scotch modelo 35.'
  },

  // --- Categoría: Herramientas ---
  {
    id: 'h1',
    name: 'Herramientas y Casco de Seguridad',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/134777871-construcción-concepto-de-renovación-de-casas-herramientas-manuales-y-casco-de-color-amarillo-sobre.webp',
    description: 'Herramientas manuales y casco para renovación.'
  },
  {
    id: 'h2',
    name: 'Herramientas de Construcción',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/147142790-herramientas-de-construcción-sobre-un-fondo-claro-el-concepto-de-usar-herramientas-para-hacer.webp',
    description: 'Conjunto de herramientas de construcción.'
  },
  {
    id: 'h3',
    name: 'Casco de Seguridad con Herramientas',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/185481853-casco-de-seguridad-de-ingeniero-con-herramientas-de-construcción-vista-superior.webp',
    description: 'Casco de ingeniero y herramientas, vista superior.'
  },
  {
    id: 'h4',
    name: 'Alicates, Nivel y Casco',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/46991274-acero-alicates-de-corte-nivel-de-construcción-metros-de-madera-casco.webp',
    description: 'Herramientas variadas: alicates, nivel y casco.'
  },
  {
    id: 'h5',
    name: '6 Herramientas para la Construcción',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/6-herramientas-para-la-construccion-709048.webp',
    description: 'Conjunto de 6 herramientas esenciales.'
  },
  {
    id: 'h6',
    name: 'Cinturón de Herramientas de Construcción',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/98273236-conjunto-de-herramientas-de-construcción-en-cuero-cinturón-de-herramientas.webp',
    description: 'Conjunto de herramientas en cinturón de cuero.'
  },
  {
    id: 'h7',
    name: 'Conjunto Herramientas Arquitecto',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/conjunto-herramientas-arquitecto_93675-132306.webp',
    description: 'Kit de herramientas para arquitecto.'
  },
  {
    id: 'h8',
    name: 'Herramientas Manuales',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/g-herramientas-manuales-para-la-construccion-13082020-herramientas-para-construccion.webp',
    description: 'Variedad de herramientas manuales de construcción.'
  },
  {
    id: 'h9',
    name: 'Guía de Equipamiento para la Construcción',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/guia-de-equipamiento-para-la-construccion-herramientas-equipos-y-maquinarias_30.webp',
    description: 'Equipamiento, herramientas y maquinaria.'
  },
  {
    id: 'h10',
    name: 'Herramientas de Construcción (Horizontal)',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/herramientas-de-construccion-1080x600.webp',
    description: 'Herramientas de construcción en formato panorámico.'
  },
  {
    id: 'h11',
    name: 'Herramientas e Instrumentos Madera',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/herramientas-e-instrumentos-trabajo-madera_182252-256.webp',
    description: 'Herramientas para trabajos de carpintería y madera.'
  },
  {
    id: 'h12',
    name: 'Equipo de Construcción en Mesa',
    category: 'Herramientas',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Herramientas/primer-plano-equipo-construccion-mesa_1048944-27653866.webp',
    description: 'Primer plano de equipo de construcción en mesa.'
  },

  // --- Categoría: otros ---
  {
    id: 'o1',
    name: '71C56VCrBcL',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/71C56VCrBcL.webp',
    description: 'Producto diverso con código.'
  },
  {
    id: 'o2',
    name: 'CEMEX Blanco',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/CEMEX-blanco.webp',
    description: 'Cemento o material de construcción CEMEX blanco.'
  },
  {
    id: 'o3',
    name: 'DAFIB-CUB',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/DAFIB-CUB.webp',
    description: 'Producto diverso DAFIB.'
  },
  {
    id: 'o4',
    name: 'Image',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/image.webp',
    description: 'Imagen genérica de producto.'
  },
  {
    id: 'o5',
    name: 'Impermeabilizante Acrílico Fibratado',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/Impermeabilizanteacrilicofibratado8anosRojo_17a18323-9620-4f36-be3d-117c733bcf73_250x_crop_center.webp',
    description: 'Impermeabilizante acrílico de 8 años en color rojo.'
  },
  {
    id: 'o6',
    name: 'Pintura Plástica Bigmat',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/pintura-plastica-bigmat-2-en-1-blanco-15l-1.webp',
    description: 'Pintura plástica 2 en 1 Bigmat, 15L.'
  },
  {
    id: 'o7',
    name: 'Solución Total Saco',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/Solucion-total-Saco.webp',
    description: 'Producto en saco para solución total.'
  },
  {
    id: 'o8',
    name: 'T3 Acabados 01',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/T3_Acabados01.webp',
    description: 'Acabado T3, imagen 01.'
  },
  {
    id: 'o9',
    name: 'T3 Acabados 03',
    category: 'otros',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/otros/T3_Acabados03.webp',
    description: 'Acabado T3, imagen 03.'
  },

  // --- Categoría: Selladores ---
  {
    id: 's1',
    name: 'Sellador Acrílico Extra',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorAcrílicoExtra.webp',
    description: 'Sellador acrílico con extra rendimiento.'
  },
  {
    id: 's2',
    name: 'Sellador Acrílico Flexible',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorAcrílicoFlexible.webp',
    description: 'Sellador acrílico con alta flexibilidad.'
  },
  {
    id: 's3',
    name: 'Sellador Acrílico Interior',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorAcrílicoInterior.webp',
    description: 'Sellador acrílico para uso interior.'
  },
  {
    id: 's4',
    name: 'Sellador Acrílico Universal',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorAcrílicoUniversal.webp',
    description: 'Sellador acrílico de uso universal.'
  },
  {
    id: 's5',
    name: 'Sellador Antihumedad',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorAntihumedad.webp',
    description: 'Sellador especial para combatir la humedad.'
  },
  {
    id: 's6',
    name: 'Sellador de Alta Resistencia',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladordeAltaResistencia.webp',
    description: 'Sellador de alta durabilidad y resistencia.'
  },
  {
    id: 's7',
    name: 'Sellador de Grietas Premium',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladordeGrietasPremium.webp',
    description: 'Sellador premium para reparación de grietas.'
  },
  {
    id: 's8',
    name: 'Sellador de Silicona Blanca',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladordeSiliconaBlanca.webp',
    description: 'Sellador de silicona en color blanco.'
  },
  {
    id: 's9',
    name: 'Sellador de Ventanas',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladordeVentanas.webp',
    description: 'Sellador específico para marcos y juntas de ventanas.'
  },
  {
    id: 's10',
    name: 'Sellador Ignífugo',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorIgnífugo.webp',
    description: 'Sellador con propiedades ignífugas.'
  },
  {
    id: 's11',
    name: 'Sellador Multiusos Max',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorMultiusosMax.webp',
    description: 'Sellador multiusos de máxima versatilidad.'
  },
  {
    id: 's12',
    name: 'Sellador para Baños y Cocinas',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorparaBañosyCocinas.webp',
    description: 'Sellador resistente a la humedad para baños y cocinas.'
  },
  {
    id: 's13',
    name: 'Sellador Pintable Max',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorPintableMax.webp',
    description: 'Sellador que puede ser pintado.'
  },
  {
    id: 's14',
    name: 'Sellador Poliuretano Ultra',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorPoliuretanoUltra.webp',
    description: 'Sellador de poliuretano ultra resistente.'
  },
  {
    id: 's15',
    name: 'Sellador Profesional',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorProfesional.webp',
    description: 'Sellador de calidad profesional.'
  },
  {
    id: 's16',
    name: 'Sellador Profesional Flex',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorProfesionalFlex.webp',
    description: 'Sellador profesional flexible.'
  },
  {
    id: 's17',
    name: 'Sellador Silicona Neutra',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorSiliconaNeutra.webp',
    description: 'Sellador de silicona de curado neutro.'
  },
  {
    id: 's18',
    name: 'Sellador Transparente Pro',
    category: 'Selladores',
    price: 0.0,
    img: '../img/imagenes/imagenes_productos/Selladores/SelladorTransparentePro.webp',
    description: 'Sellador transparente de nivel profesional.'
  }
];



// === ADMIN PRODUCTOS ===

// Cargar tabla
function cargarTabla() {
    const cuerpo = document.getElementById("tabla-productos");
    cuerpo.innerHTML = "";

    products.forEach(p => {
        cuerpo.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td><img src="${p.img}" width="60"></td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>$${p.price}</td>
                <td>${p.description}</td>
                <td>
                    <button onclick="editarProducto('${p.id}')">✏️ Editar</button>
                    <button onclick="eliminarProducto('${p.id}')">🗑️ Eliminar</button>
                </td>
            </tr>
        `;
    });
}

// Abrir modal con datos del producto
function editarProducto(id) {
    const p = products.find(x => x.id === id);

    document.getElementById("edit-id").value = p.id;
    document.getElementById("edit-name").value = p.name;
    document.getElementById("edit-category").value = p.category;
    document.getElementById("edit-price").value = p.price;
    document.getElementById("edit-description").value = p.description;
    document.getElementById("edit-img").value = p.img;

    document.getElementById("modal").classList.remove("hidden");
}

// Guardar cambios
function guardarCambios() {
    const id = document.getElementById("edit-id").value;

    const p = products.find(x => x.id === id);

    p.name = document.getElementById("edit-name").value;
    p.category = document.getElementById("edit-category").value;
    p.price = parseFloat(document.getElementById("edit-price").value);
    p.description = document.getElementById("edit-description").value;
    p.img = document.getElementById("edit-img").value;

    cerrarModal();
    cargarTabla();
}

// Cerrar modal
function cerrarModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Eliminar producto
function eliminarProducto(id) {
    const index = products.findIndex(x => x.id === id);
    if (index !== -1) products.splice(index, 1);
    cargarTabla();
}

window.onload = cargarTabla;
// === TIENDA ONLINE ===

// Helpers para carrito (localStorage)
function getCart() {
	try {
		return JSON.parse(localStorage.getItem('decore_cart') || '[]');
	} catch (e) {
		return [];
	}
}

function saveCart(cart) {
	localStorage.setItem('decore_cart', JSON.stringify(cart));
	updateCartCount();
}

function addToCart(productId) {
	const cart = getCart();
	const found = cart.find(i => i.id === productId);
	if (found) found.qty += 1; else cart.push({ id: productId, qty: 1 });
	saveCart(cart);
	showToast('Producto agregado al carrito');
}

function updateCartCount() {
	const cart = getCart();
	const total = cart.reduce((s, i) => s + i.qty, 0);
	const el = document.getElementById('cartCount');
	if (el) el.textContent = total;
}

function showCart() {
	const cart = getCart();
	if (!cart.length) return alert('El carrito está vacío.');
	const lines = cart.map(item => {
		const p = products.find(x => x.id === item.id);
		return `${p ? p.name : item.id} × ${item.qty}`;
	});
	alert('Carrito:\n' + lines.join('\n'));
}

// Renderizado
function renderProducts(list) {
	const grid = document.getElementById('productsGrid');
	grid.innerHTML = '';
	if (!list.length) {
		grid.innerHTML = '<p style="color:#fff; text-align:center;">No se encontraron productos.</p>';
		return;
	}

	list.forEach(p => {
		const card = document.createElement('div');
		card.className = 'service-card';

		const img = document.createElement('img');
		img.src = p.img;
		img.alt = p.name;
		img.style = 'width:100%;height:180px;object-fit:cover;border-radius:8px;margin-bottom:12px;';

		const title = document.createElement('h3');
		title.textContent = p.name;

		const desc = document.createElement('p');
		desc.textContent = p.description;

		const price = document.createElement('p');
		price.style = 'font-weight:bold;margin-top:8px;';
		price.textContent = `$ ${p.price.toFixed(2)}`;

		const btn = document.createElement('button');
		btn.className = 'product-btn';
		btn.textContent = 'Añadir al carrito';
		btn.style = 'margin-top:12px;';
		btn.addEventListener('click', () => {
    addToCart(p.id);
    showCartModal();
});


		card.appendChild(img);
		card.appendChild(title);
		card.appendChild(desc);
		card.appendChild(price);
		card.appendChild(btn);

		grid.appendChild(card);
	});
}

// Filtros y búsqueda
function populateCategories() {
	const sel = document.getElementById('categoryFilter');
	const cats = Array.from(new Set(products.map(p => p.category)));
	cats.forEach(c => {
		const opt = document.createElement('option');
		opt.value = c;
		opt.textContent = c;
		sel.appendChild(opt);
	});
}

function applyFilters() {
    const q = (document.getElementById('searchInput').value || '').trim().toLowerCase();
    const cat = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortSelect').value;

    let result = products.filter(p => {
        const matchesQ = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        const matchesCat = cat === 'all' ? true : p.category === cat;
        return matchesQ && matchesCat;
    });

    // Ordenamiento burbuja
    if (sort === 'price-asc' || sort === 'price-desc') {
        for (let i = 0; i < result.length - 1; i++) {
            for (let j = 0; j < result.length - i - 1; j++) {
                const condition = sort === 'price-asc'
                    ? result[j].price > result[j + 1].price
                    : result[j].price < result[j + 1].price;

                if (condition) {
                    // Intercambio
                    let temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
    }

    renderProducts(result);
}


function showToast(msg) {
	// Mensaje simple (no requiere libs)
	const t = document.createElement('div');
	t.textContent = msg;
	t.style = 'position:fixed;right:20px;bottom:20px;background:#38bcec;color:#fff;padding:12px 16px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.3);z-index:9999;';
	document.body.appendChild(t);
	setTimeout(()=> t.remove(), 1800);
}

// Inicialización
document.addEventListener('DOMContentLoaded', ()=>{
	populateCategories();
	renderProducts(products);
	updateCartCount();
  renderCartPage();

	document.getElementById('searchInput').addEventListener('input', () => applyFilters());
	document.getElementById('categoryFilter').addEventListener('change', () => applyFilters());
	document.getElementById('sortSelect').addEventListener('change', () => applyFilters());
	document.getElementById('cartBtn').addEventListener('click', () => showCartModal());
  });

// ====================== SISTEMA DE USUARIOS ======================
/* ===========================
   SISTEMA DE USUARIOS
=========================== */

class User {
    constructor(username, email, password, role = "user") {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("usuarios") || "[]").map(u => new User(u.username, u.email, u.password, u.role));
        this.ensureAdmin();
    }

    save() {
        localStorage.setItem("usuarios", JSON.stringify(this.users));
    }

    ensureAdmin() {
        if (!this.users.find(u => u.role === "admin")) {
            const admin = new User("Administrador", "admin@decorehome.com", "admin123", "admin");
            this.users.push(admin);
            this.save();
            console.log("Admin creado por defecto:", admin);
        }
    }

    addUser(username, email, password, role = "user") {
        if (this.users.find(u => u.email === email)) {
            return { ok: false, msg: "El correo ya está registrado" };
        }
        const newUser = new User(username, email, password, role);
        this.users.push(newUser);
        this.save();
        return { ok: true, msg: "Usuario registrado correctamente" };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user) return { ok: false, msg: "Correo o contraseña incorrectos" };
        localStorage.setItem("sesionActiva", JSON.stringify(user));
        return { ok: true, user };
    }

    logout() {
        localStorage.removeItem("sesionActiva");
    }

    deleteUser(email) {
        this.users = this.users.filter(u => u.email !== email);
        this.save();
    }

    editUser(email, newData) {
        const user = this.users.find(u => u.email === email);
        if (!user) return false;
        Object.assign(user, newData);
        this.save();
        return true;
    }

    getAllUsers() {
        return this.users;
    }

    sortUsersByUsername() {
        this.users.sort((a, b) => a.username.localeCompare(b.username));
    }
}

// Instanciamos el UserManager
const userManager = new UserManager();


// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const result = userManager.login(email, password);
    if (!result.ok) {
        alert(result.msg);
        return;
    }

    alert(`Bienvenido ${result.user.username}`);
    window.location.href = result.user.role === "admin" ? "admin.html" : "index.html";
});

// REGISTER
document.querySelector("form#registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const result = userManager.addUser(username, email, password);
    if (!result.ok) {
        alert(result.msg);
        return;
    }

    alert(result.msg);
    window.location.href = "login.html";
});
function renderUsers() {
    const tbody = document.querySelector("#usersTable tbody");
    tbody.innerHTML = "";
    userManager.getAllUsers().forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${u.username}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td>
                <button onclick="editUser('${u.email}')">Editar</button>
                <button onclick="deleteUser('${u.email}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteUser(email) {
    if (confirm("¿Eliminar usuario?")) {
        userManager.deleteUser(email);
        renderUsers();
    }
}

function editUser(email) {
    const user = userManager.getAllUsers().find(u => u.email === email);
    if (!user) return;

    const newUsername = prompt("Nuevo usuario:", user.username);
    if (newUsername) {
        userManager.editUser(email, { username: newUsername });
        renderUsers();
    }
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", renderUsers);
















/* === CUMPLIMIENTO DE REQUISITOS FALTANTES: MATRIZ, PROMPT, CONFIRM, SWITCH, WHILE === */

// Requisito 'l': ARREGLO BIDIMENSIONAL (Matriz) para determinar el impuesto por categoría
// La estructura es: [Categoría, Tasa Impuesto (Decimal), Código Interno]
// Usaremos la columna de la Tasa Impuesto para el SWITCH-CASE
const TASAS_IMPUESTOS = [
    ["Accesorios", 0.05, 1], // 5%
    ["Adhesivos", 0.10, 2],  // 10%
    ["Cintas", 0.15, 3],     // 15%
    ["Herramientas", 0.18, 4] // 18%
];


function validarProductosEnCarro() {
    const cart = getCart();

    if (!cart.length) {
        alert("El carrito está vacío. Agrega productos para continuar.");
        return;
    }

    // Requisito 'm': Uso de CONFIRM para inicio de proceso
    const continuar = confirm(`Tienes ${cart.length} artículos en el carrito. ¿Deseas iniciar la validación de impuestos?`);

    if (!continuar) {
        alert("Proceso cancelado.");
        return;
    }

    let totalImpuestos = 0;
    let seleccionValida = false;
    let codigoCategoria = 0;

    // Requisito 'm': Uso de PROMPT para entrada de datos
    // Uso de WHILE para asegurar que el usuario ingrese un código válido
    while (!seleccionValida) {
        const inputCodigo = prompt("Ingresa el CÓDIGO INTERNO de la categoría a validar:\n1=Accesorios, 2=Adhesivos, 3=Cintas, 4=Herramientas");

        // Convertir la entrada a número entero
        codigoCategoria = parseInt(inputCodigo);

        if (!isNaN(codigoCategoria) && codigoCategoria >= 1 && codigoCategoria <= TASAS_IMPUESTOS.length) {
            seleccionValida = true;
        } else {
            alert("Código de categoría inválido. Inténtalo de nuevo.");
        }
    }

    // Requisito 'm': Uso de SWITCH-CASE para aplicar la lógica
    // Usamos la tercera columna (Código Interno) del ARREGLO BIDIMENSIONAL para el switch
    let tasa = 0;
    let nombreCategoria = "";

    switch (codigoCategoria) {
        case TASAS_IMPUESTOS[0][2]: // 1
            tasa = TASAS_IMPUESTOS[0][1];
            nombreCategoria = TASAS_IMPUESTOS[0][0];
            break;
        case TASAS_IMPUESTOS[1][2]: // 2
            tasa = TASAS_IMPUESTOS[1][1];
            nombreCategoria = TASAS_IMPUESTOS[1][0];
            break;
        case TASAS_IMPUESTOS[2][2]: // 3
            tasa = TASAS_IMPUESTOS[2][1];
            nombreCategoria = TASAS_IMPUESTOS[2][0];
            break;
        case TASAS_IMPUESTOS[3][2]: // 4
            tasa = TASAS_IMPUESTOS[3][1];
            nombreCategoria = TASAS_IMPUESTOS[3][0];
            break;
        default:
            // Esto no debería ejecutarse gracias al 'while', pero es buena práctica
            alert("Error interno en la selección de categoría.");
            return;
    }

    // Calcular impuesto solo para productos de la categoría seleccionada
    const subtotalFiltrado = cart.reduce((suma, item) => {
        const p = products.find(x => x.id === item.id);
        if (p && p.category === nombreCategoria) {
            return suma + (p.price * item.qty);
        }
        return suma;
    }, 0);

    totalImpuestos = subtotalFiltrado * tasa;

    // Requisito 'm': Uso de ALERT como salida de datos
    alert(`
    Impuesto Calculado:
    Categoría Validada: ${nombreCategoria} (Tasa: ${tasa * 100}%)
    Subtotal de ${nombreCategoria}: $${subtotalFiltrado.toFixed(2)}
    Impuesto a Pagar: $${totalImpuestos.toFixed(2)}
    `);
}



// Función para renderizar el contenido del carrito en carrito.html
function renderCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;

    const cart = getCart();
    const productsInCart = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        if (p) return { ...p, qty: item.qty, subtotal: p.price * item.qty };
        return null;
    }).filter(item => item !== null);

    if (productsInCart.length === 0) {
        cartContainer.innerHTML = `
            <div class="service-card" style="text-align:center; padding: 40px;">
                <h3>Tu carrito está vacío 😔</h3>
                <p>¡Vuelve a la <a href="productos.html" style="color:#38bcec; font-weight:bold;">tienda</a> para agregar productos!</p>
            </div>
        `;
        return;
    }

    let subtotalGeneral = 0;
    let subtotalAdhesivos = 0;

    // Contenedor grid responsivo (usa todo el ancho)
    let html = `
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            width: 100%;
        ">
    `;

    productsInCart.forEach(p => {
        subtotalGeneral += p.subtotal;
        if(p.category === 'Adhesivos') subtotalAdhesivos += p.subtotal;

        html += `
            <div class="service-card" style="color:#fff; background: rgba(255,255,255,0.1); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <img src="${p.img}" alt="${p.name}" style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:12px;">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p style="font-weight:bold;">$${p.price.toFixed(2)}</p>
                <div style="display:flex; justify-content:center; gap:10px; align-items:center; margin-top:10px; flex-wrap: wrap;">
                    <input type="number" min="1" value="${p.qty}" 
                        onchange="updateQuantity('${p.id}', this.value)" 
                        style="width:60px; padding:5px; border-radius:5px;">
                    <button onclick="removeFromCart('${p.id}')" 
                        style="background-color:#36b3d4fd; color:#fff; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">
                        Eliminar
                    </button>
                </div>
                <p style="margin-top:10px; font-weight:bold;">Subtotal: $${p.subtotal.toFixed(2)}</p>
            </div>
        `;
    });

    html += `</div>`;

    // Calcular impuesto y total
    const tasaAdhesivos = TASAS_IMPUESTOS.find(t => t[0] === 'Adhesivos')?.[1] || 0.10;
    const impuesto = subtotalAdhesivos * tasaAdhesivos;
    const totalFinal = subtotalGeneral + impuesto;

    // Resumen de totales
    html += `
        <div class="service-card" style="
            margin-top:20px;
            background: rgba(0,0,0,0.6);
            color:#fff;
            padding:20px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            text-align:center;
        ">
            <p style="font-size:1.1em;">Subtotal: <strong>$${subtotalGeneral.toFixed(2)}</strong></p>
            <p style="font-size:1.1em; color:#36e4f4ff;">Impuesto (${(tasaAdhesivos*100).toFixed(0)}% Adhesivos): <strong>$${impuesto.toFixed(2)}</strong></p>
            <hr style="margin:10px 0; border-top:1px dashed #38bcec;">
            <h3>Total Final: <strong>$${totalFinal.toFixed(2)}</strong></h3>
            <button id="checkoutBtn" style="margin-top:10px; background:#007bff; color:#fff; border:none; padding:12px 20px; border-radius:8px; cursor:pointer; width:100%;">Finalizar Compra</button>
        </div>
    `;

    cartContainer.innerHTML = html;

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert(`Gracias por tu compra. Total a pagar: $${totalFinal.toFixed(2)}.`);
            clearCart();
        });
    }
}




// Actualiza la cantidad de un producto
function updateQuantity(productId, newQty) {
    let qty = parseInt(newQty);
    if (isNaN(qty) || qty < 1) {
        qty = 1; // Mínimo 1
    }

    const cart = getCart();
    const item = cart.find(i => i.id === productId);

    if (item) {
        item.qty = qty;
        saveCart(cart);
        renderCartPage(); // Volver a renderizar la tabla
        showToast('Cantidad actualizada.');
    }
}

// Elimina un producto del carrito
function removeFromCart(productId) {
    const cart = getCart();
    const newCart = cart.filter(i => i.id !== productId);

    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
        saveCart(newCart);
        renderCartPage(); // Volver a renderizar la tabla
        showToast('Producto eliminado del carrito.');
    }
}

// Vaciar carrito al finalizar la compra
function clearCart() {
    localStorage.removeItem('decore_cart');
    updateCartCount();
    renderCartPage();
    alert("¡Pedido realizado con éxito!");
}


// =======================
// Datos de prueba
// =======================

// =======================
// Renderizar tabla
// =======================
function renderTabla() {
  const tbody = document.getElementById("tabla-productos");
  tbody.innerHTML = "";

  productos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td><img src="${p.img}" width="50"></td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>${p.precio.toFixed(2)}</td>
      <td>${p.descripcion}</td>
      <td>
        <button class="btn-edit" data-id="${p.id}">Editar</button>
        <button class="btn-delete" data-id="${p.id}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// =======================
// Abrir / Cerrar Modal
// =======================
function abrirModal(producto) {
  document.getElementById("edit-id").value = producto.id;
  document.getElementById("edit-name").value = producto.nombre;
  document.getElementById("edit-category").value = producto.categoria;
  document.getElementById("edit-price").value = producto.precio;
  document.getElementById("edit-description").value = producto.descripcion;
  document.getElementById("edit-img").value = producto.img;

  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}

// =======================
// Guardar cambios
// =======================
function guardarCambios() {
  const id = parseInt(document.getElementById("edit-id").value);
  const producto = productos.find(p => p.id === id);

  producto.nombre = document.getElementById("edit-name").value;
  producto.categoria = document.getElementById("edit-category").value;
  producto.precio = parseFloat(document.getElementById("edit-price").value);
  producto.descripcion = document.getElementById("edit-description").value;
  producto.img = document.getElementById("edit-img").value;

  cerrarModal();
  renderTabla();
}

// =======================
// Eventos de tabla
// =======================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    const id = parseInt(e.target.dataset.id);
    const producto = productos.find(p => p.id === id);
    abrirModal(producto);
  }

  if (e.target.classList.contains("btn-delete")) {
    const id = parseInt(e.target.dataset.id);
    productos = productos.filter(p => p.id !== id);
    renderTabla();
  }
});

// =======================
// Inicializar
// =======================
renderTabla();


