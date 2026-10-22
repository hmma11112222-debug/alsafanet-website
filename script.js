/* شبكة الصفاء نت — الموقع الرسمي */

// ─── بيانات رسمية معتمدة (تُحدَّث هنا عند الحاجة) ───
const SERVICES = [
  'الاتصال بالإنترنت عبر كروت الشبكة',
  'شراء الكروت والباقات من داخل التطبيق',
  'متابعة الرصيد والعمليات',
  'نظام النقاط والمكافآت',
  'نظام الجواهر والاستبدال',
  'المسابقات والتوقعات والجوائز',
  'البث المباشر',
  'الاستراحة',
  'مركز الرسائل والإعلانات',
  'خدمة العملاء والدعم',
  'معلومات الشبكة وحالة الاتصال',
  'مسح الكرت بالكاميرا والباركود',
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

// ─── أيقونة افتراضية للخدمات (SVG) ───
const SERVICE_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
const PIN_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

// ─── توليد بطاقات الخدمات ───
document.getElementById('servicesGrid').innerHTML = SERVICES.map(s => `
  <div class="service-card reveal">
    <div class="service-icon">${SERVICE_ICON}</div>
    <h3>${s}</h3>
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
