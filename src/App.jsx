import React, { useState } from "react";
import Header from "./components/Header";
import SettingsForm from "./components/SettingsForm";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [settings, setSettings] = useState({
    totalQuestions: 10,
    mode: "mixed",
  });

  // Функция для обработки настроек
  const handleSettingsSubmit = (newSettings) => {
    setSettings(newSettings);
    generateQuestions(newSettings);
    setCurrentIndex(0);
    setScore(0);
  };

  // Функция для генерации примеров
  const generateQuestions = (settings) => {
    const { totalQuestions, mode } = settings;
    const operations = {
      addition: "+",
      subtraction: "-",
      mixed: ["+", "-"],
    };

    const questions = Array.from({ length: totalQuestions }, () => {
      const op = Array.isArray(operations[mode])
        ? operations[mode][Math.floor(Math.random() * 2)] // Выбор операции в смешанном режиме
        : operations[mode];
      const a = Math.floor(Math.random() * 11); // Ограничение до 10
      const b = Math.floor(Math.random() * 11); // Ограничение до 10
      const [left, right] = op === "-" && a < b ? [b, a] : [a, b]; // Упорядочиваем для вычитания
      return { left, right, op };
    });

    setQuestions(questions);
  };

  // Функция обработки ответа
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < settings.totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-1); // Завершаем тренировку
    }
  };

  return (
    <div className="container my-5">
      <Header />
      {currentIndex === -1 ? (
        <ResultCard score={score} total={settings.totalQuestions} />
      ) : questions.length > 0 ? (
        <QuestionCard
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <SettingsForm onSubmit={handleSettingsSubmit} />
      )}
    </div>
  );
};

export default App;
