import cls from "./quiz.module.scss";
import { BubbleQuiz } from "./quizTypes/bubbleQuiz/bubbleQuiz";
import { Checklist } from "./quizTypes/checklist/checklist";
import { OneAnswer } from "./quizTypes/oneAnswer/oneAnswer";
import { Button } from "../../UI/button/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBubbleQuiz, setChecklist } from "../../../store/actions/actions";
import { Link, useHistory, useParams } from "react-router-dom";

export function Quiz() {
  const { quizList } = useSelector((state) => state);
  const { id } = useParams();
  const quiz = quizList[id];
  const payload = useRef(quiz.options);
  const dispatch = useDispatch();
  const history = useHistory();

  const [disableButton, setDisableButton] = useState(
    payload.current.find((item) => item.selected) ? false : true
  );

  // useEffect(() => {
  //   history.push("/quiz/" + id);
  // }, [id]);

  useEffect(() => {
    if (quiz.title != payload.title && quiz.withButton) {
      payload.current = quiz.options;
      setDisableButton(
        payload.current.find((item) => item.selected) ? false : true
      );
    }
  }, [quiz.withButton, quiz.title, quiz.options]);

  function getData(data) {
    payload.current = data;
    setDisableButton(
      payload.current.find((item) => item.selected) ? false : true
    );
  }

  let type;
  switch (quiz.type) {
    case "checklist":
      type = (
        <Checklist options={quiz.options} getData={(data) => getData(data)} />
      );

      break;
    case "oneAnswer":
      type = <OneAnswer options={quiz.options} withEmoji={quiz.withEmoji} />;

      break;
    case "bubbleQuiz":
      type = (
        <BubbleQuiz options={quiz.options} getData={(data) => getData(data)} />
      );
      break;
    default:
      type = <h1>Error =(</h1>;
  }

  function changeStore() {
    if (quiz.type === "checklist") {
      dispatch(setChecklist(payload.current));
    } else if (quiz.type === "bubbleQuiz") {
      dispatch(setBubbleQuiz(payload.current));
    }

    id != 4 && history.push(`/quiz/${+id + 1}`);
  }

  return (
    <div className={cls.quiz}>
      <div>
        <h3 className={cls.quiz_title}>{quiz.title}</h3>
        {quiz.text && <div className={cls.quiz_text}>{quiz.text}</div>}
        <div>{type}</div>
        {quiz.withButton && (
          <div className={cls.btn_wrapper}>
            {id != 4 ? (
              <Button
                disabled={disableButton}
                text={"Next"}
                onClick={() => changeStore()}
              />
            ) : (
              <Link to="/landing">
                <Button
                  disabled={disableButton}
                  text={"Next"}
                  onClick={() => changeStore()}
                />
                <div className={cls.skip}>Skip</div>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
