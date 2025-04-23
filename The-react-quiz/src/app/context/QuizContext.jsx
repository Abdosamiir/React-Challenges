import { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import { initialState, reducer } from "./quizReducer";

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  const value = useMemo(
    () => ({
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      numQuestions,
      maxPossiblePoints,
      dispatch,
    }),
    [
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      numQuestions,
      maxPossiblePoints,
      dispatch,
    ]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuiz must be used within a QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
