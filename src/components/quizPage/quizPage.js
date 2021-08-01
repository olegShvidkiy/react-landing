import { Quiz } from "./quiz/quiz";
import { ProgressBar } from "./progressBar/progressBar";

import cls from "./quizPage.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export function QuizPage() {
  const state = useSelector((state) => state);

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    history.push(`/quiz/${state.currentQuiz}`);
  }, []);
  const wrapperCls = [cls.wrapper];

  return (
    <div className={wrapperCls.join(" ")}>
      <ProgressBar
        currentQuiz={state.currentQuiz + 1}
        total={state.quizList.length}
      />
      <div className={cls.page}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={{
              enter: cls.enter,
              enterActive: cls.enterActive,
              exit: cls.exit,
              exitActive: cls.exitActive,
            }}
            timeout={500}
          >
            <Switch location={location}>
              <Route exact path="/quiz/:id">
                <Quiz />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
