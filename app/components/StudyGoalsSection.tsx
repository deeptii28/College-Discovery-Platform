"use client";

const STREAMS = [
  { label: "Engineering", icon: "⚙️", count: "6,381" },
  { label: "Management", icon: "💼", count: "4,120" },
  { label: "Medical", icon: "🏥", count: "2,840" },
  { label: "Commerce", icon: "📊", count: "3,210" },
  { label: "Arts", icon: "🎨", count: "5,100" },
  { label: "Law", icon: "⚖️", count: "1,450" },
];

export default function StudyGoalsSection() {
  return (
    <>
      <style>{`
        .study-goals-section {
          padding: 80px 48px;
          border-top: 1px solid var(--border);
        }
        .streams-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .stream-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          cursor: pointer;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .stream-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,140,0,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .stream-card:hover { border-color: rgba(255,140,0,0.4); transform: translateY(-4px); }
        .stream-card:hover::before { opacity: 1; }
        .stream-card:hover .stream-arrow { opacity: 1; }
        .stream-icon { font-size: 2rem; margin-bottom: 12px; }
        .stream-name { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1.1rem; margin-bottom: 4px; }
        .stream-count { color: var(--text-muted); font-size: 0.85rem; }
        .stream-arrow {
          position: absolute;
          top: 24px; right: 24px;
          color: var(--saffron);
          opacity: 0;
          transition: opacity 0.2s;
          font-size: 1.2rem;
        }

        @media (max-width: 1024px) {
          .study-goals-section { padding: 60px 24px; }
          .streams-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .streams-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="study-goals-section">
        <p className="section-eyebrow">Study Streams</p>
        <div className="section-header">
          <div>
            <h2 className="section-title">What do you want to study?</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Pick your stream to find the right colleges and entrance exams
            </p>
          </div>
          <button className="view-all">View All Streams →</button>
        </div>

        <div className="streams-grid">
          {STREAMS.map((s) => (
            <div className="stream-card" key={s.label}>
              <span className="stream-arrow">→</span>
              <div className="stream-icon">{s.icon}</div>
              <div className="stream-name">{s.label}</div>
              <div className="stream-count">{s.count} colleges</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}