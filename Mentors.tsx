
import React from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Mentors: React.FC = () => {
  const { mentors } = useData();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Connect with Mentors</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Direct advice from students studying abroad.</p>
        </div>

        {mentors.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
             <p className="text-slate-400">Our mentors are currently unavailable. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map(m => (
              <div key={m.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <img src={m.image} className="w-16 h-16 rounded-2xl object-cover mr-4" />
                  <div>
                    <h3 className="font-bold text-slate-900">{m.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{m.university}</p>
                    <div className="flex items-center text-slate-400 text-xs mt-1">
                      <MapPin size={12} className="mr-1" />
                      {m.country}
                    </div>
                  </div>
                  <div className="ml-auto flex items-center bg-orange-50 px-2 py-1 rounded-lg">
                    <Star size={12} className="text-orange-400 fill-current mr-1" />
                    <span className="text-orange-700 text-xs font-bold">{m.rating}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                    Expertise: {m.specialization}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="text-xs text-slate-400">From</span>
                    <p className="font-bold text-slate-900">${m.price}<span className="text-xs text-slate-400 font-normal"> / session</span></p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-blue-700">
                    <Calendar size={14} className="mr-2" />
                    Book
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
