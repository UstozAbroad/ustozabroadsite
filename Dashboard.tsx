
import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AI_GENERATOR_SYSTEM_PROMPT = `You are an expert Study Abroad Consultant for students from Uzbekistan. Help the user draft high-quality documents like Motivation Letters, Personal Statements, or CVs based on their university of choice. Be encouraging and professional.`;

export const Dashboard: React.FC = () => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDocument = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I need a document for my application: ${aiPrompt}`,
        config: { systemInstruction: AI_GENERATOR_SYSTEM_PROMPT }
      });
      setAiResponse(response.text || 'No response generated.');
    } catch (error) {
      console.error(error);
      setAiResponse('Error generating document. Please check your API key.');
    } finally {
      setIsGenerating(false);
    }
  };

  const applications = [
    { name: 'Stanford Engineering', status: 'In Review', date: '2024-05-12', progress: 75, color: 'bg-yellow-500' },
    { name: 'Bocconi Business', status: 'Approved', date: '2024-04-30', progress: 100, color: 'bg-green-500' },
    { name: 'NTU Singapore', status: 'Draft', date: '2024-06-01', progress: 20, color: 'bg-slate-300' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Dashboard Area */}
          <div className="flex-grow space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, Aziz!</h1>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                <TrendingUp size={12} className="mr-1" />
                Student Level 4
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Applications</p>
                <p className="text-3xl font-extrabold text-slate-900">3</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Saved Unis</p>
                <p className="text-3xl font-extrabold text-slate-900">12</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Consultations</p>
                <p className="text-3xl font-extrabold text-slate-900">2</p>
              </div>
            </div>

            {/* Application Tracking */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Active Applications</h2>
                <button className="flex items-center text-blue-600 text-sm font-bold hover:underline">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-6">
                {applications.map((app, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{app.name}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${app.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                        {app.status}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className={`${app.color} h-full transition-all duration-1000`} style={{ width: `${app.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Document Assistant */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex items-center mb-6">
                <Sparkles className="mr-3 text-blue-200" />
                <h2 className="text-xl font-bold">AI Document Assistant</h2>
              </div>
              <p className="text-blue-100 text-sm mb-6">Need help writing your Statement of Purpose? Tell us about your goal and let our AI draft a base for you.</p>
              <div className="space-y-4">
                <textarea 
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 h-32"
                  placeholder="e.g., I'm applying for a Master's in Data Science at TU Munich. I have a 3.8 GPA and 2 years of experience at a fintech startup..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                ></textarea>
                <button 
                  onClick={handleGenerateDocument}
                  disabled={isGenerating}
                  className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Draft My Document'}
                </button>
              </div>
              {aiResponse && (
                <div className="mt-8 bg-white/5 border border-white/10 p-6 rounded-xl animate-in fade-in duration-500">
                  <h4 className="font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="mr-2 text-green-400" size={18} />
                    AI Draft
                  </h4>
                  <pre className="text-xs text-blue-50 whitespace-pre-wrap font-sans leading-relaxed">
                    {aiResponse}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Profile Info */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold mb-6 flex items-center">
                <FileText className="mr-2 text-blue-600" size={18} />
                My Documents
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center text-xs">
                    <CheckCircle className="text-green-500 mr-2" size={14} />
                    IELTS Certificate
                  </div>
                  <button className="text-blue-600 text-[10px] font-bold">View</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center text-xs">
                    <CheckCircle className="text-green-500 mr-2" size={14} />
                    Passport Scan
                  </div>
                  <button className="text-blue-600 text-[10px] font-bold">View</button>
                </div>
                <div className="flex items-center justify-between p-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
                  <div className="flex items-center text-xs">
                    <AlertCircle className="mr-2" size={14} />
                    Diploma Transcripts
                  </div>
                  <button className="bg-slate-200 p-1 rounded-md">
                    <Upload size={14} />
                  </button>
                </div>
              </div>
              <button className="w-full mt-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg flex items-center justify-center">
                <Plus size={14} className="mr-2" />
                Upload New
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold mb-4">Support</h3>
              <p className="text-slate-500 text-xs mb-4">Need urgent help with your application? Our local consultants are available 24/7.</p>
              <button className="w-full py-2 border-2 border-blue-600 text-blue-600 text-sm font-bold rounded-lg">
                Chat with Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
