"use client";
import { exams } from "@/lib/data";
import { Calendar, ChevronRight, Clock } from "lucide-react";

const categoryColors: Record<string, string> = {
  Engineering: "bg-blue-100 text-blue-700",
  Medical: "bg-red-100 text-red-700",
  Management: "bg-purple-100 text-purple-700",
  "UG Courses": "bg-green-100 text-green-700",
  "Engineering PG": "bg-indigo-100 text-indigo-700",
  Law: "bg-orange-100 text-orange-700",
};

export default function ExamsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Upcoming Entrance Exams</h2>
            <p className="text-gray-500 mt-1">Stay updated with exam dates and application deadlines</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
            View All Exams <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 p-5 group cursor-pointer"
            >
              {/* Category Badge */}
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[exam.category] || "bg-gray-100 text-gray-600"}`}>
                {exam.category}
              </span>

              {/* Exam Name */}
              <h3 className="text-lg font-black text-gray-900 mt-3 group-hover:text-blue-700 transition-colors">
                {exam.name}
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">{exam.fullName}</p>

              {/* Dates */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar size={12} className="text-blue-400" />
                  <span><span className="font-semibold">Exam Date:</span> {exam.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock size={12} className="text-orange-400" />
                  <span><span className="font-semibold">Apply By:</span> {exam.applicationDeadline}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50">
                <button className="flex-1 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold py-2 rounded-lg transition-all">
                  Details
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
