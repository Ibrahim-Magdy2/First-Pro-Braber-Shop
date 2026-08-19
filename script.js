const STORAGE_KEYS = {
  language: 'yourbrand_language',
  theme: 'yourbrand_theme',
  cart: 'yourbrand_cart',
  lastBooking: 'yourbrand_last_booking',
};

const appData = {
  services: [
    {
      id: 'signature-cut',
      image: 'pexels-instasky-9992816.jpg',
      name: { en: 'Signature Cut', ar: 'التقليم المميز' },
      description: {
        en: 'Precision styling tailored to your face shape and daily routine.',
        ar: 'تقليم دقيق مصمم وفق شكل الوجه وروتينك اليومي.',
      },
      price: 250,
      duration: 30,
      category: { en: 'Hair', ar: 'الشعر' },
    },
    {
      id: 'royal-beard',
      image: 'pexels-cottonbro-3998421.jpg',
      name: { en: 'Royal Beard', ar: 'اللحية الملكية' },
      description: {
        en: 'Refined beard sculpting, trim, and tone balancing with premium oil.',
        ar: 'تشكيل اللحية بدقة مع تقليم وتوازن درجة اللون باستخدام زيت فاخر.',
      },
      price: 350,
      duration: 25,
      category: { en: 'Beard', ar: 'اللحية' },
    },
    {
      id: 'executive-shave',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
      name: { en: 'Executive Shave', ar: 'الحلاقة التنفيذية' },
      description: {
        en: 'A close, soothing traditional shave with hot towel and cooling finish.',
        ar: 'حلاقة تقليدية دقيقة ومريحة مع منشفة ساخنة وانتهاء منعش.',
      },
      price: 500,
      duration: 20,
      category: { en: 'Shave', ar: 'الحلاقة' },
    },
    {
      id: 'golden-facial',
      image: 'pexels-magica-production-2148564841-30547689.jpg',
      name: { en: 'Golden Facial', ar: 'تجهيز الوجه الذهبي' },
      description: {
        en: 'Deep cleansing and hydration workout for fresher, calmer skin.',
        ar: 'تنظيف عميق وترطيب متوازن لجلد أنعم وأهدأ.',
      },
      price: 200,
      duration: 35,
      category: { en: 'Care', ar: 'العناية' },
    },
  ],
  stats: [
    { value: '12+', label: { en: 'Years of craft', ar: 'سنوات من الحرفية' } },
    { value: '4.9/5', label: { en: 'Average rating', ar: 'متوسط التقييم' } },
    { value: '8K+', label: { en: 'Clients served', ar: 'عملاء خدمناهم' } },
    { value: '24/7', label: { en: 'Concierge care', ar: 'خدمة متواصلة' } },
  ],
  timeline: [
    {
      year: '2013',
      title: { en: 'The first chair', ar: 'الكرسي الأول' },
      text: {
        en: 'We launched with a simple belief: grooming should feel personal and polished.',
        ar: 'بدأنا بإيمان بسيط: أن يكون التجميل شخصيًا ومصقولًا.',
      },
    },
    {
      year: '2017',
      title: { en: 'Luxury lounge', ar: 'الصالة الفاخرة' },
      text: {
        en: 'Our lounge expanded with premium rituals and refined client experiences.',
        ar: 'توسع مكاننا ليشمل طقوسًا فاخرة وتجربة عميل راقية.',
      },
    },
    {
      year: '2025',
      title: { en: 'YourBrand today', ar: 'YourBrand اليوم' },
      text: {
        en: 'A private, elevated barber experience for modern gentlemen and loyal regulars.',
        ar: 'تجربة حلاقة خاصة وراقية للرجال العصريين وللعملاء المخلصين.',
      },
    },
  ],
  heroes: [
    {
      badge: { en: 'Signature luxury', ar: 'أناقة مميزة' },
      title: { en: 'Sharpen your presence.', ar: 'حسّن حضورك.' },
      copy: {
        en: 'Premium grooming for refined routines, elevated style, and lasting confidence.',
        ar: 'تجميل فاخر لروتين أنيق وأسلوب راقٍ وثقة مستدامة.',
      },
      ctaPrimary: { en: 'Book now', ar: 'احجز الآن' },
      ctaSecondary: { en: 'Explore services', ar: 'استعرض الخدمات' },
      image: 'pexels-cottonbro-3993296.jpg',
    },
    {
      badge: { en: 'Beard artistry', ar: 'فن اللحية' },
      title: { en: 'Crafted detail. Clean finish.', ar: 'تفاصيل مصممة. إنهاء أنيق.' },
      copy: {
        en: 'Structure, texture, and soothing care designed to make every line purposeful.',
        ar: 'هيكلة، ملمس، وعناية مريحة تجعل كل سطر هدفًا وذوقًا.',
      },
      ctaPrimary: { en: 'Reserve a trim', ar: 'احجز تقليمك' },
      ctaSecondary: { en: 'View the lounge', ar: 'شاهد الصالة' },
      image: 'pexels-cacito-7922651.jpg',
    },
    {
      badge: { en: 'Executive care', ar: 'رعاية تنفيذية' },
      title: { en: 'Luxury made personal.', ar: 'الفخامة شخصية.' },
      copy: {
        en: 'From desk-to-date rituals, we create a polished look that feels unmistakably yours.',
        ar: 'من روتين المكتب إلى الظهور في المناسبات، نصنع مظهرًا أنيقًا يليق بك.',
      },
      ctaPrimary: { en: 'Schedule now', ar: 'حدد موعدك' },
      ctaSecondary: { en: 'Learn more', ar: 'اعرف المزيد' },
      image: 'nate-johnston-tgPrIYnW3g4-unsplash.jpg',
    },
  ],
  barbers: [
    {
      id: 'omar',
      name: { en: 'Omar Haddad', ar: 'عمر حمد' },
      specialty: { en: 'Precision Fade', ar: 'التدرج الدقيق' },
      experience: { en: '12 years', ar: '12 سنة' },
      bio: {
        en: 'Known for sculpted fades and sharp finishing lines with an effortless calm presence.',
        ar: 'مشهور بالتدرجات المصممة والخطوط الحادة مع حضور هادئ ومريح.',
      },
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      socials: { Instagram: 'https://instagram.com', X: 'https://x.com', TikTok: 'https://tiktok.com' },
    },
    {
      id: 'nabil',
      name: { en: 'Nabil Salim', ar: 'نبيل سالم' },
      specialty: { en: 'Beard Architecture', ar: 'هندسة اللحية' },
      experience: { en: '9 years', ar: '9 سنوات' },
      bio: {
        en: 'Designs balanced beard shapes that bring structure, softness, and tailored detail.',
        ar: 'يصمم أشكال لبدة متوازنة تقدم هيكلية، نعومة، وتفاصيل مصممة وفقك.',
      },
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      socials: { Instagram: 'https://instagram.com', X: 'https://x.com', TikTok: 'https://tiktok.com' },
    },
    {
      id: 'sami',
      name: { en: 'Sami Rahman', ar: 'سامي رحمن' },
      specialty: { en: 'Luxury Grooming', ar: 'التجميل الفاخر' },
      experience: { en: '8 years', ar: '8 سنوات' },
      bio: {
        en: 'Creates polished looks rooted in comfort, premium care rituals, and personal styling.',
        ar: 'يخلق مظهرًا أنيقًا مبنيًا على الراحة، الطقوس الفاخرة، والأسلوب الشخصي.',
      },
      photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
      socials: { Instagram: 'https://instagram.com', X: 'https://x.com', TikTok: 'https://tiktok.com' },
    },
  ],
  gallery: [
    { id: 'g1', category: 'hair', title: { en: 'Luxury fade', ar: 'تدرج فاخر' }, image: 'pexels-rebornfilmes-33461079.jpg' },
    { id: 'g2', category: 'beard', title: { en: 'Beard shaping', ar: 'تشكيل اللحية' }, image: 'pexels-cottonbro-3998429.jpg' },
    { id: 'g3', category: 'lounge', title: { en: 'Private lounge', ar: 'الصالة الخاصة' }, image: 'pexels-lukas-kosc-525097851-16474397.jpg' },
    { id: 'g4', category: 'hair', title: { en: 'Clean texture', ar: 'ملمس نظيف' }, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80' },
    { id: 'g5', category: 'beard', title: { en: 'Royal contour', ar: 'حدود ملكية' }, image: 'pexels-alexandre-saraiva-carniato-583650-5469882.jpg' },
    { id: 'g6', category: 'lounge', title: { en: 'Executive styling', ar: 'تصفيف تنفيذي' }, image: 'pexels-cottonbro-3998404.jpg' },
  ],
  testimonials: [
    {
      quote: {
        en: 'The finish was immaculate and the attention to detail felt incredibly personal. My routine now starts with YourBrand.',
        ar: 'النهائية كانت مثالية، والاهتمام بالتفاصيل شعور شخصي جدًا. أصبح روتيني يبدأ من YourBrand.',
      },
      name: { en: 'Khalid A.', ar: 'خالد أ.' },
      role: { en: 'Lawyer', ar: 'محامي' },
      photo: '',
    },
    {
      quote: {
        en: 'The beard sculpting and hot towel service were next level. Every visit feels like a private ritual.',
        ar: 'تشكيل اللحية والخدمة باستخدام منشفة ساخنة كانت من مستوى مختلف. كل زيارة تشبه طقسًا خاصًا.',
      },
      name: { en: 'Yousef M.', ar: 'يوسف م.' },
      role: { en: 'Consultant', ar: 'مستشار' },
      photo: '',
    },
    {
      quote: {
        en: 'A luxury atmosphere with real craftsmanship. My haircut finally matches my personal style.',
        ar: 'جو فاخر مع حرفية حقيقية. قلبي انقلب عندما التقى قميصي مع أسلوبي الحقيقي.',
      },
      name: { en: 'M. Rami', ar: 'M. رامي' },
      role: { en: 'Creative director', ar: 'مدير إبداعي' },
      photo: '',
    },
  ],
};

const translations = {
  en: {
    nav: { about: 'About', services: 'Services', barbers: 'Barbers', gallery: 'Gallery', booking: 'Booking', location: 'Our Location'},
    theme: { label: 'Light', dark: 'Dark', light: 'Light' },
    cart: {
      eyebrow: 'Your selection',
      title: 'Cart',
      subtotal: 'Subtotal',
      total: 'Total',
      clear: 'Clear all',
      bookNow: 'Book now',
      empty: 'Your cart is empty. Add a premium service to begin.',
      itemPrice: 'Unit price',
      totalLabel: 'Total',
    },
    about: {
      eyebrow: 'Crafted for the modern gentleman',
      title: 'Luxury grooming, done right',
      description1: 'YourBrand blends timeless barber traditions with elevated, contemporary care to create a refined routine built around confidence.',
      description2: 'From precision cuts to classic beard shaping and wellness rituals, every appointment is designed around detail, comfort, and unrivaled finish.',
      badge1: 'Tailored service',
      badge2: 'Premium products',
      badge3: 'Private lounge',
    },
    mission: {
      eyebrow: 'Our mission',
      title: 'To refine confidence',
      text: 'We help every client feel composed, polished, and at ease through tailored grooming rituals that bring clarity and presence to everyday life.',
    },
    vision: {
      eyebrow: 'Our vision',
      title: 'To set a new standard',
      text: 'We aim to define a modern luxury barber experience that pairs craftsmanship with a warm, elevated atmosphere for every generation.',
    },
    services: { eyebrow: 'Signature care', title: 'Luxury services' },
    search: {
      label: 'Search services, barbers & gallery',
      placeholder: 'Search services, barbers & gallery',
      count: '0 results',
      empty: 'No matching results. Try another service, barber, or gallery category.',
      resultType: 'Result',
      service: 'Service',
      barber: 'Barber',
      gallery: 'Gallery',
    },
    barbers: { eyebrow: 'Meet the experts', title: 'YourBrand specialists' },
    gallery: { eyebrow: 'Our atmosphere', title: 'Crafted ambience', filterAll: 'All', filterHair: 'Hair', filterBeard: 'Beard', filterLounge: 'Lounge' },
    testimonials: { eyebrow: 'Client love', title: 'What clients say' },
    booking: {
      eyebrow: 'Book your session',
      title: 'Reserve your appointment',
      form: {
        fullName: 'Full Name',
        phone: 'Phone',
        email: 'Email',
        date: 'Date',
        time: 'Time',
        notes: 'Notes',
      },
      submit: 'Review booking',
      summary: {
        title: 'Booking summary',
        empty: 'Add services from the cart to begin your reservation.',
      },
    },
    review: {
      eyebrow: 'Review details',
      title: 'Booking review',
      edit: 'Edit',
      confirm: 'Confirm',
      customer: 'Customer',
      services: 'Services',
      date: 'Date',
      time: 'Time',
      notes: 'Notes',
      total: 'Total',
      item: 'Item',
      qty: 'Qty',
      unit: 'Unit',
      subtotal: 'Subtotal',
    },
    success: {
      eyebrow: 'Confirmed',
      title: 'Booking confirmed',
      message: 'Your appointment was successfully placed.',
      close: 'Done',
    },

TheLocation: {
locationEyebrow: 'Our Location',
locationTitle: 'Visit us in the heart of the city',
},
    footer: {
      tagline: 'Luxury grooming without compromise.',
      visit: 'Visit',
      hours: 'Hours',
      hoursMon: 'Mon-Sat: 10:00-22:00',
      hoursSun: 'Sun: By appointment',
    },
    validation: {
      fullNameRequired: 'Full name is required.',
      phoneRequired: 'Phone is required.',
      phoneInvalid: 'Please enter a valid phone number.',
      emailInvalid: 'Please enter a valid email address.',
      dateRequired: 'Date is required.',
      datePast: 'Please choose a future date.',
      timeRequired: 'Time is required.',
      cartEmpty: 'Please add at least one service.',
      notesOptional: 'Optional',
      dateLabel: 'Date',
      timeLabel: 'Time',
      summaryRequired: 'At least one service is required.',
    },
    general: {
      today: 'Today',
      noResults: 'No results found.',
      clear: 'Clear',
      all: 'All',
      add: 'Add',
      quantity: 'Quantity',
      item: 'Item',
      done: 'Done',
      unknown: 'Unknown',
    },
  },
  ar: {
    nav: { about: 'من نحن', services: 'الخدمات', barbers: 'الخبراء', gallery: 'المعرض', booking: 'الحجز', location: 'موقعنا'},
    theme: { label: 'داكن', dark: 'داكن', light: 'فاتح' },
    cart: {
      eyebrow: 'اختيارك',
      title: 'سلة المشتريات',
      subtotal: 'المجموع الفرعي',
      total: 'الإجمالي',
      clear: 'مسح الكل',
      bookNow: 'احجز الآن',
      empty: 'السلة فارغة. أضف خدمة فاخرة للبدء.',
      itemPrice: 'سعر الوحدة',
      totalLabel: 'الإجمالي',
    },
    about: {
      eyebrow: 'مصمم للرجل العصري',
      title: 'تجميل فاخر، بشكل صحيح',
      description1: 'يجمع YourBrand بين تقاليد الحلاقة الكلاسيكية ورعاية عصرية راقية لإنشاء روتين مصقول قائم على الثقة.',
      description2: 'من التصفيفات الدقيقة إلى تشكيل اللحية الكلاسيكي والطقوس التجميلية، كل موعد مصمم بعناية وراحة ونتيجة استثنائية.',
      badge1: 'خدمة مصممة',
      badge2: 'منتجات فاخرة',
      badge3: 'صالة خاصة',
    },
    mission: {
      eyebrow: 'مهمتنا',
      title: 'لتعزيز الثقة',
      text: 'نساعد كل عميل على الشعور بالهدوء واللمعان والراحة عبر روتين تجميل مصمم يضيف وضوحًا وحضورًا في الحياة اليومية.',
    },
    vision: {
      eyebrow: 'رؤيتنا',
      title: 'لوضع معيار جديد',
      text: 'نسعى إلى تعريف تجربة حلاقة فاخرة حديثة تجمع بين الحرفية والجو الدافئ والراقي لكل جيل.',
    },
    services: { eyebrow: 'رعاية مميزة', title: 'خدمات فاخرة' },
    search: {
      label: 'ابحث عن الخدمات والمهنيين والمعرض',
      placeholder: 'ابحث عن الخدمات والمهنيين والمعرض',
      count: '0 نتائج',
      empty: 'لا توجد نتائج مطابقة. جرّب خدمة أو محترفًا أو فئة معرض أخرى.',
      resultType: 'نتيجة',
      service: 'خدمة',
      barber: 'محترف',
      gallery: 'معرض',
    },
    barbers: { eyebrow: 'قابل الخبراء', title: 'خبراء YourBrand' },
    gallery: { eyebrow: 'بيئتنا', title: 'أجواء مصممة', filterAll: 'الكل', filterHair: 'الشعر', filterBeard: 'اللحية', filterLounge: 'الصالة' },
    testimonials: { eyebrow: 'حب العملاء', title: 'ماذا يقول العملاء' },
    booking: {
      eyebrow: 'احجز جلستك',
      title: 'احجز موعدك',
      form: {
        fullName: 'الاسم الكامل',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        date: 'التاريخ',
        time: 'الوقت',
        notes: 'ملاحظات',
      },
      submit: 'مراجعة الحجز',
      summary: {
        title: 'ملخص الحجز',
        empty: 'أضف خدمات من السلة لبدء الحجز.',
      },
    },
    review: {
      eyebrow: 'مراجعة التفاصيل',
      title: 'مراجعة الحجز',
      edit: 'تعديل',
      confirm: 'تأكيد',
      customer: 'العميل',
      services: 'الخدمات',
      date: 'التاريخ',
      time: 'الوقت',
      notes: 'ملاحظات',
      total: 'الإجمالي',
      item: 'العنصر',
      qty: 'الكمية',
      unit: 'السعر',
      subtotal: 'المجموع',
    },
    success: {
      eyebrow: 'تم التأكيد',
      title: 'تم تأكيد الحجز',
      message: 'تم حجز موعدك بنجاح.',
      close: 'تم',
    },

TheLocation: {
locationEyebrow: 'موقعنا',
locationTitle: 'زورنا في قلب المدينة',
},
    footer: {
      tagline: 'تجميل فاخر دون تنازل.',
      visit: 'الزيارة',
      hours: 'الساعات',
      hoursMon: 'الاثنين-السبت: 10:00-22:00',
      hoursSun: 'الأحد: حسب الموعد',
    },
    validation: {
      fullNameRequired: 'الاسم الكامل مطلوب.',
      phoneRequired: 'الهاتف مطلوب.',
      phoneInvalid: 'الرجاء إدخال رقم هاتف صحيح.',
      emailInvalid: 'الرجاء إدخال بريد إلكتروني صحيح.',
      dateRequired: 'التاريخ مطلوب.',
      datePast: 'يرجى اختيار تاريخ مستقبلي.',
      timeRequired: 'الوقت مطلوب.',
      cartEmpty: 'يرجى إضافة خدمة واحدة على الأقل.',
      notesOptional: 'اختياري',
      dateLabel: 'التاريخ',
      timeLabel: 'الوقت',
      summaryRequired: 'مطلوب خدمة واحدة على الأقل.',
    },
    general: {
      today: 'اليوم',
      noResults: 'لا توجد نتائج.',
      clear: 'مسح',
      all: 'الكل',
      add: 'إضافة',
      quantity: 'الكمية',
      item: 'عنصر',
      done: 'تم',
      unknown: 'غير معروف',
    },
  },
};

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.language) || 'en',
  theme: localStorage.getItem(STORAGE_KEYS.theme) || 'light',
  cart: loadCart(),
  heroIndex: 0,
  testimonialIndex: 0,
  galleryFilter: 'all',
  currentBooking: null,
  heroTimer: null,
  testimonialTimer: null,
};

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
}

