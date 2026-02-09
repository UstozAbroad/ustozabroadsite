import { GoogleGenAI } from "@google/genai";

// --- Translations ---
const translations = {
  uz: {
    nav_home: "Asosiy",
    nav_unis: "Universitetlar",
    nav_mentors: "Mentorlar",
    nav_scholarships: "Grantlar",
    nav_arch: "Arxitektura",
    auth_signin: "Kirish",
    auth_admin: "Admin Panel",
    hero_title: "Kelajagingizni <br><span class='text-blue-600'>Biz Bilan</span> Quring",
    hero_sub: "Ustoz Abroad — O'zbekistonlik talabalar uchun dunyoning nufuzli universitetlariga yo'l ochuvchi platforma.",
    btn_find_uni: "Universitetlarni topish",
    btn_book_mentor: "Mentorlar bilan uchrashish",
    stats_unis: "Universitetlar",
    stats_mentors: "Mentorlar",
    stats_scholarships: "Stipendiyalar",
    stats_students: "Muvaffaqiyatli talabalar",
    cta_title: "Sayohatni bugun boshlang",
    cta_sub: "Bepul ro'yxatdan o'ting va barcha imkoniyatlardan foydalaning.",
    btn_create_acc: "Hisob ochish",
    search_placeholder: "Qidiruv...",
    filter_all: "Barchasi",
    rank: "Reyting",
    btn_details: "Batafsil",
    mentor_title: "Tajribali Mentorlar",
    btn_book: "Bron qilish",
    per_hour: "/ soat",
    scholarship_title: "Grantlar va Stipendiyalar",
    deadline: "Muddati",
    btn_apply: "Hozir topshirish",
    arch_title: "Tizim Arxitekturasi",
    login_title: "Admin Kirish",
    btn_login: "Kirish",
    logout: "Chiqish",
    admin_title: "Boshqaruv Paneli",
    btn_add: "Qo'shish",
    ai_title: "AI Hujjat Yordamchisi",
    ai_sub: "Motivatsiya xati tayyorlashda qiynalyapsizmi? AI sizga yordam beradi.",
    ai_placeholder: "Masalan: Men Germaniyaga topshirmoqchiman...",
    btn_ai_gen: "Generatsiya qilish",
    footer_desc: "O'zbekistonlik talabalar uchun dunyo eshiklarini ochamiz."
  },
  ru: {
    nav_home: "Главная",
    nav_unis: "Университеты",
    nav_mentors: "Менторы",
    nav_scholarships: "Гранты",
    nav_arch: "Архитектура",
    auth_signin: "Войти",
    auth_admin: "Админ Панель",
    hero_title: "Постройте <span class='text-blue-600'>Будущее</span> с Нами",
    hero_sub: "Ustoz Abroad — платформа, открывающая двери в лучшие университеты мира для студентов из Узбекистана.",
    btn_find_uni: "Найти университеты",
    btn_book_mentor: "Встретиться с ментором",
    stats_unis: "Университеты",
    stats_mentors: "Менторы",
    stats_scholarships: "Стипендии",
    stats_students: "Успешные студенты",
    cta_title: "Начните путь сегодня",
    cta_sub: "Зарегистрируйтесь бесплатно и используйте все возможности.",
    btn_create_acc: "Создать аккаунт",
    search_placeholder: "Поиск...",
    filter_all: "Все",
    rank: "Рейтинг",
    btn_details: "Подробнее",
    mentor_title: "Опытные Менторы",
    btn_book: "Забронировать",
    per_hour: "/ час",
    scholarship_title: "Гранты и Стипендии",
    deadline: "Дедлайн",
    btn_apply: "Подать заявку",
    arch_title: "Архитектура Системы",
    login_title: "Вход в систему",
    btn_login: "Войти",
    logout: "Выйти",
    admin_title: "Панель Управления",
    btn_add: "Добавить",
    ai_title: "AI Помощник",
    ai_sub: "Трудно написать мотивационное письмо? Наш ИИ поможет вам.",
    ai_placeholder: "Например: Я хочу поступить в Германию...",
    btn_ai_gen: "Генерировать",
    footer_desc: "Открываем двери в мир для студентов Узбекистана."
  },
  en: {
    nav_home: "Home",
    nav_unis: "Universities",
    nav_mentors: "Mentors",
    nav_scholarships: "Scholarships",
    nav_arch: "Architecture",
    auth_signin: "Sign In",
    auth_admin: "Admin Panel",
    hero_title: "Unlock Your <br><span class='text-blue-600'>Global Potential</span>",
    hero_sub: "Ustoz Abroad connects ambitious students in Uzbekistan with the world's best universities and mentors.",
    btn_find_uni: "Find Universities",
    btn_book_mentor: "Meet Mentors",
    stats_unis: "Universities",
    stats_mentors: "Mentors",
    stats_scholarships: "Scholarships",
    stats_students: "Successful Admits",
    cta_title: "Start Your Journey Today",
    cta_sub: "Register for free and unlock all opportunities.",
    btn_create_acc: "Create Account",
    search_placeholder: "Search...",
    filter_all: "All",
    rank: "Rank",
    btn_details: "Details",
    mentor_title: "Expert Mentors",
    btn_book: "Book Session",
    per_hour: "/ hour",
    scholarship_title: "Grants & Scholarships",
    deadline: "Deadline",
    btn_apply: "Apply Now",
    arch_title: "System Architecture",
    login_title: "Admin Login",
    btn_login: "Login",
    logout: "Logout",
    admin_title: "Admin Dashboard",
    btn_add: "Add New",
    ai_title: "AI Document Assistant",
    ai_sub: "Struggling with your Statement of Purpose? Let AI help you draft one.",
    ai_placeholder: "e.g., I want to apply for CS at Oxford...",
    btn_ai_gen: "Generate Draft",
    footer_desc: "Opening global doors for students from Uzbekistan."
  }
};

