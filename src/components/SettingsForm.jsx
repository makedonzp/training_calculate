import React, { useState } from "react";

const SettingsForm = ({ onSubmit }) => {
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [mode, setMode] = useState("mixed");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ totalQuestions: parseInt(totalQuestions, 10), mode });
  };

  return (
    <form className="p-4 border rounded" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="totalQuestions" className="form-label">
          Количество примеров
        </label>
        <select
          id="totalQuestions"
          className="form-select"
          value={totalQuestions}
          onChange={(e) => setTotalQuestions(e.target.value)}
        >
          {[10, 20, 30, 40, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Режим</label>
        <div>
          {["addition", "subtraction", "mixed"].map((m) => (
            <div key={m} className="form-check">
              <input
                type="radio"
                id={m}
                name="mode"
                className="form-check-input"
                value={m}
                checked={mode === m}
                onChange={(e) => setMode(e.target.value)}
              />
              <label htmlFor={m} className="form-check-label">
                {m === "addition"
                  ? "Сложение"
                  : m === "subtraction"
                  ? "Вычитание"
                  : "Смешанный"}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Начать тренировку
      </button>
    </form>
  );
};

export default SettingsForm;
