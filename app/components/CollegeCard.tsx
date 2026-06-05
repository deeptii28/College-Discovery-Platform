"use client";

import { College } from "@/types";

interface Props {
  college: College;
}

export default function CollegeCard({ college }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{college.name}</h2>

      <p className="text-gray-600">{college.location}</p>

      <div className="flex justify-between mt-2">
        <span>⭐ {college.rating}</span>
        <span>{college.fees}</span>
      </div>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
        View Details
      </button>
    </div>
  );
}