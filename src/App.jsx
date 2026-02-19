import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Eye, 
  Clock, 
  FileText, 
  ChevronRight, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2, 
  Menu, 
  X, 
  Activity,
  Award,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, empresa, email, servicio, mensaje } = formData;
    
    const whatsappMessage = `Hola, contacto desde la web Seguripar.%0A%0A*Nombre:* ${nombre}%0A*Empresa:* ${empresa}%0A*Email:* ${email}%0A*Servicio de Interés:* ${servicio}%0A*Mensaje:* ${mensaje}`;
    
    const whatsappUrl = `https://wa.me/595993388375?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-700 selection:text-white">
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <img 
              src="images/pngsegur.png" 
              alt="SeguriPar Logo" 
              className="h-25 w-auto mr-2 transition-transform group-hover:scale-105" 
            />
           
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-700 hover:text-red-700' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/595993388375" 
              className="bg-red-700 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-red-700 transition-all shadow-md active:scale-95"
            >
              Contacto Directo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-bold text-slate-800 hover:text-red-700 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/595993388375"
                className="block w-full text-center bg-red-700 text-white py-4 font-bold uppercase"
              >
                +595 993 388 375
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION - FULL BACKGROUND IMAGE */}
      <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        
        {/* ELEMENTO DECORATIVO: STRIPES ROJAS (Extremo Izquierdo) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex items-center gap-1.5 pointer-events-none pl-0">
          <div className="w-[3px] h-32 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]"></div>
          <div className="w-[3px] h-48 bg-red-600 opacity-80"></div>
          <div className="w-[3px] h-64 bg-red-600 opacity-50"></div>
          <div className="w-[3px] h-48 bg-red-600 opacity-30"></div>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/heroseg1.png" 
            alt="Seguridad Profesional Seguripar" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left duration-700 ml-4 lg:ml-8">
            <div className="inline-flex items-center space-x-2 bg-red-700/20 backdrop-blur-md border border-red-700/30 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Seguridad Patrimonial y Empresarial</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter">
              REDEFINIR LA <br /> 
              <span className="text-red-700 underline decoration-slate-200/20 underline-offset-8">SEGURIDAD</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              Nacimos para llenar el vacío de un servicio que sea verdaderamente 
              <span className="font-bold text-white italic"> proactivo, transparente y adaptable </span> 
              a las necesidades dinámicas de su negocio en Paraguay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <a 
                href="https://wa.me/595993388375?text=Hola,%20quisiera%20solicitar%20un%20diagnóstico%20de%20seguridad."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-700 text-white px-10 py-5 rounded-sm font-bold hover:bg-white hover:text-red-700 transition-all duration-300 shadow-2xl group text-lg tracking-wider"
              >
                SOLICITAR DIAGNÓSTICO <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-sm">
                <div className="bg-red-700 p-2.5 rounded-full shadow-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-bold uppercase tracking-widest">Asistencia 24/7</p>
                  <p className="font-bold text-white text-lg tracking-tight">+595 993 388 375</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
            <div className="w-1 h-12 bg-gradient-to-b from-red-700 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* DIFERENCIACIÓN ESTRATÉGICA (SERVICES) */}
      <section id="servicios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] uppercase mb-4">Diferenciación Estratégica</h2>
            <p className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Más que vigilancia, gestión de riesgos.</p>
            <p className="text-slate-400 text-lg">Nuestro servicio básico de protección es solo el punto de partida. Implementamos una gestión proactiva que asegura la rentabilidad de su negocio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 border border-slate-700 hover:border-red-700 transition-colors group">
              <div className="bg-slate-700 w-16 h-16 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-700 transition-colors">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sistema de Monitoreo 24/7</h3>
              <p className="text-slate-400 leading-relaxed">
                Vigilancia ininterrumpida a través de tecnología avanzada (CCTV y sistemas de alarma). Aseguramos la detección temprana de cualquier incidencia.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Central de monitoreo activa
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Reportes en tiempo real
                </li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 border border-slate-700 hover:border-red-700 transition-colors group">
              <div className="bg-slate-700 w-16 h-16 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-700 transition-colors">
                <Activity className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Control de Guardias</h3>
              <p className="text-slate-400 leading-relaxed">
                Transparencia total mediante tecnología de puntos de control fijos o biométricos estratégicamente ubicados en sus instalaciones.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Registro vía dispositivos móviles
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Trazabilidad operacional
                </li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 border border-slate-700 hover:border-red-700 transition-colors group">
              <div className="bg-slate-700 w-16 h-16 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-700 transition-colors">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Póliza de Seguros</h3>
              <p className="text-slate-400 leading-relaxed">
                Contamos con una Póliza de Seguros de Responsabilidad Civil emitida por una entidad de prestigio, con una cobertura robusta que excede los estándares.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Respaldo financiero total
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-red-500 mr-2" /> Cumplimiento de normativas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA (PROCESS) */}
      <section id="metodologia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-sm font-bold text-red-700 tracking-[0.3em] uppercase">Nuestro Proceso Operativo</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Diseñamos un escudo a medida para su empresa.</h3>
              <p className="text-slate-600 leading-relaxed">
                No creemos en soluciones genéricas. Cada cliente requiere un Plan Operativo Estándar (POE) diseñado específicamente para sus vulnerabilidades.
              </p>
              <div className="pt-4">
                <div className="p-6 bg-slate-50 border-l-4 border-red-700">
                  <p className="italic text-slate-800 font-medium">
                    "La seguridad es lo que hace que un negocio siga funcionando en el largo plazo. Es mejor prevenir que lamentar."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              {/* Paso 1 */}
              <div className="flex gap-6 p-6 rounded-sm border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl rounded-full">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Análisis de Riesgos</h4>
                  <p className="text-slate-600 text-sm">Evaluamos in situ la vulnerabilidad, los puntos críticos y las necesidades específicas de su entorno operacional para definir el Riesgo Neto.</p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex gap-6 p-6 rounded-sm border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 text-white flex items-center justify-center font-bold text-xl rounded-full">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Diseño Estratégico (Planificación POE)</h4>
                  <p className="text-slate-600 text-sm">Desarrollamos un Plan Operativo a medida, especificando despliegue de personal, tecnología y protocolos de respuesta únicos.</p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex gap-6 p-6 rounded-sm border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl rounded-full">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Monitoreo y Optimización</h4>
                  <p className="text-slate-600 text-sm">Mediante rondas de supervisión constantes y contacto directo con su gerencia, ajustamos y mejoramos la eficacia de los protocolos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS SECTION */}
      <section id="nosotros" className="py-24 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-8 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Somos SeguriPar</h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Somos una empresa ágil y profesional, impulsada por un equipo con visión estratégica y un profundo compromiso con la excelencia.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Nacimos para brindar tranquilidad total y garantizar la continuidad operativa de nuestros clientes a través de un servicio proactivo y transparente.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-3xl font-bold text-red-700">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Compromiso</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Monitoreo</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-auto bg-slate-900 overflow-hidden">
               <img 
                src="images/heroseg2.jpg" 
                alt="Personal de Seguridad Profesional" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-700/90 p-8 backdrop-blur-md max-w-xs text-center">
                  <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Seguridad Inteligente</h4>
                  <p className="text-red-100 text-sm">Nuestro éxito es su tranquilidad operativa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-red-700 tracking-[0.3em] uppercase mb-4">Un paso a la seguridad total</h2>
              <h3 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tighter">Contáctenos Hoy</h3>
              <p className="text-slate-600 text-lg mb-12">
                Su éxito es nuestra métrica. Le brindamos el respaldo estratégico necesario para que se concentre en alcanzar sus objetivos principales.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-sm text-red-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Teléfono Directo</h4>
                    <p className="text-xl font-bold tracking-tight">+595 993 388 375</p>
                    <p className="text-slate-500 text-sm">Atención inmediata 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-sm text-red-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email Corporativo</h4>
                    <p className="text-xl font-bold tracking-tight">seguripar@seguripar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-sm text-red-700">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Director Comercial</h4>
                    <p className="text-xl font-bold italic">Geronimo Gonzalez</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 lg:p-12 rounded-sm border border-slate-100 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 px-4 py-3 focus:border-red-700 focus:outline-none transition-colors" 
                      placeholder="Ej. Juan Pérez" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 px-4 py-3 focus:border-red-700 focus:outline-none transition-colors" 
                      placeholder="Nombre de su negocio" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email de Contacto</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:border-red-700 focus:outline-none transition-colors" 
                    placeholder="correo@empresa.com" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Servicio de Interés</label>
                  <input 
                    type="text"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:border-red-700 focus:outline-none transition-colors"
                    placeholder="Ej. Guardias, Monitoreo, Consultoría..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mensaje</label>
                  <textarea 
                    rows="4" 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:border-red-700 focus:outline-none transition-colors" 
                    placeholder="Cuéntenos sus necesidades específicas..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-red-700 text-white font-bold uppercase py-4 hover:bg-slate-900 transition-all shadow-lg tracking-widest active:scale-95">
                  ENVIAR SOLICITUD
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center">
              <img 
                src="images/pngsegur.png" 
                alt="SeguriPar Logo" 
                className="h-25 w-auto mr-2 transition-all" 
              />
            
            </div>
            
            <div className="text-slate-500 text-sm font-medium text-center">
              &copy; {new Date().getFullYear()} SeguriPar S.A. Todos los derechos reservados. Paraguay.
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              Desarrollado por <a href="https://tuwebpy.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">TuWebPy</a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/595993388375" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 z-50 flex items-center justify-center group"
      >
        <Phone size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">WhatsApp</span>
      </a>
    </div>
  );
};

export default App;