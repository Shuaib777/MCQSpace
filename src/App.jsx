import React, { useState } from "react";
import questions from "./data.js";
import Question from "./components/Question.jsx";
import FinalPage from "./components/FinalPage.jsx";
import "./App.css";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [marks, setMarks] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const selectedAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer)
      setMarks((prev) => prev + 1);

    setSelectedAnswers((prev) => [...prev, selectedOption]);
    setQuestionIndex((prev) => prev + 1);
  };

  return questionIndex < questions.length ? (
    <div>
      <Question
        question={questions[questionIndex]}
        selectedAnswer={selectedAnswer}
        lastIndex={questionIndex === questions.length - 1}
      />
    </div>
  ) : (
    <div>
      <FinalPage
        marks={marks}
        selectedAnswers={selectedAnswers}
        questions={questions}
      />
    </div>
  );
};

export default App;
