"use client";

import { useState } from "react";

const COLLEGES = [
  { name: "IIT Bombay", city: "Mumbai", rating: 4.8, fee: "₹2.2L/yr", tag: "Engineering", rank: 1 },
  { name: "IIM Ahmedabad", city: "Ahmedabad", rating: 4.9, fee: "₹23L/yr", tag: "Management", rank: 2 },
  { name: "AIIMS Delhi", city: "Delhi", rating: 4.9, fee: "₹1.6K/yr", tag: "Medical", rank: 3 },
  { name: "NIT Trichy", city: "Trichy", rating: 4.5, fee: "₹1.8L/yr", tag: "Engineering", rank: 4 },
  { name: "BITS Pilani", city: "Pilani", rating: 4.6, fee: "₹5.2L/yr", tag: "Engineering", rank: 5 },
  { name: "IIM Bangalore", city: "Bangalore", rating: 4.8, fee: "₹24L/yr", tag: "Management", rank: 6 },
];

const FILTER_TABS = ["All", "Engineering", "Management", "Medical", "Commerce", "Arts"];

export default function TopCollegesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredColleges =
    activeFilter === "All"
      ? COLLEGES
      : COLLEGES.filter((c) => c.tag === activeFilter);

  return (
    <>
      <style>{`
        .top-colleges-section {
          padding: 80px 48px;
          border-top: 1px solid var(--border);
        }
        .filter-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .tab {
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .tab:hover { border-color: rgba(255,255,255,0.3); color: var(--white); }
        .tab.active { background: var(--saffron); color: var(--navy); border-color: var(--saffron); }

        .colleges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .college-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .college-card:hover {
          border-color: rgba(255,140,0,0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .college-rank-badge {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(247,201,72,0.12);
          border: 1px solid rgba(247,201,72,0.25);
          color: var(--gold);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .college-avatar {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--navy-light), var(--navy-mid));
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 16px;
        }
        .college-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 4px;
        }
        .college-city { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 16px; }
        .college-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 600;
          background: rgba(30,49,112,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        .college-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .college-rating { display: flex; align-items: center; gap: 5px; font-weight: 600; font-size: 0.9rem; }
        .star { color: var(--gold); }
        .college-fee { color: var(--saffron); font-weight: 700; font-size: 0.9rem; }
        .btn-details {
          display: block;
          width: 100%;
          text-align: center;
          padding: 10px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: var(--white);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .btn-details:hover { border-color: var(--saffron); color: var(--saffron); }

        @media (max-width: 1024px) {
          .top-colleges-section { padding: 60px 24px; }
          .colleges-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .colleges-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="top-colleges-section">
        <p className="section-eyebrow">Top Picks</p>
        <div className="section-header">
          <div>
            <h2 className="section-title">Top Colleges in India</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Ranked by experts and verified student reviews
            </p>
          </div>
          <button className="view-all">View All Colleges →</button>
        </div>

        <div className="filter-tabs">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              className={`tab${activeFilter === tab ? " active" : ""}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="colleges-grid">
          {filteredColleges.map((c) => (
            <div className="college-card" key={c.name}>
              <span className="college-rank-badge">NIRF #{c.rank}</span>
              <div className="college-avatar">🏛️</div>
              <span className="college-tag">{c.tag}</span>
              <div className="college-name">{c.name}</div>
              <div className="college-city">📍 {c.city}</div>
              <div className="college-meta">
                <div className="college-rating">
                  <span className="star">★</span> {c.rating}
                </div>
                <div className="college-fee">{c.fee}</div>
              </div>
              <button className="btn-details">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}