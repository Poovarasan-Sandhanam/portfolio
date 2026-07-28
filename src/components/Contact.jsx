import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data";
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("❗ Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwbUvE0702VoBCn9P8stpjFWOnLXNhVtlo9W-6Lhm3v6pyy86xCPW9PAT2qfoV136Nd/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("✅ Message sent successfully!");
    } catch (error) {
      console.error("Form error:", error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Details Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="tech-grid-header p-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">Get in Touch</h2>
                <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --contact</p>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans max-w-md">
                Have a project in mind? Let&apos;s work together to build something exceptional. Reach out to me via email or phone.
              </p>

              <div className="space-y-4 pt-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyberGreen transition-all group">
                  <div className="w-12 h-12 bg-darkCard border border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyberGreen group-hover:border-cyberGreen transition-all duration-300 flex-shrink-0">
                    <FaEnvelope className="text-lg text-gray-500 group-hover:text-darkBlack transition-colors" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500">EMAIL</span>
                    <span className="text-sm sm:text-base font-semibold truncate max-w-[250px] sm:max-w-none">{personalInfo.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-darkCard border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-lg text-gray-500" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500">PHONE</span>
                    <span className="text-sm sm:text-base font-semibold">{personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-darkCard border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkedAlt className="text-lg text-gray-500" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500">LOCATION</span>
                    <span className="text-sm sm:text-base font-semibold">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-800/80 hover:border-cyberGreen/20 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-darkBlack/50 border border-gray-800 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-cyberGreen focus:ring-1 focus:ring-cyberGreen transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-darkBlack/50 border border-gray-800 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-cyberGreen focus:ring-1 focus:ring-cyberGreen transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-darkBlack/50 border border-gray-800 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-cyberGreen focus:ring-1 focus:ring-cyberGreen transition-all resize-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyberGreen text-darkBlack font-bold text-base sm:text-lg py-3 rounded-lg hover:bg-cyberGreenHover transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] shadow-neon hover:shadow-neonHover font-mono"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {status && (
                  <p className={`text-center text-sm font-mono font-medium mt-4 ${status.includes('❌') || status.includes('❗') ? 'text-red-500' : 'text-cyberGreen'}`}>
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBlack border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-mono font-bold text-white text-lg tracking-wider">
              POOVARASAN<span className="text-cyberGreen">.dev</span>
            </div>
            
            <div className="flex items-center gap-5">
              {personalInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyberGreen hover:scale-110 transition-all duration-300 text-xl"
                  aria-label={`${social.name} Profile`}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <p className="text-gray-600 text-xs sm:text-sm font-mono flex items-center gap-1.5">
              Made with <FaHeart className="text-cyberGreen text-[10px] animate-pulse" /> by Poovarasan
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
