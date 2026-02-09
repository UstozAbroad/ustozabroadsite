
import React from 'react';
import { Calendar, Award, ExternalLink, Bell } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Scholarships: React.FC = () => {
  const { scholarships } = useData();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Scholarship Hub</h1>
            <p className="text-slate-500">Regularly updated funding opportunities.</p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-sm">
            <Bell size={18} className="mr-2" />
            Alert Me
          </button>
        </div>

        {scholarships.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
             <p className="text-slate-400">No active scholarships listed at the moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {scholarships.map(s => (
              <div key={s.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-300 transition-colors">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="bg-blue-100 p-4 rounded-xl mr-6 text-blue-600">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{s.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">Provider: {s.provider}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map(t => (
                        <span key={t} className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end space-y-4">
                  <div className="text-right">
                    <div className="flex items-center text-slate-400 text-xs mb-1 justify-end">
                      <Calendar size={12} className="mr-1" />
                      Deadline
                    </div>
                    <div className={`font-bold ${new Date(s.deadline) < new Date() ? 'text-red-500' : 'text-slate-900'}`}>
                      {s.deadline}
                    </div>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center hover:bg-slate-800 transition-all">
                    Apply Now
                    <ExternalLink size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
