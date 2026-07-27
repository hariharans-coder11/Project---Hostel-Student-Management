import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Bell, Search, Menu, X, Sparkles } from 'lucide-react';
import campusBg from '../assets/campus_background.png';

const StudentDashboard = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden font-sans bg-slate-950 text-slate-100">
      {/* Absolute Global Dhaanish Building Background Image - Vibrant & Colorful */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-85 scale-100 transform filter saturate-175 brightness-105 contrast-110 transition-all duration-700"
        style={{ backgroundImage: `url(${campusBg})` }}
      />
      {/* Subtle Color Enhancement Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/30 to-blue-900/40 pointer-events-none" />

      {/* Retinal Fluid Display - Dynamic Colorful Animated Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-70">
        {/* Sky Blue / Cyan Liquid Glow Blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/60 via-sky-500/40 to-blue-600/30 filter blur-3xl animate-blob-1" />
        {/* Vivid Emerald / Gold Liquid Glow Blob */}
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-emerald-400/50 via-teal-300/40 to-yellow-400/30 filter blur-3xl animate-blob-2" />
        {/* Deep Violet / Magenta Liquid Glow Blob */}
        <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-gradient-to-r from-purple-500/50 via-indigo-600/40 to-pink-500/40 filter blur-3xl animate-blob-3" />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/75 z-40 lg:hidden backdrop-blur-md transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        {/* Top Header */}
        <header className="h-20 glass-header px-4 lg:px-8 flex items-center justify-between z-30 sticky top-0 border-b border-white/10">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-2xl text-slate-300 focus-within:ring-2 focus-within:ring-emerald-400/40 focus-within:bg-white/15 transition-all backdrop-blur-md">
              <Search size={18} className="text-emerald-400" />
              <input 
                type="text" 
                placeholder="Search outpasses, notices, menu..." 
                className="bg-transparent border-none outline-none w-72 text-sm text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles size={14} className="text-emerald-400 animate-spin-slow" />
              <span>Retinal Fluid UI v2.0</span>
            </div>

            <button className="relative p-2.5 rounded-2xl text-slate-300 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors">
              <Bell size={20} className="text-emerald-300" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            </button>
            <div className="h-8 w-px bg-white/10 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Campus Live</p>
                <p className="text-[11px] text-emerald-400 font-medium">Dhaanish Portal</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
