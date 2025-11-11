import type { Language, LanguageConfig, Category, PopularQuestion } from './types';

export const LANGUAGES: LanguageConfig[] = [
  { code: 'fa', name: 'فارسی', dir: 'rtl', fontFamily: 'fa' },
  { code: 'en', name: 'English', dir: 'ltr', fontFamily: 'sans' },
  { code: 'ar', name: 'العربية', dir: 'rtl', fontFamily: 'ar' },
];

export const UI_TEXTS: { [key in Language]: any } = {
  fa: {
    logo: 'راهنمای والدین',
    title: 'راهنمایی قابل اعتماد برای سفر پر فراز و نشیب فرزندپروری',
    subtitle: 'پاسخ‌های فوری و مبتنی بر شواهد برای سوالات فرزندپروری خود را از طریق هوش مصنوعی دریافت کنید.',
    inputPlaceholder: 'سوال خود را در اینجا بپرسید... مثلاً چگونه با کج‌خلقی‌های کودکم برخورد کنم؟',
    buttonText: 'دریافت راهنمایی',
    categoriesTitle: 'کاوش بر اساس دسته‌بندی',
    popularQuestionsTitle: 'سوالات متداول',
    footerText: 'ساخته شده با ❤️ برای والدین در همه جا.',
  },
  en: {
    logo: 'Parenting Guide',
    title: 'Your Trusted Guide on the Winding Road of Parenthood',
    subtitle: 'Get instant, evidence-based answers to your parenting questions, powered by AI.',
    inputPlaceholder: 'Ask your question here... e.g., How to handle toddler tantrums?',
    buttonText: 'Get Guidance',
    categoriesTitle: 'Explore by Category',
    popularQuestionsTitle: 'Popular Questions',
    footerText: 'Made with ❤️ for parents everywhere.',
  },
  ar: {
    logo: 'دليل الوالدين',
    title: 'دليلك الموثوق في رحلة الأبوة والأمومة المليئة بالتحديات',
    subtitle: 'احصل على إجابات فورية ومبنية على الأدلة لأسئلتك التربوية، مدعومة بالذكاء الاصطناعي.',
    inputPlaceholder: 'اطرح سؤالك هنا... على سبيل المثال، كيف أتعامل مع نوبات غضب طفلي؟',
    buttonText: 'احصل على إرشادات',
    categoriesTitle: 'استكشف حسب الفئة',
    popularQuestionsTitle: 'الأسئلة الشائعة',
    footerText: 'صنع بـ ❤️ للآباء والأمهات في كل مكان.',
  },
};

export const CATEGORIES: Category[] = [
  { slug: 'communication', name: { fa: 'ارتباط', en: 'Communication', ar: 'التواصل' }, emoji: '💬', color: 'primary-blue' },
  { slug: 'discipline', name: { fa: 'انضباط', en: 'Discipline', ar: 'الانضباط' }, emoji: '⚖️', color: 'primary-orange' },
  { slug: 'tantrums', name: { fa: 'کج‌خلقی', en: 'Tantrums', ar: 'نوبات الغضب' }, emoji: '😡', color: 'primary-pink' },
  { slug: 'sibling-rivalry', name: { fa: 'رقابت خواهر و برادر', en: 'Sibling Rivalry', ar: 'تنافس الأشقاء' }, emoji: '👨‍👩‍👧‍👦', color: 'primary-green' },
  { slug: 'sleep-issues', name: { fa: 'مشکلات خواب', en: 'Sleep Issues', ar: 'مشاكل النوم' }, emoji: '😴', color: 'primary-yellow' },
  { slug: 'mealtime', name: { fa: 'وقت غذا', en: 'Mealtime', ar: 'وقت الطعام' }, emoji: '🍎', color: 'primary-cyan' },
];

export const POPULAR_QUESTIONS: PopularQuestion[] = [
    { id: 1, question: { fa: 'چگونه به کودک نوپای خود کمک کنم بهتر بخوابد؟', en: 'How can I help my toddler sleep better?', ar: 'كيف أساعد طفلي على النوم بشكل أفضل؟' }, categorySlug: 'sleep-issues' },
    { id: 2, question: { fa: 'بهترین راه برای برخورد با خواهر و برادرهایی که دعوا می‌کنند چیست؟', en: 'What\'s the best way to handle fighting siblings?', ar: 'ما هي أفضل طريقة للتعامل مع الأشقاء المتشاجرين؟' }, categorySlug: 'sibling-rivalry' },
    { id: 3, question: { fa: 'کودک من فقط غذاهای خاصی می‌خورد. چه کار کنم؟', en: 'My child is a picky eater. What should I do?', ar: 'طفلي صعب الإرضاء في الأكل. ماذا أفعل؟' }, categorySlug: 'mealtime' },
    { id: 4, question: { fa: 'چگونه می‌توانم بدون فریاد زدن انضباط را برقرار کنم؟', en: 'How can I discipline my child without yelling?', ar: 'كيف يمكنني تأديب طفلي دون صراخ؟' }, categorySlug: 'discipline' },
];
