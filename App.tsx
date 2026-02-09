
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Menu, 
  X, 
  GraduationCap, 
  Users, 
  FileText, 
  Info
} from 'lucide-react';
import { Home } from './pages/Home';
import { Universities } from './pages/Universities';
import { Mentors } from './pages/Mentors';
import { Scholarships } from './pages/Scholarships';
import { Dashboard } from './pages/Dashboard';
import { Architecture } from './pages/Architecture';
import { AdminLogin } from './pages/AdminLogin';
import { AdminPanel } from './pages/AdminPanel';
import { Language } from './types';
import { DataProvider } from './context/DataContext';

const GOOGLE_FORM_URL = "https://forms.gle/example-ustoz-abroad-registration";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>(Language.EN);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home', icon: LayoutDashboard },
    { name: 'Universities', id: 'universities', icon: GraduationCap },
    { name: 'Mentors', id: 'mentors', icon: Users },
    { name: 'Scholarships', id: 'scholarships', icon: FileText },
    { name: 'Architecture', id: 'architecture', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage === 'admin') {
      return isAdminLoggedIn ? (
        <AdminPanel onLogout={() => setIsAdminLoggedIn(false)} />
      ) : (
        <AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} />
      );
    }

    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavClick} />;
      case 'universities': return <Universities />;
      case 'mentors': return <Mentors />;
      case 'scholarships': return <Scholarships />;
      case 'dashboard': return <Dashboard />;
      case 'architecture': return <Architecture />;
      default: return <Home onNavigate={handleNavClick} />;
    }
  };

  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
                <div className="bg-blue-600 p-2 rounded-lg mr-2">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-blue-900 tracking-tight">Ustoz Abroad</span>
              </div>

              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.id 
                        ? 'text-blue-600 border-b-2 border-blue-600 py-4' 
                        : 'text-slate-600 hover:text-blue-600 py-4'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-2 py-1"
                >
                  <option value={Language.EN}>EN</option>
                  <option value={Language.UZ}>UZ</option>
                  <option value={Language.RU}>RU</option>
                </select>
                <button 
                  onClick={() => handleNavClick('admin')}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                >
                  {isAdminLoggedIn ? 'Admin Panel' : 'Sign In'}
                </button>
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 py-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center w-full px-6 py-3 text-left text-slate-600 hover:bg-slate-50"
                >
                  <item.icon className="w-5 h-5 mr-3 text-blue-600" />
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center w-full px-6 py-3 text-left text-slate-600 hover:bg-slate-50 font-bold text-blue-600"
              >
                Sign In
              </button>
            </div>
          )}
        </header>

        <main className="flex-grow">
          {renderPage()}
        </main>

        <footer className="bg-slate-900 text-white pt-16 pb-8 text-center">
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex items-center justify-center mb-4">
                <Globe className="text-blue-500 w-6 h-6 mr-2" />
                <span className="text-xl font-bold">Ustoz Abroad</span>
              </div>
              <p className="text-slate-500 text-sm">© 2024 Ustoz Abroad. Built for Uzbekistan students.</p>
          </div>
        </footer>
      </div>
    </DataProvider>
  );
};

export default App;
