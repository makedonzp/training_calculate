import React, { useState } from "react";

const QuestionCard = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null); // Состояние для обратной связи
  const correctAnswer =
    question.op === "+"
      ? question.left + question.right
      : question.left - question.right;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;

    if (isCorrect) {
      setFeedback({ message: "Правильный ответ! Молодец!", isCorrect: true });
      onAnswer(true); // Сообщаем App, что ответ верный
    } else {
      setFeedback({
        message: "Не правильно, попробуй еще раз :(",
        isCorrect: false,
      });
    }
    setUserAnswer(""); // Сбрасываем поле ввода
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
      {feedback && (
        <p
          className="mt-3"
          style={{
            fontWeight: "bold",
            color: feedback.isCorrect ? "green" : "red",
          }}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
};

export default QuestionCard;
