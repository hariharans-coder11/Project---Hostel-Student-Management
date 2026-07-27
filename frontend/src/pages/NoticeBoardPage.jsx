import React from 'react';
import { Megaphone, Calendar, FileText, BellRing } from 'lucide-react';

const NoticeBoardPage = () => {
  const notices = [
    {
      id: 1,
      title: 'Hostel Fee Payment Deadline',
      date: 'Oct 20, 2023',
      category: 'IMPORTANT',
      content: 'The last date for paying the hostel fees for the upcoming semester is October 30th. Please ensure payment is made to avoid late fees.',
      isNew: true,
      icon: BellRing,
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      id: 2,
      title: 'Water Supply Maintenance',
      date: 'Oct 18, 2023',
      category: 'MAINTENANCE',
      content: 'There will be no water supply in Block B on October 20th from 10:00 AM to 2:00 PM due to tank cleaning.',
      isNew: true,
      icon: Megaphone,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 3,
      title: 'Diwali Celebration & Special Dinner',
      date: 'Oct 15, 2023',
      category: 'EVENT',
      content: 'Join us for Diwali celebrations in the central courtyard on November 10th. A special festive dinner will be served in the mess.',
      isNew: false,
      icon: Calendar,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 4,
      title: 'Revised Outpass Rules',
      date: 'Oct 01, 2023',
      category: 'POLICY',
      content: 'Please note the new outpass rules effective immediately. All outpasses must be applied at least 24 hours in advance.',
      isNew: false,
      icon: FileText,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Notice Board</h1>
        <p className="text-slate-500 mt-1">Stay updated with hostel announcements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
            {notice.isNew && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                New
              </div>
            )}
            
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${notice.bg} ${notice.color} group-hover:scale-110 transition-transform`}>
                <notice.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${notice.color}`}>
                    {notice.category}
                  </span>
                  <span className="text-xs text-slate-400">• {notice.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{notice.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {notice.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardPage;