function getText(value, fallback = '') {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value[state.lang] || value.en || fallback;
}

function getTranslation(key, fallback = '') {
  const path = key.split('.');
  let current = translations[state.lang];
  for (const segment of path) {
    if (!current || typeof current !== 'object') return fallback;
    current = current[segment];
  }
  return current ?? fallback;
}

function currency(value) {
  return new Intl.NumberFormat(state.lang === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: 'EGB',
    maximumFractionDigits: 2,
  }).format(value);
}

function normalizeText(value) {
  return String(value || '').normalize('NFKC').trim().toLowerCase();
}

function highlightMatch(text, query) {
  if (!query) return text;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  return String(text).replace(regex, '<mark>$1</mark>');
}

function setDocumentLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.setAttribute('data-theme', state.theme);
}

function updateThemeToggle() {
  const themeLabel = document.querySelector('#themeToggle span:last-child');
  const themeIcon = document.querySelector('#themeToggle .theme-icon');
  if (!themeLabel || !themeIcon) return;

  if (state.theme === 'dark') {
    themeLabel.textContent = getTranslation('theme.light', 'Light');
    themeIcon.textContent = '🌙';
  } else {
    themeLabel.textContent = getTranslation('theme.dark', 'Dark');
    themeIcon.textContent = '☀️';
  }
}

