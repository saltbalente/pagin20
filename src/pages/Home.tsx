import { useState } from 'react';
import { Star, Heart, Shield, Sparkles, Moon, Gem, Flame, Eye } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  const [formData, setFormData] = useState({ nombre: '', mensaje: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroTelefono = "12343859528";
    const textoMensaje = `Hola, soy ${formData.nombre} y me interesa: ${formData.mensaje}`;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoMensaje)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    const numeroTelefono = "12343859528";
    const textoMensaje = "Hola, me interesa una consulta espiritual gratuita";
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoMensaje)}`;
    window.open(url, '_blank');
  };

  const servicios = [
    {
      id: 1,
      nombre: "Amarres de Amor Poderosos",
      descripcion: "Rituales ancestrales de Guatemala y Catemaco para atraer y mantener el amor verdadero. Nuestros brujos especialistas utilizan técnicas milenarias para unir corazones destinados a estar juntos.",
      precio: "Consulta Gratuita",
      categoria: "amor",
      icono: Heart,
      keywords: "amarres de amor, hechizos de amor, magia para enamorar, rituales de amor, brujos de Guatemala"
    },
    {
      id: 2,
      nombre: "Limpias Espirituales Profundas",
      descripcion: "Eliminación completa de energías negativas, mal de ojo, envidias y bloqueos espirituales. Recupera tu paz interior y abre los caminos hacia la prosperidad y el amor.",
      precio: "$80 USD",
      categoria: "limpieza",
      icono: Sparkles,
      keywords: "limpias espirituales, quitar mal de ojo, eliminar energías negativas, curanderos, sanación espiritual"
    },
    {
      id: 3,
      nombre: "Lectura de Cartas del Tarot",
      descripcion: "Consultas precisas sobre tu futuro amoroso, laboral y personal. Nuestros videntes expertos revelan lo que el destino tiene preparado para ti con una exactitud sorprendente.",
      precio: "$50 USD",
      categoria: "adivinacion",
      icono: Eye,
      keywords: "lectura de tarot, videntes, consultas espirituales, predicciones, futuro amoroso"
    },
    {
      id: 4,
      nombre: "Reconquista de Pareja Garantizada",
      descripcion: "Rituales especializados para recuperar a tu ser amado. Si has perdido al amor de tu vida, nuestros hechizos de reconquista han reunido miles de parejas en toda Latinoamérica.",
      precio: "$200 USD",
      categoria: "amor",
      icono: Heart,
      keywords: "reconquistar pareja, recuperar ex, volver con mi ex, hechizos para regresar, magia de amor"
    },
    {
      id: 5,
      nombre: "Consulta con Brujo Mayor",
      descripcion: "Sesión personalizada con nuestro maestro brujo principal de Catemaco. Más de 40 años de experiencia en magia blanca y negra para resolver casos imposibles.",
      precio: "$300 USD",
      categoria: "consulta",
      icono: Moon,
      keywords: "brujo mayor, maestro brujo, Catemaco, consulta especializada, magia poderosa"
    },
    {
      id: 6,
      nombre: "Hechizos de Protección",
      descripcion: "Rituales ancestrales para protegerte de enemigos, envidias, brujería negra y malas energías. Crea un escudo espiritual impenetrable alrededor de ti y tu familia.",
      precio: "$120 USD",
      categoria: "proteccion",
      icono: Shield,
      keywords: "protección espiritual, contra brujería, proteger de enemigos, escudo espiritual, amuletos"
    },
    {
      id: 7,
      nombre: "Magia para Enamorar",
      descripcion: "Hechizos poderosos para despertar el amor en la persona que deseas. Rituales de atracción que han funcionado durante generaciones en las tradiciones místicas de México.",
      precio: "$180 USD",
      categoria: "amor",
      icono: Flame,
      keywords: "hechizos para enamorar, atraer amor, magia de atracción, conquistar, seducción espiritual"
    },
    {
      id: 8,
      nombre: "Curación Espiritual Completa",
      descripcion: "Sanación energética integral para cuerpo, mente y espíritu. Libérate de traumas, depresión, ansiedad y enfermedades que tienen origen espiritual.",
      precio: "$100 USD",
      categoria: "sanacion",
      icono: Gem,
      keywords: "curación espiritual, sanación energética, sanar traumas, medicina alternativa, curanderos"
    },
    {
      id: 9,
      nombre: "Consulta Amorosa Gratuita",
      descripcion: "Primera consulta completamente gratis para evaluar tu situación amorosa. Nuestros especialistas analizarán tu caso y te dirán exactamente qué ritual necesitas.",
      precio: "GRATIS",
      categoria: "consulta",
      icono: Heart,
      keywords: "consulta gratis, consulta amorosa, evaluación gratuita, primera consulta, sin costo"
    },
    {
      id: 10,
      nombre: "Rituales de Abundancia",
      descripcion: "Atraer prosperidad, dinero y éxito en todos los aspectos de tu vida. Rituales de abundancia que abren los caminos hacia la riqueza y el bienestar económico.",
      precio: "$160 USD",
      categoria: "abundancia",
      icono: Sparkles,
      keywords: "rituales de abundancia, atraer dinero, prosperidad, éxito económico, riqueza espiritual"
    }
  ];

  const testimonios = [
    {
      id: 1,
      nombre: "María Elena Rodríguez",
      ubicacion: "Guatemala City, Guatemala",
      testimonio: "Después de 3 meses separada de mi esposo, el Brujo Mayor me ayudó con un amarre de amor. En solo 2 semanas él regresó pidiendo perdón. ¡Increíble! No podía creer lo rápido que funcionó. Ahora estamos más enamorados que nunca.",
      calificacion: 5,
      servicio: "Amarres de Amor",
      imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=latina%20woman%20smiling%20happy%20portrait%20professional%20photo&image_size=square"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      ubicacion: "Veracruz, México",
      testimonio: "Las limpias espirituales cambiaron mi vida completamente. Tenía muy mala suerte en todo y ahora todo fluye perfectamente. Mi negocio prospera y encontré el amor. Muy recomendado, son verdaderos maestros.",
      calificacion: 5,
      servicio: "Limpias Espirituales",
      imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=latino%20man%20businessman%20successful%20smiling%20portrait&image_size=square"
    },
    {
      id: 3,
      nombre: "Ana Sofía López",
      ubicacion: "San Salvador, El Salvador",
      testimonio: "La lectura de cartas fue exacta. Todo lo que me dijeron se cumplió al pie de la letra. Predijeron que conocería a mi esposo en diciembre y así fue. Ahora consulto regularmente para todas mis decisiones importantes.",
      calificacion: 5,
      servicio: "Lectura de Tarot",
      imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=latina%20woman%20elegant%20happy%20wedding%20dress%20portrait&image_size=square"
    },
    {
      id: 4,
      nombre: "Roberto Castillo",
      ubicacion: "Tegucigalpa, Honduras",
      testimonio: "Pensé que había perdido a mi novia para siempre, pero con los rituales de reconquista logré recuperarla. Estamos más unidos que nunca y ya planeamos casarnos. El amor verdadero siempre encuentra su camino.",
      calificacion: 5,
      servicio: "Reconquista de Pareja",
      imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=latino%20couple%20embracing%20happy%20love%20romantic%20portrait&image_size=square"
    },
    {
      id: 5,
      nombre: "Lucía Morales",
      ubicacion: "Managua, Nicaragua",
      testimonio: "Los hechizos de protección me salvaron de personas que me querían hacer daño. Siento una paz y seguridad increíbles. Mis enemigos ya no pueden afectarme y mi familia está protegida. Gracias por devolverme la tranquilidad.",
      calificacion: 5,
      servicio: "Hechizos de Protección",
      imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=latina%20woman%20peaceful%20serene%20protected%20spiritual%20portrait&image_size=square"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mystic text-mystic-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-mystic-black/90 backdrop-blur-sm z-50 border-b border-mystic-gold/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-display font-bold text-gradient-gold">
            ✨ Brujos Ancestrales
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#servicios" className="hover:text-mystic-gold transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-mystic-gold transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-mystic-gold transition-colors">Contacto</a>
          </div>
          <a id="Conversion" href="https://api.whatsapp.com/send/?phone=12343859528&text=Hola%2C+me+interesa+una+consulta+espiritual+gratuita&type=phone_number&app_absent=0" className="btn-gold-fantasy text-mystic-black px-6 py-2 rounded-full font-semibold transition-all inline-block text-center">
            Consulta Gratis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 via-transparent to-mystic-gold/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-gold animate-fade-in">
              Brujos Ancestrales de Guatemala y Catemaco
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-mystic-white/90 animate-slide-up">
              Amarres de amor, limpias espirituales, reconquista de pareja y consultas esotéricas. 
              <span className="text-mystic-gold font-semibold">Paga solo cuando obtengas resultados.</span>
            </p>
            
            {/* Galería de imágenes espirituales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative group">
                <OptimizedImage
                  src="/WhatsApp-Image-2025-02-25-at-11.33.58-scaled.jpeg"
                  alt="Ritual espiritual ancestral"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 w-full"
                />
              </div>
              <div className="relative group">
                <OptimizedImage
                  src="/WhatsApp-Image-2025-02-25-at-11.34.03.jpeg"
                  alt="Ceremonia mística tradicional"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 w-full"
                />
              </div>
              <div className="relative group">
                <OptimizedImage
                  src="/brujo.jpeg"
                  alt="Maestro brujo ancestral"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a id="Conversion" href="https://api.whatsapp.com/send/?phone=12343859528&text=Hola%2C+me+interesa+una+consulta+espiritual+gratuita&type=phone_number&app_absent=0" className="btn-gold-fantasy text-mystic-black px-8 py-4 rounded-full text-lg font-semibold transition-all inline-block text-center">
              ✨ Consulta Gratuita Ahora
            </a>
              <a href="#servicios" className="border-2 border-mystic-gold text-mystic-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-mystic-gold hover:text-mystic-black transition-all">
                Ver Servicios Espirituales
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/20">
                <div className="text-3xl mb-2">🌟</div>
                <h3 className="font-semibold text-mystic-gold mb-2">Más de 15,000 casos exitosos</h3>
                <p className="text-sm text-mystic-white/80">Brujos especializados con décadas de experiencia</p>
              </div>
              <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/20">
                <div className="text-3xl mb-2">💝</div>
                <h3 className="font-semibold text-mystic-gold mb-2">Pago por Resultados</h3>
                <p className="text-sm text-mystic-white/80">Solo pagas cuando veas los resultados que buscas</p>
              </div>
              <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/20">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-mystic-gold mb-2">100% Confidencial</h3>
                <p className="text-sm text-mystic-white/80">Tu privacidad y discreción están garantizadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portada Gallery Section */}
      <section className="py-16 px-4 bg-mystic-dark/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Nuestros Servicios Esotéricos
            </h2>
            <p className="text-lg text-mystic-white/80 max-w-3xl mx-auto">
              Descubre el poder de nuestros rituales y servicios especializados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-mystic-black/50 p-4 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-300 hover:scale-105">
                <OptimizedImage
                  src="/Portada 2.avif"
                  alt="Servicios Esotéricos - Portada 2"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-mystic-gold mb-2">Rituales de Amor</h3>
                  <p className="text-sm text-mystic-white/80">Amarres y reconquista de pareja</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-mystic-black/50 p-4 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-300 hover:scale-105">
                <OptimizedImage
                  src="/Portada 3.avif"
                  alt="Servicios Esotéricos - Portada 3"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-mystic-gold mb-2">Limpias Espirituales</h3>
                  <p className="text-sm text-mystic-white/80">Purificación y protección</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-mystic-black/50 p-4 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-300 hover:scale-105">
                <OptimizedImage
                  src="/Portada 4.avif"
                  alt="Servicios Esotéricos - Portada 4"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-mystic-gold mb-2">Consultas Esotéricas</h3>
                  <p className="text-sm text-mystic-white/80">Orientación y predicciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 px-4 bg-mystic-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Testimonio en Video de Nuestros Clientes
            </h2>
            <p className="text-lg text-mystic-white/80 max-w-3xl mx-auto">
              Escucha directamente de nuestros clientes cómo nuestros rituales han transformado sus vidas.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-mystic-black/50 p-6 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all video-container">
              <video 
                className="w-full rounded-lg" 
                controls 
                preload="none" 
                poster="/videos/document_5008170126151778915.mp4.jpg"
              >
                <source src="/videos/document_5008170126151778915.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
              <div className="mt-4">
                <h4 className="font-semibold text-mystic-gold">Testimonio de María Fernanda</h4>
                <p className="text-sm text-mystic-white/70">Recuperó a su pareja después de 6 meses de separación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altares del Maestro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Altares Sagrados del Maestro
            </h2>
            <p className="text-lg text-mystic-white/80 max-w-3xl mx-auto">
              Conoce los poderosos altares donde nuestro Maestro realiza los rituales más efectivos para resolver tus problemas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-mystic-black/50 p-6 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all video-container">
              <video 
                className="w-full rounded-lg" 
                controls 
                preload="none" 
                poster="/videos/document_5015315087716516423.mp4.jpg"
              >
                <source src="/videos/document_5015315087716516423.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
              <div className="mt-4">
                <h4 className="font-semibold text-mystic-gold">Altar de Amor y Reconciliación</h4>
                <p className="text-sm text-mystic-white/70">Ritual para unir corazones y recuperar el amor perdido</p>
              </div>
            </div>
            <div className="bg-mystic-black/50 p-6 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all video-container">
              <video 
                className="w-full rounded-lg" 
                controls 
                preload="none" 
                poster="/videos/document_5015315087716516425.mp4.jpg"
              >
                <source src="/videos/document_5015315087716516425.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
              <div className="mt-4">
                <h4 className="font-semibold text-mystic-gold">Altar de Protección y Abundancia</h4>
                <p className="text-sm text-mystic-white/70">Ritual para alejar energías negativas y atraer prosperidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-mystic-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Servicios Espirituales y Esotéricos
            </h2>
            <p className="text-lg text-mystic-white/80 max-w-3xl mx-auto">
              Nuestros brujos ancestrales de Guatemala y Catemaco ofrecen los rituales más poderosos para resolver 
              problemas de amor, protección espiritual, abundancia y sanación. Cada servicio está respaldado por 
              siglos de tradición mística y miles de casos exitosos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icono;
              const serviceImages = {
                1: 'Red candles, rose petals, mystical love ritual setup, romantic spiritual ceremony, warm candlelight, photorealistic',
                2: 'Sage burning, white candles, spiritual cleansing ritual, peaceful meditation space, healing energy, photorealistic',
                3: 'Tarot cards spread on mystical table, crystal ball, candles, fortune telling setup, magical atmosphere, photorealistic',
                4: 'Return love ritual, pink candles, heart-shaped crystals, romantic reunion ceremony, soft lighting, photorealistic',
                5: 'Spiritual advisor in meditation, peaceful consultation room, crystals and candles, serene atmosphere, photorealistic',
                6: 'Protection amulets, white candles, salt circle, spiritual shield ritual, sacred symbols, photorealistic',
                7: 'Love attraction ritual, pink and red candles, romantic spell setup, enchanting atmosphere, photorealistic',
                8: 'Colorful chakra stones, meditation pose, energy healing session, spiritual balance, rainbow light, photorealistic',
                9: 'Free consultation setup, welcoming spiritual space, crystals and candles, peaceful atmosphere, photorealistic',
                10: 'Gold coins, green candles, abundance altar, prosperity ritual setup, wealth symbols, photorealistic'
              };
              
              return (
                <div key={servicio.id} className="bg-mystic-black/50 p-6 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all hover:glow-purple group">
                  <div className="mb-4">
                    <OptimizedImage
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(serviceImages[servicio.id as keyof typeof serviceImages] || 'Mystical spiritual service, candles and crystals, photorealistic')}&image_size=landscape_4_3`}
                      alt={`${servicio.nombre} - Servicio esotérico profesional`}
                      className="w-full h-48 rounded-lg mb-4"
                      width={400}
                      height={240}
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-mystic-gold mr-3" />
                    <h3 className="text-xl font-semibold text-mystic-gold group-hover:text-gradient-gold">
                      {servicio.nombre}
                    </h3>
                  </div>
                  <p className="text-mystic-white/90 mb-4 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-mystic-gold">
                      {servicio.precio}
                    </span>
                    <a id="Conversion" href="https://api.whatsapp.com/send/?phone=12343859528&text=Hola%2C+me+interesa+una+consulta+espiritual+gratuita&type=phone_number&app_absent=0" className="btn-gold-fantasy text-mystic-black px-4 py-2 rounded-full text-sm font-semibold transition-all inline-block text-center">
                  Consultar
                    </a>
                  </div>
                  <div className="mt-3 text-xs text-mystic-white/60">
                    Keywords: {servicio.keywords}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Testimonios Reales de Nuestros Clientes
            </h2>
            <p className="text-lg text-mystic-white/80 max-w-3xl mx-auto">
              Miles de personas han transformado sus vidas con nuestros rituales ancestrales. 
              Lee las experiencias reales de quienes han encontrado el amor, la protección y la prosperidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src={testimonio.imagen}
                    alt={`${testimonio.nombre} - Cliente satisfecho`}
                    className="rounded-full mr-4 border-2 border-mystic-gold"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4 className="font-semibold text-mystic-gold">{testimonio.nombre}</h4>
                    <p className="text-sm text-mystic-white/70">{testimonio.ubicacion}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonio.calificacion)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-mystic-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-mystic-white/90 italic mb-3 leading-relaxed">
                  "{testimonio.testimonio}"
                </p>
                <p className="text-sm text-mystic-gold font-semibold">
                  Servicio: {testimonio.servicio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section id="contacto" className="py-16 px-4 bg-mystic-dark/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-gold">
              Consulta Gratuita por WhatsApp
            </h2>
            <p className="text-lg text-mystic-white/80 mb-8">
              Recibe tu primera consulta completamente gratis. Nuestros brujos especialistas evaluarán tu caso 
              y te dirán exactamente qué ritual necesitas para resolver tu situación.
            </p>
            
            <form onSubmit={handleWhatsAppSubmit} className="bg-mystic-black/50 p-8 rounded-lg border border-mystic-gold/20 glow-purple">
              <div className="mb-6">
                <label htmlFor="nombre" className="block text-mystic-gold font-semibold mb-2 text-left">
                  Tu Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 bg-mystic-dark border border-mystic-gold/30 rounded-lg text-mystic-white focus:border-mystic-gold focus:outline-none transition-colors"
                  placeholder="Escribe tu nombre completo"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-mystic-gold font-semibold mb-2 text-left">
                  Cuéntanos tu Situación
                </label>
                <textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-mystic-dark border border-mystic-gold/30 rounded-lg text-mystic-white focus:border-mystic-gold focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu problema amoroso, espiritual o de protección. Mientras más detalles nos des, mejor podremos ayudarte..."
                  required
                />
              </div>
              
              <a
                 id="Conversion"
                 href="https://api.whatsapp.com/send/?phone=12343859528&text=Hola%2C+me+interesa+una+consulta+espiritual+gratuita&type=phone_number&app_absent=0"
                 className="w-full btn-gold-fantasy text-mystic-black px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
               >
                <span>📱</span>
                Enviar Consulta por WhatsApp
              </a>
              
              <p className="text-sm text-mystic-white/60 mt-4">
                Al enviar este formulario serás redirigido a WhatsApp para continuar la conversación de forma privada y segura.
              </p>
            </form>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-semibold text-mystic-gold mb-2">Respuesta Inmediata</h3>
                <p className="text-sm text-mystic-white/80">Te respondemos en menos de 5 minutos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔮</div>
                <h3 className="font-semibold text-mystic-gold mb-2">Evaluación Gratuita</h3>
                <p className="text-sm text-mystic-white/80">Primera consulta sin ningún costo</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💯</div>
                <h3 className="font-semibold text-mystic-gold mb-2">Resultados Garantizados</h3>
                <p className="text-sm text-mystic-white/80">Paga solo cuando veas los resultados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional SEO Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-gradient-gold text-center">
              ¿Por Qué Elegir Nuestros Servicios Esotéricos?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-mystic-gold mb-4">Tradición Ancestral Auténtica</h3>
                <p className="text-mystic-white/90 mb-4">
                  Nuestros brujos y curanderos provienen de las tradiciones más poderosas de Guatemala y Catemaco, México. 
                  Con más de 40 años de experiencia en magia blanca y roja, hemos perfeccionado los rituales ancestrales 
                  que han funcionado durante siglos para resolver problemas de amor, dinero, salud y protección espiritual.
                </p>
                <p className="text-mystic-white/90">
                  Los amarres de amor que realizamos utilizan elementos sagrados como velas rojas, fotografías, cabellos, 
                  hierbas místicas y oraciones poderosas que despiertan las fuerzas del universo para unir a las parejas 
                  destinadas a estar juntas. Cada ritual es personalizado según tu situación específica.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-mystic-gold mb-4">Resultados Comprobados</h3>
                <p className="text-mystic-white/90 mb-4">
                  Más de 15,000 casos exitosos nos respaldan. Hemos ayudado a personas de toda Latinoamérica a:
                </p>
                <ul className="text-mystic-white/90 space-y-2">
                  <li>• Recuperar parejas perdidas con amarres de amor efectivos</li>
                  <li>• Eliminar energías negativas y mal de ojo con limpias espirituales</li>
                  <li>• Protegerse de enemigos y brujerías con hechizos de protección</li>
                  <li>• Atraer abundancia y prosperidad económica</li>
                  <li>• Sanar enfermedades espirituales y traumas emocionales</li>
                  <li>• Encontrar el amor verdadero y la felicidad</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-mystic-dark/50 p-8 rounded-lg border border-mystic-gold/20 mb-8">
              <h3 className="text-2xl font-semibold text-mystic-gold mb-4 text-center">Especialidades de Nuestros Brujos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-2">💕</div>
                  <h4 className="font-semibold text-mystic-gold">Amarres de Amor</h4>
                  <p className="text-sm text-mystic-white/80">Rituales para unir corazones</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌟</div>
                  <h4 className="font-semibold text-mystic-gold">Limpias Espirituales</h4>
                  <p className="text-sm text-mystic-white/80">Eliminación de energías negativas</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔮</div>
                  <h4 className="font-semibold text-mystic-gold">Videncia y Tarot</h4>
                  <p className="text-sm text-mystic-white/80">Predicciones exactas del futuro</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-mystic-gold">Protección Espiritual</h4>
                  <p className="text-sm text-mystic-white/80">Defensa contra enemigos</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-mystic-gold mb-4">Palabras Clave de Nuestros Servicios</h3>
              <p className="text-mystic-white/80 leading-relaxed">
                Amarres de amor Guatemala, brujos Catemaco México, hechizos para enamorar, reconquistar pareja, 
                limpias espirituales, quitar mal de ojo, videntes y tarotistas, consultas esotéricas, magia blanca, 
                rituales de amor, curanderos tradicionales, sanación espiritual, protección contra enemigos, 
                abundancia y prosperidad, consultas gratuitas, pago por resultados, brujos auténticos, 
                magia para el amor, hechizos efectivos, rituales ancestrales, espiritismo, santería, 
                trabajos espirituales, amarres rojos, endulzamientos, dominios amorosos, regreso de pareja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mystic-black border-t border-mystic-gold/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-display font-bold text-gradient-gold mb-4">
                ✨ Brujos Ancestrales
              </div>
              <p className="text-mystic-white/80 mb-4">
                Servicios esotéricos auténticos desde Guatemala y Catemaco. 
                Más de 40 años de experiencia en magia ancestral.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl">📱</span>
                <span className="text-2xl">💬</span>
                <span className="text-2xl">📧</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-mystic-gold mb-4">Servicios Principales</h4>
              <ul className="space-y-2 text-mystic-white/80">
                <li>Amarres de Amor</li>
                <li>Limpias Espirituales</li>
                <li>Reconquista de Pareja</li>
                <li>Lectura de Tarot</li>
                <li>Protección Espiritual</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-mystic-gold mb-4">Información</h4>
              <ul className="space-y-2 text-mystic-white/80">
                <li>Consulta Gratuita</li>
                <li>Pago por Resultados</li>
                <li>100% Confidencial</li>
                <li>Atención 24/7</li>
                <li>Casos de Éxito</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-mystic-gold mb-4">Contacto</h4>
              <div className="space-y-2 text-mystic-white/80">
                <p>📱 WhatsApp: +502 1234-5678</p>
                <p>🕐 Horario: 24 horas</p>
                <p>🌍 Cobertura: Toda Latinoamérica</p>
                <p>💬 Respuesta inmediata</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-mystic-gold/20 mt-8 pt-8 text-center">
            <p className="text-mystic-white/60">
              © 2024 Brujos Ancestrales. Todos los derechos reservados. 
              Servicios esotéricos para mayores de 18 años. Resultados pueden variar según cada caso.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Botón flotante de WhatsApp para móviles */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <img 
            src="/whatsapp-icon.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
}