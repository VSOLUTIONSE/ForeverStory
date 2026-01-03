
import React, { useState } from 'react';
import { Wedding } from '../../types';
import { Save, Sparkles, Image as ImageIcon, Plus, Trash2, Camera, Info } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const StoryEditor: React.FC<{ wedding: Wedding | null, setWedding: any }> = ({ wedding, setWedding }) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [isGenerating, setIsGenerating] = useState(false);

  const tabs = [
    { id: 'hero', label: 'Main Display' },
    { id: 'story', label: 'Our Story' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'events', label: 'Events' },
    { id: 'party', label: 'Wedding Party' },
  ];

  const handleAIWriter = async () => {
    if (!wedding) return;
    setIsGenerating(true);
    try {
      const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(
        `Write a romantic, elegant "How We Met" story for a Nigerian couple named ${wedding.partner1_name} and ${wedding.partner2_name}. Keep it under 100 words and include a subtle mention of Lagos or another Nigerian setting.`
      );

      const newContent = result.response.text();
      setWedding((prev: any) => ({
        ...prev,
        how_we_met: { ...prev.how_we_met, content: newContent }
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!wedding) return null;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Story Editor</h1>
          <p className="text-slate-500">Last saved 2 minutes ago</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
            Discard
          </button>
          <button className="px-6 py-2.5 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-all flex items-center gap-2 shadow-lg shadow-rose-100">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id ? 'bg-rose-50 text-rose-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editor Main */}
        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'hero' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Camera className="w-5 h-5 text-rose-500" />
                Hero Section
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Partner 1 Name</label>
                    <input 
                      type="text" 
                      value={wedding.partner1_name} 
                      onChange={(e) => setWedding({...wedding, partner1_name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 ring-rose-500 outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Partner 2 Name</label>
                    <input 
                      type="text" 
                      value={wedding.partner2_name} 
                      onChange={(e) => setWedding({...wedding, partner2_name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 ring-rose-500 outline-none transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700">Main Hero Image</label>
                  <div className="aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center group cursor-pointer hover:border-rose-300 transition-all overflow-hidden relative">
                    <img src={wedding.hero_image_url} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Preview" />
                    <div className="relative z-10 flex flex-col items-center">
                      <ImageIcon className="w-10 h-10 text-slate-400 mb-2" />
                      <span className="text-sm font-bold text-slate-500">Change Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">The Story of Us</h3>
                <button 
                  onClick={handleAIWriter}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-bold hover:bg-amber-100 transition-all disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  {isGenerating ? 'Writing with AI...' : 'AI Magic Writer'}
                </button>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                <input 
                  type="text" 
                  value={wedding.how_we_met.title} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 ring-rose-500 outline-none transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">The Narrative</label>
                <textarea 
                  rows={8} 
                  value={wedding.how_we_met.content}
                  onChange={(e) => setWedding({...wedding, how_we_met: {...wedding.how_we_met, content: e.target.value}})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 ring-rose-500 outline-none transition-all resize-none"
                ></textarea>
                <p className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Keep it heartfelt and descriptive. Mention special locations!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Journey Timeline</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-sm font-bold hover:bg-rose-100 transition-all">
                  <Plus className="w-4 h-4" />
                  Add Milestone
                </button>
              </div>

              <div className="space-y-4">
                {wedding.our_journey.map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-center">
                    <div className="w-20 h-20 rounded-xl bg-white border border-slate-200 overflow-hidden shrink-0">
                      <img src={item.image_url} className="w-full h-full object-cover" alt="Milestone" />
                    </div>
                    <div className="flex-1">
                       <input type="text" value={item.date} className="bg-transparent border-none p-0 font-bold text-rose-600 mb-1 outline-none" />
                       <input type="text" value={item.event} className="bg-transparent border-none p-0 font-bold text-lg text-slate-800 w-full outline-none" />
                    </div>
                    <button className="p-3 text-slate-400 hover:text-rose-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs omitted for brevity in MVP but follow same pattern */}
        </div>
      </div>
    </div>
  );
};

export default StoryEditor;
