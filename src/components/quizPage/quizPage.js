import { Quiz } from "./quiz/quiz";
import { ProgressBar } from "./progressBar/progressBar";
import { Button } from "../UI/button/button";
import cls from "./quizPage.module.css";
import { useSelector } from "react-redux";

export function QuizPage() {
  const state = useSelector((state) => state);
  console.log(state);

  function dispatchStore() {}
  <div className={state}>
    <Quiz quiz={state.quizList[state.currentQuiz]} />
  </div>;
  return (
    <div className={cls.wrapper}>
      <ProgressBar
        currentQuiz={state.currentQuiz + 1}
        total={state.quizList.length}
      />

      <Quiz quiz={state.quizList[state.currentQuiz]} />
    </div>
  );
}
