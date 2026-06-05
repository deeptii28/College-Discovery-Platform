import { BookOpen, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  "Top Courses": ["B.Tech", "MBA/PGDM", "MBBS", "B.Com", "BA", "BCA", "BBA", "M.Tech", "B.Sc"],
  "Top Colleges": ["IIT Colleges", "IIM Colleges", "AIIMS Colleges", "NIT Colleges", "BITS Colleges", "VIT Colleges"],
  "Top Exams": ["JEE Main", "JEE Advanced", "NEET UG", "CAT", "CUET", "GATE", "XAT", "CLAT"],
  "Explore": ["College Predictor", "Course Finder", "Scholarships", "Education Loan", "Study Abroad", "News & Articles"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Get Admission Alerts</h3>
            <p className="text-gray-400 text-sm">Stay updated with latest admission news and cutoffs</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex-shrink-0">
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen size={16} className="text-white" />
              </div>
              <div>
                <span className="font-black text-white">college</span>
                <span className="font-black text-blue-400">finder</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India's largest college discovery platform. Find the right college, course, and career path.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={14} className="text-gray-400 hover:text-white" />
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
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 CollegeFinder. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
