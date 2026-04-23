import { useState, useEffect, FormEvent } from 'react';
import { 
  BarChart3, 
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Mail, 
  Share2, 
  Bot,
  MessageSquare,
  CalendarCheck,
  FileText,
  ShieldCheck,
  PhoneCall,
  PlayCircle,
  Phone,
  Clock,
  ThumbsUp,
  Building2,
  Users,
  Video,
  Zap,
  Volume2,
  VolumeX
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BrandLogo = ({ size = "h-8", showText = true }: { size?: string, showText?: boolean }) => {
  const [error, setError] = useState(false);

  return (
    <a href="https://www.nodoxai.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      {!error ? (
        <img 
          src="/logo-nodox.png" 
          alt="Nodox AI Logo" 
          className={`${size} w-auto block object-contain brightness-110`}
          style={{ imageRendering: 'crisp-edges', WebkitImageRendering: 'optimize-contrast' }}
          onError={() => setError(true)}
        />
      ) : (
        <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <Bot className="size-5 text-primary" />
        </div>
      )}
      {showText && <span className="text-xl md:text-2xl font-bold tracking-tight text-white">Nodox AI</span>}
    </a>
  );
};

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Funciones', 'Comparativa', 'Solución', 'CRM', 'FAQ'];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <BrandLogo />
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onContactClick}
            className="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Diagnóstico Inicial
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const options = [
    'gestiona tus llamadas',
    'coordina tu calendario',
    'responde preguntas rutinarias',
    'envía información por WhatsApp',
    'opera los 365 días del año'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % options.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [options.length]);

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 text-center flex flex-col items-center">
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Nodox-Voice Notarías
        </motion.div>

        <div className="h-[350px] md:h-[450px] flex flex-col items-center justify-center overflow-visible">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-white px-4"
          >
            Impulsa tu Notaría con <br className="hidden md:block" /> Nodox-Voice, la IA que <br/>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="gradient-text inline-block mt-4 pb-2"
              >
                {options[index]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light"
        >
          El asistente virtual definitivo que reduce un 60% las llamadas operativas y brinda una experiencia premium a tus clientes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <button 
            onClick={onContactClick}
            className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/25 active:scale-95"
          >
            Solicita tu Diagnóstico
          </button>
        </motion.div>

        {/* Video Player - Adaptive Aspect Ratio */}
        <div 
          className="mx-auto mt-16 rounded-3xl relative overflow-hidden shadow-2xl shadow-primary/20 group cursor-pointer w-fit min-w-[320px] md:min-w-[700px] min-h-[200px] md:min-h-[400px] bg-slate-900/40 border border-white/10"
          onClick={() => setIsMuted(prev => !prev)}
        >
          <video 
            autoPlay 
            loop 
            muted={isMuted}
            playsInline 
            className="h-auto block max-w-full max-h-[70vh] md:max-h-[650px] mx-auto"
          >
            <source src="/demo_web.mp4" type="video/mp4" />
            <source src="/demo.mov" type="video/quicktime" />
            Tu navegador no soporta videos.
          </video>
          
          {/* Overlay to encourage click for sound */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${!isMuted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
             <div className="bg-primary/20 backdrop-blur-xl p-6 rounded-full border border-primary/40 animate-pulse">
                <img src="/logo-nodox.png" alt="Nodox" className="size-14 object-contain brightness-110" />
             </div>
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white shadow-xl">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {isMuted ? 'Hacer clic para activar audio' : 'Audio Activo'}
            </span>
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-primary" />}
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section id="comparativa" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-lg md:text-xl mb-4">Análisis</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Atención Tradicional vs Agente IA</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tradicional */}
          <div className="glass-card p-10 rounded-3xl border-red-500/20 bg-red-950/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-500/20 rounded-xl text-red-400"><Users size={28} /></div>
              <h4 className="text-2xl font-bold text-white">Atención Humana Tradicional</h4>
            </div>
            <ul className="space-y-6">
              {[
                'Líneas ocupadas y clientes en espera constante.',
                'Atención limitada a horarios de oficina (9 a 6).',
                'Personal calificado saturado repitiendo "Los requisitos son...".',
                'Pérdida de llamadas fuera de horario o en días festivos.',
                'Errores manuales al agendar en el calendario.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <X className="text-red-500 mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IA */}
          <div className="glass-card p-10 rounded-3xl border-primary/30 bg-primary/5 shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl text-primary"><Bot size={28} /></div>
              <h4 className="text-2xl font-bold text-white">Nodox-Voice</h4>
            </div>
            <ul className="space-y-6">
              {[
                'Atiende cientos de llamadas simultáneas sin tiempos de espera.',
                'Disponible 24/7, los 365 días del año.',
                'Libera a tu personal para que se enfoque en lo importante, no para que contesten dudas básicas.',
                'Captura leads y agenda citas a cualquier hora.',
                'Sincronización perfecta y sin errores con el CRM y Calendario.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Contesta llamadas 24/7',
      desc: 'Nodox-Voice atiende múltiples llamadas simultáneamente con una voz natural, resolviendo dudas sin hacer esperar a tus clientes.',
      icon: PhoneCall
    },
    {
      title: 'WhatsApp Automatizado',
      desc: 'Respuestas instantáneas, envío de requisitos, ubicación y cotizaciones predefinidas directamente al WhatsApp del cliente.',
      icon: MessageSquare
    },
    {
      title: 'Citas Físicas y Virtuales',
      desc: 'Se integra con tu calendario para agendar citas presenciales o enviar enlaces de videollamada automáticamente.',
      icon: Video
    },
    {
      title: 'Seguimiento de Trámites',
      desc: 'Informa a tus clientes sobre el estatus de sus escrituras o actas de manera automática con solo pedir su número de folio.',
      icon: FileText
    },
    {
      title: 'Máxima Privacidad',
      desc: 'Garantizamos la seguridad de la información mediante sistemas encriptados y procesos que cumplen con regulaciones de privacidad locales.',
      icon: ShieldCheck
    },
    {
      title: 'Capacitación en Leyes Locales',
      desc: 'Entrenamos al asistente con la información específica de tu estado y notaría para que brinde orientación certera.',
      icon: Cpu
    }
  ];

  return (
    <section id="funciones" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-lg md:text-xl">Funcionalidades</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl text-white">Lo que hace Nodox-Voice por tu Notaría</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card hover:border-primary/40 transition-all flex flex-col gap-4 group"
            >
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h5 className="text-xl font-bold text-white">{feature.title}</h5>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const [index, setIndex] = useState(0);
  const routineQuestions = [
    "¿Qué documentos necesito para mi testamento?",
    "¿A qué hora cierran hoy?",
    "¿Ya están listas mis escrituras de compraventa?",
    "¿Puedo ir sin cita para certificar copias?",
    "¿Cuáles son los honorarios para una fe de hechos?",
    "¿Dónde están ubicados?",
    "¿Con quién puedo ver lo de una constitución de sociedad?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % routineQuestions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [routineQuestions.length]);

  return (
    <section id="solución" className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* El Problema */}
        <div id="problema" className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary font-bold uppercase tracking-widest text-lg md:text-xl mb-4">El Problema</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">El fin del caos telefónico en tu Notaría</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            ¿Tus clientes cuelgan frustrados porque nadie les atiende? Es el problema de siempre: llamadas que se pierden en transferencias a extensiones vacías o clientes que abandonan tras minutos de espera. Nodox-Voice elimina estos cuellos de botella, atendiendo cada llamada al primer timbre y asegurando que ningún trámite se pierda por falta de atención.
          </p>
        </div>

        {/* La Solución Animada */}
        <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden text-center">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-primary font-bold uppercase tracking-widest text-lg md:text-xl mb-4 relative z-10">La Solución Nodox</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 relative z-10 leading-tight">Delega lo repetitivo a la IA</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16 relative z-10">
            Nodox-Voice atiende tus llamadas 24/7. Filtra, responde y resuelve lo rutinario. Solo transfiere las llamadas que realmente requieren a un humano.
          </p>

          <div className="relative z-10 h-32 flex flex-col items-center justify-center border-y border-white/10">
            <p className="text-slate-500 font-medium text-sm mb-4 uppercase tracking-widest">Nodox-Voice resuelve preguntas rutinarias como</p>
            <AnimatePresence mode="wait">
              <motion.h4
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-emerald-400 italic"
              >
                "{routineQuestions[index]}"
              </motion.h4>
            </AnimatePresence>
          </div>
          
          <p className="text-white font-medium mt-16 text-lg relative z-10">
            El efecto: más tiempo para trabajar, menos carga mental y clientes mejor atendidos.
          </p>
        </div>
      </div>
    </section>
  );
};

const BotCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-y border-white/5">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center size-20 rounded-full bg-primary/20 text-primary mb-8 shadow-xl shadow-primary/20">
          <Phone size={40} />
        </div>
        <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
          ¿Ya hablaste con nuestro agente Nodox-Voice Notarías?
        </h3>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          ¿Qué esperas? Llama ahora mismo y experimenta su amable cortesía y su enorme eficacia en tiempo real.
        </p>
        <a 
          href="tel:5555555555" 
          className="inline-flex items-center gap-3 bg-white text-black hover:bg-slate-200 px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          <PhoneCall size={24} />
          Llama al 55-5555-5555
        </a>
      </div>
    </section>
  );
};

const CRM = () => {
  return (
    <section id="crm" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-primary font-bold uppercase tracking-widest text-lg md:text-xl mb-4">Integraciones</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">Integración con CRMs</h3>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
          Nodox-Voice está preparado para interactuar con los sistemas de gestión y CRMs comerciales más utilizados. Sincronizamos la información de tus clientes y citas de forma automática para mantener el control total de tu operación.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold text-white flex items-center gap-2"><Building2 /> Google Calendar</div>
          <div className="text-2xl font-bold text-white flex items-center gap-2"><MessageSquare /> WhatsApp API</div>
          <div className="text-2xl font-bold text-white flex items-center gap-2"><Phone /> Sistemas VoIP</div>
          <div className="text-2xl font-bold text-white flex items-center gap-2"><Mail /> Outlook / Exchange</div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: '¿Puede agendar citas en nuestro calendario actual?', a: 'Sí, Nodox-Voice se integra con Google Calendar, Outlook y otros CRMs para buscar disponibilidad y agendar la cita (presencial o videollamada) automáticamente sin empalmar horarios.' },
    { q: '¿Qué pasa si la IA no sabe la respuesta?', a: 'Si el asistente detecta una pregunta muy compleja o un trámite inusual, transfiere automáticamente la llamada al personal humano de tu notaría sin colgar.' },
    { q: '¿Nodox-Voice habla otros idiomas además de Español?', a: 'Sí. El asistente puede detectar automáticamente si un cliente le habla en Inglés (o en decenas de otros idiomas) y responder fluidamente en ese mismo idioma.' },
    { q: '¿Es capaz de entender diferentes acentos o si hay ruido de fondo?', a: 'Absolutamente. Además de hablar múltiples idiomas, nuestro sistema utiliza modelos avanzados capaces de entender modismos locales, diferentes acentos mexicanos y operar correctamente incluso si el cliente está en la calle con ruido de fondo.' },
    { q: '¿Cuánto tiempo toma la implementación en mi Notaría?', a: 'El proceso completo, desde el diagnóstico hasta el lanzamiento, suele tomar entre 2 y 4 semanas dependiendo de la cantidad de información y sistemas a integrar.' },
    { q: '¿Qué pasa con la confidencialidad de la información?', a: 'Toda la información y las transcripciones están encriptadas. Cumplimos con los más altos estándares de seguridad y con la normativa de privacidad y protección de datos vigente en México.' },
    { q: '¿Los clientes sienten que hablan con un robot?', a: 'Para nada. La latencia de respuesta es inferior a 800ms (casi humano) y la voz es hiperrealista, con inflexiones y pausas naturales que hacen la experiencia sumamente agradable y cortés.' }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-900/30 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden cursor-pointer transition-all border border-white/10 hover:border-primary/30" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <div className="p-6 flex justify-between items-center text-white font-medium">
                <span className="pr-4 leading-relaxed">{faq.q}</span>
                <span className={`text-primary font-bold transition-transform duration-300 flex-shrink-0 ${openIdx === idx ? 'rotate-45' : ''}`}>+</span>
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-400 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        {/* Logo and Slogan */}
        <div className="max-w-sm">
          <BrandLogo size="h-8" />
          <p className="text-slate-400 mt-6 text-sm leading-relaxed">
            Transformando Notarías a través de la implementación estratégica de Inteligencia Artificial centrada en la optimización de tiempo y retorno de inversión real.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Empresa / Solución */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Solución</h4>
            <ul className="space-y-4">
              <li><a href="#funciones" className="text-slate-400 hover:text-primary text-sm transition-colors">Funciones</a></li>
              <li><a href="#comparativa" className="text-slate-400 hover:text-primary text-sm transition-colors">Análisis</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-primary text-sm transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="https://www.nodoxai.com" className="text-slate-400 hover:text-primary text-sm transition-colors">Sitio Principal Nodox</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Contacto</h4>
            <ul className="space-y-4">
              <li><a href="mailto:contacto@nodoxai.com" className="text-slate-400 hover:text-primary text-sm transition-colors">contacto@nodoxai.com</a></li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Share2 size={20} /></a>
                <a href="mailto:contacto@nodoxai.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2024 Nodox AI. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacidad</a>
          <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/xnjgzzyg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Revisa tu internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-background-dark rounded-3xl shadow-2xl overflow-hidden border border-white/10"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white z-10"><X size={24} /></button>

          <div className="p-8 md:p-10">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-slate-400 mb-6">Nos pondremos en contacto contigo a la brevedad para agendar tu diagnóstico.</p>
                <button onClick={() => { setIsSuccess(false); onClose(); }} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">Cerrar</button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico Inicial</h3>
                <p className="text-slate-400 text-sm mb-8">Déjanos tus datos y descubre cuánto puedes optimizar en tu Notaría.</p>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input required name="name" placeholder="Nombre Completo" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary transition-colors" />
                  <input required name="notaria" placeholder="Nombre de la Notaría" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary transition-colors" />
                  <input required name="email" type="email" placeholder="Correo Electrónico" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary transition-colors" />
                  <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary text-white px-8 py-4 rounded-xl font-bold mt-4 transition-all shadow-xl shadow-primary/25 disabled:opacity-50">
                    {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background-dark font-sans selection:bg-primary/30 scroll-smooth">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <Features />
        <Comparison />
        <ProblemSolution />
        <BotCTA />
        <CRM />
        <FAQ />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
