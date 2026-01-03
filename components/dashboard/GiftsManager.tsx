
import React, { useState } from 'react';
import { Gift, DollarSign, Download, ExternalLink, MoreVertical, Search, CheckCircle, Clock, XCircle } from 'lucide-react';
import { GiftStatus } from '../../types';

const MOCK_GIFTS = [
  { id: '1', donor: 'Chief & Mrs. Obi', amount: 50000, status: GiftStatus.COMPLETED, date: '2024-05-12', ref: 'FS-7721' },
  { id: '2', donor: 'Chidi Okoro', amount: 10000, status: GiftStatus.PENDING, date: '2024-05-11', ref: 'FS-9912' },
  { id: '3', donor: 'Zainab Bello', amount: 25000, status: GiftStatus.COMPLETED, date: '2024-05-10', ref: 'FS-8821' },
  { id: '4', donor: 'Anonymous', amount: 5000, status: GiftStatus.CANCELLED, date: '2024-05-09', ref: 'FS-1122' },
];

const GiftsManager: React.FC = () => {
  const [gifts, setGifts] = useState(MOCK_GIFTS);

  const getStatusColor = (status: GiftStatus) => {
    switch (status) {
      case GiftStatus.COMPLETED: return 'bg-green-50 text-green-600 border-green-100';
      case GiftStatus.PENDING: return 'bg-amber-50 text-amber-600 border-amber-100';
      case GiftStatus.CANCELLED: return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  const getStatusIcon = (status: GiftStatus) => {
    switch (status) {
      case GiftStatus.COMPLETED: return <CheckCircle className="w-3 h-3 mr-1" />;
      case GiftStatus.PENDING: return <Clock className="w-3 h-3 mr-1" />;
      case GiftStatus.CANCELLED: return <XCircle className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gift Tracking</h1>
          <p className="text-slate-500">Keep track of the generosity from your loved ones.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            CSV Export
          </button>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
            Add Manual Record
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Total Expected</p>
           <p className="text-3xl font-black text-slate-900">₦90,000</p>
           <p className="text-xs text-slate-400 mt-1">From 4 contributors</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Confirmed Cash</p>
           <p className="text-3xl font-black text-green-600">₦75,000</p>
           <p className="text-xs text-green-400 mt-1">83% Success Rate</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Pending Intents</p>
           <p className="text-3xl font-black text-amber-500">₦10,000</p>
           <p className="text-xs text-amber-400 mt-1">1 follow-up needed</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold">Recent Contributions</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Filter by name..." className="pl-9 pr-4 py-2 rounded-lg bg-slate-50 border-none text-sm outline-none w-64" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Donor</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {gifts.map((gift) => (
                <tr key={gift.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{gift.donor}</p>
                        <p className="text-xs text-slate-400">Ref: {gift.ref}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-black text-slate-900">₦{gift.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(gift.status)}`}>
                      {getStatusIcon(gift.status)}
                      {gift.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{gift.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-slate-100 flex justify-center">
           <button className="text-sm font-bold text-rose-600 hover:text-rose-700">View All Transactions</button>
        </div>
      </div>
    </div>
  );
};

export default GiftsManager;
