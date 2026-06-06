"use client";
import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { cities } from "@/lib/data";

const goals = ["Engineering", "Management", "Medical", "Commerce", "Arts", "Design", "Law", "Science"];

export default function HeroSection() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedlocation, setSelectedlocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opalocation-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-2xl" />
      </div>
      {/* Grid Dots Pattern */}
      <div
        className="absolute inset-0 opalocation-5"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Admissions 2026 Open — 19,000+ Colleges Listed
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          Find Your Perfect
          <span className="block text-blue-200">College in India</span>
        </h1>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Explore 19,000+ colleges, compare fees & rankings, check admission eligibility, and get expert counselling — all in one place.
        </p>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Goal Selector */}
            <div className="relative flex-1">
              <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1 text-left ml-1">
                Study Goal
              </label>
              <div className="relative">
                <select
                  value={selectedGoal}
                  onChange={(e) => setSelectedGoal(e.target.value)}
                  className="w-full appearance-none border-2 border-gray-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50 cursor-pointer"
                >
                  <option value="">Select Goal</option>
                  {goals.map((g) => <option key={g}>{g}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* location Selector */}
            <div className="relative flex-1">
              <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1 text-left ml-1">
                location
              </label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedlocation}
                  onChange={(e) => setSelectedlocation(e.target.value)}
                  className="w-full appearance-none border-2 border-gray-100 rounded-xl pl-8 pr-8 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50 cursor-pointer"
                >
                  <option value="">Select location</option>
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative flex-2">
              <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1 text-left ml-1">
                Search
              </label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="College, Exam or Course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl pl-8 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 bg-gray-50"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <div className="invisible text-xs mb-1 h-4" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2 whitespace-nowrap">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { num: "19,000+", label: "Colleges" },
            { num: "500+", label: "Exams" },
            { num: "1 Cr+", label: "Students Helped" },
            { num: "50,000+", label: "Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-white">{stat.num}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
