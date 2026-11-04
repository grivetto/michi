import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Utensils,
  Pizza,
  Wine,
  Calendar
} from 'lucide-react';
import { MENU_DATA_BY_LANG, MenuItem, Language } from './constants';

const FLAG_INFO: Record<Language, { code: string; flag: string; label: string }> = {
  it: { code: 'IT', flag: 'https://flagcdn.com/w40/it.png', label: 'Switch to English' },
  en: { code: 'EN', flag: 'https://flagcdn.com/w40/gb.png', label: 'Cambiar a Español' },
  es: { code: 'ES', flag: 'https://flagcdn.com/w40/es.png', label: 'เปลี่ยนเป็นภาษาไทย' },
  th: { code: 'TH', flag: 'https://flagcdn.com/w40/th.png', label: "Passa all'Italiano" },
};

const translations = {
  it: {
    nav: [
      { name: 'Home', href: '#home' },
      { name: 'Il Menu', href: '#menu' },
      { name: 'La Nostra Storia', href: '#about' },
      { name: 'Contatti', href: '#contact' },
    ],
    bookTable: 'Prenota un Tavolo',
    heroBadge: 'Dal 1984',
    heroTitleLine1: 'Autentica Anima',
    heroTitleLine2: '& Sapori Italiani',
    heroSubtitle:
      "Vivi la vera essenza dell'Italia in ogni boccone. Dalle pizze cotte nel forno a legna alla pasta artigianale, portiamo il cuore di Napoli sulla tua tavola.",
    viewMenu: 'Scopri il Menu',
    findUs: 'Dove Siamo',
    menuTitle: 'Il Nostro Menu',
    menuSubtitle:
      'Ingredienti accuratamente selezionati, ricette tradizionali e un tocco di creatività moderna.',
    categories: {
      pizza: 'Pizzeria',
      pasta: 'Primi Piatti',
      main: 'Secondi',
      wine: 'Carta dei Vini',
    },
    menuComingSoon: 'Sezione del menu in arrivo...',
    aboutBadge: 'La Nostra Eredità',
    aboutTitleLine1: 'Una Storia di Passione',
    aboutTitleLine2: '& Tradizione',
    aboutP1:
      "Fondato nel cuore della città, il Ristorante Da Michi è un punto di riferimento della cucina italiana autentica da oltre tre decenni. Il nostro viaggio è iniziato con un sogno semplice: condividere le ricette tramandate da generazioni nella nostra famiglia.",
    aboutP2:
      "Crediamo che il buon cibo inizi da grandi ingredienti. Ecco perché selezioniamo la nostra farina da Napoli, i pomodori dalle pendici del Vesuvio e l'olio extravergine d'oliva da piccoli frantoi artigianali in Toscana.",
    aboutQuote:
      '"Cucinare è un atto d\'amore, un dono, un modo di condividere con gli altri i piccoli segreti che sobbollono sul fuoco."',
    readFullStory: 'Leggi Tutta la Storia',
    yearsExcellence: 'Anni di Eccellenza',
    visitUs: 'Vieni a Trovarci',
    locationLabel: 'Indirizzo',
    locationValue1: 'Via Roma 123, 00184',
    locationValue2: 'Roma, Italia',
    reservationsLabel: 'Prenotazioni',
    hoursLabel: 'Orari di Apertura',
    hoursLine1: 'Lun - Sab: 12:00 - 15:00, 19:00 - 23:30',
    hoursLine2: 'Dom: 12:00 - 23:00',
    mapPlaceholder: 'Mappa Interattiva',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Termini di Servizio',
    cookiePolicy: 'Cookie Policy',
    rightsReserved: 'Tutti i diritti riservati.',
  },
  en: {
    nav: [
      { name: 'Home', href: '#home' },
      { name: 'The Menu', href: '#menu' },
      { name: 'Our Story', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    bookTable: 'Book a Table',
    heroBadge: 'Since 1984',
    heroTitleLine1: 'Authentic Italian',
    heroTitleLine2: 'Soul & Flavors',
    heroSubtitle:
      'Experience the true essence of Italy in every bite. From wood-fired pizzas to artisanal pasta, we bring the heart of Naples to your table.',
    viewMenu: 'View Menu',
    findUs: 'Find Us',
    menuTitle: 'Our Menu',
    menuSubtitle:
      'Carefully selected ingredients, traditional recipes, and a touch of modern creativity.',
    categories: {
      pizza: 'Pizzeria',
      pasta: 'Primi Piatti',
      main: 'Secondi',
      wine: 'Wine List',
    },
    menuComingSoon: 'Menu section coming soon...',
    aboutBadge: 'Our Legacy',
    aboutTitleLine1: 'A Story of Passion',
    aboutTitleLine2: '& Tradition',
    aboutP1:
      'Founded in the heart of the city, Ristorante Da Michi has been a cornerstone of authentic Italian cuisine for over three decades. Our journey started with a simple dream: to share the recipes passed down through generations of our family.',
    aboutP2:
      "We believe that great food starts with great ingredients. That's why we source our flour from Naples, our tomatoes from the slopes of Vesuvius, and our olive oil from small artisanal groves in Tuscany.",
    aboutQuote:
      '"Cooking is an act of love, a gift, a way of sharing with others the little secrets that are simmering on the fire."',
    readFullStory: 'Read Our Full Story',
    yearsExcellence: 'Years of Excellence',
    visitUs: 'Visit Us',
    locationLabel: 'Location',
    locationValue1: 'Via Roma 123, 00184',
    locationValue2: 'Roma, Italy',
    reservationsLabel: 'Reservations',
    hoursLabel: 'Opening Hours',
    hoursLine1: 'Mon - Sat: 12:00 - 15:00, 19:00 - 23:30',
    hoursLine2: 'Sun: 12:00 - 23:00',
    mapPlaceholder: 'Interactive Map Integration',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    rightsReserved: 'All rights reserved.',
  },
  es: {
    nav: [
      { name: 'Inicio', href: '#home' },
      { name: 'El Menú', href: '#menu' },
      { name: 'Nuestra Historia', href: '#about' },
      { name: 'Contacto', href: '#contact' },
    ],
    bookTable: 'Reservar Mesa',
    heroBadge: 'Desde 1984',
    heroTitleLine1: 'Auténtica Alma',
    heroTitleLine2: '& Sabores Italianos',
    heroSubtitle:
      'Vive la verdadera esencia de Italia en cada bocado. Pizzas al horno de leña y pasta artesanal napolitana.',
    viewMenu: 'Descubrir Menú',
    findUs: 'Dónde Estamos',
    menuTitle: 'Nuestro Menú',
    menuSubtitle:
      'Ingredientes seleccionados, recetas tradicionales y un toque de creatividad contemporánea.',
    categories: {
      pizza: 'Pizzería',
      pasta: 'Primeros Platos',
      main: 'Segundos',
      wine: 'Carta de Vinos',
    },
    menuComingSoon: 'Sección del menú próximamente...',
    aboutBadge: 'Nuestra Herencia',
    aboutTitleLine1: 'Una Historia de Pasión',
    aboutTitleLine2: '& Tradición',
    aboutP1:
      'Fundado en el corazón de la ciudad, el Ristorante Da Michi es un referente de la gastronomía italiana auténtica desde hace más de tres décadas. Nuestro viaje comenzó con un sueño sencillo: compartir las recetas transmitidas de generación en generación en nuestra familia.',
    aboutP2:
      'Creemos que la gran comida empieza con grandes ingredientes. Por eso traemos nuestra harina desde Nápoles, los tomates de las faldas del Vesubio y el aceite de oliva virgen extra de pequeños productores de la Toscana.',
    aboutQuote:
      '"Cocinar es un acto de amor, un regalo, una forma de compartir con los demás los pequeños secretos que hierven a fuego lento."',
    readFullStory: 'Leer Toda la Historia',
    yearsExcellence: 'Años de Excelencia',
    visitUs: 'Ven a Visitarnos',
    locationLabel: 'Ubicación',
    locationValue1: 'Via Roma 123, 00184',
    locationValue2: 'Roma, Italia',
    reservationsLabel: 'Reservas',
    hoursLabel: 'Horario de Apertura',
    hoursLine1: 'Lun - Sáb: 12:00 - 15:00, 19:00 - 23:30',
    hoursLine2: 'Dom: 12:00 - 23:00',
    mapPlaceholder: 'Mapa Interactivo',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos del Servicio',
    cookiePolicy: 'Política de Cookies',
    rightsReserved: 'Todos los derechos reservados.',
  },
  th: {
    nav: [
      { name: 'หน้าแรก', href: '#home' },
      { name: 'เมนูอาหาร', href: '#menu' },
      { name: 'เรื่องราวของเรา', href: '#about' },
      { name: 'ติดต่อเรา', href: '#contact' },
    ],
    bookTable: 'จองโต๊ะอาหาร',
    heroBadge: 'ตั้งแต่ปี 1984',
    heroTitleLine1: 'จิตวิญญาณและรสชาติ',
    heroTitleLine2: 'อิตาเลียนแท้ดั้งเดิม',
    heroSubtitle:
      'สัมผัสแก่นแท้ของอิตาลีในทุกคำ จากพิซซ่าเตาถ่านสู่พาสต้าทำมือ เราคัดสรรหัวใจแห่งเนเปิลส์มาเสิร์ฟถึงโต๊ะของคุณ',
    viewMenu: 'ดูเมนูอาหาร',
    findUs: 'พิกัดร้าน',
    menuTitle: 'เมนูของเรา',
    menuSubtitle:
      'วัตถุดิบที่คัดสรรอย่างพิถีพิถัน สูตรอาหารแบบดั้งเดิม ผสานความคิดสร้างสรรค์ร่วมสมัย',
    categories: {
      pizza: 'พิซซ่า',
      pasta: 'พาสต้า (จานแรก)',
      main: 'อาหารจานหลัก',
      wine: 'รายการไวน์',
    },
    menuComingSoon: 'หมวดหมู่เมนูนี้กำลังจะมาเร็วๆ นี้...',
    aboutBadge: 'ตำนานของเรา',
    aboutTitleLine1: 'เรื่องราวแห่งความหลงใหล',
    aboutTitleLine2: 'และประเพณีดั้งเดิม',
    aboutP1:
      'Ristorante Da Michi ก่อตั้งขึ้นใจกลางเมือง และเป็นเสาหลักของอาหารอิตาเลียนแท้มากว่าสามทศวรรษ การเดินทางของเราเริ่มต้นจากความฝันที่เรียบง่าย คือการแบ่งปันสูตรอาหารที่สืบทอดกันมาจากรุ่นสู่รุ่นในครอบครัวของเรา',
    aboutP2:
      'เราเชื่อว่าอาหารชั้นเลิศเริ่มต้นจากวัตถุดิบชั้นยอด นั่นคือเหตุผลที่เราคัดสรรแป้งจากเนเปิลส์ มะเขือเทศจากเชิงเขาวิสุเวียส และน้ำมันมะกอกจากสวนมะกอกทำมือขนาดเล็กในแคว้นทัสคานี',
    aboutQuote:
      '"การทำอาหารคือการแสดงความรัก เป็นของขวัญ และเป็นวิธีแบ่งปันความลับเล็กๆ ที่กำลังเคี่ยวกรุ่นอยู่บนเตาไฟให้กับผู้อื่น"',
    readFullStory: 'อ่านเรื่องราวทั้งหมดของเรา',
    yearsExcellence: 'ปีแห่งความเป็นเลิศ',
    visitUs: 'แวะมาหาเรา',
    locationLabel: 'ที่ตั้ง',
    locationValue1: 'Via Roma 123, 00184',
    locationValue2: 'โรม, อิตาลี',
    reservationsLabel: 'สำรองที่นั่ง',
    hoursLabel: 'เวลาทำการ',
    hoursLine1: 'จันทร์ - เสาร์: 12:00 - 15:00, 19:00 - 23:30',
    hoursLine2: 'อาทิตย์: 12:00 - 23:00',
    mapPlaceholder: 'แผนที่แบบโต้ตอบ',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    termsOfService: 'ข้อกำหนดการให้บริการ',
    cookiePolicy: 'นโยบายคุกกี้',
    rightsReserved: 'สงวนลิขสิทธิ์ทั้งหมด',
  },
};

const Navbar = ({ lang, onToggleLang }: { lang: Language; onToggleLang: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];
  const currentFlag = FLAG_INFO[lang];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
          <span className="text-brand-gold">DA</span> MICHI
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-dark text-brand-cream px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
          >
            {t.bookTable}
          </a>
          <button
            onClick={onToggleLang}
            title={currentFlag.label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer text-brand-dark"
          >
            <img src={currentFlag.flag} alt={currentFlag.code} className="w-5 h-auto rounded-[2px]" />
            <span className="text-xs font-bold tracking-wider">{currentFlag.code}</span>
          </button>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleLang}
            title={currentFlag.label}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/80 border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer text-brand-dark"
          >
            <img src={currentFlag.flag} alt={currentFlag.code} className="w-5 h-auto rounded-[2px]" />
            <span className="text-xs font-bold tracking-wider">{currentFlag.code}</span>
          </button>
          <button 
            className="text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-dark/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {t.nav.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-2xl font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-dark text-brand-cream py-4 rounded-xl text-lg font-serif text-center"
              >
                {t.bookTable}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
          alt="Authentic Italian Kitchen"
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6 block font-medium">
            {t.heroBadge}
          </span>
          <h1 className="text-6xl md:text-8xl text-brand-cream mb-8 leading-tight">
            {t.heroTitleLine1} <br />
            <span className="italic font-light">{t.heroTitleLine2}</span>
          </h1>
          <p className="text-brand-cream/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              {t.viewMenu}
            </a>
            <a 
              href="#contact" 
              className="border border-brand-cream text-brand-cream px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all duration-300"
            >
              {t.findUs}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cream/50 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const MenuSection = ({ lang }: { lang: Language }) => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('pizza');
  const t = translations[lang];
  
  const categories = [
    { id: 'pizza', label: t.categories.pizza, icon: <Pizza size={18} /> },
    { id: 'pasta', label: t.categories.pasta, icon: <Utensils size={18} /> },
    { id: 'main', label: t.categories.main, icon: <Utensils size={18} /> },
    { id: 'wine', label: t.categories.wine, icon: <Wine size={18} /> },
  ];

  const filteredMenu = MENU_DATA_BY_LANG[lang].filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">{t.menuTitle}</h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-8"></div>
          <p className="text-brand-dark/60 max-w-xl mx-auto italic">
            {t.menuSubtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as MenuItem['category'])}
              className={`flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 uppercase tracking-widest text-xs font-bold ${
                activeCategory === cat.id 
                  ? 'bg-brand-dark text-brand-cream border-brand-dark' 
                  : 'border-brand-dark/10 hover:border-brand-gold'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
          <AnimatePresence mode="wait">
            {filteredMenu.length > 0 ? filteredMenu.map((item) => (
              <motion.div
                key={`${lang}-${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="menu-card group"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-serif">€{item.price}</span>
                </div>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )) : (
              <div className="col-span-2 text-center py-12 text-brand-dark/40 italic">
                {t.menuComingSoon}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section id="about" className="py-24 bg-brand-dark text-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6 block">{t.aboutBadge}</span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">{t.aboutTitleLine1} <br />{t.aboutTitleLine2}</h2>
          <div className="space-y-6 text-brand-cream/70 leading-relaxed font-light">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p className="italic text-brand-gold">{t.aboutQuote}</p>
          </div>
          <button className="mt-10 flex items-center gap-2 text-brand-gold uppercase tracking-widest text-sm font-bold group">
            {t.readFullStory} <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1944&auto=format&fit=crop" 
              alt="Chef preparing dough"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 rounded-2xl hidden lg:block">
            <div className="text-brand-dark text-center">
              <span className="text-4xl font-serif block font-bold">35+</span>
              <span className="text-xs uppercase tracking-widest">{t.yearsExcellence}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-4xl mb-8">{t.visitUs}</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">{t.locationLabel}</h4>
                    <p className="text-brand-dark/70 font-light">{t.locationValue1} <br />{t.locationValue2}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">{t.reservationsLabel}</h4>
                    <p className="text-brand-dark/70 font-light">+39 06 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">{t.hoursLabel}</h4>
                    <p className="text-brand-dark/70 font-light">
                      {t.hoursLine1} <br />
                      {t.hoursLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-brand-cream transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-brand-cream transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 h-[500px] bg-brand-dark/5 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-brand-dark/20 flex-col gap-4">
              <MapPin size={48} />
              <p className="font-serif italic">{t.mapPlaceholder}</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map view"
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-brand-dark text-brand-cream/40 py-12 border-t border-brand-cream/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-brand-cream font-serif text-xl">
          <span className="text-brand-gold">DA</span> MICHI
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-brand-cream transition-colors">{t.privacyPolicy}</a>
          <a href="#" className="hover:text-brand-cream transition-colors">{t.termsOfService}</a>
          <a href="#" className="hover:text-brand-cream transition-colors">{t.cookiePolicy}</a>
        </div>

        <div className="text-xs">
          © {new Date().getFullYear()} Ristorante Da Michi. {t.rightsReserved}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('it');

  const toggleLanguage = () => {
    const order: Language[] = ['it', 'en', 'es', 'th'];
    setLang((prev) => order[(order.indexOf(prev) + 1) % order.length]);
  };

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      <main>
        <Hero lang={lang} />
        <MenuSection lang={lang} />
        <AboutSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      
      {/* Fixed Reservation Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="#contact" className="bg-brand-gold text-brand-dark w-14 h-14 rounded-full shadow-2xl flex items-center justify-center">
          <Calendar size={24} />
        </a>
      </div>
    </div>
  );
}
