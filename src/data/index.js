export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { category: "Mobile", icon: "📱", items: ["React Native", "JavaScript", "TypeScript", "Swift", "SwiftUI", "UIKit"] },
  { category: "Native iOS", icon: "🍎", items: ["Xcode 15", "CocoaPods", "CoreMotion", "Vision Framework", "AVFoundation", "CoreData"] },
  { category: "Backend & Cloud", icon: "☁️", items: ["Firebase Firestore", "Firebase Auth", "Cloud Functions", "REST APIs", "WebSockets", "Node.js"] },
  { category: "State Management", icon: "🔄", items: ["Redux Toolkit", "Zustand", "Context API", "MVVM", "Clean Architecture"] },
  { category: "DevOps & Tools", icon: "🛠️", items: ["Git", "GitHub Actions", "Fastlane", "TestFlight", "Sentry", "Firebase Crashlytics"] },
  { category: "Integrations", icon: "🔌", items: ["StoreKit 2", "Google Play Billing", "FCM", "APNs", "OneSignal", "BLE"] },
];

export const experiences = [
  {
    role: "Senior Mobile App Developer",
    company: "The Brihaspati Infotech",
    period: "Jan 2023 – May 2026",
    type: "Full-Time",
    description: "Led end-to-end development of 3 production B2C mobile apps deployed on App Store and Google Play.",
    points: [
      "Shipped 3 B2C mobile apps with 100% first-submission approval rate on both stores",
      "Built 60fps UIs using Reanimated 2 and Gesture Handler across 15+ device configurations",
      "Integrated 20+ REST API endpoints with Axios interceptors, JWT refresh, and secure Keychain storage",
      "Reduced production crash rate by 35% using Sentry, Crashlytics, and Xcode Instruments",
      "Implemented full IAP workflows — StoreKit 2 and Google Play Billing v5 with receipt validation",
      "Established CI/CD with Fastlane and GitHub Actions, cutting build-to-deploy time by 60%",
      "Built real-time chat module with Firebase Firestore and BLE device integration",
      "Mentored 2 junior developers on React Native best practices and performance optimization",
    ],
  },
  {
    role: "iOS Developer Intern",
    company: "Zeroit Solutions",
    period: "Jul 2022 – Jan 2023",
    type: "Internship",
    description: "6-month iOS Swift internship building native components and managing Apple Developer accounts.",
    points: [
      "Built native iOS components using Swift 5 and UIKit with Auto Layout",
      "Implemented CoreData persistence layer for offline-first functionality across 3 modules",
      "Managed provisioning profiles, code signing, and TestFlight for 50+ internal testers",
      "Delivered 2 client projects on time with a cross-functional team of 5",
    ],
  },
];

export const projects = [
  {
    title: "Single Apostolics Meet",
    description: "Full-featured dating app with real-time matching, Tinder-style swipe cards, Firebase chat, and premium subscriptions. Serving 1000+ daily active users.",
    stack: ["React Native", "Firebase Firestore", "StoreKit 2", "Cloud Functions", "FCM"],
    features: ["Tinder-style swipe matching", "Real-time chat with media", "3-tier subscription model", "Push notifications", "Deep linking"],
    appStore: "https://apps.apple.com/us/app/single-apostolics-meet/id6526484879",
    playStore: "https://play.google.com/store/apps/details?id=com.singleapostolicsmeet",
    color: "#FF6B9D",
    status: "Live",
  },
  {
    title: "Movers and Shakers Dance",
    description: "Dance academy platform for instructors to publish classes, share videos, and communicate with students via Firebase real-time messaging.",
    stack: ["React Native", "AVFoundation", "Firebase Storage", "Native Bridges", "OneSignal"],
    features: ["Video trimming module", "Media sharing chat", "Class reminders", "CDN video delivery", "Deep linking"],
    appStore: "https://apps.apple.com/us/app/movers-and-shakers-dance/id6745867163",
    playStore: "https://play.google.com/store/apps/details?id=com.moversandshakers.classes",
    color: "#6C63FF",
    status: "Live",
  },
  {
    title: "LilBeats — Kids Music App",
    description: "Children's music platform with background audio, lock screen controls, gapless playback for 500+ tracks, and Firebase Analytics parental dashboard.",
    stack: ["React Native", "Track Player", "AVFoundation", "Firebase Analytics"],
    features: ["Background audio", "Lock screen controls", "Gapless playback", "Parental controls", "Usage analytics"],
    appStore: "https://apps.apple.com/us/app/lil-beatz/id6471659112",
    playStore: "https://play.google.com/store/apps/details?id=com.lilbookz",
    color: "#00C2FF",
    status: "Live",
  },
  {
    title: "Lacrosse Reaction Trainer",
    description: "Native Swift iOS sports-performance app measuring athlete reaction times with CoreMotion and Vision framework face detection.",
    stack: ["Swift", "CoreMotion", "Vision Framework", "StoreKit 2", "Core Animation"],
    features: ["Millisecond reaction timing", "Face detection triggers", "Premium drill packs", "Analytics dashboard", "Fluid animations"],
    appStore: null,
    playStore: null,
    color: "#FF9F43",
    status: "In Development",
  },
];

