"use client";
import { useState } from "react";
import Link from "next/link";
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
    <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12 text-sm">
        <span className="text-blue-200">
          🎓 Admission 2026 Open — Apply Now!
        </span>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3 items-center">

          <Link
            href="/review"
            className="bg-white text-blue-900 px-4 py-1.5 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition"
          >
            Write a Review
          </Link>

          <Link
            href="/login"
            className="bg-white text-blue-900 px-4 py-1.5 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-white text-blue-900 px-4 py-1.5 rounded-lg font-semibold border border-blue-200 hover:bg-blue-200 transition"
          >
            Register
          </Link>

        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <span className="font-black text-xl">
            <span className="text-blue-300">college</span>
            <span className="text-white">finder</span>
          </span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-blue-900 text-white border border-blue-700 focus:outline-none focus:border-blue-400 placeholder-blue-300"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-blue-800 rounded-lg">
                {link.label}
                {link.children.length > 0 && <ChevronDown size={14} />}
              </button>

              {link.children.length > 0 && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-48">
                  {link.children.map((child) => (
                    <Link
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-1 text-sm border border-blue-400 px-3 py-2 rounded-lg hover:bg-blue-800">
            <Bell size={14} />
            Alerts
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-blue-950 border-t border-blue-800 px-4 py-4 space-y-2">

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-lg bg-blue-900 text-white border border-blue-700"
          />

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href="#"
              className="block py-2 text-blue-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-4 flex flex-col gap-2">
            <Link href="/login" className="bg-white text-blue-900 px-4 py-2 rounded-lg text-center">
              Login
            </Link>
            <Link href="/register" className="bg-white text-blue-900 px-4 py-2 rounded-lg text-center">
              Register
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}