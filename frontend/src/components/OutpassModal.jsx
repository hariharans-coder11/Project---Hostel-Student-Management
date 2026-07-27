import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Calendar, MapPin, Download, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const OutpassModal = ({ isOpen, onClose, onApply }) => {
  const { user } = useAuth();
  const [step, setStep] = useState(1); // 1: Form, 2: Pass
  const [formData, setFormData] = useState({
    destination: '',
    reason: '',
    fromDate: '',
    toDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, API call goes here
    onApply(formData);
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ destination: '', reason: '', fromDate: '', toDate: '' });
    onClose();
  };

  const qrData = JSON.stringify({
    id: 'OP-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    student: user?.name,
    room: user?.room,
    dest: formData.destination,
    valid: `${formData.fromDate} to ${formData.toDate}`,
    status: 'APPROVED'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {step === 1 ? (
          // Form State
          <>
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Apply for Outpass</h3>
              <button 
                onClick={handleClose}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                    placeholder="Where are you going?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">From</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="datetime-local"
                      name="fromDate"
                      required
                      value={formData.fromDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">To</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="datetime-local"
                      name="toDate"
                      required
                      value={formData.toDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Reason</label>
                <textarea
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all resize-none"
                  placeholder="Please state the reason for your outpass..."
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-emerald text-white font-medium rounded-xl hover:bg-emerald-dark shadow-sm shadow-emerald/20 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        ) : (
          // QR Pass State
          <div className="p-6 bg-slate-50 flex flex-col items-center">
            <div className="w-full bg-white rounded-xl shadow-sm border border-dashed border-emerald p-6 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 rounded-full border-r border-dashed border-emerald"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 rounded-full border-l border-dashed border-emerald"></div>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald/10 text-emerald rounded-full mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Digital Pass</h3>
                <span className="inline-block mt-2 px-3 py-1 bg-emerald text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Approved
                </span>
              </div>

              <div className="flex justify-center mb-6 bg-white p-2 rounded-xl">
                <QRCodeSVG value={qrData} size={160} level="H" includeMargin={true} />
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Student</p>
                    <p className="font-semibold text-slate-800">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Room</p>
                    <p className="font-semibold text-slate-800">{user?.room}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Destination</p>
                  <p className="font-semibold text-slate-800">{formData.destination}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Valid Between</p>
                  <p className="text-sm font-medium text-slate-700">
                    {new Date(formData.fromDate).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}
                    <span className="mx-2 text-slate-400">to</span>
                    {new Date(formData.toDate).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full mt-6">
              <button
                onClick={handleClose}
                className="flex-1 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                className="flex-1 py-2.5 px-4 bg-emerald text-white font-medium rounded-xl hover:bg-emerald-dark shadow-sm shadow-emerald/20 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Save Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutpassModal;
