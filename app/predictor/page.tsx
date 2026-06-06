"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState("");

  const predict = () => {
    const r = Number(rank);

    if (r <= 1000) {
      setResult("IIT Possible 🔥");
    } else if (r <= 5000) {
      setResult("Top NIT Chances 👍");
    } else if (r <= 20000) {
      setResult("Good Private Colleges 👍");
    } else {
      setResult("Decent Private Colleges / Backup options");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Predictor</h1>

      <input
        placeholder="Enter your rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        style={{ padding: "8px", marginTop: "10px" }}
      />

      <button onClick={predict} style={{ marginLeft: "10px" }}>
        Predict
      </button>

      {result && (
        <h2 style={{ marginTop: "20px" }}>
          {result}
        </h2>
      )}
    </div>
  );
}