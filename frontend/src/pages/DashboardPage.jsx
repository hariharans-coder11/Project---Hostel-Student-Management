import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TicketCheck, Clock, CheckCircle2, XCircle, ChevronRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const stats = [
    { label: 'Total Outpasses', value: '12', icon: TicketCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Approval', value: '1', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Approved', value: '9', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Rejected', value: '2', icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  const recentActivity = [
    { id: 1, title: 'Weekend Trip Home', status: 'Approved', date: 'Oct 15, 2023', icon: CheckCircle2, iconColor: 'text-emerald-500' },
    { id: 2, title: 'Medical Emergency', status: 'Approved', date: 'Sep 28, 2023', icon: CheckCircle2, iconColor: 'text-emerald-500' },
    { id: 3, title: 'Local Guardian Visit', status: 'Rejected', date: 'Sep 10, 2023', icon: XCircle, iconColor: 'text-red-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Welcome back, {user?.name?.split(' ')[0] || 'Student'}!</h1>
        <p className="text-slate-500 mt-2 font-medium">{today}</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-default">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
              </div>
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon size={24} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800">Recent Outpasses</h2>
            <Link to="/dashboard/outpass" className="text-sm font-medium text-emerald hover:text-emerald-dark flex items-center gap-1 transition-colors">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <div key={activity.id} className="flex items-start gap-4 group">
                <div className="relative mt-1">
                  <div className={`bg-white rounded-full relative z-10 ${activity.iconColor}`}>
                    <activity.icon size={20} className="bg-white" />
                  </div>
                  {index !== recentActivity.length - 1 && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-100 -z-0"></div>
                  )}
                </div>
                <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-slate-800 group-hover:text-emerald transition-colors">{activity.title}</h4>
                    <span className="text-sm text-slate-500">{activity.date}</span>
                  </div>
                  <p className="text-sm mt-1">
                    <span className={`font-medium ${
                      activity.status === 'Approved' ? 'text-emerald-600' : 
                      activity.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {activity.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 h-fit">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link 
              to="/dashboard/outpass" 
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-emerald hover:bg-emerald/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald/10 p-2 rounded-lg text-emerald group-hover:bg-emerald group-hover:text-white transition-colors">
                  <TicketCheck size={20} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-emerald transition-colors">Apply Outpass</span>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald transition-colors" />
            </Link>
            
            <Link 
              to="/dashboard/maintenance" 
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-navy hover:bg-navy/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-navy/10 p-2 rounded-lg text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <Wrench size={20} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-navy transition-colors">Report Issue</span>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-navy transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
