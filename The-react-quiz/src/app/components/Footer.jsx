/* eslint-disable react/prop-types */
import Timer from "./Timer";
import NextButton from "./NextButton";

function Footer({ dispatch, answer, index, numQuestions, secondsRemaining }) {
  return (
    <div>
      {" "}
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default Footer;