function applyTranslations() {
  setDocumentLanguage();
  updateThemeToggle();

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = getTranslation(key, node.textContent || '');
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const text = getTranslation(key, node.placeholder || '');
    if (text) node.setAttribute('placeholder', text);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const key = node.dataset.i18nAria;
    const value = getTranslation(key, node.getAttribute('aria-label') || '');
    if (value) node.setAttribute('aria-label', value);
  });

  const activeLang = document.querySelector('.lang-btn[data-lang="' + state.lang + '"]');
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === state.lang);
  });

  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('rtl', state.lang === 'ar');
  }

  renderServices();
  renderHero();
  renderStats();
  renderTimeline();
  renderBarbers();
  renderGallery();
  renderTestimonials();
  renderCart();
  renderBookingSummary();
  renderSearch();
}

function renderStats() {
  const container = document.getElementById('statsGrid');
  if (!container) return;
  container.innerHTML = appData.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <strong>${stat.value}</strong>
          <span>${getText(stat.label)}</span>
        </div>
      `
    )
    .join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineList');
  if (!container) return;
  container.innerHTML = appData.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="year">${item.year}</span>
          <h4>${getText(item.title)}</h4>
          <p>${getText(item.text)}</p>
        </article>
      `
    )
    .join('');
}

function renderHero() {
  const track = document.getElementById('heroTrack');
  const dots = document.getElementById('heroDots');
  if (!track || !dots) return;

  track.innerHTML = appData.heroes
    .map(
      (slide, index) => `
        <article class="hero-slide ${index === state.heroIndex ? 'active' : ''}">
          <div class="hero-slide-inner">
            <div class="hero-visual">
              <img src="${slide.image}" alt="${getText(slide.title)}" loading="eager" />
              <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
              <div class="hero-copy">
                <span class="hero-badge">${getText(slide.badge)}</span>
                <h1>${getText(slide.title)}</h1>
                <p>${getText(slide.copy)}</p>
                <div class="hero-actions">
                  <a href="#booking" class="primary-btn">${getText(slide.ctaPrimary)}</a>
                  <a href="#services" class="secondary-btn">${getText(slide.ctaSecondary)}</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  dots.innerHTML = appData.heroes
    .map(
      (_, index) => `<button type="button" class="dot ${index === state.heroIndex ? 'active' : ''}" data-slide-index="${index}" aria-label="Go to slide ${index + 1}"></button>`
    )
    .join('');

  startHeroAutoplay();
}

function startHeroAutoplay() {
  const heroSlider = document.getElementById('heroSlider');
  if (!heroSlider) return;

  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => {
    state.heroIndex = (state.heroIndex + 1) % appData.heroes.length;
    renderHero();
  }, 5000);

  heroSlider.onmouseenter = () => clearInterval(state.heroTimer);
  heroSlider.onmouseleave = () => startHeroAutoplay();
}

function renderServices() {
  const container = document.getElementById('serviceGrid');
  if (!container) return;

  container.innerHTML = appData.services
    .map(
      (service) => `
        <article class="service-card" data-service-id="${service.id}" tabindex="0" aria-label="${getText(service.name)}">
          <img class="service-thumb" src="${service.image}" alt="${getText(service.name)}" loading="lazy" />
          <div class="service-body">
            <div class="service-topline">
              <span class="service-category">${getText(service.category)}</span>
              <span class="service-duration">${service.duration} min</span>
            </div>
            <h3>${getText(service.name)}</h3>
            <p>${getText(service.description)}</p>
            <div class="service-price-row">
              <div class="service-price">${currency(service.price)}</div>
              <div class="qty-controls" aria-label="Quantity controls for ${getText(service.name)}">
                <button type="button" class="qty-btn" data-action="decrease" data-service-id="${service.id}" aria-label="Decrease quantity for ${getText(service.name)}">−</button>
                <span class="qty-value">${getCartQuantity(service.id)}</span>
                <button type="button" class="qty-btn" data-action="increase" data-service-id="${service.id}" aria-label="Increase quantity for ${getText(service.name)}">+</button>
              </div>
            </div>
            <button type="button" class="add-btn" data-action="add" data-service-id="${service.id}">${getTranslation('general.add', 'Add')}</button>
          </div>
        </article>
      `
    )
    .join('');

  attachServiceCardEvents();
}

function attachServiceCardEvents() {
  document.querySelectorAll('.service-card').forEach((card) => {
    card.onclick = (event) => {
      const btn = event.target.closest('[data-action]');
      if (btn) {
        const serviceId = btn.dataset.serviceId;
        const action = btn.dataset.action;
        if (action === 'increase') addToCart(serviceId, 1);
        if (action === 'decrease') decreaseCartItem(serviceId);
        if (action === 'add') addToCart(serviceId, 1);
        return;
      }
      addToCart(card.dataset.serviceId, 1);
    };

    card.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        addToCart(card.dataset.serviceId, 1);
      }
    };
  });
}

function renderBarbers() {
  const container = document.getElementById('barberGrid');
  if (!container) return;

  container.innerHTML = appData.barbers
    .map(
      (barber) => `
        <article class="barber-card">
          <img class="barber-photo" src="${barber.photo}" alt="${getText(barber.name)}" loading="lazy" />
          <div class="barber-info">
            <h3>${getText(barber.name)}</h3>
            <span class="barber-specialty">${getText(barber.specialty)}</span>
            <div class="barber-meta">
              <span>${getText(barber.experience)}</span>
              <span>•</span>
              <span>${getText(barber.specialty)}</span>
            </div>
            <p>${getText(barber.bio)}</p>
            <div class="social-links">
              ${Object.entries(barber.socials)
                .map(
                  ([label, link]) => `
                    <a class="social-link" href="${link}" target="_blank" rel="noreferrer noopener" aria-label="${label} profile">${label.slice(0, 2).toUpperCase()}</a>
                  `
                )
                .join('')}
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderGallery() {
  const container = document.getElementById('galleryGrid');
  const filters = document.getElementById('galleryFilters');
  if (!container || !filters) return;

  const categories = ['all', 'hair', 'beard', 'lounge'];
  filters.innerHTML = categories
    .map(
      (category) => {
        const label = category === 'all' ? getTranslation('gallery.filterAll', 'All') : getTranslation(`gallery.filter${category.charAt(0).toUpperCase() + category.slice(1)}`, category);
        return `<button type="button" class="gallery-filter ${state.galleryFilter === category ? 'active' : ''}" data-filter="${category}">${label}</button>`;
      }
    )
    .join('');

  const filteredItems = state.galleryFilter === 'all' ? appData.gallery : appData.gallery.filter((item) => item.category === state.galleryFilter);

  container.innerHTML = filteredItems
    .map(
      (item) => `
        <figure class="gallery-item" data-gallery-id="${item.id}" tabindex="0" aria-label="${getText(item.title)}">
          <img src="${item.image}" alt="${getText(item.title)}" loading="lazy" />
          <figcaption>${getText(item.title)}</figcaption>
        </figure>
      `
    )
    .join('');

  attachGalleryEvents();
}

function attachGalleryEvents() {
  document.querySelectorAll('.gallery-filter').forEach((button) => {
    button.onclick = () => {
      state.galleryFilter = button.dataset.filter;
      renderGallery();
    };
  });

  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.onclick = () => openLightbox(item.dataset.galleryId);
    item.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(item.dataset.galleryId);
      }
    };
  });
}

