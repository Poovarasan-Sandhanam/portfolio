const experiences = [
  {
    title: "Full Stack Mobile Developer",
    company: "MBF Digital Agency, India",
    period: "2023 – 2024",
    points: [
      "Developed React Native mobile apps using TypeScript and Firebase.",
      "Integrated CodePush for OTA updates; handled App Store and Play Store deployments.",
      "Implemented AWS Amplify and S3 for backend services and media file storage.",
      "Improved app performance by 25% using FlatList optimization and lazy loading.",
      "Set up CI/CD pipelines using GitHub Actions.",
      "Worked in Agile teams to deliver features with consistent sprint velocity.",
    ],
  },
  {
    title: "Mobile App Associate Developer",
    company: "Siam Computing, India",
    period: "2022 – 2023",
    points: [
      "Built cross-platform apps with Firebase Auth, Firestore, and custom UI components.",
      "Created RESTful APIs using Node.js and Express.js.",
      "Wrote unit tests with Jest; contributed to CI pipelines and Agile ceremonies.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-heading font-semibold mb-8 border-b-4 border-primary dark:border-secondary w-max">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map(({ title, company, period, points }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-card p-6 transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold mb-1 text-primary dark:text-secondary">
              {title}
            </h3>
            <p className="italic text-gray-500 dark:text-gray-400 mb-3">
              {company} &nbsp;|&nbsp; {period}
            </p>
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
