import React from 'react';
import { UtensilsCrossed, Coffee, Sun, Moon } from 'lucide-react';

const MessMenuPage = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const menuData = {
    Monday: {
      breakfast: 'Idli, Sambar, Chutney, Tea/Coffee',
      lunch: 'Roti, Dal Tadka, Aloo Gobi, Rice, Curd',
      dinner: 'Phulka, Paneer Butter Masala, Rice, Gulab Jamun'
    },
    Tuesday: {
      breakfast: 'Poha, Jalebi, Tea/Coffee',
      lunch: 'Rajma Chawal, Roti, Salad, Papad',
      dinner: 'Roti, Mix Veg, Dal Makhani, Rice, Kheer'
    },
    // Adding dummy data for rest to keep it looking nice
    Wednesday: { breakfast: 'Aloo Paratha, Curd, Pickle', lunch: 'Kadhi Pakora, Rice, Roti', dinner: 'Veg Biryani, Raita, Salan' },
    Thursday: { breakfast: 'Upma, Coconut Chutney', lunch: 'Chole Bhature, Onion Salad', dinner: 'Roti, Malai Kofta, Jeera Rice' },
    Friday: { breakfast: 'Dosa, Sambar, Chutney', lunch: 'Roti, Palak Paneer, Dal, Rice', dinner: 'Egg Curry / Soya Chaap, Roti, Rice' },
    Saturday: { breakfast: 'Puri Sabzi, Jalebi', lunch: 'Veg Pulao, Dal Fry, Roti', dinner: 'Special Thali (Chef Choice)' },
    Sunday: { breakfast: 'Masala Dosa, Filter Coffee', lunch: 'Special Lunch (Festive Menu)', dinner: 'Light Dinner (Khichdi/Soup)' },
  };

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Weekly Mess Menu</h1>
          <p className="text-slate-500 mt-1">Check what's cooking this week</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {days.map((day) => (
          <div 
            key={day} 
            className={`bg-white rounded-2xl shadow-sm border transition-all ${
              day === currentDay 
                ? 'border-emerald ring-1 ring-emerald/20 scale-[1.01]' 
                : 'border-slate-200 hover:border-emerald/50'
            }`}
          >
            <div className={`px-6 py-4 border-b flex items-center justify-between rounded-t-2xl ${
              day === currentDay ? 'bg-emerald/5 border-emerald/10' : 'border-slate-100 bg-slate-50/50'
            }`}>
              <h3 className={`text-lg font-bold ${day === currentDay ? 'text-emerald-700' : 'text-slate-700'}`}>
                {day} {day === currentDay && <span className="ml-2 text-xs px-2 py-1 bg-emerald text-white rounded-md font-medium uppercase">Today</span>}
              </h3>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Breakfast */}
              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-xl h-fit text-orange-500">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Breakfast</h4>
                  <p className="text-slate-700 font-medium">{menuData[day].breakfast}</p>
                  <p className="text-xs text-slate-400 mt-1">7:30 AM - 9:30 AM</p>
                </div>
              </div>

              {/* Lunch */}
              <div className="flex gap-4 md:border-l md:border-slate-100 md:pl-6">
                <div className="bg-yellow-50 p-3 rounded-xl h-fit text-yellow-600">
                  <Sun size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Lunch</h4>
                  <p className="text-slate-700 font-medium">{menuData[day].lunch}</p>
                  <p className="text-xs text-slate-400 mt-1">12:30 PM - 2:30 PM</p>
                </div>
              </div>

              {/* Dinner */}
              <div className="flex gap-4 md:border-l md:border-slate-100 md:pl-6">
                <div className="bg-indigo-50 p-3 rounded-xl h-fit text-indigo-500">
                  <Moon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Dinner</h4>
                  <p className="text-slate-700 font-medium">{menuData[day].dinner}</p>
                  <p className="text-xs text-slate-400 mt-1">7:30 PM - 9:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessMenuPage;
