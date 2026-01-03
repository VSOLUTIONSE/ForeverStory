
import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Star, Trash2, Download, CheckCircle, Info } from 'lucide-react';
import { WishCategory } from '../../types';

const MOCK_WISHES = [
  { id: '1', name: 'Aunty Bunmi', message: 'May your home be filled with peace and children. Congratulations my dears!', category: WishCategory.PRAYER, favorite: true, date: '2024-05-12' },
  { id: '2', name: 'Tunde Lawal', message: 'Don’t ever go to bed angry! That’s the secret. Looking forward to the party!', category: WishCategory.ADVICE, favorite: false, date: '2024-05-11' },
  { id: '3', name: 'Zainab Bello', message: 'The most beautiful couple I know. Can’t wait for Dec 24!', category: WishCategory.CONGRATULATIONS, favorite: false, date: '2024-05-10' },
];

const WishesManager: React.FC = () => {
  const [wishes, setWishes] = useState(MOCK_WISHES);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Guest Wishes</h1>
          <p className="text-slate-500">Manage the digital guestbook for your celebration.</p>
        </div>
        <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
          <Download className="w-4 h-4" />
          Export to PDF
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 ring-rose-500 outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-600 outline-none">
            <option>All Categories</option>
            <option>Prayer</option>
            <option>Advice</option>
            <option>Congratulations</option>
          </select>
          <button className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-600">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="grid gap-4">
        {wishes.map((wish) => (
          <div key={wish.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  wish.category === WishCategory.PRAYER ? 'bg-amber-50 text-amber-600' :
                  wish.category === WishCategory.ADVICE ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'
                }`}>
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900">{wish.name}</h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2 py-0.5 bg-slate-50 rounded border border-slate-100">
                      {wish.category}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"{wish.message}"</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-3 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Sent on {wish.date}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className={`p-2 rounded-lg transition-colors ${wish.favorite ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:bg-slate-50'}`}>
                  <Star className={`w-5 h-5 ${wish.favorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {wishes.length === 0 && (
        <div className="py-20 text-center">
           <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
             <Info className="w-10 h-10" />
           </div>
           <h3 className="text-xl font-bold text-slate-900">No wishes yet</h3>
           <p className="text-slate-500">Share your link to start receiving messages from guests!</p>
        </div>
      )}
    </div>
  );
};

export default WishesManager;
