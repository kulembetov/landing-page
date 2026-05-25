import {
  BarChart3,
  Briefcase,
  Download,
  FileText,
  Gift,
  Globe2,
  GraduationCap,
  Image,
  Lock,
  Megaphone,
  MessageSquareQuote,
  Mic,
  Palette,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { siTelegram, siVk } from "simple-icons";

export type StepItem = {
  number: string;
  title: string;
  description: string;
};

export const APP_CTA_HREF = "https://app.presentsimple.ai/login";
export const BRAND_NAME = "presentsimple";

export const CTA_LABELS = {
  primary: "Создать презентацию",
  createWithAi: "Создать презентацию с ИИ",
  start: "Начать",
  login: "Войти",
  tryFree: "Попробовать бесплатно",
  howItWorks: "Смотреть, как это работает",
} as const;

export const HERO_COPY = {
  eyebrow: "Без шаблонов и дизайнеров",
  title: "Нейросеть",
  titleAccent: "для презентаций",
  subtitle:
    "Опишите тему или загрузите материалы — ИИ-генератор соберёт структуру, текст и дизайн. Готовая презентация PowerPoint за 3 минуты.",
} as const;

export const SPOTLIGHT_COPY = {
  title: ["~ 3 минуты", "от идеи до PowerPoint"],
  subtitle:
    "Опишите задачу или создайте презентацию по тексту — загрузите материалы, и нейросеть соберёт готовую презентацию с интересным текстом, логичной структурой и трендовым дизайном в PPTX",
} as const;

export const SHOWCASE_COPY = {
  title: ["Презентации, которые", "привлекают внимание"],
  subtitle:
    "Десятки готовых стилей — от строгого корпоратива до ярких маркетинговых. Нейросеть сама подберёт оформление под тему и аудиторию.",
} as const;

export const HOWIT_COPY = {
  title: ["ИИ для создания презентаций:", "как это работает"],
  subtitle:
    "Встречайте новый подход к созданию презентаций — онлайн-сервис на базе нейросети, который генерирует слайды с готовым текстом, структурой и дизайном за пару минут.",
} as const;

export const REVOLUTION_COPY = {
  title: ["Революция в создании", "презентаций"],
  subtitle:
    "Профессиональные презентации с нейросетью — результат, который раньше требовал дизайнера и недель работы, теперь за минуты.",
} as const;

export const VALUE_COPY = {
  title: ["Профессиональные", "презентации с ИИ", "бесплатно на русском"],
  subtitle:
    "Генератор презентаций с ИИ для работы, учёбы, дизайна и оформления проектов — с понятными инструментами, качественным дизайном, графиками и анимацией.",
} as const;

export const TABS_SHOWCASE_COPY = {
  title: "Дизайн, а не шаблон",
  subtitle:
    "ИИ-генератор презентаций не просто вставляет текст в ячейки — он собирает слайд по принципам, которыми пользуются дизайнеры.",
} as const;

export const B2B_COPY = {
  eyebrow: "Для бизнеса",
  title: ["Презентации", "в фирменном стиле", "с нейросетью"],
  subtitle:
    "Нейросеть подстраивается под фирменный стиль, брендбук и корпоративную базу знаний. Команда получает единый инструмент для быстрых презентаций без разнобоя в дизайне.",
} as const;

export const AUDIENCE_COPY = {
  titlePrefix: "Кому подойдёт",
  subtitle:
    "Универсальный онлайн-сервис: создавайте презентации с ИИ — от студенческой защиты до корпоративной стратегии.",
} as const;

export const TRANSFORM_COPY = {
  title: ["Как presentsimple превращает", "черновик в слайд"],
  subtitle:
    "Двигайте ползунок, чтобы увидеть, как нейросеть за секунды превращает текст в визуал, инфографику и акценты.",
} as const;

export const PRICING_COPY = {
  titlePrefix: "Тарифы",
  subtitle:
    "На платных тарифах доступны все функции конструктора презентаций — без водяных знаков и с экспортом в PowerPoint.",
} as const;

export const FAQ_COPY = {
  title: "Ответы на частые вопросы",
} as const;

export const TESTIMONIALS_COPY = {
  title: "Каждая хорошая идея заслуживает крутой презентации.",
  emphasis: "А не правки шаблонов всю ночь.",
  suffix: "Поэтому вы здесь.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Примеры", href: "#showcase" },
  { label: "Как работает", href: "#howit" },
  { label: "Для кого", href: "#audience" },
  { label: "Тарифы", href: "#pricing" },
];

