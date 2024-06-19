import React, { useEffect, useState } from "react";
import Question from "../components/Question.jsx";
import FinalPage from "../components/FinalPage.jsx";
import data from "../data.js";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [marks, setMarks] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const totalQuestions = 10;

  useEffect(() => {
    const startNumber = Math.floor(
      Math.random() * (data.length - totalQuestions)
    );
    setQuestions(data.slice(startNumber, startNumber + totalQuestions));
  }, []);

  const selectedAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer)
      setMarks((prev) => prev + 1);

    setSelectedAnswers((prev) => [...prev, selectedOption]);
    setQuestionIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setMarks(0);
    setSelectedAnswers([]);
    navigate("/");
  };

  return (
    <div className="quiz-page">
      {questionIndex < questions.length ? (
        <Question
          question={questions[questionIndex]}
          selectedAnswer={selectedAnswer}
          lastIndex={questionIndex === questions.length - 1}
          totalQuestions={totalQuestions}
          questionNumber={questionIndex + 1}
        />
      ) : (
        <FinalPage
          marks={marks}
          selectedAnswers={selectedAnswers}
          questions={questions}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default Quiz;
