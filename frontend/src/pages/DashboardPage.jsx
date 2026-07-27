import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TicketCheck, Clock, CheckCircle2, XCircle, ChevronRight, Wrench, Megaphone, Flame, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();
  const userName = user?.name || 'Hariharan';
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const announcements = [
    "📢 Hostel Gate Curfew timing extended to 9:30 PM for upcoming Tech Fest.",
    "🍲 Special Dinner Menu served tonight at Main Mess Hall from 7:30 PM.",
    "⚡ Scheduled Maintenance: High-speed Wi-Fi upgrade in Block A tonight at 11 PM.",
    "🏆 Inter-Hostel Badminton Championship registrations open now!",
    "📝 Monthly Outpass quota updated for all Dhaanish Chennai residents."
  ];

  const stats = [
    { 
      label: 'Total Outpasses', 
      value: '12', 
      icon: TicketCheck, 
      color: 'text-cyan-400', 
      badgeBg: 'bg-cyan-500/20 border-cyan-400/30', 
      gradient: 'from-cyan-500/20 to-blue-600/10'
    },
    { 
      label: 'Pending Approval', 
      value: '1', 
      icon: Clock, 
      color: 'text-amber-400', 
      badgeBg: 'bg-amber-500/20 border-amber-400/30', 
      gradient: 'from-amber-500/20 to-orange-600/10'
    },
    { 
      label: 'Approved', 
      value: '9', 
      icon: CheckCircle2, 
      color: 'text-emerald-400', 
      badgeBg: 'bg-emerald-500/20 border-emerald-400/30', 
      gradient: 'from-emerald-500/20 to-teal-600/10'
    },
    { 
      label: 'Rejected', 
      value: '2', 
      icon: XCircle, 
      color: 'text-rose-400', 
      badgeBg: 'bg-rose-500/20 border-rose-400/30', 
      gradient: 'from-rose-500/20 to-red-600/10'
    },
  ];

  const recentActivity = [
    { id: 1, title: 'Weekend Trip Home', status: 'Approved', date: 'Oct 15, 2023', icon: CheckCircle2, iconColor: 'text-emerald-400', statusClass: 'text-emerald-400 bg-emerald-500/15 border-emerald-400/30' },
    { id: 2, title: 'Medical Emergency', status: 'Approved', date: 'Sep 28, 2023', icon: CheckCircle2, iconColor: 'text-emerald-400', statusClass: 'text-emerald-400 bg-emerald-500/15 border-emerald-400/30' },
    { id: 3, title: 'Local Guardian Visit', status: 'Rejected', date: 'Sep 10, 2023', icon: XCircle, iconColor: 'text-rose-400', statusClass: 'text-rose-400 bg-rose-500/15 border-rose-400/30' },
  ];

  return (
    <div className="space-y-8 relative z-10">
      {/* Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 glass-card p-6 md:p-8 rounded-3xl">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Radio size={12} className="animate-pulse text-cyan-400" /> Dhaanish Student Portal
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Welcome back, {userName}!
          </h1>
          <p className="text-slate-300 mt-1 text-sm font-medium">{today}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-right">
            <p className="text-xs text-slate-400">Current Status</p>
            <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> In Campus (Block A)
            </p>
          </div>
        </div>
      </div>

      {/* Auto-Scrolling Horizontal Announcement Panel (Marquee Ticker) */}
      <div className="glass-card rounded-2xl p-4 overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md">
            <Megaphone size={14} className="animate-bounce" /> Live Ticker
          </div>
          
          <div className="overflow-hidden relative w-full">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
              {announcements.concat(announcements).map((notice, idx) => (
                <span key={idx} className="text-sm text-slate-200 font-medium inline-flex items-center gap-2 hover:text-cyan-300 cursor-pointer transition-colors">
                  <Flame size={14} className="text-cyan-400 shrink-0" />
                  {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`glass-card rounded-3xl p-6 relative overflow-hidden group cursor-default bg-gradient-to-br ${stat.gradient}`}
          >
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                <h3 className="text-3xl font-black text-white drop-shadow-sm">{stat.value}</h3>
              </div>
              <div className={`p-4 rounded-2xl ${stat.badgeBg} ${stat.color} border transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                <stat.icon size={26} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Outpasses Activity Card */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-6 lg:p-8 border border-white/20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Recent Outpasses</h2>
              <p className="text-xs text-slate-400">Track status of your recent campus pass requests</p>
            </div>
            <Link 
              to="/dashboard/outpass" 
              className="text-xs font-bold text-cyan-300 hover:text-cyan-200 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center gap-1 transition-all hover:bg-cyan-500/20"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <div key={activity.id} className="flex items-start gap-4 group">
                <div className="relative mt-1">
                  <div className={`rounded-2xl p-2.5 bg-white/10 border border-white/15 backdrop-blur-md relative z-10 ${activity.iconColor} shadow-md`}>
                    <activity.icon size={20} />
                  </div>
                  {index !== recentActivity.length - 1 && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-white/15 -z-0"></div>
                  )}
                </div>
                <div className="flex-1 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{activity.title}</h4>
                    <span className="text-xs font-medium text-slate-400">{activity.date}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${activity.statusClass}`}>
                      {activity.status}
                    </span>
                    <span className="text-xs text-slate-400">Dhaanish Gate #1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="glass-card rounded-3xl p-6 lg:p-8 h-fit border border-white/20">
          <h2 className="text-xl font-bold text-white mb-2">Quick Actions</h2>
          <p className="text-xs text-slate-400 mb-6">Fast access to key student utilities</p>

          <div className="space-y-4">
            <Link 
              to="/dashboard/outpass" 
              className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2.5 rounded-xl text-white shadow-md group-hover:scale-105 transition-transform">
                  <TicketCheck size={20} />
                </div>
                <div>
                  <span className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm block">Apply Outpass</span>
                  <span className="text-[11px] text-slate-400">Request gate pass approval</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400 group-hover:text-cyan-300 transition-colors" />
            </Link>
            
            <Link 
              to="/dashboard/maintenance" 
              className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 hover:border-amber-400/50 hover:bg-white/20 transition-all duration-300 group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-amber-500 to-orange-600 p-2.5 rounded-xl text-white shadow-md group-hover:scale-105 transition-transform">
                  <Wrench size={20} />
                </div>
                <div>
                  <span className="font-bold text-white group-hover:text-amber-300 transition-colors text-sm block">Report Issue</span>
                  <span className="text-[11px] text-slate-400">Maintenance & room repairs</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400 group-hover:text-amber-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
