
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Universities: React.FC = () => {
  const { universities } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filteredUnis = universities.filter(u => 
    (u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     u.country.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCountry === 'All' || u.country === selectedCountry)
  );

  const countries = ['All', ...new Set(universities.map(u => u.country))];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="max-w-xl flex-grow">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Discover Universities</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search universities..." 
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <select 
                className="pl-9 pr-8 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none shadow-sm text-sm"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        {filteredUnis.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400">No universities found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnis.map(uni => (
              <div key={uni.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
                <div className="relative h-48">
                  <img src={uni.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={uni.name} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-700 shadow-sm">
                    Rank #{uni.ranking}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{uni.name}</h3>
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {uni.country}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {uni.programs.map(p => (
                      <span key={p} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-md font-medium uppercase tracking-wider">
                        {p}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm">
                    View Details
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
