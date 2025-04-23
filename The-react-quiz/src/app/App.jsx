import Header from "./components/Header";
import Box from "./components/Box";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import { useQuiz } from "./context/QuizContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";

function App() {
  const {
    status,
    questions,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    numQuestions,
    maxPossiblePoints,
    dispatch,
  } = useQuiz();

  useFetchQuestions(dispatch);

  return (
    <div className="app">
      <Header />
      <Box>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
              secondsRemaining={secondsRemaining}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Box>
    </div>
  );
}

export default App;
