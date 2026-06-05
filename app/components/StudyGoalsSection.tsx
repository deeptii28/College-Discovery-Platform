"use client";
import { useState } from "react";
import { studyGoals } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export default function StudyGoalsSection() {
  const [activeGoal, setActiveGoal] = useState(studyGoals[0].label);
  const current = studyGoals.find((g) => g.label === activeGoal)!;

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Select Your Study Goal</h2>
            <p className="text-gray-500 mt-1">Find colleges based on your preferred stream</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
            View All <ChevronRight size={16} />
          </a>
        </div>

        {/* Goal Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {studyGoals.map((goal) => (
            <button
              key={goal.label}
              onClick={() => setActiveGoal(goal.label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all border-2 ${
                activeGoal === goal.label
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                  : "bg-white text-gray-600 border-gray-100 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              <span>{goal.icon}</span>
              {goal.label}
            </button>
          ))}
        </div>

        {/* Active Goal Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{current.icon}</span>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{current.label}</h3>
                  <p className="text-blue-600 font-semibold">{current.count}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {current.subCourses.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="flex items-center justify-between bg-white border border-blue-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all group"
                  >
                    {sub}
                    <ChevronRight size={14} className="text-blue-300 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-blue-200">
                  Explore {current.label} Colleges
                </button>
                <button className="border-2 border-blue-200 text-blue-600 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-all">
                  Use College Predictor
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 min-w-64">
              {[
                { label: "Total Colleges", value: current.count.split(" ")[0] },
                { label: "Avg Placement", value: "₹8.5 LPA" },
                { label: "Entrance Exams", value: "12+" },
                { label: "Student Reviews", value: "50,000+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 border border-blue-50 text-center shadow-sm">
                  <div className="text-xl font-black text-blue-700">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
