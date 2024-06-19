import React, { useState } from "react";

const Question = ({
  question,
  selectedAnswer,
  lastIndex,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    selectedAnswer(selectedOption);
  };

  return (
    <div className="question-container">
      <h3>
        {questionNumber} / {totalQuestions}
      </h3>
      <h2>{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option-label ${
              option === selectedOption ? "selected" : ""
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        {lastIndex ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Question;
