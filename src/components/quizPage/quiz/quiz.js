import cls from "./quiz.module.scss";
import { BubbleQuiz } from "./quizTypes/bubbleQuiz/bubbleQuiz";
import { Checklist } from "./quizTypes/checklist/checklist";
import { OneAnswer } from "./quizTypes/oneAnswer/oneAnswer";
import { Button } from "../../UI/button/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBubbleQuiz, setChecklist } from "../../../store/actions/actions";

export function Quiz({ quiz }) {
  const payload = useRef(quiz.options);
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state);
  const [disableButton, setDisableButton] = useState(
    payload.current.find((item) => item.selected) ? false : true
  );
  console.log("render");

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
  }

  return (
    <div className={cls.quiz}>
      <div>
        <h3 className={cls.quiz_title}>{quiz.title}</h3>
        {quiz.text && <div className={cls.quiz_text}>{quiz.text}</div>}
        <div>{type}</div>
        {quiz.withButton && (
          <div className={cls.btn_wrapper}>
            <Button
              disabled={disableButton}
              text={"Next"}
              onClick={() => changeStore()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