export const HERO_PROMPTS = [
  "Создай презентацию на тему повышения производительности труда, 15 слайдов в строгой стилистике",
  "Оформи дизайн моего файла",
  "Подготовь отчёт на основании прилагаемого документа",
  "Сделай презентацию для выступления в стиле моего бренда",
];

export const HERO_STATUSES = [
  "Анализирую запрос…",
  "Выстраиваю структуру…",
  "Пишу текст слайдов…",
  "Подбираю дизайн…",
];

export type HeroCounter = {
  id: string;
  value: number;
  label: string;
};

export const HERO_COUNTERS: HeroCounter[] = [
  { id: "slides", value: 4234891, label: "слайдов создано" },
  { id: "presentations", value: 187423, label: "презентаций сгенерировано" },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Опишите тему или загрузите материалы",
    description: "Введите тему текстом или загрузите PPTX, PDF или Word",
  },
  {
    number: "02",
    title: "Нейросеть выстроит структуру",
    description: "ИИ разобьёт материал на разделы и напишет текст слайдов",
  },
  {
    number: "03",
    title: "ИИ оформит дизайн слайдов",
    description: "Подберёт стиль, типографику, иконки и инфографику",
  },
  {
    number: "04",
    title: "Скачайте PowerPoint или PDF",
    description: "Готовый PPTX открывается и редактируется как обычная презентация",
  },
];

export type BenefitCardItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
};

export const BENEFIT_TAGS: string[] = [
  "Презентации для учёбы",
  "Защита проекта",
  "Коммерческие предложения",
  "Презентация бренда",
  "Питчи для инвесторов",
  "Отчёты",
  "Маркетинг-киты",
  "Вебинары",
  "Дипломные работы",
  "Тренинги",
  "Конференции",
  "Обучающие гайды",
];

export const BENEFIT_CARDS: BenefitCardItem[] = [
  {
    id: "01",
    title: "Дешевле фриланса в 10 раз",
    description:
      "От 20 ₽ за презентацию вместо тысяч ₽ за каждую на бирже — без ожидания и правок.",
    image: "slides-2/slide-01.webp",
    alt: "Презентация, созданная нейросетью вместо фрилансера",
    icon: Target,
  },
  {
    id: "02",
    title: "Любая длина и язык",
    description:
      "От 5 до 100 слайдов на русском, английском, китайском и других языках — один сервис вместо нескольких.",
    image: "slides-2/slide-02.webp",
    alt: "ИИ-презентация на русском, английском и других языках",
    icon: TrendingUp,
  },
  {
    id: "03",
    title: "Скачали — и поехали",
    description:
      "Получаете готовый файл .pptx — открывается в PowerPoint и редактируется как обычная презентация.",
    image: "slides-2/slide-03.webp",
    alt: "Готовый файл PPTX — открывается и редактируется в PowerPoint",
    icon: MessageSquareQuote,
  },
];

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const VALUE_FEATURES: FeatureCard[] = [
  {
    title: "ИИ-генератор",
    description: "Текст, структура и дизайн — всё собирается нейросетью.",
    icon: Sparkles,
  },
  {
    title: "100+ языков",
    description: "Русский, английский, китайский и другие — один сервис.",
    icon: Globe2,
  },
  {
    title: "Редактируемый PPTX",
    description: "Файл открывается в PowerPoint и редактируется как обычная презентация.",
    icon: Download,
  },
  {
    title: "Бесплатный старт",
    description: "10 слайдов в подарок при регистрации.",
    icon: Gift,
  },
];

