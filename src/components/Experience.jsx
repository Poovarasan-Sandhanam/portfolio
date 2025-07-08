import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Experience Section">
      <h2 className="experience-heading">Experience</h2>
      
      <div className="experience-timeline">

        <div className="experience-item">
          <div className="experience-role">Full Stack App Developer (Web & Mobile)</div>
          <div className="experience-company">Freelance</div>
          <div className="experience-duration">1.5+ Years</div>
          <p className="experience-description">
            Spearheaded the end-to-end development of mission-critical applications for clients in healthcare, land brokerage, and job portals, delivering scalable, secure, and performant solutions. Architected and engineered RESTful APIs using Express.js and MongoDB, embedding robust authentication, rate limiting, and data validation strategies to safeguard system integrity. Orchestrated cloud deployments on AWS with automated CI/CD pipelines, drastically reducing release cycles and downtime. Crafted sophisticated cross-platform mobile applications leveraging React Native (Expo & CLI), seamlessly integrating real-time communication via WebSockets, video conferencing with Agora SDK, push notifications, and PCI-compliant Stripe payment processing. Led app deployment and release management on Apple App Store and Google Play Store, ensuring compliance and maximizing user reach. Championed rigorous unit and integration testing using Jest to uphold code quality, optimized performance, and maintained proactive client collaboration across India and UAE to deliver high-impact solutions with full lifecycle ownership.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-role">Mobile App Developer</div>
          <div className="experience-company">Made By Fire</div>
          <div className="experience-duration">7 Months</div>
          <p className="experience-description">
            Acted as a key mid-level developer on a high-stakes UK-based fitness app, independently delivering complex feature sets with a laser focus on clean, modular code and scalable architecture. Expertly managed Redux global state, enhancing maintainability and performance across modules. Executed critical UI/UX refinements to elevate user engagement and accessibility. Employed advanced debugging and profiling tools to resolve intricate business logic issues, significantly improving app stability and responsiveness. Collaborated seamlessly within agile, cross-functional teams, driving sprint goals and continuous delivery while maintaining rigorous code review standards and comprehensive documentation.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-role">Mobile Application Associate</div>
          <div className="experience-company">Siam Computing</div>
          <div className="experience-duration">1 Year 3 Months</div>
          <p className="experience-description">
            Collaborated closely with senior developers to design and implement intuitive, high-performance UI components leveraging React Native, delivering a superior user experience. Contributed to core app functionalities including pagination, push notifications, error boundaries, and offline capabilities, significantly enhancing app reliability and user retention. Developed proficiency in REST API consumption, Git workflows, and agile methodologies. Proactively troubleshot bugs and optimized features across Android and iOS platforms, building a solid foundation in scalable mobile app development and teamwork dynamics.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
