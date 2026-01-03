
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative overflow-hidden bg-rose-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
            alt="Wedding"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center p-20 text-white">
          <div className="flex items-center gap-3 mb-10">
            <Heart className="w-10 h-10 fill-white" />
            <span className="font-serif text-3xl font-bold tracking-tight">ForeverStory</span>
          </div>
          <h2 className="text-6xl font-serif mb-6 leading-tight">Start your <br/>journey today.</h2>
          <p className="text-xl text-rose-100 leading-relaxed max-w-md">
            The most elegant way to share your wedding details and cherish memories forever.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-[#FAF9F6]">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <Heart className="w-8 h-8 text-rose-600 fill-rose-600" />
            <span className="font-serif text-2xl font-bold">ForeverStory</span>
          </div>

          <h3 className="text-3xl font-serif mb-2">{isLogin ? 'Welcome Back' : 'Join ForeverStory'}</h3>
          <p className="text-slate-500 mb-8">{isLogin ? 'Sign in to manage your wedding page.' : 'Create a beautiful space for your big day.'}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Partner 1 Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" placeholder="e.g. Ada" className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 ring-rose-500 outline-none transition-all" />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="email" placeholder="ada@example.com" className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 ring-rose-500 outline-none transition-all" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                {isLogin && <a href="#" className="text-xs font-bold text-rose-600 hover:text-rose-700">Forgot password?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 ring-rose-500 outline-none transition-all" />
              </div>
            </div>

            <button type="submit" className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700 hover:scale-[1.02] transition-all shadow-lg shadow-rose-200">
              {isLogin ? 'Sign In' : 'Create Account'} <ChevronRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="ml-2 font-bold text-rose-600 hover:text-rose-700"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
