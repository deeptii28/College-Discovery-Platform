import { BookOpen } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const footerLinks = {
  "Top Courses": ["B.Tech", "MBA/PGDM", "MBBS", "B.Com", "BA", "BCA", "BBA", "M.Tech", "B.Sc"],
  "Top Colleges": ["IIT Colleges", "IIM Colleges", "AIIMS Colleges", "NIT Colleges", "BITS Colleges", "VIT Colleges"],
  "Top Exams": ["JEE Main", "JEE Advanced", "NEET UG", "CAT", "CUET", "GATE", "XAT", "CLAT"],
  "Explore": ["College Predictor", "Course Finder", "Scholarships", "Education Loan", "Study Abroad", "News & Articles"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-blue-100">
      
      {/* Newsletter */}
      <div className="border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <h3 className="text-white font-bold text-lg">Get Admission Alerts</h3>
            <p className="text-blue-300 text-sm">
              Stay updated with latest admission news and cutoffs
            </p>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-2.5 rounded-xl bg-[#111827] border border-blue-900 text-white text-sm focus:outline-none focus:border-blue-500 placeholder-blue-400"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20"
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30">
                <BookOpen size={16} className="text-white" />
              </div>

              <div>
                <span className="font-black text-white">college</span>
                <span className="font-black text-blue-400">finder</span>
              </div>
            </div>

            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              India's largest college discovery platform. Find the right college,
              course, and career path.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-[#111827] hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 shadow hover:shadow-blue-500/30"
                >
                  <Icon size={14} className="text-blue-300 hover:text-white" />
                </a>
              ))}
            </div>

          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-blue-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          
          <p>© 2026 CollegeFinder. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

        </div>
      </div>

    </footer>
  );
}