import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />

      <h2>{questionText}</h2>

      <Answer
        onSelect={onSelectAnswer}
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
};

export default Question;
