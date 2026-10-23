import {
  FaJsSquare, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaBriefcase, FaPlaneDeparture, FaCode,
  FaApple, FaAndroid, FaGitAlt, FaCogs, FaAws
} from 'react-icons/fa';
import {
  SiTypescript, SiExpo, SiNextdotjs, SiRedux, SiExpress, SiMongodb,
  SiGraphql, SiFirebase, SiPostman, SiJest, SiJira,
  SiTailwindcss, SiPostgresql, SiSqlite, SiGithubactions,
  SiAndroidstudio, SiXcode
} from 'react-icons/si';
import { TbApi, TbPlug } from 'react-icons/tb';
import { IoLogoAppleAr, IoRocketSharp } from 'react-icons/io5';

// Project Images
import nwsImage from "./assets/nws.png";
import barkleImage from "./assets/barkle.png";
import KaveryImage from "./assets/kavery.png";
import ftaxiImage from "./assets/taxi.png";
import talentsImage from "./assets/talents.png";
import viabrokerImage from "./assets/viabroker.png";
import mediclinicImage from "./assets/mediclinic.png";
import creaplayImage from "./assets/crea.png";

export const personalInfo = {
  name: "Poovarasan Sandhanam",
  role: "React Native / React.js / Full Stack Engineer",
  location: "London, UK",
  email: "poovarasanksp001@gmail.com",
  phone: "+44 7909810485",
  profileSummary: "Senior Mobile Software Engineer with 5 years of experience delivering production-grade React Native applications across healthcare, fitness, and on-demand service domains. Currently based in London, UK with full right to work and MSc in Computing (Software Engineering) from University of Northampton. Proven track record building scalable, high-performance mobile applications serving 20,000+ active users. Expert in TypeScript, React Native, full-stack development, performance optimisation, CI/CD pipelines, and Agile methodologies. Seeking opportunities with innovative UK tech companies to deliver exceptional mobile experiences.",
  availability: [
    { label: "Open to Work", icon: FaBriefcase },
    { label: "Eligible to work in UK", icon: "🇬🇧" },
    { label: "Ready to Relocate", icon: FaPlaneDeparture }
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/Poovarasan-Sandhanam", icon: FaGithub },
  ],
  stats: [
    { value: "5", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" }
  ]
};

export const skills = [
  // Mobile Development
  { name: "React Native", icon: FaReact, category: "mobile" },
  { name: "Expo", icon: SiExpo, category: "mobile" },
  { name: "iOS", icon: FaApple, category: "mobile" },
  { name: "Android", icon: FaAndroid, category: "mobile" },

  // Programming Languages
  { name: "JavaScript (ES6+)", icon: FaJsSquare, category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend" },

  // Frontend Technologies
  { name: "React.js", icon: FaReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },

  // State Management
  { name: "Redux", icon: SiRedux, category: "state" },
  { name: "Redux Toolkit", icon: SiRedux, category: "state" },
  { name: "Context API", icon: IoLogoAppleAr, category: "state" }, // Using IoLogoAppleAr as a symbolic representation of core/central architecture

  // Backend & APIs
  { name: "Node.js", icon: FaNodeJs, category: "backend" },
  { name: "Express.js", icon: SiExpress, category: "backend" },
  { name: "REST APIs", icon: TbApi, category: "backend" },
  { name: "GraphQL", icon: SiGraphql, category: "backend" },
  { name: "WebSockets", icon: TbPlug, category: "backend" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { name: "SQLite", icon: SiSqlite, category: "database" },
  { name: "Firebase Firestore", icon: SiFirebase, category: "database" },

  // Testing & Release
  { name: "Jest", icon: SiJest, category: "testing" },
  { name: "Detox", icon: FaCogs, category: "testing" },
  { name: "TestFlight", icon: IoRocketSharp, category: "testing" },
  { name: "Firebase Analytics", icon: SiFirebase, category: "testing" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3, Amplify)", icon: FaAws, category: "cloud" },
  { name: "GitHub Actions", icon: SiGithubactions, category: "cloud" },
  { name: "Firebase", icon: SiFirebase, category: "cloud" },

  // Tools & Platforms
  { name: "Git", icon: FaGitAlt, category: "tools" },
  { name: "Android Studio", icon: SiAndroidstudio, category: "tools" },
  { name: "Xcode", icon: SiXcode, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "JIRA", icon: SiJira, category: "tools" },
  { name: "VS Code", icon: FaCode, category: "tools" }
];


export const experience = [
  {
    role: "Senior React Native Developer (Full Stack)",
    company: "Freelance",
    duration: "2024 – Present",
    description: "Architected and delivered scalable, modular cross-platform mobile applications using React Native and TypeScript. Led end-to-end development including frontend, backend services, cloud infrastructure, and third-party integrations. Integrated Stripe, Firebase, Agora, CodePush, MMKV storage, and in-app purchases. Developed custom native modules using Swift/Objective-C and Kotlin/Java. Established best practices in architecture and mentored junior developers."
  },
  {
    role: "React Native Developer",
    company: "MBF Digital Agency, India",
    duration: "2022 – 2023",
    description: "Delivered high-quality mobile applications with a focus on performance and maintainability. Collaborated with designers and QA to deliver features on schedule. Built reusable components, custom hooks, and structured state management. Integrated REST APIs, push notifications, and analytics. Supported CI/CD workflows and implemented automated testing."
  },
  {
    role: "React Native Developer",
    company: "Siam Computing, India",
    duration: "2021 – 2022",
    description: "Developed cross-platform mobile applications following clean architecture principles. Built responsive, reusable UI components. Integrated APIs, authentication, and offline handling. Resolved critical production issues and improved application stability. Participated in Agile cycles and code reviews."
  }
];

export const projects = [
  {
    id: 1,
    name: "Kauvery Kare",
    technologies: ["React Native", "Firebase", "Redux", "Native Modules", "Razorpay"],
    image: KaveryImage,
    playstore: "https://play.google.com/store/apps/details?id=com.kauverykare&hl=en_GB",
    appstore: "https://apps.apple.com/in/app/kauvery-kare/id6462783769",
    description: "Patient management and medical records system for healthcare. Built with secure authentication, custom UI components, and seamless API integration. Optimized app performance and integrated Razorpay payment gateway for healthcare services.",
    domain: "Healthcare"
  },
  {
    id: 2,
    name: "Barkle",
    technologies: ["React Native", "Redux", "Firebase", "Reanimated", "In-App Purchases"],
    image: barkleImage,
    playstore: "https://play.google.com/store/apps/details?id=com.Barkle.subscription&hl=en_GB",
    appstore: "https://apps.apple.com/ai/app/barkle/id6463427532",
    description: "Community fitness platform with challenges and activity tracking serving 20,000+ active users. Features include workout challenges, social fitness community, activity tracking, and integrated in-app purchases with native chart components for analytics.",
    domain: "Fitness"
  },
  {
    id: 3,
    name: "NWS – Fitness Planner",
    technologies: ["React Native", "Firebase", "Redux", "Analytics"],
    image: nwsImage,
    playstore: "https://play.google.com/store/apps/details?id=com.nws&hl=en_GB&pli=1",
    appstore: "https://apps.apple.com/gb/app/nourish-with-sim/id1547388267",
    description: "Fitness app with performance analytics, comprehensive workout planning, nutrition tracking, and real-time activity monitoring. Integrated Firebase Analytics for user behavior insights.",
    domain: "Fitness"
  },
  {
    id: 4,
    name: "F Taxi",
    technologies: ["React Native", "Google Maps", "Socket.io", "Real-time Tracking"],
    image: ftaxiImage,
    description: "Ride booking and real-time tracking application with seamless driver-passenger connectivity. Features include live location tracking, fare calculation, ride history, and push notifications for ride updates.",
    domain: "On-Demand Services"
  },
  {
    id: 5,
    name: "Creaplay",
    technologies: ["React Native", "Firebase", "Audio Playback", "Animations"],
    image: creaplayImage,
    description: "Children's storytelling mobile application with interactive audio playback, engaging animations, and parental controls. Features offline story downloads and progress tracking.",
    domain: "Education & Entertainment",
    playstore: "https://play.google.com/store/apps/details?id=com.siam.creaplay_native&pcampaignid=web_share"

  },
  {
    id: 6,
    name: "Via Broker",
    technologies: ["React Native", "Firebase", "Google Maps", "Geolocation"],
    image: viabrokerImage,
    description: "Housing and land brokerage platform with interactive maps and comprehensive listing management. Features property search, virtual tours, agent communication, and location-based property recommendations.",
    domain: "Real Estate"
  },
  {
    id: 7,
    name: "MediClinic",
    technologies: ["React Native", "Agora", "Node.js", "WebSockets"],
    image: mediclinicImage,
    description: "Healthcare app for appointments and doctor-patient communication. Features include real-time video consultations using Agora SDK, appointment scheduling, prescription management, and secure patient records.",
    domain: "Healthcare"
  },
  {
    id: 8,
    name: "Talents",
    technologies: ["React Native", "Next.js", "PostgreSQL", "REST APIs"],
    image: talentsImage,
    description: "Job portal platform connecting job seekers and employers. Features advanced search and matching algorithms, profile management, application tracking, and real-time notifications for job opportunities.",
    domain: "Job Portal"
  }
];

export const personalProjects = [
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Motion-first crypto trading simulator",
    status: "Active",
    year: "2026",
    technologies: ["Expo SDK 57", "React Native", "Reanimated", "Skia", "Gesture Handler", "Zustand", "FlashList"],
    description: "A mobile trading simulator built to show off native-quality motion, gestures and charts. Live market data from CoinGecko, GPU-rendered price charts with scrub and pinch-zoom, and trades confirmed with a haptic swipe gesture.",
    highlights: [
      "Interactive Skia price charts with crosshair scrubbing, pinch zoom and 1H–1Y timeframes",
      "Swipe-to-trade confirmation with spring physics, haptics and a custom bottom sheet",
      "Performance lab comparing JS-thread and UI-thread gestures with a live FPS counter",
      "Upgraded from Expo SDK 51 to SDK 57 (React Native 0.86, Reanimated 4)"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/Pulse",
    domain: "FinTech"
  },
  {
    id: "beatn",
    name: "BeatN",
    tagline: "Private, offline-first AI voice journal",
    status: "In Progress",
    year: "2026",
    technologies: ["Expo SDK 57", "React Native", "TypeScript", "whisper.cpp", "llama.cpp", "Zod", "Jest"],
    description: "Speak and BeatN transcribes and reflects on your journal entries entirely on device. Speech-to-text runs on Whisper and reflection on a local LLM, so the only network traffic is downloading the models.",
    highlights: [
      "On-device pipeline: 16 kHz PCM capture → whisper.cpp transcript → llama.cpp summary, mood and topics",
      "LLM output validated against a Zod schema before it is trusted",
      "Layered architecture with engine ports, an inference arbiter and model residency manager",
      "106 tests across 8 suites, strict TypeScript"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/BeatN",
    domain: "On-Device AI"
  },
  {
    id: "telemedicine",
    name: "TeleMedicine",
    tagline: "Full-stack telemedicine platform",
    status: "Live API",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Stripe", "OpenAI", "Cloud Run"],
    description: "A cross-platform app and REST API connecting patients with doctors for remote consultations, appointment booking, e-prescriptions and payments, with AI symptom triage that routes patients to the right specialist.",
    highlights: [
      "AI triage with emergency red-flag screening that runs before the model and a rules-based fallback",
      "Appointment concurrency handled with temporary slot holds and Stripe payment verification",
      "JWT auth with patient and doctor roles and token revocation that works across Cloud Run instances",
      "Deployed on Google Cloud Run with Docker and health checks"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/TeleMedicine_Mobile",
    githubSecondary: { label: "Backend", url: "https://github.com/Poovarasan-Sandhanam/TeleMedicine-Backend" },
    domain: "Healthcare"
  },
  {
    id: "nextoff",
    name: "NextOff",
    tagline: "UK payday and bank holiday countdown",
    status: "Active",
    year: "2026",
    technologies: ["Expo SDK 57", "Expo Router", "TypeScript", "Firebase", "Cloud Functions", "FCM"],
    description: "Counts down to your next payday and the next UK bank holiday for England & Wales, Scotland or Northern Ireland. Paydays can be a fixed date or a rule like \"last Friday of the month\", and move to the previous working day when they fall on a weekend or holiday.",
    highlights: [
      "Payday rules for fixed dates and nth-weekday schedules, adjusted for weekends and regional bank holidays",
      "Daily scheduled Cloud Function checks paydays and sends push reminders through FCM",
      "Firestore-triggered announcement notifications; user settings kept on device"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/Nextoff",
    domain: "Personal Finance"
  },
  {
    id: "ukpaycalc",
    name: "UKPayCalc",
    tagline: "UK salary, contractor and holiday pay calculator",
    status: "Active",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Zustand", "React Hook Form", "Firebase", "GitHub Actions", "Fastlane"],
    description: "A calculator app for UK take-home salary, contractor day rates and holiday entitlement, with a history of past calculations.",
    highlights: [
      "Separate, unit-tested calculation modules for salary, contractor and holiday pay",
      "CI on every PR: ESLint, tsc, Jest, plus Android and iOS builds",
      "Tag-triggered release pipelines to Google Play internal track and TestFlight via Fastlane",
      "Firebase Analytics and Crashlytics"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/ukpaycalc",
    domain: "Personal Finance"
  },
  {
    id: "runnacoach",
    name: "RunnaCoach",
    tagline: "Adaptive running coach with Apple Watch bridge",
    status: "In Progress",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Clean Architecture", "Native Modules"],
    description: "A running coach that adapts your training plan to how your runs actually went, using pace and training load (duration × effort) to adjust future workouts.",
    highlights: [
      "Adaptive engine that recalculates target paces from session training load",
      "Native bridge for sending workouts to and receiving runs from Apple Watch",
      "Feature-sliced clean architecture with domain, data and presentation layers and view models"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/runnacoach",
    domain: "Fitness"
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    tagline: "Full-stack personal finance app",
    status: "Complete",
    year: "2025",
    technologies: ["Expo", "Expo Router", "Clerk", "Node.js", "Express", "Neon Postgres", "Upstash"],
    description: "A mobile expense tracker with sign-in, income and expense transactions and a running balance, backed by a Node.js API on serverless Postgres.",
    highlights: [
      "Clerk authentication with secure token storage",
      "Express API on Neon serverless Postgres",
      "Upstash Redis rate limiting on the API"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/expense-tracker",
    domain: "Personal Finance"
  },
  {
    id: "aura",
    name: "Aura",
    tagline: "React storefront with cart and filters",
    status: "Complete",
    year: "2026",
    technologies: ["React", "Vite", "CSS"],
    description: "A product catalogue web app with search, category and price filters, sorting, a product detail modal and a cart drawer. Theme and cart persist between visits.",
    highlights: [
      "Search, category, price-range and sort filters",
      "Cart drawer and product modal",
      "Light and dark themes that follow the system setting"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/Aura",
    domain: "E-commerce"
  },
  {
    id: "dating-app",
    name: "Dating App",
    tagline: "Social dating app with real-time chat",
    status: "Complete",
    year: "2024",
    technologies: ["React Native", "Firebase Auth", "Firestore", "FCM", "Gifted Chat", "CodePush"],
    description: "A React Native dating app with onboarding, profiles, a photo feed and one-to-one chat backed by Firebase.",
    highlights: [
      "Firebase authentication, Firestore data and Storage for photo uploads",
      "Real-time chat with push notifications",
      "Over-the-air updates with CodePush"
    ],
    github: "https://github.com/Poovarasan-Sandhanam/Dating-App-",
    domain: "Social"
  }
];

export const education = [
  {
    degree: "MSc Computing (Software Engineering)",
    institution: "University of Northampton",
    location: "United Kingdom",
    year: "2025",
    description: "Specialized in advanced software engineering practices, mobile application development, and cloud computing."
  }
];

export const achievements = [
  {
    title: "High-Impact Applications",
    description: "Delivered mobile applications serving 20,000+ active users with high performance and reliability."
  },
  {
    title: "Technical Leadership",
    description: "Led development efforts and mentored junior engineers, improving overall code quality and team productivity."
  },
  {
    title: "Full-Stack Architecture",
    description: "Designed and implemented scalable, secure full-stack solutions using AWS and Firebase."
  },
  {
    title: "Performance Optimization",
    description: "Improved app performance and stability through profiling, optimization, and monitoring techniques."
  }
];

