
import React from 'react';
import { Wedding } from '../../types';
import { 
  Eye, 
  MessageSquare, 
  Gift as GiftIcon, 
  TrendingUp, 
  Heart,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', views: 400, wishes: 24 },
  { name: 'Tue', views: 300, wishes: 13 },
  { name: 'Wed', views: 200, wishes: 98 },
  { name: 'Thu', views: 278, wishes: 39 },
  { name: 'Fri', views: 189, wishes: 48 },
  { name: 'Sat', views: 239, wishes: 38 },
  { name: 'Sun', views: 349, wishes: 43 },
];

const Overview: React.FC<{ wedding: Wedding | null }> = ({ wedding }) => {
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-slate-900">Welcome back, Emeka & Ada!</h1>
        <p className="text-slate-500">Your wedding journey is going great. Here's what's happening today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Views', value: '1,240', icon: Eye, color: 'bg-blue-500', trend: '+12%' },
          { label: 'Wishes Received', value: '86', icon: MessageSquare, color: 'bg-rose-500', trend: '+5%' },
          { label: 'Gifts Initiated', value: '₦420,000', icon: GiftIcon, color: 'bg-green-500', trend: '+18%' },
          { label: 'Days Remaining', value: '42', icon: Clock, color: 'bg-amber-500', trend: null },
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 ${m.color} opacity-5 -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-110`}></div>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${m.color} text-white`}>
                <m.icon className="w-5 h-5" />
              </div>
              {m.trend && (
                <span className="text-xs font-bold text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {m.trend}
                </span>
              )}
            </div>
            <p className="text-slate-500 text-sm font-medium">{m.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
             <h3 className="font-bold text-lg">Visitor Engagement</h3>
             <select className="bg-slate-50 border-none text-sm font-bold rounded-lg px-3 py-2 outline-none">
               <option>Last 7 days</option>
               <option>Last 30 days</option>
             </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="views" stroke="#F43F5E" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
           <h3 className="font-bold text-lg mb-6">Recent Activity</h3>
           <div className="space-y-6">
             {[
               { user: 'Aunty Bunmi', action: 'sent a new wish', time: '2m ago', icon: MessageSquare, color: 'text-rose-500', bg: 'bg-rose-50' },
               { user: 'Tunde', action: 'viewed your story', time: '15m ago', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
               { user: 'Anonymous', action: 'initiated a gift', time: '1h ago', icon: GiftIcon, color: 'text-green-500', bg: 'bg-green-50' },
               { user: 'Chief Obi', action: 'favorited a wish', time: '3h ago', icon: Heart, color: 'text-amber-500', bg: 'bg-amber-50' },
             ].map((act, i) => (
               <div key={i} className="flex gap-4">
                 <div className={`w-10 h-10 rounded-full ${act.bg} flex items-center justify-center shrink-0`}>
                   <act.icon className={`w-5 h-5 ${act.color}`} />
                 </div>
                 <div className="flex-1">
                   <p className="text-sm font-bold text-slate-800">{act.user}</p>
                   <p className="text-xs text-slate-500">{act.action}</p>
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">{act.time}</span>
               </div>
             ))}
           </div>
           <button className="w-full mt-8 py-3 rounded-xl border-2 border-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
             View All Activity
           </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
