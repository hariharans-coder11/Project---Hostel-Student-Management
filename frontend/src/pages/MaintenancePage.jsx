import React from 'react';
import { Wrench, Clock, AlertTriangle } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Maintenance Requests</h1>
        <p className="text-slate-500 mt-1">Report issues in your room or common areas</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center max-w-2xl mx-auto mt-10">
        <div className="w-24 h-24 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <Wrench size={40} className="text-navy animate-[spin_4s_linear_infinite]" />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full border-4 border-white">
            <Clock size={16} className="text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Coming Soon</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          We are currently building a better maintenance tracking system. You will soon be able to raise tickets, track progress, and communicate with maintenance staff directly.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-left">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-800">For Urgent Issues</h4>
            <p className="text-sm text-amber-700 mt-1">Please contact the hostel warden or drop by the maintenance office in Block A ground floor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