export const B2B_FEATURES: FeatureCard[] = [
  {
    title: "Презентации в фирменном стиле",
    description: "Логотип, шрифты, цвета и типографика по вашему брендбуку — на каждом слайде.",
    icon: Palette,
  },
  {
    title: "Тексты из вашей базы знаний",
    description: "ИИ берёт факты, формулировки и цифры из корпоративных документов.",
    icon: FileText,
  },
  {
    title: "Доступ для всех сотрудников",
    description: "Командные тарифы с общим балансом, ролями и единой библиотекой стилей.",
    icon: Users,
  },
  {
    title: "Библиотека графики",
    description: "Иконки, иллюстрации и фото подбираются под тему слайда в одном стиле.",
    icon: Image,
  },
  {
    title: "Премиум-поддержка",
    description: "Личный менеджер и SLA на ответ. Помогаем настроить шаблоны и интеграции.",
    icon: ShieldCheck,
  },
  {
    title: "Защита данных",
    description: "Конфиденциальные документы не уходят на обучение моделей.",
    icon: Lock,
  },
  {
    title: "Аналитика по команде",
    description:
      "Статистика генераций по сотрудникам, расход баланса и история презентаций — всё в одном дашборде.",
    icon: BarChart3,
  },
  {
    title: "Развёртывание в контуре",
    description:
      "Для Enterprise: запускаем сервис в изолированной инфраструктуре. Данные не покидают периметр компании.",
    icon: Server,
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Как создать презентацию с помощью нейросети?",
    a: "Опишите тему текстом или загрузите материалы (PPTX, PDF, Word). Нейросеть соберёт структуру, напишет текст и оформит дизайн слайдов, а готовую презентацию можно скачать в PowerPoint за пару минут.",
  },
  {
    q: "В каком формате я получу презентацию?",
    a: "Презентацию можно скачать в форматах PPTX и PDF. Файл .pptx открывается в PowerPoint и редактируется как обычная презентация — без привязки к сервису.",
  },
  {
    q: "Можно ли создать презентацию бесплатно?",
    a: "Да, при регистрации доступен бесплатный старт — 10 слайдов в подарок. На платных тарифах от 490 ₽ в месяц презентации скачиваются без водяного знака и со всеми функциями конструктора.",
  },
  {
    q: "На каком языке нейросеть создаёт презентации?",
    a: "Презентации создаются более чем на 100 языках, включая русский, английский и китайский — в одном сервисе, без переключения между инструментами.",
  },
  {
    q: "Можно ли редактировать презентацию после генерации?",
    a: "Да, готовую презентацию можно править прямо в редакторе — без ограничений. После экспорта в PPTX её также можно редактировать в PowerPoint.",
  },
  {
    q: "Как долго генерируется презентация?",
    a: "Обычно не более 3 минут — зависит от объёма и сложности. Большие презентации на 100+ слайдов могут занять чуть дольше.",
  },
  {
    q: "Исчезает ли водяной знак при покупке?",
    a: "Да, на всех платных тарифах презентации скачиваются без водяного знака.",
  },
  {
    q: "Используются ли мои данные для обучения ИИ?",
    a: "Нет. Ваши тексты и файлы не используются для обучения моделей. Для бизнеса можем развернуть сервис в изолированном контуре.",
  },
  {
    q: "Как работает подписка?",
    a: "Подписка списывается раз в месяц автоматически. Отменить можно в разделе «Мои подписки» в личном кабинете или через поддержку.",
  },
  {
    q: "Как вернуть денежные средства?",
    a: "Напишите в поддержку support@presentsimple.ai с почты аккаунта и причиной — рассмотрим по политике возвратов.",
  },
  {
    q: "Как создать презентацию с нуля или из своих материалов?",
    a: "Тремя способами: из текстового запроса, из готового PPTX-файла или из PDF/Word-документа. Любой можно загрузить с компьютера или телефона.",
  },
];

export type ShowcaseRow = {
  slideNumbers: string[];
  duration: string;
  reverse?: boolean;
};

