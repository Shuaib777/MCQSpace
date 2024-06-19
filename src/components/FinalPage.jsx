import React from "react";

const FinalPage = ({ marks, selectedAnswers, questions }) => {
  console.log(selectedAnswers);

  const handleSelected = (questionsIndex, option, answer) => {
    if (selectedAnswers[questionsIndex] === option) {
      return selectedAnswers[questionsIndex] === answer ? "right" : "wrong";
    }
    return "";
  };

  return (
    <>
      <div>{marks}</div>
      {questions.map((question, questionsIndex) => (
        <div key={questionsIndex}>
          <h1>{question.question}</h1>
          {question.options.map((option, index) => {
            return (
              <div
                key={index}
                className={`${handleSelected(
                  questionsIndex,
                  option,
                  question.answer
                )} ${option === question.answer ? "right" : ""}`}
              >
                {option}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default FinalPage;
