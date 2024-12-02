import React from "react";

const ResultCard = ({ score, total }) => (
  <div className="text-center">
    <h2>Тренировка завершена!</h2>
    <p>
      Ваш результат: {score}/{total} ({((score / total) * 100).toFixed(2)}%)
    </p>
    <p>Вы заработали: {Math.ceil((score / total) * 5)} из 5 баллов!</p>
  </div>
);

export default ResultCard;