// --- State ---
let state = {
  lang: 'uz',
  currentPage: 'home',
  isAdminLoggedIn: false,
  activeAdminTab: 'unis',
  searchQuery: '',
  selectedCountry: 'Barchasi',
  universities: [
    { id: '1', name: 'Oxford University', country: 'United Kingdom', ranking: 1, programs: ['Computer Science'], image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80' },
    { id: '2', name: 'MIT', country: 'United States', ranking: 2, programs: ['Engineering'], image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
    { id: '3', name: 'University of Tokyo', country: 'Japan', ranking: 28, programs: ['Robotics'], image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80' },
  ],
  mentors: [
    { id: '1', name: 'Abdurahmon J.', university: 'Harvard', country: 'USA', specialization: 'Computer Science', rating: 4.9, price: 15, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
    { id: '2', name: 'Shaxzoda M.', university: 'TU Berlin', country: 'Germany', specialization: 'Energy', rating: 5.0, price: 10, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  ],
  scholarships: [
    { id: '1', title: 'Chevening Scholarship', provider: 'UK Government', deadline: '2024-11-05', tags: ['UK', 'Master'] },
    { id: '2', title: 'DAAD Scholarship', provider: 'Germany', deadline: '2024-10-15', tags: ['Germany', 'Master'] },
  ]
};

const t = (key) => translations[state.lang][key] || key;

// --- Dark Mode Logic ---
window.toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  lucide.createIcons();
};

// --- Main App Logic ---
const renderApp = () => {
  const mainNav = document.getElementById('mainNav');
  const mobileMenu = document.getElementById('mobileMenu');
  const authBtn = document.getElementById('authBtn');
  const mainContent = document.getElementById('mainContent');
  const footerText = document.getElementById('footerText');

  // Update Navigation
  const navItems = [
    { id: 'home', key: 'nav_home' },
    { id: 'universities', key: 'nav_unis' },
    { id: 'mentors', key: 'nav_mentors' },
    { id: 'scholarships', key: 'nav_scholarships' },
    { id: 'architecture', key: 'nav_arch' }
  ];

  const navHtml = navItems.map(item => `
    <button onclick="navigateTo('${item.id}')" class="nav-link h-full px-1 text-sm font-bold transition-colors ${state.currentPage === item.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'}">
      ${t(item.key)}
    </button>
  `).join('');
  
  mainNav.innerHTML = navHtml;
  mobileMenu.innerHTML = navItems.map(item => `<button onclick="navigateTo('${item.id}')" class="block w-full text-left font-bold text-slate-600 dark:text-slate-300 py-2 border-b border-slate-50 dark:border-slate-800">${t(item.key)}</button>`).join('') +
    `<button onclick="navigateTo('admin')" class="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold mt-4">${state.isAdminLoggedIn ? t('auth_admin') : t('auth_signin')}</button>`;

  authBtn.innerText = state.isAdminLoggedIn ? t('auth_admin') : t('auth_signin');
  footerText.innerText = t('footer_desc');

  // Route Content
  if (state.currentPage === 'admin') {
    mainContent.innerHTML = state.isAdminLoggedIn ? renderAdminPanel() : renderAdminLogin();
  } else {
    switch (state.currentPage) {
      case 'home': mainContent.innerHTML = renderHome(); break;
      case 'universities': mainContent.innerHTML = renderUniversities(); break;
      case 'mentors': mainContent.innerHTML = renderMentors(); break;
      case 'scholarships': mainContent.innerHTML = renderScholarships(); break;
      case 'architecture': mainContent.innerHTML = renderArchitecture(); break;
      case 'dashboard': mainContent.innerHTML = renderDashboard(); break;
      default: mainContent.innerHTML = renderHome(); break;
    }
  }

  lucide.createIcons();
};

// --- Page Builders ---
const renderHome = () => `
  <div class="fade-in">
    <section class="bg-white dark:bg-slate-950 pt-16 pb-24 md:pt-24 md:pb-32 transition-colors">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">${t('hero_title')}</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">${t('hero_sub')}</p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button onclick="navigateTo('universities')" class="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 dark:shadow-blue-900/20 hover:-translate-y-1 transition-all">${t('btn_find_uni')}</button>
            <button onclick="navigateTo('mentors')" class="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">${t('btn_book_mentor')}</button>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" class="rounded-[2.5rem] shadow-2xl grayscale-[0.2] dark:grayscale-0" alt="Study abroad">
        </div>
      </div>
    </section>

    <section class="bg-blue-600 py-16">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div><div class="text-3xl font-bold mb-1">1,200+</div><div class="text-blue-100 text-xs uppercase font-bold">${t('stats_unis')}</div></div>
        <div><div class="text-3xl font-bold mb-1">250+</div><div class="text-blue-100 text-xs uppercase font-bold">${t('stats_mentors')}</div></div>
        <div><div class="text-3xl font-bold mb-1">$2M+</div><div class="text-blue-100 text-xs uppercase font-bold">${t('stats_scholarships')}</div></div>
        <div><div class="text-3xl font-bold mb-1">4,500</div><div class="text-blue-100 text-xs uppercase font-bold">${t('stats_students')}</div></div>
      </div>
    </section>

    <section class="py-24 bg-slate-900 dark:bg-black text-white text-center">
      <h2 class="text-3xl font-bold mb-6">${t('cta_title')}</h2>
      <p class="text-slate-400 mb-10 max-w-xl mx-auto">${t('cta_sub')}</p>
      <button onclick="window.open('https://forms.gle/example', '_blank')" class="bg-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">${t('btn_create_acc')}</button>
    </section>
  </div>
`;

const renderUniversities = () => {
  const filtered = state.universities.filter(u => 
    (u.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || u.country.toLowerCase().includes(state.searchQuery.toLowerCase())) &&
    (state.selectedCountry === t('filter_all') || u.country === state.selectedCountry)
  );
  const countries = [t('filter_all'), ...new Set(state.universities.map(u => u.country))];

  return `
    <div class="max-w-7xl mx-auto px-4 py-12 fade-in">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div class="flex-grow max-w-xl w-full">
          <h1 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">${t('nav_unis')}</h1>
          <div class="relative">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"></i>
            <input type="text" placeholder="${t('search_placeholder')}" class="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value="${state.searchQuery}" oninput="window.handleSearch(event)">
          </div>
        </div>
        <select onchange="window.handleCountryFilter(event)" class="bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-6 py-4 rounded-2xl shadow-sm outline-none w-full md:w-auto">
          ${countries.map(c => `<option value="${c}" ${state.selectedCountry === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${filtered.map(u => `
          <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
            <div class="relative h-56 overflow-hidden">
              <img src="${u.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${u.name}">
              <div class="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">${t('rank')} #${u.ranking}</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold mb-2 dark:text-white">${u.name}</h3>
              <div class="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-6"><i data-lucide="map-pin" class="w-4 h-4 mr-1"></i> ${u.country}</div>
              <button class="w-full py-4 bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all">${t('btn_details')}</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

const renderMentors = () => `
  <div class="max-w-7xl mx-auto px-4 py-12 fade-in">
    <h1 class="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">${t('mentor_title')}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${state.mentors.map(m => `
        <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
          <img src="${m.image}" class="w-24 h-24 rounded-2xl object-cover mb-4 sm:mb-0 sm:mr-8 border-4 border-slate-50 dark:border-slate-800">
          <div class="flex-grow">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-bold dark:text-white">${m.name}</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium text-sm">${m.university}</p>
              </div>
              <div class="hidden sm:flex bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-xl text-xs font-bold items-center">
                <i data-lucide="star" class="w-3 h-3 mr-1 fill-current"></i> ${m.rating}
              </div>
            </div>
            <p class="text-slate-500 dark:text-slate-400 text-xs mb-6 font-medium uppercase tracking-wider">${m.specialization}</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-slate-900 dark:text-white">$${m.price}<span class="text-xs text-slate-400 font-normal"> ${t('per_hour')}</span></span>
              <button class="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-all">${t('btn_book')}</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderScholarships = () => `
  <div class="max-w-5xl mx-auto px-4 py-12 fade-in">
    <h1 class="text-3xl font-bold mb-12 text-slate-900 dark:text-white">${t('scholarship_title')}</h1>
    <div class="space-y-6">
      ${state.scholarships.map(s => `
        <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2 dark:text-white">${s.title}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">${s.provider}</p>
            <div class="flex justify-center md:justify-start space-x-2">
              ${s.tags.map(tag => `<span class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] px-2 py-1 rounded-lg font-bold uppercase">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="flex flex-col items-center md:items-end">
            <div class="mb-4">
              <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">${t('deadline')}</p>
              <p class="font-bold text-slate-900 dark:text-white">${s.deadline}</p>
            </div>
            <button class="bg-slate-900 dark:bg-slate-800 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-all">${t('btn_apply')}</button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderArchitecture = () => `
  <div class="max-w-7xl mx-auto px-4 py-12 fade-in">
    <h1 class="text-3xl font-bold mb-12 text-slate-900 dark:text-white">${t('arch_title')}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h2 class="text-xl font-bold mb-6 flex items-center text-blue-600 dark:text-blue-400"><i data-lucide="layers" class="mr-3"></i> Core Stack</h2>
        <div class="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          <p><strong>Frontend:</strong> React/Vanilla JS + Tailwind CSS</p>
          <p><strong>Backend:</strong> Node.js Microservices</p>
          <p><strong>Database:</strong> PostgreSQL (Primary) + Redis (Cache)</p>
          <p><strong>AI Hub:</strong> Google Gemini 3 Flash / Pro</p>
          <p><strong>DevOps:</strong> Docker, AWS S3, Cloudflare CDN</p>
        </div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h2 class="text-xl font-bold mb-6 flex items-center text-green-600 dark:text-green-400"><i data-lucide="shield" class="mr-3"></i> Security & Compliance</h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          All documents are stored using AES-256 encryption. We implement RBAC (Role-Based Access Control) to ensure student privacy. 
          Compliance with local Uzbekistan data protection laws and international GDPR standards.
        </p>
      </div>
    </div>
  </div>
`;

const renderAdminLogin = () => `
  <div class="min-h-[70vh] flex items-center justify-center fade-in px-4">
    <div class="max-w-md w-full bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
      <h1 class="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">${t('login_title')}</h1>
      <form onsubmit="window.handleLogin(event)" class="space-y-6">
        <div>
          <label class="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Login</label>
          <input id="loginInput" type="text" class="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="admin" required>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Password</label>
          <input id="passInput" type="password" class="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="admin123" required>
        </div>
        <button type="submit" class="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">${t('btn_login')}</button>
      </form>
    </div>
  </div>
`;

const renderAdminPanel = () => {
  const categories = {
    unis: { list: state.universities, label: t('nav_unis') },
    mentors: { list: state.mentors, label: t('nav_mentors') },
    scholarships: { list: state.scholarships, label: t('nav_scholarships') }
  };
  const current = categories[state.activeAdminTab];
  
  return `
    <div class="max-w-7xl mx-auto px-4 py-12 fade-in">
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
        <div>
          <h1 class="text-3xl font-bold text-slate-900 dark:text-white">${t('admin_title')}</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm">Welcome back, Admin</p>
        </div>
        <div class="flex space-x-4">
          <button onclick="navigateTo('dashboard')" class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold px-6 py-2 rounded-2xl border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 transition-all">AI Helper</button>
          <button onclick="window.handleLogout()" class="text-red-500 dark:text-red-400 font-bold text-sm bg-white dark:bg-slate-900 border border-red-100 dark:border-red-900/30 px-6 py-2 rounded-2xl hover:bg-red-50 transition-all">${t('logout')}</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mb-8 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm w-fit">
        <button onclick="window.setAdminTab('unis')" class="px-6 py-3 rounded-xl font-bold text-sm transition-all ${state.activeAdminTab === 'unis' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}">${t('nav_unis')}</button>
        <button onclick="window.setAdminTab('mentors')" class="px-6 py-3 rounded-xl font-bold text-sm transition-all ${state.activeAdminTab === 'mentors' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}">${t('nav_mentors')}</button>
        <button onclick="window.setAdminTab('scholarships')" class="px-6 py-3 rounded-xl font-bold text-sm transition-all ${state.activeAdminTab === 'scholarships' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}">${t('nav_scholarships')}</button>
      </div>

      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div class="p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <h2 class="font-bold text-xl dark:text-white">${current.label}</h2>
          <button onclick="window.handleAddItem()" class="bg-slate-900 dark:bg-slate-800 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center hover:bg-slate-800 dark:hover:bg-slate-700 transition-all"><i data-lucide="plus" class="w-4 h-4 mr-1"></i> ${t('btn_add')}</button>
        </div>
        <table class="w-full text-left">
          <thead class="bg-slate-50 dark:bg-slate-800 border-b border-slate-50 dark:border-slate-700">
            <tr>
              <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Name / Title</th>
              <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50 dark:divide-slate-800">
            ${current.list.map(item => `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td class="px-8 py-5 font-bold text-slate-700 dark:text-slate-300">${item.name || item.title}</td>
                <td class="px-8 py-5 text-right">
                  <button onclick="window.handleDeleteItem('${item.id}')" class="text-red-400 hover:text-red-600 p-2 transition-colors"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        ${current.list.length === 0 ? '<div class="p-20 text-center text-slate-400">Empty</div>' : ''}
      </div>
    </div>
  `;
};

const renderDashboard = () => `
  <div class="max-w-5xl mx-auto px-4 py-12 fade-in">
    <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
      <div class="relative z-10">
        <div class="flex items-center mb-8"><i data-lucide="sparkles" class="w-8 h-8 mr-4 text-blue-200"></i><h1 class="text-3xl font-bold">${t('ai_title')}</h1></div>
        <p class="text-blue-100 mb-10 leading-relaxed text-lg max-w-2xl">${t('ai_sub')}</p>
        <div class="space-y-6">
          <textarea id="aiPrompt" class="w-full p-6 bg-white/10 border border-white/20 rounded-3xl outline-none focus:ring-4 focus:ring-white/10 placeholder-blue-200 h-48 text-lg" placeholder="${t('ai_placeholder')}"></textarea>
          <button id="aiBtn" onclick="window.handleGenerateAI()" class="w-full py-5 bg-white text-blue-600 font-extrabold rounded-3xl shadow-xl hover:bg-blue-50 transition-all text-lg flex items-center justify-center">
            <span id="aiBtnText">${t('btn_ai_gen')}</span>
          </button>
        </div>
        <div id="aiRes" class="mt-12 hidden bg-white/5 border border-white/10 p-8 rounded-3xl animate-in zoom-in duration-300">
           <h4 class="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4">Generated Content</h4>
           <div id="aiContent" class="text-sm leading-relaxed whitespace-pre-wrap font-sans text-blue-50 bg-white/5 p-6 rounded-2xl border border-white/5"></div>
        </div>
      </div>
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
    </div>
  </div>
`;

// --- Global Window Handlers ---
window.navigateTo = (page) => {
  state.currentPage = page;
  state.searchQuery = '';
  window.toggleMobileMenu(false);
  renderApp();
  window.scrollTo(0, 0);
};

window.handleLangChange = (e) => {
  state.lang = e.target.value;
  state.selectedCountry = t('filter_all');
  renderApp();
};

window.toggleMobileMenu = (force) => {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  if (!menu || !icon) return;
  if (force === false || !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    icon.setAttribute('data-lucide', 'menu');
  } else {
    menu.classList.remove('hidden');
    icon.setAttribute('data-lucide', 'x');
  }
  lucide.createIcons();
};

window.handleSearch = (e) => {
  state.searchQuery = e.target.value;
  renderApp();
};

window.handleCountryFilter = (e) => {
  state.selectedCountry = e.target.value;
  renderApp();
};

window.handleLogin = (e) => {
  e.preventDefault();
  const u = document.getElementById('loginInput').value;
  const p = document.getElementById('passInput').value;
  if (u === 'admin' && p === 'admin123') {
    state.isAdminLoggedIn = true;
    renderApp();
  } else {
    alert('Xato login yoki parol!');
  }
};

window.handleLogout = () => {
  state.isAdminLoggedIn = false;
  state.currentPage = 'home';
  renderApp();
};

window.setAdminTab = (tab) => {
  state.activeAdminTab = tab;
  renderApp();
};

window.handleDeleteItem = (id) => {
  if (!confirm('Ishonchingiz komilmi?')) return;
  const keyMap = { unis: 'universities', mentors: 'mentors', scholarships: 'scholarships' };
  const key = keyMap[state.activeAdminTab];
  state[key] = state[key].filter(item => item.id !== id);
  renderApp();
};

window.handleAddItem = () => {
  const title = prompt('Sarlavha/Ism kiriting:');
  if (!title) return;
  const id = Date.now().toString();
  const keyMap = { unis: 'universities', mentors: 'mentors', scholarships: 'scholarships' };
  const key = keyMap[state.activeAdminTab];

  if (state.activeAdminTab === 'unis') {
    state.universities.push({ id, name: title, country: 'Unknown', ranking: 999, programs: ['N/A'], image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400' });
  } else if (state.activeAdminTab === 'mentors') {
    state.mentors.push({ id, name: title, university: 'Local', country: 'Local', specialization: 'Expert', rating: 5.0, price: 0, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' });
  } else {
    state.scholarships.push({ id, title, provider: 'Local Agency', deadline: '2025-01-01', tags: ['New'] });
  }
  renderApp();
};

window.handleGenerateAI = async () => {
  const promptText = document.getElementById('aiPrompt').value;
  const btn = document.getElementById('aiBtn');
  const btnText = document.getElementById('aiBtnText');
  const resBox = document.getElementById('aiRes');
  const content = document.getElementById('aiContent');

  if (!promptText) return alert('Iltimos ma\'lumot kiriting!');

  btnText.innerText = 'Generatsiya qilinmoqda...';
  btn.disabled = true;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: Education platform "Ustoz Abroad". User needs a draft document. Language: ${state.lang}. Details: ${promptText}`,
      config: { systemInstruction: "You are a top-tier Study Abroad consultant." }
    });
    
    content.innerText = response.text;
    resBox.classList.remove('hidden');
    resBox.scrollIntoView({ behavior: 'smooth' });
  } catch (err) {
    console.error(err);
    alert('AI xatolik berdi. Iltimos keyinroq urinib ko\'ring.');
  } finally {
    btnText.innerText = t('btn_ai_gen');
    btn.disabled = false;
  }
};

// Initial Render
document.addEventListener('DOMContentLoaded', renderApp);
