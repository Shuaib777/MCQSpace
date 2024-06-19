import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="info-container">
        <h1>Welcome to the Space Quiz!</h1>
        <p>Test your knowledge about space</p>
        <p>
          This quiz consists of 10 questions related to various aspects of
          space, including planets, stars, and space exploration.
        </p>
        <p>
          Each time you start the quiz, the questions will appear in a random
          order, making every attempt unique and challenging!
        </p>
        <p>
          Click the button below to start the quiz and see how much you know
          about the universe!
        </p>
        <button onClick={() => navigate("/quiz")}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Home;
