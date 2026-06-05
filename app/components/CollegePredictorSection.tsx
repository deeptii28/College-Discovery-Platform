"use client";
import { Target, ArrowRight, Sparkles } from "lucide-react";

const predictors = [
  { exam: "JEE Main", courses: "B.Tech / B.E.", icon: "⚙️" },
  { exam: "JEE Advanced", courses: "IIT Admissions", icon: "🏆" },
  { exam: "NEET UG", courses: "MBBS / BDS", icon: "🏥" },
  { exam: "CAT", courses: "MBA / PGDM", icon: "💼" },
  { exam: "CUET", courses: "BA / B.Sc / B.Com", icon: "📚" },
  { exam: "GATE", courses: "M.Tech / MS", icon: "🔬" },
];

export default function CollegePredictorSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Sparkles size={16} />
              AI-Powered Tool
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              College Predictor
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Enter your exam score and get a personalized list of colleges you can get into, with real cutoff data and admission probability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {predictors.map((p) => (
              <button
                key={p.exam}
                className="bg-white hover:bg-blue-600 group rounded-2xl border-2 border-blue-100 hover:border-blue-600 p-4 text-center transition-all hover:shadow-xl hover:shadow-blue-100 cursor-pointer"
              >
                <span className="text-3xl mb-2 block">{p.icon}</span>
                <h4 className="font-black text-gray-900 group-hover:text-white text-sm transition-colors">{p.exam}</h4>
                <p className="text-xs text-gray-400 group-hover:text-blue-200 mt-1 transition-colors">{p.courses}</p>
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto bg-white rounded-2xl border-2 border-blue-100 p-4 shadow-sm">
            <div className="relative flex-1 w-full">
              <Target size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
              <input
                type="number"
                placeholder="Enter your rank / score"
                className="w-full pl-9 pr-4 py-3 rounded-xl text-sm border border-gray-100 focus:outline-none focus:border-blue-400 bg-gray-50"
              />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 w-full md:w-auto justify-center">
              Predict My Colleges
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
