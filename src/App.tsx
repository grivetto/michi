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
import { MENU_DATA, MenuItem } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'The Menu', href: '#menu' },
    { name: 'Our Story', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
          <span className="text-brand-gold">DA</span> MICHI
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <button className="bg-brand-dark text-brand-cream px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300">
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
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
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-2xl font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-brand-dark text-brand-cream py-4 rounded-xl text-lg font-serif">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
            Since 1984
          </span>
          <h1 className="text-6xl md:text-8xl text-brand-cream mb-8 leading-tight">
            Authentic Italian <br />
            <span className="italic font-light">Soul & Flavors</span>
          </h1>
          <p className="text-brand-cream/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the true essence of Italy in every bite. From wood-fired pizzas to artisanal pasta, we bring the heart of Naples to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              View Menu
            </a>
            <a 
              href="#contact" 
              className="border border-brand-cream text-brand-cream px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all duration-300"
            >
              Find Us
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

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('pizza');
  
  const categories = [
    { id: 'pizza', label: 'Pizzeria', icon: <Pizza size={18} /> },
    { id: 'pasta', label: 'Primi Piatti', icon: <Utensils size={18} /> },
    { id: 'main', label: 'Secondi', icon: <Utensils size={18} /> },
    { id: 'wine', label: 'Wine List', icon: <Wine size={18} /> },
  ];

  const filteredMenu = MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Our Menu</h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-8"></div>
          <p className="text-brand-dark/60 max-w-xl mx-auto italic">
            Carefully selected ingredients, traditional recipes, and a touch of modern creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
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
                key={item.id}
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
                Menu section coming soon...
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark text-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6 block">Our Legacy</span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">A Story of Passion <br />& Tradition</h2>
          <div className="space-y-6 text-brand-cream/70 leading-relaxed font-light">
            <p>
              Founded in the heart of the city, Ristorante Da Michi has been a cornerstone of authentic Italian cuisine for over three decades. Our journey started with a simple dream: to share the recipes passed down through generations of our family.
            </p>
            <p>
              We believe that great food starts with great ingredients. That's why we source our flour from Naples, our tomatoes from the slopes of Vesuvius, and our olive oil from small artisanal groves in Tuscany.
            </p>
            <p className="italic text-brand-gold">
              "Cooking is an act of love, a gift, a way of sharing with others the little secrets that are simmering on the fire."
            </p>
          </div>
          <button className="mt-10 flex items-center gap-2 text-brand-gold uppercase tracking-widest text-sm font-bold group">
            Read Our Full Story <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
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
              <span className="text-xs uppercase tracking-widest">Years of Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-4xl mb-8">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Location</h4>
                    <p className="text-brand-dark/70 font-light">Via Roma 123, 00184 <br />Roma, Italy</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Reservations</h4>
                    <p className="text-brand-dark/70 font-light">+39 06 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Opening Hours</h4>
                    <p className="text-brand-dark/70 font-light">
                      Mon - Sat: 12:00 - 15:00, 19:00 - 23:30 <br />
                      Sun: 12:00 - 23:00
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
              <p className="font-serif italic">Interactive Map Integration</p>
            </div>
            {/* In a real app, you'd put a Google Map component here */}
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

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream/40 py-12 border-t border-brand-cream/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-brand-cream font-serif text-xl">
          <span className="text-brand-gold">DA</span> MICHI
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-cream transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-cream transition-colors">Cookie Policy</a>
        </div>

        <div className="text-xs">
          © {new Date().getFullYear()} Ristorante Da Michi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Fixed Reservation Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-brand-gold text-brand-dark w-14 h-14 rounded-full shadow-2xl flex items-center justify-center">
          <Calendar size={24} />
        </button>
      </div>
    </div>
  );
}
