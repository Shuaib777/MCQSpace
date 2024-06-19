import React, { useState } from "react";

const Question = ({ question, selectedAnswer, lastIndex }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    selectedAnswer(selectedOption);
  };

  return (
    <div>
      <h1>{question.question}</h1>
      {question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            />
            {option}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>{lastIndex ? "Submit" : "Next"}</button>
    </div>
  );
};

export default Question;
