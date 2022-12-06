//! Hacemos una exportacion "nombrada" por lo que tenemos que importarlo con corchetes
//Simulamos que la misma viene de una base de datos
//Cada objeto representa a un producto  los cuales se encuentran enlistado en un array

export const ProductsData = [
  {
    id: 1,
    categoryId: 2,
    title: "Mouse Logitech G903 HERO LIGHTSPEED Inalambrico",
    stock: 5,
    price: 21500,
    priceList: 26875,
    warranty: "180 días",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto1_gdkrgo.png",
    description:
      "El mouse para juegos inalámbrico Logitech G903 cuenta con los últimos sensores ópticos y tecnología Ligthspeed para una respuesta de 1 ms. Sistema de carga Powerplay compatible.",
  },
  {
    id: 2,
    categoryId: 1,
    title: "Memoria Ram Corsair Vengeance Rgb Pro Black 8gb 3200 Mhz Ddr4",
    stock: 8,
    price: 15900,
    priceList: 19875,
    warranty: "3 años",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359477/Desktop%20Generation/resized/producto2_vfejq6.png",
    description:
      "La memoria con overclocking DDR4 CORSAIR VENGEANCE RGB PRO Series ilumina el PC con un efecto hipnótico gracias a la iluminación RGB dinámica multizona, además de ofrecer las mejores características de las DDR4 en cuanto a rendimiento.",
  },
  {
    id: 3,
    categoryId: 1,
    title: "Placa de video  ASUS NVIDIA GeForce RTX 3060 TI DUAL OC O8G",
    stock: 6,
    price: 176000,
    priceList: 220000,
    warranty: "3 años",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto3_nontwc.png",
    description:
      "Provista de la experiencia NVIDIA Ampere en estado puro, la gráfica ASUS Dual GeForce RTX 3060 TI ofrece una combinación única de simplicidad y rendimiento. Equipada con tecnologías de refrigeración presentes en las gráficas de alta gama, la Dual prioriza el rendimiento por encima de la estética y es una opción ideal para montar equipos bien equilibrados.",
  },
  {
    id: 4,
    categoryId: 2,
    title: "Mouse pad Marvo Gaming G41 Extended",
    stock: 16,
    price: 1700,
    priceList: 2125,
    warranty: "30 días",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359046/Desktop%20Generation/resized/producto4_qnxrqn.png",
    description:
      "Idealmente diseñado para configuraciones de mouse con baja sensibilidad. Este pad fue optimizado para mejorar la precisión de todos los sensores en el mercado. El control y el comfort fueron enaltecidos con materiales de superior calidad. La durabilidad del mismo fue mejorada al utilizar nuevas tecnologías en la fabricación del pad.",
  },
  {
    id: 5,
    categoryId: 2,
    title: "Auricular Corsair HS80 7.1 RGB Carbon",
    stock: 8,
    price: 36300,
    priceList: 45375,
    warranty: "1 año",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto5_ggml0x.png",
    description:
      "Los auriculares para juegos CORSAIR HS80 RGB WIRELESS se conectan mediante la tecnología hiperrápida SLIPSTREAM WIRELESS y ofrecen un sonido increíblemente detallado a través de los transductores de audio de neodimio de 50 mm, con ajuste personalizado y Dolby Atmos inmersivo.",
  },
  {
    id: 6,
    categoryId: 2,
    title:
      "Auriculares gaming Cloud Orbit S con audio 3D y seguimiento de cabeza",
    stock: 7,
    price: 45999,
    priceList: 57499,
    warranty: "1 año",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto6_sxd0ph.png",
    description:
      "HyperX Cloud Orbit S construye un mundo de sonidos a su alrededor con los transductores magnéticos planos de Audeze™, el seguimiento de cabeza de Waves Nx™ y la tecnología de audio 3D. Obtenga una auténtica inmersión, ya que la tecnología de seguimiento registra la posición de su cabeza hasta casi 1000 veces por segundo para estabilizar el entorno sonoro, ubicándole en el centro de su propia atmósfera auditiva tridimensional.",
  },
  {
    id: 7,
    categoryId: 2,
    title: "Teclado gamer HyperX Alloy FPS Pro QWERTY Cherry MX Blue inglés US",
    stock: 23,
    price: 40300,
    priceList: 50375,
    warranty: "180 días",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto7_mdim2q.png",
    description:
      "Teclado mecánico para videojuegos HyperX Alloy FPS Pro El HyperX™ Alloy FPS Pro es para el jugador FPS que desea un teclado sin tenkey (TKL) fiable y preciso que le permita aumentar su espacio del escritorio. Este teclado de 87 teclas proporciona todo lo que un jugador profesional necesita, pero sin el teclado numérico. El Alloy FPS Pro está disponible con teclas CHERRY® MX azules o rojas1 fiables y con excelente capacidad de respuesta, y su sólida estructura de acero garantiza que dispondrás de una plataforma estable durante las partes más importantes de los juegos. El diseño ultramínimo y el cable extraíble hacen que el teclado sea extremadamente portátil, pero está repleto de funciones: modo de juego, 100% anti-ghosting, N-key rollover y los efectos dinámicos y de iluminación de color rojo de HyperX para destacar el estilo de tu sistema.",
  },
  {
    id: 8,
    categoryId: 3,
    title:
      "Pc Gamer Armada Completa Amd Ryzen 5 5600g 8gb 240gb Ssd + RTX 2060 6GB",
    stock: 5,
    price: 320000,
    priceList: 400000,
    warranty: "3 años",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670245176/Desktop%20Generation/producto8_zhqfsv.webp",
    description:
      "Los componentes se cambian automaticamente segun stock disponible, la fecha de este cambio se indica arriba, cualquier duda consulte, las preguntas viejas podrian no corresponder a los componentes actuales. Esta pc NO INCLUYE monitor - mouse - teclado.",
  },
  {
    id: 9,
    categoryId: 4,
    title: "Pasta Térmica Noctua Nt-h1 3.5g",
    stock: 23,
    price: 4400,
    priceList: 5500,
    warranty: "30 días",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359045/Desktop%20Generation/resized/producto9_ha17sh.png",
    description:
      "El NT-H1 de Noctua es un famoso compuesto térmico híbrido que ha recibido más de 150 galardones y recomendaciones de sitios web y revistas internacionales especializadas. Gracias a su excelente rendimiento, su facilidad de uso y magnífica estabilidad prolongada, se ha consolidado como uno de los favoritos para los overclockers y aficionados del todo el mundo. Ya sea refrigeración mediante agua o aire, aplicaciones de CPU o GPU, sistemas de overcloking o silenciosos: El NT-H1 es una pasta excepcional con la que se garantizan unos resultados óptimos.",
  },
  {
    id: 10,
    categoryId: 2,
    title: "Webcam streaming Hitman GW800 - Redragon",
    stock: 14,
    price: 10490,
    priceList: 13115,
    warranty: "180 días",
    thumbnail:
      "https://res.cloudinary.com/drsheqkfv/image/upload/v1670359724/Desktop%20Generation/resized/producto10_utq9sl.png",
    description:
      "La Hitman es una webcam diseñada específicamente para el streaming, con características que se adaptan a las necesidades precisas de creadores de contenido e influencers. Es capaz de transmitir en vivo en Full HD 1080p a 30 fps, y sus sistemas de AF y AE facilitan mucho el trabajo en transmisiones de una sola persona. Cuenta además con captación de audio estéreo y está provista de un brazo articulado con movimiento 360°.",
  },
];
