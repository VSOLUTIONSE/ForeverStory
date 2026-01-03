
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, ChevronLeft, Camera, Sparkles, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SetupWizard: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinish = () => {
    onComplete();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                step >= s ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100"
        >
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-4" />
                <h2 className="text-3xl font-serif">The Basics</h2>
                <p className="text-slate-500">Let's start with the names of the lucky couple.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Partner 1</label>
                  <input type="text" placeholder="e.g. Ada" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 ring-rose-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Partner 2</label>
                  <input type="text" placeholder="e.g. Emeka" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 ring-rose-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Wedding Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 ring-rose-500 outline-none" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Camera className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-serif">Hero Image</h2>
                <p className="text-slate-500">Choose a photo that captures your love.</p>
              </div>
              <div className="aspect-video rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                <Camera className="w-10 h-10 text-slate-300 mb-2" />
                <span className="text-sm font-bold text-slate-400">Upload high-res photo</span>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl flex gap-3 items-start border border-amber-100">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  Pro Tip: Landscape photos work best for your story banner. We'll automatically optimize them for all devices.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h2 className="text-3xl font-serif">Wedding Venue</h2>
                <p className="text-slate-500">Where is the celebration happening?</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Traditional Venue</label>
                <input type="text" placeholder="e.g. Landmark Center, Lagos" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 ring-rose-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">White Wedding Venue</label>
                <input type="text" placeholder="e.g. St. Peters, Abuja" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 ring-rose-500 outline-none" />
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between gap-4">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="flex-1 py-4 px-6 rounded-xl border-2 border-slate-100 font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            )}
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="flex-1 py-4 px-6 rounded-xl bg-rose-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition-all shadow-lg shadow-rose-100"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={handleFinish}
                className="flex-1 py-4 px-6 rounded-xl bg-rose-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition-all shadow-lg shadow-rose-100"
              >
                Finish Setup <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
        
        <p className="text-center text-slate-400 text-sm mt-8">
          Step {step} of 3 • You can edit these details later in your dashboard.
        </p>
      </div>
    </div>
  );
};

export default SetupWizard;
