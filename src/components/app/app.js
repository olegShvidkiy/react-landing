import { useSelector } from "react-redux";
import { LandingPage } from "../landingPage/landingPage";
import { QuizPage } from "../quizPage/quizPage";
import cls from "./app.module.scss";
export default function App() {
  const state = useSelector((state) => state);
  return (
    <div className={cls.app}>
      {state.currentQuiz <= 4 ? <QuizPage /> : <LandingPage />}
    </div>
  );
}
