
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Camera, 
  Gift, 
  MessageSquare,
  Users,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';
import { Wedding, WishCategory } from '../types';

interface StoryPageProps {
  wedding: Wedding | null;
}

const StoryPage: React.FC<StoryPageProps> = ({ wedding }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);
  const [showWishModal, setShowWishModal] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [wishCategory, setWishCategory] = useState<WishCategory>(WishCategory.CONGRATULATIONS);

  useEffect(() => {
    if (!wedding) return;
    const target = new Date(wedding.wedding_date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ d, h, m, s });
    }, 1000);

    return () => clearInterval(interval);
  }, [wedding]);

  if (!wedding) return <div className="p-20 text-center">Wedding not found.</div>;

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-40 px-6 py-6 flex justify-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-full px-8 py-3 flex gap-8 items-center pointer-events-auto border border-rose-100">
          <a href="#story" className="text-sm font-semibold uppercase tracking-wider hover:text-rose-600 transition-colors">Our Story</a>
          <a href="#events" className="text-sm font-semibold uppercase tracking-wider hover:text-rose-600 transition-colors">Events</a>
          <div className="flex items-center gap-2">
             <span className="font-serif text-xl font-bold">{wedding.partner1_name[0]}</span>
             <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
             <span className="font-serif text-xl font-bold">{wedding.partner2_name[0]}</span>
          </div>
          <a href="#party" className="text-sm font-semibold uppercase tracking-wider hover:text-rose-600 transition-colors">The Party</a>
          <button 
            onClick={() => setShowWishModal(true)}
            className="text-sm font-semibold uppercase tracking-wider text-rose-600 hover:text-rose-700 transition-colors"
          >
            Wish Us
          </button>
        </div>
      </nav>

      {/* Hero Section - Matching the Reference Design */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={wedding.hero_image_url} 
            className="w-full h-full object-cover brightness-75"
            alt="Main Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FAF9F6]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-white rounded-full mx-auto p-4 md:p-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
            {/* Background pattern/confetti style from reference */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full bg-rose-500" 
                    style={{ 
                      top: `${Math.random() * 100}%`, 
                      left: `${Math.random() * 100}%` 
                    }}
                  />
                ))}
            </div>
            
            <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Save the Date</span>
            <h1 className="text-[#1A1A1A] font-serif text-4xl md:text-6xl mb-2 flex flex-col leading-tight">
              <span className="uppercase">{wedding.partner1_name}</span>
              <span className="text-rose-500 font-accent italic text-3xl md:text-4xl my-2">- AND -</span>
              <span className="uppercase">{wedding.partner2_name}</span>
            </h1>
            <div className="mt-6 flex items-center gap-4 text-slate-800 border-t border-slate-100 pt-6">
              <span className="uppercase tracking-widest text-sm font-bold">December</span>
              <div className="text-3xl font-serif font-black text-rose-600">24</div>
              <span className="uppercase tracking-widest text-sm font-bold">2024</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 text-center px-6" id="story">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">We're getting married!</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="flex-1 text-center md:text-right">
               <span className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-2 block">The Bride</span>
               <h3 className="font-serif text-2xl mb-4">{wedding.partner1_name}</h3>
               <p className="text-slate-600 italic">"He is my home and my adventure all at once."</p>
            </div>
            
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl relative shrink-0">
               <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="The Couple" />
            </div>

            <div className="flex-1 text-center md:text-left">
               <span className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-2 block">The Groom</span>
               <h3 className="font-serif text-2xl mb-4">{wedding.partner2_name}</h3>
               <p className="text-slate-600 italic">"I chose her then, and I will choose her for every lifetime."</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 font-serif text-[20rem] font-black pointer-events-none flex items-center justify-center">
          LOVE
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl font-serif mb-10 tracking-widest uppercase">Start Celebration In</h2>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {timeLeft ? (
              <>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-7xl font-serif font-light text-rose-600">{timeLeft.d}</span>
                  <span className="uppercase text-[10px] md:text-xs tracking-widest font-bold text-slate-500">Days</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-7xl font-serif font-light text-rose-600">{timeLeft.h}</span>
                  <span className="uppercase text-[10px] md:text-xs tracking-widest font-bold text-slate-500">Hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-7xl font-serif font-light text-rose-600">{timeLeft.m}</span>
                  <span className="uppercase text-[10px] md:text-xs tracking-widest font-bold text-slate-500">Minutes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-7xl font-serif font-light text-rose-600">{timeLeft.s}</span>
                  <span className="uppercase text-[10px] md:text-xs tracking-widest font-bold text-slate-500">Seconds</span>
                </div>
              </>
            ) : (
              <div className="col-span-4 py-10">Calculating forever...</div>
            )}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold uppercase tracking-widest text-xs">Our History</span>
            <h2 className="text-4xl font-serif mt-2">Captured Moments</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wedding.our_journey.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-slate-100 relative">
                  <img 
                    src={item.image_url} 
                    alt={item.event} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white font-serif text-xl">{item.date}</span>
                  </div>
                </div>
                <h4 className="font-serif text-xl text-center">{item.event}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-[#F2F0ED] px-6" id="events">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-rose-600 font-bold uppercase tracking-widest text-xs">When & Where</span>
             <h2 className="text-4xl font-serif mt-2">Wedding Schedule</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Traditional Wedding', date: wedding.traditional_wedding.date, venue: wedding.traditional_wedding.venue, icon: Heart },
              { title: 'White Wedding', date: wedding.white_wedding.date, venue: wedding.white_wedding.venue, icon: Calendar },
              { title: 'The Reception', date: wedding.reception.date, venue: wedding.reception.venue, icon: Clock },
            ].map((ev, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
                  <ev.icon className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl mb-2">{ev.title}</h4>
                <p className="text-rose-600 font-bold text-sm mb-4">{ev.date}</p>
                <div className="flex items-start gap-2 text-slate-500 text-sm">
                   <MapPin className="w-4 h-4 shrink-0" />
                   <span>{ev.venue}</span>
                </div>
                <button className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-rose-600 transition-colors">Get Directions</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section className="py-24 px-6 bg-white" id="party">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-rose-600 font-bold uppercase tracking-widest text-xs">The Best Friends</span>
          <h2 className="text-4xl font-serif mt-2 mb-16">Groomsman & Bridesmaid</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {wedding.wedding_party.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-md mb-6">
                   <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg font-bold">{p.name}</h5>
                <p className="text-rose-600 text-xs uppercase tracking-widest font-medium mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => setShowWishModal(true)}
          className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Wish Us
        </button>
        <button 
          onClick={() => setShowGiftModal(true)}
          className="flex-1 bg-rose-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <Gift className="w-5 h-5" />
          Send Gift
        </button>
      </div>

      {/* Footer */}
      <footer className="py-24 bg-[#1A1A1A] text-white text-center px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
           <span className="font-serif text-5xl opacity-50">{wedding.partner1_name[0]}</span>
           <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
           <span className="font-serif text-5xl opacity-50">{wedding.partner2_name[0]}</span>
        </div>
        <p className="font-serif text-xl italic mb-4">Together is a beautiful place to be.</p>
        <p className="text-slate-500 text-sm tracking-widest uppercase">Created with ForeverStory</p>
      </footer>

      {/* Wish Modal */}
      <AnimatePresence>
        {showWishModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowWishModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif">Send Your Wishes</h3>
                  <button onClick={() => setShowWishModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Your Name</label>
                    <input type="text" placeholder="e.g. Aunty Funmi" className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 ring-rose-500 transition-all outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Category</label>
                    <div className="flex gap-2">
                      {Object.values(WishCategory).map((cat) => (
                        <button 
                          key={cat}
                          onClick={() => setWishCategory(cat)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${wishCategory === cat ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Message</label>
                    <textarea rows={4} placeholder="Write something beautiful..." className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 ring-rose-500 transition-all outline-none resize-none"></textarea>
                  </div>

                  <button className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
                    Send Wish <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gift Modal (simplified placeholder) */}
      <AnimatePresence>
        {showGiftModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowGiftModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif">Registry & Gifts</h3>
                  <button onClick={() => setShowGiftModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  Your presence is the greatest gift. However, if you wish to honor us with a gift, you can use the details below.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Cash Gift Account</p>
                    <p className="text-xl font-bold font-serif">GTBank</p>
                    <p className="text-2xl font-black text-rose-600 tracking-wider">0123456789</p>
                    <p className="text-sm font-medium text-slate-600 mt-1 uppercase tracking-wider">Emeka & Ada Wedding</p>
                  </div>
                  
                  <button className="w-full border-2 border-slate-200 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    View Registry List <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-8 font-bold">Thank you for your generosity</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryPage;