export const SHOWCASE_ROWS: ShowcaseRow[] = [
  {
    slideNumbers: [
      "11",
      "05",
      "14",
      "01",
      "08",
      "03",
      "13",
      "09",
      "04",
      "15",
      "02",
      "07",
      "12",
      "10",
      "06",
      "47",
    ],
    duration: "220s",
  },
  {
    slideNumbers: [
      "22",
      "29",
      "17",
      "24",
      "28",
      "30",
      "16",
      "26",
      "18",
      "25",
      "21",
      "31",
      "20",
      "23",
      "27",
      "19",
    ],
    duration: "200s",
    reverse: true,
  },
  {
    slideNumbers: [
      "35",
      "41",
      "33",
      "46",
      "38",
      "32",
      "43",
      "45",
      "36",
      "40",
      "39",
      "34",
      "44",
      "37",
      "42",
    ],
    duration: "180s",
  },
];

export const SPOTLIGHT_SLIDES: string[] = [
  "slides-3/slide-05.webp",
  "slides-3/slide-02.webp",
  "slides-3/slide-03.webp",
  "slides-3/slide-04.webp",
  "slides-3/slide-01.webp",
];

export type TabsShowcaseItem = {
  key: string;
  label: string;
  src: string;
  alt: string;
  items: Array<{
    title: string;
    text: string;
  }>;
};

export const TABS_SHOWCASE_ITEMS: TabsShowcaseItem[] = [
  {
    key: "timeline",
    label: "Таймлайн",
    src: "slides-5/slide-01.webp",
    alt: "Пример слайда: таймлайн",
    items: [
      {
        title: "Цвет для акцента",
        text: "Не для украшения. Используется там, где нужно направить внимание зрителя.",
      },
      {
        title: "Визуал поддерживает смысл",
        text: "Не дублирует текст, а помогает его быстрее прочесть и запомнить.",
      },
      {
        title: "Акценты на ключевом шаге",
        text: "Подсвечивают главное, чтобы взгляд читал слайд по нужному маршруту.",
      },
    ],
  },
  {
    key: "comparison",
    label: "Сравнение",
    src: "slides-5/slide-02.webp",
    alt: "Пример слайда: сравнение",
    items: [
      {
        title: "Контраст подсвечивает разницу",
        text: "Главное отличие между вариантами видно сразу без долгого вчитывания.",
      },
      {
        title: "Цвет различает, а не украшает",
        text: "Каждый оттенок закреплён за конкретным вариантом и несёт смысл.",
      },
      {
        title: "Рекомендованный выбор выделен",
        text: "Зритель сразу видит, к какому решению его ведёт презентация.",
      },
    ],
  },
  {
    key: "charts",
    label: "Диаграммы",
    src: "slides-5/slide-03.webp",
    alt: "Пример слайда: диаграмма",
    items: [
      {
        title: "Только нужные деления оси",
        text: "Без визуального шума, только цифры, которые имеют значение для истории.",
      },
      {
        title: "Подписи рядом со значениями",
        text: "Не нужно гонять взгляд между легендой и графиком.",
      },
      {
        title: "Цвет выделяет тренд",
        text: "Главная линия выделена, остальные фоном, чтобы не спорили с ключевым.",
      },
    ],
  },
  {
    key: "theses",
    label: "Тезисы",
    src: "slides-5/slide-04.webp",
    alt: "Пример слайда: тезисы",
    items: [
      {
        title: "Один тезис, одна идея",
        text: "Без перегрузки. Каждая строка несёт собственный смысл и не спорит с другими.",
      },
      {
        title: "Иерархия задаётся размером",
        text: "Главное крупно. Второстепенное мельче, без цветовой мишуры.",
      },
      {
        title: "Воздух важнее текста",
        text: "Между блоками достаточно паузы, чтобы каждый тезис был читаемым.",
      },
    ],
  },
  {
    key: "cover",
    label: "Обложка",
    src: "slides-5/slide-05.webp",
    alt: "Пример слайда: обложка",
    items: [
      {
        title: "Заголовок в одну строку",
        text: "Чётко, без переносов. Сразу понятно, о чём презентация.",
      },
      {
        title: "Имя и роль автора на виду",
        text: "Доверие начинается с того, что зритель знает, кто говорит.",
      },
      {
        title: "Бренд читается сразу",
        text: "Логотип и цвет работают как опознавательный знак с первого слайда.",
      },
    ],
  },
];

