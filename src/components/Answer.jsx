import React, { useRef } from "react";

const Answer = ({ selectedAnswer, answerState, answers, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "incorrect" || answerState === "correct") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button className={cssClass} onClick={() => onSelect(answer)} disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answer;
