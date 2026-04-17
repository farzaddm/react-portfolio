import {Coffee, DomainVerificationRounded, SchoolRounded, GitHub, LinkedIn, Telegram, WhatsApp, EmailOutlined} from "@mui/icons-material";

export const socialMedias = [
  {
    label: "GitHub",
    url: "https://github.com/farzaddm",
    icon: <GitHub sx={{color: "grey"}}/>,
  },
  {
    label: "Telegram",
    url: "https://github.com/farzaddm",
    icon: <Telegram sx={{color: "grey"}}/>,
  },
  {
    label: "WhatsApp",
    url: "https://github.com/farzaddm",
    icon: <WhatsApp sx={{color: "grey"}}/>,
  },
  {
    label: "Email",
    url: "https://github.com/farzaddm",
    icon: <EmailOutlined sx={{color: "grey"}}/>,
  },
  {
    label: "LinkedIn",
    url: "https://github.com/farzaddm",
    icon: <LinkedIn sx={{color: "grey"}}/>,
  }
]

export const interestingDetails = [
  {
    toolTipTitle: "تعداد چایی های خورده شده",
    icon: <Coffee/>,
    total: 15330,
    color: "lightcoral",
  },
  {
    toolTipTitle: "تعداد پروژه های واقعی زده شده",
    icon: <DomainVerificationRounded/>,
    total: 5,
    color: "lightcoral",
  },
  {
    toolTipTitle: "تعداد واحد های پاس کرده",
    icon: <SchoolRounded/>,
    total: 93,
    color: "lightcoral",
  },
];

export const educationTimeline = [
  {
    year: "1384",
    cert: "تولد",
    major: "",
    place: "یزد"
  },
  {
    year: "1401",
    cert: "دیپلم",
    major: "ریاضی فیزیک",
    place: "دبیرستان استعداد های درخشان شهید بهشتی"
  },
  {
    year: "1402",
    cert: "ورودی کارشناسی",
    major: "مهندسی کامپیوتر",
    place: "دانشگاه علم و صنعت ایران"
  },
  {
    year: "Now",
    cert: "",
    major: "",
    place: ""
  }
];

export const worksDetails = [
  {
    title: "ربات تلگرام فروشگاهی",
    image: "/images/telegram-bot.jpg",
    link: "https://github.com/yourusername/telegram-shopping-bot",
    description: "ربات فروش با پرداخت های ریالی و تتری همراه با پنل ادمینی، سیستم نوتیفیکیشن، مدیریت محصولات، پیگیری سفارشات و گزارش گیری پیشرفته با قابلیت اتصال به درگاه زرین پال",
    technologies: ["Node.js", "Telegraf", "MongoDB", "Redis"],
  },
  {
    title: "سیستم مدیریت محتوا (CMS)",
    image: "/images/cms.jpg",
    link: "https://github.com/yourusername/react-cms",
    description: "سیستم مدیریت محتوای کامل با قابلیت مدیریت کاربران، نقش‌ها و دسترسی‌ها، ویرایشگر متنی پیشرفته، آپلود فایل، سئو خودکار و خروجی گرفتن از محتوا به صورت API",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "داشبورد تحلیلی فروش",
    image: "/images/dashboard.jpg",
    link: "https://github.com/yourusername/sales-dashboard",
    description: "داشبورد تعاملی برای نمایش آمار فروش، نمودارهای پیشرفته، پیش‌بینی فروش با الگوریتم‌های یادگیری ماشین، گزارش گیری خودکار و خروجی PDF و Excel",
    technologies: ["React", "Chart.js", "Material-UI", "Python", "FastAPI"],
  },
  {
    title: "اپلیکیشن مدیریت پروژه",
    image: "/images/project-manager.jpg",
    link: "https://github.com/yourusername/project-management-app",
    description: "سیستم مدیریت پروژه شبیه به Trello با قابلیت ایجاد تسک، تعیین ددلاین، آپلود فایل، تگ‌گذاری، فیلترهای پیشرفته، نوتیفیکیشن实时 و همکاری تیمی",
    technologies: ["React", "Redux Toolkit", "Node.js", "Socket.io", "PostgreSQL"],
  },
  {
    title: "سامانه رزرو آنلاین",
    image: "/images/booking-system.jpg",
    link: "https://github.com/yourusername/online-booking-system",
    description: "سامانه رزرو هتل و تور مسافرتی با تقویم تعاملی، انتخاب تاریخ، پرداخت آنلاین، ارسال ایمیل و پیامک تایید، مدیریت رزروها و پنل کاربری پیشرفته",
    technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Stripe"],
  },
  {
    title: "پلتفرم آموزش آنلاین",
    image: "/images/lms.jpg",
    link: "https://github.com/yourusername/lms-platform",
    description: "سیستم مدیریت یادگیری (LMS) با قابلیت آپلود ویدیو، آزمون‌های آنلاین، گواهی پایان دوره، پنل مدرس و دانشجو، سیستم امتیازدهی و انجمن پرسش و پاسخ",
    technologies: ["MERN Stack", "Socket.io", "FFmpeg", "JWT", "Cloudinary"],
  },
];