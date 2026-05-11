import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data";

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
      <section className="py-12 sm:py-20 bg-black" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-t border-gray-800 pt-10 sm:pt-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-wide">Get in Touch</h2>
              <p className="text-gray-400 text-sm sm:text-lg">Have a project in mind? Let&apos;s work together to create something exceptional.</p>

              <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-netflixDark rounded-full flex items-center justify-center group-hover:bg-netflixRed transition-colors flex-shrink-0">
                    <FaEnvelope className="text-base sm:text-xl" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-lg font-medium truncate">{personalInfo.email}</span>
                </a>
                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-netflixDark rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-base sm:text-xl" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-lg font-medium">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-netflixDark rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkedAlt className="text-base sm:text-xl" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-lg font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-netflixDark p-5 sm:p-8 rounded-lg shadow-2xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#222] border border-gray-700 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#222] border border-gray-700 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#222] border border-gray-700 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-netflixRed text-white font-bold text-base sm:text-lg py-2.5 sm:py-3 rounded hover:bg-netflixHover transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className={`text-center text-sm font-medium ${status.includes('❌') || status.includes('❗') ? 'text-netflixRed' : 'text-green-500'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-netflixDark border-t border-gray-800/50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-netflixRed font-bold text-lg tracking-widest">POOVARASAN</div>
            <div className="flex items-center gap-5">
              {personalInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-lg"
                  aria-label={`${social.name} Profile`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
              Made with <FaHeart className="text-netflixRed text-xs" /> by Poovarasan
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
