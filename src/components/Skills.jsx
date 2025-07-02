const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript"],
  "Mobile & Frontend": ["React Native", "Expo", "Native Modules", "Next.js (basic)"],
  "State Management": ["Redux", "React Query", "Context API"],
  "Backend & APIs": ["Node.js", "Express.js", "Firebase", "MongoDB", "REST", "GraphQL (basic)"],
  "Cloud & DevOps": ["AWS Amplify", "S3", "EC2", "GitHub Actions", "CodePush"],
  Deployment: ["App Store", "Play Store"],
  "Testing & Monitoring": ["Jest", "Firebase Analytics"],
  Tools: ["Git", "Postman", "JIRA", "Trello"],
  "CS Foundations": ["Data Structures", "Algorithms"],
};

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-heading font-semibold mb-8 border-b-4 border-primary dark:border-secondary w-max">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-card p-6 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">{category}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
