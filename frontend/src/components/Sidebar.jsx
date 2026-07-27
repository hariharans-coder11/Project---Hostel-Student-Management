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
    <div className="w-72 h-screen bg-navy text-slate-300 flex flex-col transition-all duration-300">
      {/* Brand */}
      <div className="p-6 flex items-center gap-3 border-b border-navy-lighter">
        <div className="bg-emerald p-2 rounded-xl text-white">
          <Building2 size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">HMS</h1>
          <p className="text-xs text-slate-400 font-medium">Hostel Management</p>
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
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${isActive 
                ? 'bg-navy-light text-emerald border-l-4 border-emerald font-medium' 
                : 'hover:bg-navy-light hover:text-white border-l-4 border-transparent'
              }
            `}
          >
            <item.icon size={20} className="transition-transform group-hover:scale-110" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-navy-lighter">
        <div className="bg-navy-light rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-bold text-lg">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{user?.name || 'User'}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-400 truncate">{user?.room || 'No Room'}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-navy-lighter text-emerald-light">
                  {user?.role || 'STUDENT'}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center justify-center gap-2 w-full py-2 text-sm text-slate-400 hover:text-white hover:bg-navy rounded-lg transition-colors"
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
