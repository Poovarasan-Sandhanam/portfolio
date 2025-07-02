const projects = [
  {
    name: "Barkle (UK) – Fitness Challenge App",
    tech: "React Native, Redux, Firebase, REST API, CodePush, Native Modules",
    points: [
      "Integrated FCM push notifications and multiple authentication methods.",
      "Used CodePush for OTA updates and native bridging for platform-specific features.",
      "Built scalable Redux architecture and real-time sync via Firebase.",
    ],
  },
  {
    name: "NWS (India) – Diet & Fitness Planner",
    tech: "React Native, Redux, Firebase, REST API, CodePush",
    points: [
      "Built gamified fitness planner; improved user retention by 15%.",
      "Created deep linking and dynamic content delivery with secure login.",
      "Applied CodePush for continuous OTA updates.",
    ],
  },
  {
    name: "Healthcare App (Freelance)",
    tech: "React Native, Firebase, Agora, Stripe, Express.js, MongoDB, OAuth",
    points: [
      "Developed live video consultations and real-time chat modules.",
      "Integrated Stripe for secure in-app payments and OAuth login.",
      "Built backend services for users and scheduling using Express.js and MongoDB.",
    ],
  },
  {
    name: "Job Portal App (Freelance)",
    tech: "React Native (Expo), Firebase, Native Modules, Push Notifications",
    points: [
      "Designed recruiter dashboard with secure messaging and resume uploads.",
      "Implemented push notifications and calendar integrations via native modules.",
    ],
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-heading font-semibold mb-8 border-b-4 border-primary dark:border-secondary w-max">
        Key Projects
      </h2>
      <div className="space-y-6">
        {projects.map(({ name, tech, points }) => (
          <div
            key={name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-card p-6 transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold mb-1 text-primary dark:text-secondary">
              {name}
            </h3>
            <p className="italic mb-3 text-gray-500 dark:text-gray-400">{tech}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
