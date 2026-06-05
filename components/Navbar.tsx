"use client";
import { useState } from "react";
import { Search, ChevronDown, Menu, X, Bell, BookOpen } from "lucide-react";

const navLinks = [
  {
    label: "Colleges",
    children: ["Top Colleges", "Engineering Colleges", "MBA Colleges", "Medical Colleges", "Law Colleges"],
  },
  {
    label: "Courses",
    children: ["B.Tech", "MBA", "MBBS", "B.Com", "BA", "BCA", "BBA"],
  },
  {
    label: "Exams",
    children: ["JEE Main", "JEE Advanced", "NEET", "CAT", "CUET", "GATE"],
  },
  { label: "Rankings", children: ["NIRF Rankings", "India Today", "Outlook", "QS World"] },
  { label: "News", children: [] },
  { label: "Study Abroad", children: [] },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>🎓 Admission 2026 Open — Apply Now for Top Colleges!</span>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-blue-200">Write a Review</a>
          <a href="#" className="hover:text-blue-200">Login</a>
          <a href="#" className="bg-white text-blue-700 px-3 py-0.5 rounded font-semibold hover:bg-blue-50">Register Free</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <span className="font-black text-blue-700 text-xl leading-none">college</span>
            <span className="font-black text-gray-800 text-xl leading-none">finder</span>
          </div>
        </a>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Colleges, Exams, Courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-blue-100 rounded-xl text-sm focus:outline-none focus:border-blue-500 bg-blue-50/50 placeholder-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-0.5 text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                {link.label}
                {link.children.length > 0 && <ChevronDown size={13} />}
              </button>
              {link.children.length > 0 && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-blue-50 min-w-48 py-2 z-50">
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 ml-2">
          <button className="hidden md:flex items-center gap-1 text-blue-600 text-sm font-semibold border border-blue-200 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <Bell size={14} />
            Alerts
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges, exams..."
              className="w-full pl-9 pr-4 py-2.5 border-2 border-blue-100 rounded-xl text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          {navLinks.map((link) => (
            <a key={link.label} href="#" className="block py-2 px-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
