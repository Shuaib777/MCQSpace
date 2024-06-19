import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { RWebShare } from "react-web-share";

const Share = ({ marks }) => {
  return (
    <div className="share">
      <RWebShare
        data={{
          text: `I scored ${marks} on the Space Quiz! Can you beat my score?`,
          url: "https://mcq-space.vercel.app/",
          title: "MCQ-SPACE",
        }}
      >
        <FaShareAlt size={20} />
      </RWebShare>
    </div>
  );
};

export default Share;
