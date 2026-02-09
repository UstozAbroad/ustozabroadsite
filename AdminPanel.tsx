
import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  LogOut, 
  GraduationCap, 
  Users, 
  Award, 
  X, 
  Image as ImageIcon 
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const AdminPanel: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const { 
    universities, addUniversity, deleteUniversity,
    mentors, addMentor, deleteMentor,
    scholarships, addScholarship, deleteScholarship
  } = useData();

  const [activeTab, setActiveTab] = useState<'unis' | 'mentors' | 'scholarships'>('unis');
  const [showForm, setShowForm] = useState(false);

  // Dynamic Form States
  const [formData, setFormData] = useState<any>({});

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now().toString();
    
    if (activeTab === 'unis') {
      addUniversity({ 
        id, 
        name: formData.name, 
        country: formData.country, 
        ranking: Number(formData.ranking), 
        programs: formData.programs?.split(',').map((p: string) => p.trim()) || [],
        image: `https://picsum.photos/seed/${id}/400/250`
      });
    } else if (activeTab === 'mentors') {
      addMentor({
        id,
        name: formData.name,
        university: formData.university,
        country: formData.country,
        specialization: formData.specialization,
        rating: 5.0,
        price: Number(formData.price),
        image: `https://picsum.photos/seed/${id}/200/200`
      });
    } else if (activeTab === 'scholarships') {
      addScholarship({
        id,
        title: formData.title,
        provider: formData.provider,
        amount: formData.amount,
        deadline: formData.deadline,
        tags: formData.tags?.split(',').map((t: string) => t.trim()) || []
      });
    }

    setFormData({});
    setShowForm(false);
  };

  const tabs = [
    { id: 'unis', label: 'Universities', icon: GraduationCap },
    { id: 'mentors', label: 'Mentors', icon: Users },
    { id: 'scholarships', label: 'Scholarships', icon: Award },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Admin Panel</h1>
            <p className="text-slate-500">Manage platform data and content</p>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center text-red-600 font-bold text-sm bg-white border border-red-100 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex space-x-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm w-fit">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); setShowForm(false); }}
              className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setShowForm(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center hover:bg-slate-800 transition-all shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" /> Add New {activeTab === 'unis' ? 'University' : activeTab === 'mentors' ? 'Mentor' : 'Scholarship'}
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">Add New Item</h3>
                <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
              </div>
              <form onSubmit={handleAdd} className="p-6 space-y-4">
                {activeTab === 'unis' && (
                  <>
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="University Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Country" onChange={e => setFormData({...formData, country: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" type="number" placeholder="QS World Ranking" onChange={e => setFormData({...formData, ranking: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Programs (comma separated)" onChange={e => setFormData({...formData, programs: e.target.value})} required />
                  </>
                )}
                {activeTab === 'mentors' && (
                  <>
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Mentor Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="University Studying At" onChange={e => setFormData({...formData, university: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Country" onChange={e => setFormData({...formData, country: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Specialization (e.g. IT, Med)" onChange={e => setFormData({...formData, specialization: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" type="number" placeholder="Session Price ($)" onChange={e => setFormData({...formData, price: e.target.value})} required />
                  </>
                )}
                {activeTab === 'scholarships' && (
                  <>
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Scholarship Title" onChange={e => setFormData({...formData, title: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Provider (e.g. UK Gov)" onChange={e => setFormData({...formData, provider: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Amount (e.g. Full Tuition)" onChange={e => setFormData({...formData, amount: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" type="date" onChange={e => setFormData({...formData, deadline: e.target.value})} required />
                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Tags (comma separated)" onChange={e => setFormData({...formData, tags: e.target.value})} required />
                  </>
                )}
                <div className="flex space-x-4 pt-4">
                   <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl">Cancel</button>
                   <button type="submit" className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200">Save Item</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* List Content */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Name / Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Details</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {activeTab === 'unis' && universities.map(uni => (
                <tr key={uni.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 mr-3 flex items-center justify-center text-slate-400"><ImageIcon size={18} /></div>
                      <span className="font-bold text-slate-900">{uni.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{uni.country} • Rank #{uni.ranking}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => deleteUniversity(uni.id)} className="text-red-400 hover:text-red-600 p-2"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
              {activeTab === 'mentors' && mentors.map(m => (
                <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{m.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{m.university} • {m.country}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => deleteMentor(m.id)} className="text-red-400 hover:text-red-600 p-2"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
              {activeTab === 'scholarships' && scholarships.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{s.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">By {s.provider} • Due {s.deadline}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => deleteScholarship(s.id)} className="text-red-400 hover:text-red-600 p-2"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {(activeTab === 'unis' ? universities : activeTab === 'mentors' ? mentors : scholarships).length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400">No items in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
