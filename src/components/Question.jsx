import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Question = ({
  question,
  selectedAnswer,
  lastIndex,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => setSelectedOption(null), [questionNumber]);

  const handleSubmit = () => {
    selectedAnswer(selectedOption);
  };

  return (
    <div className="question-container">
      <div className="header">
        <h3>
          {questionNumber} / {totalQuestions}
        </h3>
        <CountdownCircleTimer
          key={questionNumber}
          isPlaying
          duration={10}
          colors={["#00FF00", "#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 7, 5, 2, 0]}
          onComplete={() => {
            handleSubmit();
            return { shouldRepeat: true, delay: 0.3 };
          }}
          size={50}
          strokeWidth={3}
          trailStrokeWidth={3}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
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
