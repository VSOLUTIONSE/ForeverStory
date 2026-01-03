
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, MessageSquare, ChevronRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            ForeverStory
          </Link>
          <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
            <a href="#features" className="hover:text-rose-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-rose-600 transition-colors">Pricing</a>
            <Link to="/auth" className="text-slate-900 border-b-2 border-transparent hover:border-rose-600 transition-all">Login</Link>
            <Link to="/auth" className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-6">
              ✨ Made for Nigerian Weddings
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900 mb-8">
              Celebrate your <span className="text-rose-600 italic">love story</span> with your community.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              The premium platform for Nigerian couples to share their journey, collect prayers from family, and gracefully manage wedding gifts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="bg-rose-600 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-rose-700 hover:scale-105 transition-all shadow-lg shadow-rose-200">
                Create Your Story <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/ada-and-emeka" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                View Demo
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
                alt="Nigerian Wedding" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
            
            {/* Floating Interaction Cards */}
            <motion.div 
              className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
              </div>
              <div>
                <p className="text-sm font-bold">New Wish</p>
                <p className="text-xs text-slate-500">Aunty Toyin sent a prayer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Everything for your big day</h2>
          <p className="text-slate-600">Designed to handle the unique spirit of Nigerian celebrations.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Sparkles, 
              title: 'Beautiful Storytelling', 
              desc: 'Share "How We Met" and your journey timeline with stunning layouts and photo galleries.' 
            },
            { 
              icon: MessageSquare, 
              title: 'Digital Guestbook', 
              desc: 'Collect prayers, advice, and congratulations from guests. Filter and keep the most cherished ones.' 
            },
            { 
              icon: Gift, 
              title: 'Graceful Gifting', 
              desc: 'Seamlessly share your registry or cash gift options. Track contributors in a clean dashboard.' 
            },
          ].map((feat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 text-rose-600">
                <feat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="py-20 border-y border-slate-100 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 font-serif text-2xl italic">
                <Heart className="w-6 h-6" />
                Celebrated in Lagos
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            ForeverStory
          </div>
          <p className="text-slate-400">© 2024 ForeverStory. Handcrafted for Nigerian Lovers.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rose-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
