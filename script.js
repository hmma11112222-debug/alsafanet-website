/* شبكة الصفاء نت — الموقع الرسمي */

// ─── بيانات رسمية معتمدة (تُحدَّث هنا عند الحاجة) ───
const SERVICES = [
  { t: 'الاتصال بالإنترنت عبر كروت الشبكة', i: 'ticket' },
  { t: 'شراء الكروت والباقات من داخل التطبيق', i: 'card' },
  { t: 'متابعة الرصيد والعمليات', i: 'wallet' },
  { t: 'نظام النقاط والمكافآت', i: 'star' },
  { t: 'نظام الجواهر والاستبدال', i: 'gem' },
  { t: 'المسابقات والتوقعات والجوائز', i: 'trophy' },
  { t: 'البث المباشر', i: 'tv' },
  { t: 'الاستراحة', i: 'coffee' },
  { t: 'مركز الرسائل والإعلانات', i: 'message' },
  { t: 'خدمة العملاء والدعم', i: 'headset' },
  { t: 'معلومات الشبكة وحالة الاتصال', i: 'activity' },
  { t: 'مسح الكرت بالكاميرا والباركود', i: 'scan' },
];

const PACKAGES = [
  { price: 100,   data: '500 ميجا',  validity: 'يوم واحد' },
  { price: 200,   data: '1 جيجا',    validity: 'يومان' },
  { price: 300,   data: '2 جيجا',    validity: '7 أيام' },
  { price: 500,   data: '4 جيجا',    validity: '10 أيام' },
  { price: 1000,  data: '10 جيجا',   validity: 'شهر', badge: 'الأكثر طلبًا' },
  { price: 2000,  data: '20 جيجا',   validity: 'شهر' },
  { price: 4000,  data: '44 جيجا',   validity: 'شهر' },
  { price: 5000,  data: '60 جيجا',   validity: 'شهر', badge: 'قيمة ممتازة' },
  { price: 10000, data: '130 جيجا',  validity: 'شهر', badge: 'الباقة الذهبية' },
];

const COVERAGE = [
  'سيئون', 'القرن', 'ساحة النور', 'مريمة', 'البيوت الخشبية',
  'مستشفى سيئون العام', 'العصيدة', 'الزاوية', 'الخطاب', 'الحصي الأربع',
  'الشيشان', 'حي الثورة', 'صليلة', 'مدودة', 'مدودة الحصن',
  'العرض القبلي والشرقي',
];

// ─── أيقونات الخدمات (SVG) ───
const _svg = p => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICONS = {
  ticket:   _svg('<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>'),
  card:     _svg('<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>'),
  wallet:   _svg('<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>'),
  star:     _svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
  gem:      _svg('<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>'),
  trophy:   _svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'),
  tv:       _svg('<rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/>'),
  coffee:   _svg('<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>'),
  message:  _svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  headset:  _svg('<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'),
  activity: _svg('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
  scan:     _svg('<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>'),
};
const PIN_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

// ─── توليد بطاقات الخدمات ───
document.getElementById('servicesGrid').innerHTML = SERVICES.map(s => `
  <div class="service-card reveal">
    <div class="service-icon">${ICONS[s.i]}</div>
    <h3>${s.t}</h3>
  </div>`).join('');

// ─── توليد بطاقات الباقات ───
document.getElementById('packagesGrid').innerHTML = PACKAGES.map(p => `
  <div class="pkg-card reveal${p.badge ? ' featured' : ''}">
    ${p.badge ? `<span class="pkg-badge">${p.badge}</span>` : ''}
    <div class="pkg-price">${p.price.toLocaleString('ar')} <small>ريال</small></div>
    <div class="pkg-meta">
      <div><span>البيانات</span><b>${p.data}</b></div>
      <div><span>الصلاحية</span><b>${p.validity}</b></div>
    </div>
  </div>`).join('');

// ─── توليد مناطق التغطية ───
document.getElementById('coverageList').innerHTML = COVERAGE.map(c => `
  <span class="coverage-item reveal">${PIN_ICON}${c}</span>`).join('');

// ─── قائمة الجوال ───
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => { nav.classList.remove('open'); navLinks.classList.remove('open'); })
);

// ─── حركات الظهور عند التمرير ───
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
