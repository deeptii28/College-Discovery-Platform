"use client";
import { useState } from "react";
import { rankings, colleges } from "@/lib/data";
import { Trophy, ChevronRight, Star, MapPin } from "lucide-react";

export default function RankingsSection() {
  const [activeSource, setActiveSource] = useState("NIRF");

  return (
    <section className="py-14 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      {/* BG Pattern */}
      <div
        className="absolute inset-0 opalocation-5"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-2">
              <Trophy size={16} />
              College Rankings
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Rankings Based on Real Data</h2>
            <p className="text-blue-200 mt-1">Aggregated from 10+ trusted sources</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-blue-300 hover:text-white font-semibold text-sm transition-colors">
            View All Rankings <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Source Selector */}
          <div className="space-y-2">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">Ranking Source</p>
            {rankings.map((r) => (
              <button
                key={r.source}
                onClick={() => setActiveSource(r.source)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                  activeSource === r.source
                    ? "bg-white text-blue-700 font-bold shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span className="font-semibold">{r.source}</span>
                <span className={`text-sm px-2 py-0.5 rounded-full ${activeSource === r.source ? "bg-blue-100 text-blue-600" : "bg-white/20 text-white"}`}>
                  {r.count.toLocaleString()}
                </span>
              </button>
            ))}
          </div>

          {/* Ranked Colleges */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Top Colleges — {activeSource} Rankings
            </p>
            {colleges.slice(0, 5).map((college, idx) => (
              <div
                key={college.id}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 flex items-center gap-4 transition-all cursor-pointer group border border-white/10"
              >
                {/* Rank Badge */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 ${
                  idx === 0 ? "bg-yellow-400 text-yellow-900" :
                  idx === 1 ? "bg-gray-300 text-gray-700" :
                  idx === 2 ? "bg-orange-400 text-orange-900" :
                  "bg-white/20 text-white"
                }`}>
                  {idx + 1}
                </div>

                {/* College Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-sm group-hover:text-blue-200 transition-colors truncate">
                    {college.name}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-blue-300 text-xs">
                      <MapPin size={10} />
                      {college.location}
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 text-xs">
                      <Star size={10} className="fill-yellow-400 text-yellow-400" />
                      {college.rating}
                    </span>
                    <span className="text-blue-300 text-xs">{college.type}</span>
                  </div>
                </div>

                {/* Fees */}
                <div className="text-right flex-shrink-0">
                  <p className="text-white font-bold text-sm">{college.fees}</p>
                  <p className="text-blue-300 text-xs">per year</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
