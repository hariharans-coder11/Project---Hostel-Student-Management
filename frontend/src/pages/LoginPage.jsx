import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Mail, Lock, ArrowRight, Zap } from 'lucide-react';

const LoginPage = () => {
  const { login, demoLogin } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    demoLogin();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-navy transform -skew-y-6 origin-top-left -z-0"></div>
      
      <div className="w-full max-w-md p-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald/30 transform rotate-3 hover:rotate-0 transition-transform">
              <Building2 size={32} />
            </div>
            <h1 className="text-2xl font-bold text-navy">Welcome to HMS</h1>
            <p className="text-slate-500 text-sm mt-1">Sign in to manage your hostel life</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl mb-6 text-center border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                  placeholder="student@university.edu"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input type="checkbox" className="rounded text-emerald focus:ring-emerald" />
                Remember me
              </label>
              <a href="#" className="text-emerald font-medium hover:text-emerald-dark">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70 group"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Or try the demo</span>
            </div>
          </div>

          <button
            onClick={handleDemoLogin}
            className="w-full mt-6 py-3 px-4 bg-emerald/10 text-emerald-dark font-medium rounded-xl hover:bg-emerald hover:text-white transition-colors flex items-center justify-center gap-2 group"
          >
            <Zap size={18} className="group-hover:scale-110 transition-transform" />
            Quick Demo Login
          </button>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-8">
          © {new Date().getFullYear()} Hostel Management System
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
