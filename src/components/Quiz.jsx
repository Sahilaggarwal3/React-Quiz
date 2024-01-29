import React, { useCallback, useState } from "react";
import Questions from "../question";
import Summary from "./Summary";

import Question from "./Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsCompleted = activeQuestionIndex === 7;

  const handleAnswers = useCallback(
    (currentSelectedAnswer) => {
      setAnswerState("answered");

      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, currentSelectedAnswer];
      });

      setTimeout(() => {
        if (
          currentSelectedAnswer === Questions[activeQuestionIndex].answers[0]
        ) {
          setAnswerState("correct");
        } else {
          setAnswerState("incorrect");
        }
      }, 1000);

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex]
  );

  const timeExpirer = useCallback(() => {
    handleAnswers(null);
  }, [handleAnswers]);

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={Questions[activeQuestionIndex].text}
        answers={Questions[activeQuestionIndex].answers}
        onSelectAnswer={handleAnswers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={timeExpirer}
      />
    </div>
  );
};

export default Quiz;
