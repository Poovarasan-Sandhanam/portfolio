import {
  FaJsSquare, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaBriefcase, FaPlaneDeparture, FaCode,
  FaApple, FaAndroid, FaGitAlt, FaCogs
} from 'react-icons/fa';
import {
  SiTypescript, SiExpo, SiNextdotjs, SiRedux, SiExpress, SiMongodb,
  SiGraphql, SiFirebase, SiAmazonaws, SiPostman, SiJest, SiJira,
  SiVisualstudiocode, SiTailwindcss, SiPostgresql, SiSqlite, SiGithubactions,
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
  role: "React Native / Mobile and Web Software Engineer",
  location: "Northampton, UK",
  email: "poovarasanksp001@gmail.com",
  phone: "+44 7909810485",
  profileSummary: "Senior Mobile Software Engineer with 5 years of experience delivering production-grade React Native applications across healthcare, fitness, and on-demand service domains. Currently based in Northampton, UK with full right to work and MSc in Computing (Software Engineering) from University of Northampton. Proven track record building scalable, high-performance mobile applications serving 20,000+ active users. Expert in TypeScript, React Native, full-stack development, performance optimisation, CI/CD pipelines, and Agile methodologies. Seeking opportunities with innovative UK tech companies to deliver exceptional mobile experiences.",
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
    { value: "10+", label: "Projects Completed" }
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
  { name: "AWS (EC2, S3, Amplify)", icon: SiAmazonaws, category: "cloud" },
  { name: "GitHub Actions", icon: SiGithubactions, category: "cloud" },
  { name: "Firebase", icon: SiFirebase, category: "cloud" },

  // Tools & Platforms
  { name: "Git", icon: FaGitAlt, category: "tools" },
  { name: "Android Studio", icon: SiAndroidstudio, category: "tools" },
  { name: "Xcode", icon: SiXcode, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "JIRA", icon: SiJira, category: "tools" },
  { name: "VS Code", icon: SiVisualstudiocode, category: "tools" }
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
    playstore:"https://play.google.com/store/apps/details?id=com.siam.creaplay_native&pcampaignid=web_share"
  
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