export type TransformPanel = {
  key: string;
  label: string;
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
};

export const TRANSFORM_PANELS: TransformPanel[] = [
  {
    key: "numbers",
    label: "Цифры",
    before: "slides-6/numbers-before.webp",
    beforeAlt: "Черновик с цифрами",
    after: "slides-6/numbers-after.webp",
    afterAlt: "Слайд с инфографикой по цифрам",
  },
  {
    key: "lists",
    label: "Списки",
    before: "slides-6/lists-before.webp",
    beforeAlt: "Черновик списка",
    after: "slides-6/lists-after.webp",
    afterAlt: "Оформленный список",
  },
  {
    key: "processes",
    label: "Процессы",
    before: "slides-6/processes-before.webp",
    beforeAlt: "Черновик процесса",
    after: "slides-6/processes-after.webp",
    afterAlt: "Визуализация процесса",
  },
  {
    key: "covers",
    label: "Обложки",
    before: "slides-6/covers-before.webp",
    beforeAlt: "Черновик обложки",
    after: "slides-6/covers-after.webp",
    afterAlt: "Оформленная обложка",
  },
  {
    key: "tables",
    label: "Таблицы",
    before: "slides-6/tables-before.webp",
    beforeAlt: "Черновик таблицы",
    after: "slides-6/tables-after.webp",
    afterAlt: "Оформленная таблица",
  },
];

export type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "В нашей компании каждый менеджер делает по 5 презентаций в неделю. Подключили командный тариф — все слайды теперь в едином фирменном стиле, без разнобоя от разных авторов.",
    name: "Илья Волков",
    role: "Руководитель отдела продаж",
  },
  {
    text: "Готовила защиту диплома за ночь. Описала тему — получила структуру на 20 слайдов, поправила пару абзацев, скачала в PowerPoint. Защита — на отлично, научник спрашивал, кто делал дизайн.",
    name: "Алиса Романова",
    role: "Студентка, МГУ",
  },
  {
    text: "У меня агентство недвижимости. Каждую неделю — новые КП для клиентов. Раньше делали по шаблону, теперь через presentsimple. И быстрее, и конверсия в сделку выросла.",
    name: "Дмитрий Ларин",
    role: "Предприниматель",
  },
  {
    text: "Делаю еженедельные отчёты для руководства. Раньше — часы в PowerPoint, теперь скидываю текст и получаю готовые слайды с графиками. Сэкономила минимум 5 часов в неделю.",
    name: "Анна Петрова",
    role: "Бизнес-аналитик",
  },
  {
    text: "Питч для инвесторов за час вместо недели. Получил презентацию, которую не стыдно показать на demo day — с нормальной типографикой, акцентами и понятной логикой слайдов.",
    name: "Сергей Орлов",
    role: "Стартап-фаундер",
  },
  {
    text: "Преподаю в вузе — готовлю лекции по маркетингу. Presentsimple помогает быстро собирать визуальные материалы на любую тему. Студенты говорят, что слайды — одни из лучших на потоке.",
    name: "Марина Егорова",
    role: "Преподаватель",
  },
];

