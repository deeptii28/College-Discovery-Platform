"use client";

import { useState } from "react";

const TOP_COLLEGES = [
  { rank: 1, name: "IIT Bombay", city: "Mumbai", rating: 4.8 },
  { rank: 2, name: "IIM Ahmedabad", city: "Ahmedabad", rating: 4.9 },
  { rank: 3, name: "AIIMS Delhi", city: "Delhi", rating: 4.9 },
];

const STATS = [
  { num: "19,000+", label: "Colleges" },
  { num: "500+", label: "Entrance Exams" },
  { num: "1 Cr+", label: "Students Helped" },
  { num: "50,000+", label: "Reviews" },
];

const STREAMS = ["Engineering", "Management", "Medical", "Commerce", "Arts", "Design", "Law", "Science"];
const CITIES = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"];

export default function HeroSection() {
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 48px;
        }
        .hero-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .orb1 {
          width: 600px; height: 600px;
          top: -200px; right: -100px;
          background: radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%);
        }
        .orb2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -100px;
          background: radial-gradient(circle, rgba(30,49,112,0.8) 0%, transparent 70%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,140,0,0.12);
          border: 1px solid rgba(255,140,0,0.25);
          color: var(--saffron-light);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero h1 em {
          font-style: normal;
          color: var(--saffron);
        }
        .hero-sub {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 520px;
          line-height: 1.7;
        }
        .search-box {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius);
          padding: 8px;
          display: flex;
          gap: 8px;
          align-items: center;
          max-width: 600px;
          backdrop-filter: blur(12px);
        }
        .search-select {
          background: transparent;
          border: none;
          color: var(--white);
          font-size: 0.9rem;
          padding: 10px 14px;
          outline: none;
          font-family: 'Inter', sans-serif;
          min-width: 160px;
          appearance: none;
          cursor: pointer;
        }
        .search-select option { background: var(--navy-mid); }
        .search-divider { width: 1px; height: 32px; background: var(--border); flex-shrink: 0; }
        .search-btn {
          background: var(--saffron);
          color: var(--navy);
          border: none;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          margin-left: auto;
        }
        .search-btn:hover { background: var(--saffron-light); }
        .stats-bar {
          display: flex;
          gap: 40px;
          margin-top: 40px;
        }
        .stat-item { display: flex; flex-direction: column; gap: 2px; }
        .stat-number {
          font-family: 'Sora', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--saffron);
          line-height: 1;
        }
        .stat-label { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }
        .hero-visual {
          position: absolute;
          right: 48px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        .rank-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          backdrop-filter: blur(20px);
          padding: 20px 24px;
          min-width: 260px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s;
        }
        .rank-card:hover { border-color: rgba(255,140,0,0.3); transform: translateX(-4px); }
        .rank-badge {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,140,0,0.15);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1rem;
          color: var(--saffron);
          flex-shrink: 0;
          font-family: 'Sora', sans-serif;
        }
        .rank-info { flex: 1; }
        .rank-name { font-weight: 600; font-size: 0.95rem; }
        .rank-city { font-size: 0.78rem; color: var(--text-muted); }
        .rank-score { font-family: 'Sora', sans-serif; font-weight: 700; color: var(--gold); font-size: 0.95rem; }

        @media (max-width: 1024px) {
          .hero { flex-direction: column; padding: 60px 24px; min-height: auto; }
          .hero-visual { position: static; transform: none; margin-top: 40px; }
          .stats-bar { gap: 20px; flex-wrap: wrap; }
        }
        @media (max-width: 640px) {
          .search-box { flex-direction: column; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />

        <div className="hero-content">
          <div className="hero-eyebrow">🎓 Admissions 2026 — 19,000+ Colleges Listed</div>
          <h1>
            Find Your Perfect<br />
            <em>College in India</em>
          </h1>
          <p className="hero-sub">
            Explore 19,000+ colleges, compare fees &amp; rankings, check admission eligibility,
            and get expert counselling — all in one place.
          </p>

          <div className="search-box">
            <select
              className="search-select"
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
            >
              <option value="">Study Goal</option>
              {STREAMS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="search-divider" />
            <select
              className="search-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Location</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button className="search-btn">Search Colleges →</button>
          </div>

          <div className="stats-bar">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-number">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          {TOP_COLLEGES.map((c) => (
            <div className="rank-card" key={c.name}>
              <div className="rank-badge">#{c.rank}</div>
              <div className="rank-info">
                <div className="rank-name">{c.name}</div>
                <div className="rank-city">{c.city}</div>
              </div>
              <div className="rank-score">⭐ {c.rating}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}