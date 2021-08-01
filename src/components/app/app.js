import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { LandingPage } from "../landingPage/landingPage";
import { QuizPage } from "../quizPage/quizPage";
import cls from "./app.module.scss";
export default function App() {
  return (
    <Router>
      <div className={cls.app}>
        {/* {state.currentQuiz > 4 && <Redirect to="/landing" />} */}

        <Switch>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Redirect to="/quiz" />
        </Switch>
      </div>
    </Router>
  );
}