export type AudienceCard = {
  title: string;
  lead: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    title: "Студенты и преподаватели",
    lead: "Когда нужно за вечер сделать защиту, реферат или курсовую с презентацией",
    description: "Чтобы получить высокую оценку и не ночевать в PowerPoint",
    tags: ["Защита диплома", "Курсовая", "Доклад", "Лекции", "Семинары"],
    icon: GraduationCap,
  },
  {
    title: "Сейлз и работа с клиентами",
    lead: "Когда нужно провести клиента от заинтересовать до заключить сделку",
    description: "Чтобы продавать ценность продукта без скидок и демпинга",
    tags: ["КП", "Тендеры", "Продажа услуг", "Защита стоимости", "Кейсы"],
    icon: Briefcase,
  },
  {
    title: "Предприниматели и фаундеры",
    lead: "Когда нужно привлечь инвестиции и выглядеть масштабно в глазах партнёров",
    description: "Чтобы получать финансирование без недель итераций с дизайнером",
    tags: ["Pitch Deck", "Презентация компании", "Для партнёров", "Сделки"],
    icon: TrendingUp,
  },
  {
    title: "Маркетологи и продакты",
    lead: "Когда нужно мгновенно упаковать гипотезы и кампании в визуал",
    description: "Чтобы тестировать идеи и презентовать кейсы без роста бюджета",
    tags: ["Маркетинг-киты", "Лид-магниты", "Кейсы", "Тесты гипотез", "Гайды"],
    icon: Megaphone,
  },
  {
    title: "Эксперты и спикеры",
    lead: "Когда нужно сделать выступление запоминающимся и усилить личный бренд",
    description:
      "Чтобы впечатлить аудиторию, понятно объяснить сложное и удержать внимание до конца",
    tags: ["Для выступлений", "Вебинары", "Конференции", "Обучение", "Личный бренд", "Курсы"],
    icon: Mic,
  },
  {
    title: "Руководители и менеджеры",
    lead: "Когда нужно превратить сухие цифры в убедительные аргументы",
    description: "Чтобы отчёты и стратегии принимали с первого раза",
    tags: ["Отчёты (KPI)", "Стратегии", "Статус-встречи", "Планы", "Roadmap"],
    icon: BarChart3,
  },
];

export type PricingTier = {
  name: string;
  eyebrow: string;
  description: string;
  price: string;
  period: string;
  cta: string;
  featured?: boolean;
  accent?: boolean;
  badge?: string;
  features: string[];
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Старт",
    eyebrow: "Для первых презентаций",
    description: "Соберите аккуратную презентацию без водяного знака и скачайте её в PowerPoint.",
    price: "490 ₽",
    period: "ежемесячная подписка",
    cta: "Попробовать",
    features: [
      "80 шаблонных ИИ-слайдов",
      "Экспресс-слайды",
      "Без водяного знака",
      "Скачивание в PowerPoint",
    ],
  },
  {
    name: "Профи",
    eyebrow: "Лучший выбор",
    description:
      "Дизайнерские слайды, сильные ИИ-модели и генерация изображений для регулярной работы.",
    price: "990 ₽",
    period: "ежемесячная подписка",
    cta: "Подключить",
    featured: true,
    badge: "Популярно",
    features: [
      "50 дизайнерских ИИ-слайдов",
      "Дизайнерские слайды",
      "Без водяного знака",
      "Скачивание в PowerPoint",
      "Безлимитная генерация изображений",
      "Премиум текстовые ИИ-модели",
    ],
  },
  {
    name: "Бизнес",
    eyebrow: "Для больших задач",
    description: "Больше дизайнерских слайдов, поддержка и запас для командных проектов.",
    price: "1 690 ₽",
    period: "ежемесячная подписка",
    cta: "Подключить",
    accent: true,
    badge: "Макс. выгода",
    features: [
      "150 дизайнерских ИИ-слайдов",
      "Дизайнерские слайды",
      "Без водяного знака",
      "Скачивание в PowerPoint",
      "Безлимитная генерация изображений",
      "Премиум текстовые ИИ-модели",
      "Поддержка с персональным подходом",
    ],
  },
];

export type FooterLink = {
  label: string;
  href: string;
};

type SimpleIconData = { path: string; title: string };

export type SocialLink = {
  label: string;
  href: string;
  icon: SimpleIconData;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  { label: "Политика возвратов", href: "/refunds" },
  { label: "Платёжные реквизиты", href: "/payment-details" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Продукт",
    links: [
      { label: "Как работает", href: "#howit" },
      { label: "Примеры", href: "#showcase" },
      { label: "Для бизнеса", href: "#b2b" },
      { label: "Тарифы", href: "#pricing" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { label: "Связаться", href: "mailto:support@presentsimple.ai" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Правовая",
    links: FOOTER_LEGAL_LINKS,
  },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { label: "Telegram", href: "https://t.me/presentsimpleai", icon: siTelegram },
  { label: "ВКонтакте", href: "https://vk.com/presentsimpleai", icon: siVk },
];
