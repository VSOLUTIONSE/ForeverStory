
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Edit3, 
  MessageSquare, 
  Gift, 
  Settings, 
  LogOut, 
  Heart,
  Eye,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ onLogout }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Story Editor', path: '/dashboard/story', icon: Edit3 },
    { name: 'Wishes', path: '/dashboard/wishes', icon: MessageSquare },
    { name: 'Gifts', path: '/dashboard/gifts', icon: Gift },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-slate-200 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col z-20`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          {isSidebarOpen && <span className="font-serif font-bold text-xl tracking-tight">ForeverStory</span>}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-rose-50 text-rose-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={onLogout}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium">Log out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg hidden md:block">
               <Menu className="w-5 h-5 text-slate-600" />
             </button>
             <h2 className="text-lg font-bold text-slate-800">
               {navItems.find(n => n.path === location.pathname)?.name || 'Dashboard'}
             </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/ada-and-emeka" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-all"
            >
              <Eye className="w-4 h-4" />
              Live Preview
              <ExternalLink className="w-3 h-3" />
            </Link>
            <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=dashboard" alt="Profile" />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           <AnimatePresence mode="wait">
             <motion.div
               key={location.pathname}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
             >
               <Outlet />
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
