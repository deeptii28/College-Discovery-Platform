"use client";
import { useState } from "react";
import { colleges } from "@/lib/data";
import CollegeCard from "./CollegeCard";
import { ChevronRight } from "lucide-react";

const tabs = ["All", "Engineering", "Management", "Medical", "Commerce", "Arts"];

export default function TopCollegesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? colleges
      : colleges.filter((c) =>
          c.courses.some((course) =>
            activeTab === "Engineering"
              ? ["B.Tech", "M.Tech"].includes(course)
              : activeTab === "Management"
              ? ["MBA", "BBA"].includes(course)
              : activeTab === "Medical"
              ? ["MBBS", "MD"].includes(course)
              : true
          )
        );

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Top Colleges in India</h2>
            <p className="text-gray-500 mt-1">Discover 19,000+ colleges ranked by experts & students</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
            View All Colleges <ChevronRight size={16} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all flex-shrink-0 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* College Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-xl transition-all">
            Load More Colleges
          </button>
        </div>
      </div>
    </section>
  );
}
