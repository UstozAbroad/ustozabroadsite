
import React from 'react';
import { 
  ChevronRight, 
  Search, 
  Users, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  Star 
} from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/example-ustoz-abroad-registration";

interface HomeProps {
  onNavigate: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Active Mentors', value: '250+', icon: Users },
    { label: 'Universities', value: '1,200+', icon: GraduationCap },
    { label: 'Scholarships', value: '$2M+', icon: FileText },
    { label: 'Successful Admits', value: '4,500', icon: TrendingUp },
  ];

  const services = [
    { 
      title: 'University Finder', 
      desc: 'Discover your dream university based on your ranking and preferences.',
      icon: Search,
      color: 'bg-blue-100 text-blue-600',
      link: 'universities'
    },
    { 
      title: 'Expert Mentorship', 
      desc: 'Connect with students already studying at top global institutions.',
      icon: Users,
      color: 'bg-green-100 text-green-600',
      link: 'mentors'
    },
    { 
      title: 'AI Document Prep', 
      desc: 'Draft Motivation Letters and CVs with our Gemini-powered engine.',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600',
      link: 'admin' // Dashboard access via sign in
    },
    { 
      title: 'Scholarship Hub', 
      desc: 'Never miss a deadline with our automated scholarship alerts.',
      icon: GraduationCap,
      color: 'bg-orange-100 text-orange-600',
      link: 'scholarships'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Unlock Your</span>{' '}
                <span className="block text-blue-600 xl:inline">Global Potential</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
                "Ustoz Abroad" connects ambitious students in Uzbekistan with the world's best universities and mentors. Your journey to international education starts here.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                <button 
                  onClick={() => onNavigate('universities')}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg shadow-lg shadow-blue-200 transition-all hover:-translate-y-1"
                >
                  Find Universities
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('mentors')}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
                >
                  Book a Mentor
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full"
                  src="https://picsum.photos/seed/abroad/800/600"
                  alt="Student studying abroad"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Comprehensive Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              Everything you need to successfully apply and study at world-class universities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate(service.link)}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer"
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anvar Karimov", uni: "Columbia University", img: "https://picsum.photos/seed/man1/100/100", text: "Ustoz Abroad helped me structure my SOP and connect with a mentor who attended Columbia." },
              { name: "Dildora Azizova", uni: "Munich TU", img: "https://picsum.photos/seed/woman1/100/100", text: "Finding scholarships in Germany was overwhelming until I used this platform." },
              { name: "Bekzod Umarov", uni: "KAIST Korea", img: "https://picsum.photos/seed/man2/100/100", text: "The consultation was worth every penny. My mentor gave me insights into the Korean student visa process." },
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="flex items-center mb-6">
                  <img src={t.img} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-blue-600 text-sm">{t.uni}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{t.text}"</p>
                <div className="flex mt-4 text-orange-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">Ready to Start Your Global Journey?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">Join thousands of students from Uzbekistan who have already successfully applied abroad.</p>
          <button 
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
          >
            Create Free Account
          </button>
        </div>
      </section>
    </div>
  );
};
