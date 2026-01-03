
import React from 'react';
import { Settings, Palette, Bell, Shield, Moon, Sun, Monitor } from 'lucide-react';
import { THEMES } from '../../constants';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Customize your account and page appearance.</p>
      </div>

      {/* Theme Presets */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Palette className="w-5 h-5 text-rose-500" />
          Theme Selection
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {THEMES.map((theme) => (
            <button 
              key={theme.id}
              className="flex flex-col gap-3 p-4 rounded-2xl border-2 border-slate-50 hover:border-rose-200 transition-all text-left group"
            >
              <div className="flex gap-1 h-12 w-full rounded-lg overflow-hidden border border-slate-100">
                <div className="flex-1" style={{ backgroundColor: theme.colors[0] }}></div>
                <div className="flex-1" style={{ backgroundColor: theme.colors[1] }}></div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 group-hover:text-rose-600">{theme.name}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Premium Theme</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mode & Animations */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-500" />
            Display Mode
          </h3>
          <div className="flex gap-2 p-1 bg-slate-50 rounded-2xl">
             <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white shadow-sm text-sm font-bold text-slate-900">
               <Sun className="w-4 h-4" /> Light
             </button>
             <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-900">
               <Moon className="w-4 h-4" /> Dark
             </button>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
           <h3 className="text-lg font-bold flex items-center gap-2">
            <Bell className="w-5 h-5 text-rose-500" />
            Notifications
          </h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-bold">New Wish Alerts</p>
                 <p className="text-xs text-slate-400">Email when guests send wishes</p>
               </div>
               <div className="w-12 h-6 bg-rose-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
               </div>
             </div>
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-bold">Gift Notifications</p>
                 <p className="text-xs text-slate-400">Push notification for new gifts</p>
               </div>
               <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          Security
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-bold text-sm">
              Change Password
            </button>
            <button className="w-full text-left p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-bold text-sm">
              Two-Factor Authentication
            </button>
          </div>
          <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
            <p className="text-sm font-bold text-rose-600 mb-1">Danger Zone</p>
            <p className="text-xs text-rose-400 mb-4">Deleting your wedding page is permanent and cannot be undone.</p>
            <button className="text-sm font-black text-rose-600 hover:underline">Delete ForeverStory Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
