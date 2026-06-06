"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    collegeName: "",
    review: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Submit Your College Review
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          {/* College Name */}
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={form.collegeName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          {/* Review */}
          <textarea
            name="review"
            placeholder="Write your review"
            value={form.review}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800"
          >
            Submit Review
          </button>

        </form>
      </div>
    </div>
  );
}