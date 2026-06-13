"use client";

const EXAMS = [
  { name: "JEE Main", desc: "B.Tech / B.E.", date: "Jan & Apr 2026", deadline: "Nov 2025", stream: "Engineering" },
  { name: "NEET UG", desc: "MBBS / BDS", date: "May 2026", deadline: "Mar 2026", stream: "Medical" },
  { name: "CAT", desc: "MBA / PGDM", date: "Nov 2025", deadline: "Sep 2025", stream: "Management" },
  { name: "CUET", desc: "UG Admissions", date: "May 2026", deadline: "Apr 2026", stream: "General" },
];

export default function ExamsSection() {
  return (
    <>
      <style>{`
        .exams-section {
          padding: 80px 48px;
          border-top: 1px solid var(--border);
        }
        .exams-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .exam-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: all 0.25s;
        }
        .exam-card:hover { border-color: rgba(255,140,0,0.3); transform: translateX(4px); }
        .exam-info { flex: 1; }
        .exam-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .exam-desc { color: var(--text-muted); font-size: 0.82rem; }
        .exam-dates { text-align: right; flex-shrink: 0; }
        .exam-date-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .exam-date-value { font-weight: 600; font-size: 0.88rem; color: var(--saffron-light); }
        .exam-apply-btn {
          background: var(--saffron);
          color: var(--navy);
          border: none;
          padding: 9px 20px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .exam-apply-btn:hover { background: var(--saffron-light); }

        @media (max-width: 1024px) {
          .exams-section { padding: 60px 24px; }
          .exams-grid { grid-template-columns: 1fr; }
          .exam-card { flex-wrap: wrap; }
        }
      `}</style>

      <section className="exams-section">
        <p className="section-eyebrow">Upcoming Exams</p>
        <div className="section-header">
          <div>
            <h2 className="section-title">Entrance Exam Calendar</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Stay ahead of deadlines and exam dates
            </p>
          </div>
          <button className="view-all">View All Exams →</button>
        </div>

        <div className="exams-grid">
          {EXAMS.map((e) => (
            <div className="exam-card" key={e.name}>
              <div className="exam-info">
                <div className="exam-name">{e.name}</div>
                <div className="exam-desc">{e.desc}</div>
              </div>
              <div className="exam-dates">
                <div className="exam-date-label">Exam Date</div>
                <div className="exam-date-value">{e.date}</div>
                <div className="exam-date-label" style={{ marginTop: 8 }}>Apply By</div>
                <div className="exam-date-value">{e.deadline}</div>
              </div>
              <button className="exam-apply-btn">Apply →</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}