export const achievements = [
  { icon: "🚀", title: "3 Apps Live", desc: "Published on App Store & Google Play" },
  { icon: "⚡", title: "3+ Years", desc: "Production mobile development" },
  { icon: "📉", title: "35% Crash Reduction", desc: "Via Sentry & Crashlytics" },
  { icon: "⏱️", title: "60% Faster Deploys", desc: "CI/CD with Fastlane & GitHub Actions" },
  { icon: "💳", title: "IAP Expert", desc: "StoreKit 2 & Google Play Billing" },
  { icon: "🎯", title: "100% Approval Rate", desc: "First-submission App Store approvals" },
];

export const services = [
  { icon: "📱", title: "React Native Development", desc: "Cross-platform iOS & Android apps with native performance and 60fps animations." },
  { icon: "🍎", title: "iOS Swift Development", desc: "Native Swift apps using UIKit, SwiftUI, CoreMotion, Vision Framework and more." },
  { icon: "🔥", title: "Firebase Integration", desc: "Firestore, Auth, Storage, Cloud Functions, Analytics and Crashlytics setup." },
  { icon: "🔌", title: "API Integration", desc: "REST APIs, OAuth 2.0, JWT, WebSockets with interceptors and error handling." },
  { icon: "🚀", title: "App Store Publishing", desc: "Full App Store Connect and Google Play Console submission and management." },
  { icon: "🐛", title: "Bug Fixing & Optimization", desc: "Crash triage, memory leak debugging, and performance profiling." },
  { icon: "💳", title: "In-App Purchases", desc: "StoreKit 2, Google Play Billing, subscriptions with server-side validation." },
  { icon: "💬", title: "Consulting", desc: "Architecture review, tech stack advice, code audit and team mentoring." },
];

export const testimonials = [
  {
    name: "Kitera Hayes",
    role: "Founder, Dating Platform",
    text: "Raman developed our React Native dating application with a smooth Tinder-style swipe experience, real-time chat, profile matching, and Firebase integration. He consistently delivered high-quality features with great attention to performance and user experience.",
    avatar: "KH",
  },
  {
    name: "Daniel",
    role: "Founder, Dance Learning Platform",
    text: "Raman built one of our most important learning features—a custom video loop system that lets users repeatedly practice selected parts of a dance routine. He also implemented a complete real-time chat system with media sharing, animated GIFs, group chats, and a clean, responsive user experience.",
    avatar: "DA",
  },
  {
    name: "Kelly",
    role: "Founder, LilBeatz",
    text: "Raman helped us build a feature-rich music application with a strong focus on performance and scalability. He integrated Firebase services, audio playback, in-app purchases, push notifications, and optimized the app to deliver a smooth experience across both Android and iOS.",
    avatar: "KE",
  },
];
