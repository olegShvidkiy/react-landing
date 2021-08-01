import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { setOneAnswer } from "../../../../../../store/actions/actions";
import { EmojiText } from "../../../../../UI/emojiText/emojiText";
import cls from "./quizOption.module.css";
export default function QuizOption({ withEmoji, option, i }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  function changeStore() {
    dispatch(setOneAnswer(i));

    id != 4 && history.push(`/quiz/${+id + 1}`);
  }

  return (
    <div onClick={() => changeStore()} className={cls.wrapper}>
      {withEmoji ? (
        <EmojiText src={option.src} text={option.text} />
      ) : /min /.test(option.text) ? (
        <i>
          <i style={{ color: "#4380ff" }}>{option.text}</i> day
        </i>
      ) : (
        option.text
      )}
    </div>
  );
}
