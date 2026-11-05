/**
 * Asosiy til (o'zbek, lotin). Boshqa tillar `Messages` turiga bo'ysunadi —
 * kalit qo'shilsa yoki qolib ketsa `astro check` xato beradi.
 * `{name}` / `{phone}` — ish vaqtida qo'yiladigan qiymatlar.
 */
export const uz = {
  meta: {
    title: "Zucco CRM — o'quv markazlari uchun boshqaruv tizimi",
    description:
      "Zucco CRM — o'quv markazlari uchun lidlar, guruhlar, davomat, to'lovlar va hisobotlarni bitta tizimda boshqarish.",
  },
  nav: {
    sections: "Bo'limlar",
    features: 'Imkoniyatlar',
    pricing: 'Narxlar',
    support: 'Yordam',
    faq: 'Savollar',
    menu: 'Menyu',
    language: 'Til',
    consult: 'Konsultatsiyaga yozilish',
  },
  hero: {
    title: "O'quv markazingizni bitta tizimda boshqaring",
    lead: "Zucco — lidlardan bitiruvchigacha bo'lgan butun jarayon uchun CRM. Qo'lda bajariladigan ishlarni kamaytiring, qarzdorlik va davomatni real vaqtda ko'ring.",
    primaryCta: 'Bepul konsultatsiya olish',
    salesCta: "Sotuv bo'limi",
    mockLabel: "Zucco CRM ilovasi ko'rinishi (namuna ma'lumot)",
    sample: "namuna ma'lumot",
    rail: ['Asosiy', 'Lidlar', 'Talabalar', 'Jadval', 'Moliya', 'Hisobot'],
    kpis: ['Faol talabalar', 'Guruhlar', 'Qarzdorlar', 'Sinov darsida', "Shu oy to'laganlar", 'Yangi lidlar'],
    chartTitle: 'Oylik tushum',
    chartUnit: "so'm, mln",
    chartLabel: "6 oylik tushum grafigi: 32 dan 54 million so'mgacha o'sish",
    months: ['Iyun', 'Avg', 'Okt', 'Noy'],
    paymentsTitle: "Barcha to'lovlar",
    payments: "To'lovlar: 48 600 000 so'm",
    profit: "Sof foyda: 21 400 000 so'm",
  },
  features: {
    title: "Qog'oz va Excel'ni unuting",
    subtitle:
      "Lidlardan tortib o'qituvchi maoshigacha — barcha jarayon bitta tizimda, har bir xodim faqat o'z bo'limini ko'radi.",
    leads: {
      tag: 'Lidlar',
      title: "Bitta ham murojaat yo'qolmaydi",
      text: "Instagram, Telegram va saytdan kelgan lidlar voronkada. Sinov darsiga yozing va bir bosishda talabaga aylantiring.",
      stages: ['Yangi', 'Sinov darsi', 'Guruhda'],
    },
    attendance: {
      tag: 'Davomat',
      title: 'Davomat bir bosishda',
      text: "O'qituvchi darsda belgilaydi, baho va uy vazifasini qo'yadi. Qatnashgan o'quvchiga tanga avtomatik beriladi.",
      statuses: ['Keldi', 'Kechikdi', 'Kelmadi'],
    },
    finance: {
      tag: 'Moliya',
      title: 'Pul qayerdan kelib, qayerga ketayotganini biling',
      text: "Naqd, karta, Click, Payme va Uzum to'lovlari, xarajatlar, kassa qoldig'i va qarzdorlar — real vaqtda.",
    },
    schedule: {
      tag: 'Jadval',
      title: "Xona va o'qituvchi to'qnashuvlarisiz jadval",
      text: "Guruh yaratilganda darslar avtomatik joylanadi, band xona yoki o'qituvchini tizim o'zi ogohlantiradi.",
    },
    gamification: {
      tag: 'Gamifikatsiya',
      title: "O'quvchilar tanga yig'adi",
      text: "Darsga kelgani, uy vazifasi va do'stini olib kelgani uchun tanga — mukofotlar do'konida almashtiriladi.",
      coins: ['+5 davomat', '+10 uy vazifasi', "+50 do'stini olib keldi"],
    },
    payroll: {
      tag: 'Maosh va hisobotlar',
      title: "Maosh va foyda o'zi hisoblanadi",
      text: "O'qituvchi maoshi o'tilgan darslar bo'yicha, oylik hisobot esa daromad, xarajat va konversiya bilan tayyor bo'ladi.",
    },
  },
  benefits: {
    title: "Zucco bilan nimalarga ega bo'lasiz?",
    subtitle: "Tizimni berib qo'yib ketmaymiz — ishga tushirishdan keyin ham yoningizdamiz.",
    support: {
      title: 'Texnik yordam',
      text: 'Har bir markazga biriktirilgan menejer savollaringizga ish vaqtida tez javob beradi.',
    },
    onboarding: {
      title: "Bepul sozlash va o'rgatish",
      text: "Talabalar, guruhlar va qarzdorliklarni ko'chirib beramiz, xodimlaringizni o'rgatamiz.",
    },
    security: {
      title: 'Xavfsizlik',
      text: "Har bir markaz ma'lumoti alohida saqlanadi, kim nimani o'zgartirgani yozib boriladi.",
    },
    interface: {
      title: 'Qulay interfeys',
      text: "O'zbek (lotin va kirill), rus va ingliz tillarida, kunduzgi va tungi rejim bilan.",
    },
  },
  plans: {
    title: "Markazingiz bilan birga o'sadigan tariflar",
    billing: "To'lov davri",
    monthly: 'Oylik',
    yearly: 'Yillik',
    yearlySave: '2 oy bepul',
    perMonth: "so'm / oy",
    periodMonthly: "oylik to'lov",
    periodYearly: "yiliga to'lanadi",
    popular: "Ko'p tanlanadi",
    fine: 'Majburiyatsiz · istalgan vaqtda bekor qilish',
    start: {
      name: 'Start',
      audience: 'Yangi ochilgan markazlar uchun',
      cta: 'Start bilan boshlash',
      items: [
        '1 filial, 150 tagacha faol talaba',
        'Lidlar, talabalar, guruhlar va jadval',
        "Davomat va to'lovlar",
        'Telegram orqali yordam',
      ],
    },
    business: {
      name: 'Biznes',
      audience: "O'sib borayotgan markazlar uchun",
      cta: 'Biznes tarifini olish',
      leadIn: "Start'dagi hamma narsa va:",
      items: [
        '3 tagacha filial, 600 tagacha talaba',
        "Xarajatlar va o'qituvchi maoshi",
        'SMS xabarnomalar',
        "Gamifikatsiya va mukofotlar do'koni",
        'Oylik hisobotlar',
      ],
    },
    enterprise: {
      name: 'Korporativ',
      audience: 'Tarmoqli markazlar uchun',
      cta: "Sotuv bo'limi bilan bog'lanish",
      price: 'Kelishiladi',
      priceNote: ['filiallar soniga', 'qarab'],
      fine: 'Shaxsiy taklif · alohida shartnoma',
      leadIn: "Biznes'dagi hamma narsa va:",
      items: ['Cheksiz filial va talabalar', 'Rollar va ruxsatlarni moslash', 'Biriktirilgan menejer', 'Ustuvor texnik yordam'],
    },
    note: "Narxlar va limitlar namuna — tasdiqlanmagan. Haqiqiy tariflar sotuv bo'limi bilan kelishilgach qo'yiladi.",
  },
  faq: {
    title: "Ko'p beriladigan savollar",
    items: [
      {
        q: 'Zucco nima va kimlar uchun?',
        a: "O'quv markazlari, til maktablari va repetitorlik markazlari uchun CRM: lidlar, talabalar, guruhlar, jadval, davomat, to'lovlar, maosh va hisobotlar bitta joyda.",
      },
      {
        q: 'Moliyaviy hisobotlar qanchalik to\'liq?',
        a: "Oylik daromad va xarajat, sof foyda, to'lov usullari va xarajat toifalari bo'yicha taqsimot, qarzdorlar va 6 oylik dinamika.",
      },
      {
        q: "Biror dastur o'rnatish kerakmi?",
        a: "Yo'q. Zucco bulutda ishlaydi — kompyuter, planshet yoki telefon brauzeridan kirasiz.",
      },
      {
        q: 'Sinov muddati bormi?',
        a: "Ha, bepul demo beramiz: tizimni markazingiz misolida sozlab ko'rsatamiz.",
      },
      {
        q: "Qanday to'lov qilsa bo'ladi?",
        a: "Bank o'tkazmasi yoki karta orqali, oylik yoki yillik — yillik to'lovda 2 oy bepul.",
      },
    ],
  },
  cta: {
    title: 'Bepul konsultatsiya oling',
    text: "Raqamingizni qoldiring — mutaxassisimiz qo'ng'iroq qilib, Zucco'ni markazingiz misolida ko'rsatadi.",
    name: 'Ismingiz',
    phone: 'Telefon raqami',
    submit: 'Konsultatsiyaga yozilish',
    sending: 'Yuborilmoqda…',
    success: "Rahmat, {name}! Tez orada qo'ng'iroq qilamiz.",
    errorName: 'Ismingizni kiriting.',
    errorPhone: "Telefon raqamini to'liq kiriting.",
    errorSend: "Ariza yuborilmadi. Qayta urinib ko'ring yoki qo'ng'iroq qiling: {phone}",
    offline: "Hozircha onlayn ariza qabul qilinmayapti. Qo'ng'iroq qiling: {phone}",
  },
  footer: {
    tagline: "O'quv markazlari uchun zamonaviy boshqaruv tizimi",
    apps: 'Ilovalar',
    download: 'YUKLAB OLISH',
    soon: 'tez orada',
    resources: 'Resurslar',
    login: 'Tizimga kirish',
    contacts: 'Kontaktlar',
    socials: 'Ijtimoiy tarmoqlar',
    pay: "To'lov qilish",
    legal:
      "Zucco CRM xizmatlari yuridik shaxslar va yakka tartibdagi tadbirkorlar — o'quv markazlari, til maktablari va repetitorlik markazlari uchun mo'ljallangan.",
  },
}

export type Messages = typeof uz
