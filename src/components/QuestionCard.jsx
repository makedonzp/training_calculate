import React, { useState } from "react";

const QuestionCard = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const correctAnswer =
    question.op === "+"
      ? question.left + question.right
      : question.left - question.right;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
    onAnswer(isCorrect);
    setUserAnswer("");
  };

  return (
    <div className="p-4 border rounded">
      <h4>
        {question.left} {question.op} {question.right} =
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="form-control mb-3"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">
          Ответить
        </button>
      </form>
    </div>
  );
};

export default QuestionCard;
