import React from "react";

const FinalPage = ({ marks, selectedAnswers, questions, handleReset }) => {
  const handleSelected = (questionsIndex, option, answer) => {
    if (selectedAnswers[questionsIndex] === option) {
      return selectedAnswers[questionsIndex] === answer ? "right" : "wrong";
    }
    return "";
  };

  return (
    <div className="final-page">
      <h2>
        Your Score: {marks} / {questions.length}
      </h2>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      {questions.map((question, questionsIndex) => (
        <div key={questionsIndex} className="question-block">
          <p
            className={`${
              selectedAnswers[questionsIndex] ? "attempted" : "not-attempted"
            }`}
          >
            {selectedAnswers[questionsIndex] ? "Attempted" : "Not Attempted"}
          </p>
          <h3>{question.question}</h3>
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`option ${handleSelected(
                questionsIndex,
                option,
                question.answer
              )} ${option === question.answer ? "right" : ""}`}
            >
              {option}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FinalPage;
