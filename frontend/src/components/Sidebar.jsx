import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TicketCheck, 
  Wrench, 
  UtensilsCrossed, 
  Megaphone, 
  ShieldAlert, 
  Building2,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Outpass', path: '/dashboard/outpass', icon: TicketCheck },
    { name: 'Maintenance', path: '/dashboard/maintenance', icon: Wrench },
    { name: 'Mess Menu', path: '/dashboard/mess-menu', icon: UtensilsCrossed },
    { name: 'Notice Board', path: '/dashboard/notices', icon: Megaphone },
    { name: 'Emergency', path: '/dashboard/emergency', icon: ShieldAlert },
  ];

  return (
    <div className="w-72 h-screen glass-sidebar text-slate-200 flex flex-col transition-all duration-300 relative z-20">
      {/* Brand */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 p-2.5 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
            <Building2 size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">HMS</h1>
            <p className="text-xs text-emerald-400 font-semibold tracking-wide">Hostel Management</p>
          </div>
        </div>
        
        {/* Dhaanish Chennai Branding Requirement */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            Dhaanish Chennai
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group relative overflow-hidden
              ${isActive 
                ? 'bg-white/15 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 font-semibold backdrop-blur-md' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
              }
            `}
          >
            <item.icon size={20} className="transition-transform group-hover:scale-110 text-emerald-400" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="bg-white/10 rounded-2xl p-4 flex flex-col gap-3 border border-white/15 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-500/30">
              {user?.name ? user.name.charAt(0) : 'H'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user?.name || 'Hariharan'}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-300 truncate">{user?.room || 'A-204'}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {user?.role || 'STUDENT'}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center justify-center gap-2 w-full py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-white/5"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
