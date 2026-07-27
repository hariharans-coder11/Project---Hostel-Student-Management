import React from 'react';
import { Phone, ShieldAlert, HeartPulse, Flame, AlertCircle } from 'lucide-react';

const EmergencyPage = () => {
  const contacts = [
    {
      title: 'Hostel Warden',
      name: 'Dr. Ramesh Kumar',
      phone: '+91 98765 43210',
      description: 'For all hostel related immediate issues',
      icon: ShieldAlert,
      color: 'bg-indigo-500'
    },
    {
      title: 'Medical Emergency',
      name: 'Campus Hospital',
      phone: '+91 98765 43211',
      description: '24x7 Ambulance and Medical Support',
      icon: HeartPulse,
      color: 'bg-red-500'
    },
    {
      title: 'Security Desk',
      name: 'Main Gate',
      phone: '+91 98765 43212',
      description: 'For security concerns and visitor verification',
      icon: AlertCircle,
      color: 'bg-slate-700'
    },
    {
      title: 'Fire Station',
      name: 'City Fire Dept',
      phone: '101',
      description: 'In case of fire emergency',
      icon: Flame,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-red-700 tracking-tight flex items-center gap-2">
            <ShieldAlert size={28} /> Emergency Contacts
          </h1>
          <p className="text-red-600/80 mt-1 font-medium">Use these contacts only in case of real emergencies</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 active:scale-95">
          <Phone size={20} /> Call SOS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-start gap-5 hover:border-red-200 transition-colors">
            <div className={`p-4 rounded-2xl text-white ${contact.color}`}>
              <contact.icon size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{contact.title}</h3>
              <p className="text-xl font-bold text-slate-800 mt-1">{contact.name}</p>
              <div className="flex items-center gap-2 mt-2 text-slate-600">
                <Phone size={16} />
                <span className="font-semibold text-lg">{contact.phone}</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">{contact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyPage;