function openLightbox(id) {
  const item = appData.gallery.find((entry) => entry.id === id);
  if (!item) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="modal-backdrop" data-close-lightbox="true"></div>
    <div class="modal-panel" style="max-width: 940px; padding: 18px;">
      <button type="button" class="modal-close" data-close-lightbox="true" aria-label="Close gallery view">×</button>
      <img src="${item.image}" alt="${getText(item.title)}" style="max-height: 78vh; width: 100%; object-fit: cover; border-radius: 18px;" />
      <div style="padding: 16px 10px 8px; font-weight: 800; color: var(--text);">${getText(item.title)}</div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.onclick = (event) => {
    if (event.target.closest('[data-close-lightbox]')) {
      overlay.remove();
    }
  };

  document.addEventListener('keydown', handleLightboxEscape);
}

function handleLightboxEscape(event) {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal[role="dialog"]');
    if (modal) modal.remove();
    document.removeEventListener('keydown', handleLightboxEscape);
  }
}

function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.getElementById('testimonialDots');
  if (!track || !dots) return;

  track.innerHTML = appData.testimonials
    .map(
      (item, index) => `
        <article class="testimonial-slide ${index === state.testimonialIndex ? 'active' : ''}">
          <span class="quote-mark">“</span>
          <blockquote>${getText(item.quote)}</blockquote>
          <div class="testimonial-author">
            <img src="${item.photo}" alt="${getText(item.name)}" loading="lazy" />
            <div>
              <strong>${getText(item.name)}</strong>
              <span>${getText(item.role)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  dots.innerHTML = appData.testimonials
    .map(
      (_, index) => `<button type="button" class="testimonial-dot ${index === state.testimonialIndex ? 'active' : ''}" data-testimonial-index="${index}" aria-label="Go to testimonial ${index + 1}"></button>`
    )
    .join('');

  document.querySelectorAll('.testimonial-dot').forEach((dot) => {
    dot.onclick = () => {
      state.testimonialIndex = Number(dot.dataset.testimonialIndex);
      renderTestimonials();
      restartTestimonialSlider();
    };
  });

  const slider = document.getElementById('testimonialSlider');
  if (slider) {
    slider.onmouseenter = () => clearInterval(state.testimonialTimer);
    slider.onmouseleave = () => restartTestimonialSlider();
  }

  restartTestimonialSlider();
}

function restartTestimonialSlider() {
  clearInterval(state.testimonialTimer);
  state.testimonialTimer = setInterval(() => {
    state.testimonialIndex = (state.testimonialIndex + 1) % appData.testimonials.length;
    renderTestimonials();
  }, 4000);
}

function getCartQuantity(serviceId) {
  return state.cart.find((item) => item.id === serviceId)?.quantity || 0;
}

function addToCart(serviceId, quantity = 1) {
  const service = appData.services.find((entry) => entry.id === serviceId);
  if (!service) return;

  const existing = state.cart.find((item) => item.id === serviceId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: service.id,
      quantity,
      price: service.price,
      name: getText(service.name),
      category: getText(service.category),
      image: service.image,
    });
  }

  saveCart();
  renderCart();
  renderBookingSummary();
  renderServices();
  animateCart();
}

function decreaseCartItem(serviceId) {
  const item = state.cart.find((entry) => entry.id === serviceId);
  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.cart = state.cart.filter((entry) => entry.id !== serviceId);
  }

  saveCart();
  renderCart();
  renderBookingSummary();
  renderServices();
}

function removeCartItem(serviceId) {
  state.cart = state.cart.filter((item) => item.id !== serviceId);
  saveCart();
  renderCart();
  renderBookingSummary();
  renderServices();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  renderBookingSummary();
  renderServices();
}

function animateCart() {
  const cartToggle = document.getElementById('cartToggle');
  if (!cartToggle) return;
  cartToggle.classList.remove('shake');
  void cartToggle.offsetWidth;
  cartToggle.classList.add('shake');
  setTimeout(() => cartToggle.classList.remove('shake'), 300);
}

function renderCart() {
  const drawer = document.getElementById('cartDrawer');
  const container = document.getElementById('cartItemsContainer');
  const count = document.getElementById('cartCount');
  const subtotal = document.getElementById('cartSubtotal');
  const total = document.getElementById('cartTotal');

  if (!drawer || !container || !count || !subtotal || !total) return;

  // renderCart ممنوع يفتح السلة
  // فتح السلة يتم فقط من openCart()
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');

  const overlay = document.getElementById('drawerOverlay');

  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  document.body.classList.remove('cart-open');

  // باقي كود renderCart...

  if (!state.cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        ${getTranslation(
          'cart.empty',
          'Your cart is empty. Add a premium service to begin.'
        )}
      </div>
    `;

    closeCart();
    return;
  }

  container.innerHTML = `
    <div class="cart-list">
      ${state.cart
        .map(
          (item) => `
            <div class="cart-list-item">
              <div class="cart-item-main">
                <img
                  src="${item.image}"
                  alt="${item.name}"
                  loading="lazy"
                />

                <div class="cart-item-copy">
                  <strong>${item.name}</strong>

                  <div class="cart-item-meta">
                    <span>${currency(item.price)}</span>
                    <span>× ${item.quantity}</span>
                  </div>

                  <div class="cart-item-controls">
                    <div class="qty-controls">
                      <button
                        type="button"
                        class="qty-btn"
                        data-cart-action="decrease"
                        data-service-id="${item.id}"
                        aria-label="Decrease quantity"
                      >−</button>

                      <span class="qty-value">
                        ${item.quantity}
                      </span>

                      <button
                        type="button"
                        class="qty-btn"
                        data-cart-action="increase"
                        data-service-id="${item.id}"
                        aria-label="Increase quantity"
                      >+</button>
                    </div>

                    <button
                      type="button"
                      class="cart-remove"
                      data-cart-action="remove"
                      data-service-id="${item.id}"
                    >
                      ${getTranslation('general.clear', 'Remove')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join('')}
    </div>
  `;

  const clearCartBtn = document.getElementById('clearCartBtn');

  if (clearCartBtn) {
    clearCartBtn.onclick = clearCart;
  }

  document.querySelectorAll('[data-cart-action]').forEach((button) => {
    button.onclick = (event) => {
      const target = event.currentTarget;

      const action = target.dataset.cartAction;
      const serviceId = target.dataset.serviceId;

      if (action === 'increase') {
        addToCart(serviceId, 1);
      }

      if (action === 'decrease') {
        decreaseCartItem(serviceId);
      }

      if (action === 'remove') {
        removeCartItem(serviceId);
      }
    };
  });

  const cartBookBtn = document.getElementById('cartBookBtn');

  if (cartBookBtn) {
    cartBookBtn.onclick = (event) => {
      event.preventDefault();

      closeCart();

      document
        .getElementById('booking')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    };
  }

  // مهم:
  // renderCart لا يفتح السلة تلقائياً.
  // فتح السلة يحصل فقط عند الضغط على زر السلة.
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (!drawer || !overlay) return;

  drawer.classList.add('open');
  overlay.classList.add('open');

  drawer.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');

  document.body.classList.add('cart-open');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (!drawer || !overlay) return;

  drawer.classList.remove('open');
  overlay.classList.remove('open');

  drawer.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');

  document.body.classList.remove('cart-open');
}

function renderBookingSummary() {
  const container = document.getElementById('bookingSummary');
  if (!container) return;

  if (!state.cart.length) {
    container.innerHTML = `<div class="empty-summary">${getTranslation('booking.summary.empty', 'Add services from the cart to begin your reservation.')}</div>`;
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  container.innerHTML = `
    <div class="booking-summary-list">
      ${state.cart
        .map(
          (item) => `
            <div class="summary-item">
              <div class="summary-top">
                <span>${item.name}</span>
                <strong>${currency(item.price * item.quantity)}</strong>
              </div>
              <div class="summary-meta">
                <span>Qty: ${item.quantity}</span>
                <span>${currency(item.price)} / ${getTranslation('review.unit', 'unit')}</span>
              </div>
            </div>
          `
        )
        .join('')}
    </div>
    <div class="summary-totals">
      <div class="summary-total-item">
        <span>${getTranslation('booking.summary.title', 'Booking summary')}</span>
        <strong>${currency(subtotal)}</strong>
      </div>
      <div class="summary-total-item">
        <span>${getTranslation('cart.total', 'Total')}</span>
        <strong>${currency(total)}</strong>
      </div>
    </div>
  `;
}

function validateBookingForm(showErrors = true) {
  const form = document.getElementById('bookingForm');
  if (!form) return false;

  const fields = {
    fullName: document.getElementById('fullName'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    date: document.getElementById('bookingDate'),
    time: document.getElementById('bookingTime'),
    notes: document.getElementById('notes'),
  };

  const errors = {
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    notes: '',
  };

  const nameValue = fields.fullName.value.trim();
  const phoneValue = fields.phone.value.trim();
  const emailValue = fields.email.value.trim();
  const dateValue = fields.date.value;
  const timeValue = fields.time.value;

  if (!nameValue) errors.fullName = getTranslation('validation.fullNameRequired', 'Full name is required.');
  if (!phoneValue) errors.phone = getTranslation('validation.phoneRequired', 'Phone is required.');
  else if (!/^[+\d()\s-]{7,}$/.test(phoneValue)) errors.phone = getTranslation('validation.phoneInvalid', 'Please enter a valid phone number.');
  if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) errors.email = getTranslation('validation.emailInvalid', 'Please enter a valid email address.');
  if (!emailValue) errors.email = getTranslation('validation.emailInvalid', 'Please enter a valid email address.');
  if (!dateValue) errors.date = getTranslation('validation.dateRequired', 'Date is required.');
  else if (new Date(dateValue + 'T00:00:00') < new Date(new Date().toDateString())) errors.date = getTranslation('validation.datePast', 'Please choose a future date.');
  if (!timeValue) errors.time = getTranslation('validation.timeRequired', 'Time is required.');
  if (!state.cart.length) errors.fullName = getTranslation('validation.cartEmpty', 'Please add at least one service.');

  if (showErrors) {
    Object.entries(fields).forEach(([key, field]) => {
      const errorNode = document.querySelector(`[data-error-for="${key}"]`);
      if (errorNode) {
        errorNode.textContent = errors[key] || '';
        errorNode.classList.toggle('show', Boolean(errors[key]));
      }
    });
  }

  return !Object.values(errors).some(Boolean);
}

function openReviewModal() {
  if (!validateBookingForm(true)) return;

  const form = document.getElementById('bookingForm');
  const formData = new FormData(form);
  const booking = {
    customerName: formData.get('fullName').toString().trim(),
    phone: formData.get('phone').toString().trim(),
    email: formData.get('email').toString().trim(),
    date: formData.get('date').toString(),
    time: formData.get('time').toString(),
    notes: formData.get('notes').toString().trim(),
    items: JSON.parse(JSON.stringify(state.cart)),
  };

  state.currentBooking = booking;

  const reviewContent = document.getElementById('reviewContent');
  if (!reviewContent) return;

  reviewContent.innerHTML = `
    <div class="review-grid">
      <div class="review-item"><span>${getTranslation('review.customer', 'Customer')}</span><strong>${booking.customerName}</strong></div>
      <div class="review-item"><span>${getTranslation('review.total', 'Total')}</span><strong>${currency(state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</strong></div>
      <div class="review-item"><span>${getTranslation('review.services', 'Services')}</span><strong>${state.cart.length}</strong></div>
      <div class="review-item"><span>${getTranslation('review.date', 'Date')}</span><strong>${formatShortDate(booking.date)}</strong></div>
      <div class="review-item"><span>${getTranslation('review.time', 'Time')}</span><strong>${formatTime(booking.time)}</strong></div>
      <div class="review-item"><span>${getTranslation('review.notes', 'Notes')}</span><strong>${booking.notes || getTranslation('validation.notesOptional', 'Optional')}</strong></div>
    </div>
    <div class="review-summary-table">
      ${state.cart
        .map(
          (item) => `
            <div class="review-row">
              <span>${item.name}</span>
              <strong>${currency(item.price * item.quantity)}</strong>
            </div>
          `
        )
        .join('')}
      <div class="review-row">
        <span>${getTranslation('review.subtotal', 'Subtotal')}</span>
        <strong>${currency(state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</strong>
      </div>
    </div>
  `;

  const modal = document.getElementById('reviewModal');
  if (modal) modal.classList.remove('hidden');
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) modal.classList.add('hidden');
}

function confirmBooking() {
  if (!state.currentBooking) return;

  const reference = `YB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  const confirmation = {
    reference,
    ...state.currentBooking,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEYS.lastBooking, JSON.stringify(confirmation));
  closeReviewModal();
  clearCart();
  document.getElementById('bookingForm')?.reset();
  clearBookingErrors();

  const successMessage = document.getElementById('successMessage');
  const referenceNode = document.getElementById('bookingReference');
  if (successMessage && referenceNode) {
    successMessage.textContent = `${getTranslation('success.message', 'Your appointment was successfully placed.')}`;
    referenceNode.textContent = `Ref: ${reference}`;
  }

  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.remove('hidden');

  state.currentBooking = null;
}

function clearBookingErrors() {
  document.querySelectorAll('.error-text').forEach((node) => {
    node.textContent = '';
    node.classList.remove('show');
  });
}

function formatShortDate(value) {
  if (!value) return '-';
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat(state.lang === 'ar' ? 'ar-EG' : 'en-US', { dateStyle: 'medium' }).format(date);
}

function formatTime(value) {
  if (!value) return '-';
  const [hours, minutes] = value.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat(state.lang === 'ar' ? 'ar-EG' : 'en-US', { hour: 'numeric', minute: '2-digit' }).format(date);
}

function renderSearch() {
  const input = document.getElementById('globalSearch');
  const count = document.getElementById('searchCount');
  const results = document.getElementById('searchResults');
  const clearBtn = document.getElementById('clearSearch');

  if (!input || !count || !results || !clearBtn) return;

  const searchItems = [
    ...appData.services.map((service) => ({
      type: getTranslation('search.service', 'Service'),
      title: getText(service.name),
      meta: getText(service.description),
      category: getText(service.category),
      link: '#services',
      score: `${getText(service.name)} ${getText(service.description)} ${getText(service.category)}`,
    })),
    ...appData.barbers.map((barber) => ({
      type: getTranslation('search.barber', 'Barber'),
      title: getText(barber.name),
      meta: getText(barber.specialty),
      category: getText(barber.specialty),
      link: '#barbers',
      score: `${getText(barber.name)} ${getText(barber.specialty)} ${getText(barber.experience)}`,
    })),
    ...appData.gallery.map((item) => ({
      type: getTranslation('search.gallery', 'Gallery'),
      title: getText(item.title),
      meta: item.category,
      category: item.category,
      link: '#gallery',
      score: `${getText(item.title)} ${item.category}`,
    })),
  ];

  const query = normalizeText(input.value);

  const filtered = query
    ? searchItems.filter((item) => normalizeText(item.score).includes(query))
    : [];

  count.textContent = `${filtered.length} ${state.lang === 'ar' ? getTranslation('search.resultType', 'نتيجة') : getTranslation('search.resultType', 'results')}`;

  if (!query) {
    results.innerHTML = '';
    count.textContent = getTranslation('search.count', '0 results');
    return;
  }

  if (!filtered.length) {
    results.innerHTML = `<div class="search-empty">${getTranslation('search.empty', 'No matching results. Try another service, barber, or gallery category.')}</div>`;
    count.textContent = getTranslation('search.count', '0 results');
    return;
  }

  results.innerHTML = filtered
    .slice(0, 8)
    .map((item) => {
      const icon = item.type === getTranslation('search.service', 'Service') ? 'S' : item.type === getTranslation('search.barber', 'Barber') ? 'B' : 'G';
      return `
        <a class="search-result" href="${item.link}" aria-label="${item.title}">
          <span class="result-icon">${icon}</span>
          <div class="result-meta">
            <strong>${highlightMatch(item.title, input.value.trim())}</strong>
            <small>${highlightMatch(item.meta, input.value.trim())}</small>
          </div>
          <small>${item.type}</small>
        </a>
      `;
    })
    .join('');

  count.textContent = `${filtered.length} ${state.lang === 'ar' ? getTranslation('search.resultType', 'نتيجة') : getTranslation('search.resultType', 'results')}`;

  clearBtn.classList.toggle('hidden', !input.value.trim());

  clearBtn.onclick = () => {
    input.value = '';
    renderSearch();
    input.focus();
  };

  input.oninput = () => renderSearch();
}

function setupInteractions() {
  const cartToggle = document.getElementById('cartToggle');
  const closeCartBtn = document.getElementById('closeCart');
  const overlay = document.getElementById('drawerOverlay');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('navMenu');
  const themeToggle = document.getElementById('themeToggle');
  const bookingForm = document.getElementById('bookingForm');
  const reviewModal = document.getElementById('reviewModal');
  const successModal = document.getElementById('successModal');

  if (cartToggle) {
  cartToggle.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCart();
  };
}

if (closeCartBtn) {
  closeCartBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeCart();
  };
}

if (overlay) {
  overlay.onclick = (event) => {
    event.preventDefault();
    closeCart();
  };
}

  if (navToggle && navMenu) {
    navToggle.onclick = () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    };
  }

  if (themeToggle) {
    themeToggle.onclick = () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEYS.theme, state.theme);
      document.body.setAttribute('data-theme', state.theme);
      updateThemeToggle();
    };
  }

 document.querySelectorAll('.lang-btn').forEach((button) => {
  button.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // اقفل السلة فورًا قبل تغيير اتجاه الصفحة
    closeCart();

    // غيّر اللغة
    state.lang = button.dataset.lang;

    localStorage.setItem(
      STORAGE_KEYS.language,
      state.lang
    );

    // طبّق اللغة والـ RTL
    applyTranslations();

    // تأكيد إغلاق السلة بعد إعادة الرسم
    closeCart();

    // تأكيد إضافي بعد تحديث الـ DOM
    requestAnimationFrame(() => {
      closeCart();
    });
  };
});

  document.querySelectorAll('#heroPrev, #heroNext').forEach((button) => {
    button.onclick = () => {
      const direction = button.id === 'heroNext' ? 1 : -1;
      state.heroIndex = (state.heroIndex + direction + appData.heroes.length) % appData.heroes.length;
      renderHero();
    };
  });

  document.querySelectorAll('[data-slide-index]').forEach((dot) => {
    dot.onclick = () => {
      state.heroIndex = Number(dot.dataset.slideIndex);
      renderHero();
    };
  });

  document.getElementById('testimonialPrev')?.addEventListener('click', () => {
    state.testimonialIndex = (state.testimonialIndex - 1 + appData.testimonials.length) % appData.testimonials.length;
    renderTestimonials();
    restartTestimonialSlider();
  });

  document.getElementById('testimonialNext')?.addEventListener('click', () => {
    state.testimonialIndex = (state.testimonialIndex + 1) % appData.testimonials.length;
    renderTestimonials();
    restartTestimonialSlider();
  });

  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    openReviewModal();
  });

  document.getElementById('editBookingBtn')?.addEventListener('click', closeReviewModal);
  document.getElementById('confirmBookingBtn')?.addEventListener('click', confirmBooking);
  document.getElementById('successCloseBtn')?.addEventListener('click', () => successModal?.classList.add('hidden'));

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.onclick = () => {
      const modalId = button.dataset.closeModal;
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('hidden');
    };
  });

  document.addEventListener('keydown', (event) => {
    const activeTag = document.activeElement && document.activeElement.tagName;
    const isTypingField = activeTag && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag);

    if (event.key === 'ArrowRight' && !isTypingField) {
      state.heroIndex = (state.heroIndex + 1) % appData.heroes.length;
      renderHero();
    }

    if (event.key === 'ArrowLeft' && !isTypingField) {
      state.heroIndex = (state.heroIndex - 1 + appData.heroes.length) % appData.heroes.length;
      renderHero();
    }

    if (event.key === 'Escape') {
      closeCart();
      closeReviewModal();
      const successModal = document.getElementById('successModal');
      if (successModal && !successModal.classList.contains('hidden')) successModal.classList.add('hidden');
      const galleryModal = document.querySelector('.modal[role="dialog"]');
      if (galleryModal && galleryModal.querySelector('img')) galleryModal.remove();
    }
  });

  document.getElementById('bookingDate')?.setAttribute('min', new Date().toISOString().slice(0, 10));
}

function init() {
  setDocumentLanguage();
  applyTranslations();
  renderServices();
  renderBarbers();
  renderGallery();
  renderTestimonials();
  renderCart();
  renderBookingSummary();
  setupInteractions();
  renderSearch();
  setupCartListeners();
}

function setupCartListeners() {
  document.getElementById('globalSearch')?.addEventListener('input', renderSearch);
}

window.addEventListener('DOMContentLoaded', init);
