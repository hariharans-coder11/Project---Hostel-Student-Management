import React, { useState } from 'react';
import { Plus, Search, QrCode, Filter, MoreVertical } from 'lucide-react';
import OutpassModal from '../components/OutpassModal';

const OutpassPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [outpasses, setOutpasses] = useState([
    { id: 'OP-1029', destination: 'City Center Mall', from: '2023-10-25T14:00', to: '2023-10-25T20:00', status: 'APPROVED' },
    { id: 'OP-1028', destination: 'Railway Station (Going Home)', from: '2023-10-15T08:00', to: '2023-10-18T22:00', status: 'APPROVED' },
    { id: 'OP-1027', destination: 'Local Market', from: '2023-10-12T16:00', to: '2023-10-12T19:00', status: 'REJECTED' },
    { id: 'OP-1026', destination: 'Friends Birthday Party', from: '2023-11-01T18:00', to: '2023-11-01T23:30', status: 'PENDING' },
  ]);

  const handleApply = (data) => {
    // Add to list for demo purposes
    const newOutpass = {
      id: 'OP-' + Math.floor(1000 + Math.random() * 9000),
      destination: data.destination,
      from: data.fromDate,
      to: data.toDate,
      status: 'APPROVED' // Auto-approve for demo
    };
    setOutpasses([newOutpass, ...outpasses]);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'APPROVED': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'PENDING': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'REJECTED': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Outpass Management</h1>
          <p className="text-slate-500 mt-1">Apply for and manage your outpasses</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald text-white font-medium rounded-xl hover:bg-emerald-dark shadow-sm shadow-emerald/20 transition-all active:scale-95 whitespace-nowrap"
        >
          <Plus size={20} />
          <span>Apply Outpass</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search outpasses..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium whitespace-nowrap">
          <Filter size={18} />
          <span>Filter Status</span>
        </button>
      </div>

      {/* Table/List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="px-6 py-4">ID / Destination</th>
                <th className="px-6 py-4">Valid Between</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {outpasses.map((pass) => (
                <tr key={pass.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{pass.destination}</div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">{pass.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-700">
                      {new Date(pass.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">to</div>
                    <div className="text-sm text-slate-700">
                      {new Date(pass.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusStyle(pass.status)}`}>
                      {pass.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {pass.status === 'APPROVED' && (
                        <button className="p-2 text-emerald hover:bg-emerald-50 rounded-lg transition-colors tooltip" title="Show QR Pass">
                          <QrCode size={20} />
                        </button>
                      )}
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <OutpassModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onApply={handleApply}
      />
    </div>
  );
};

export default OutpassPage;
