import { useDispatch } from "react-redux";
import { setOneAnswer } from "../../../../../../store/actions/actions";
import { EmojiText } from "../../../../../UI/emojiText/emojiText";
import cls from "./quizOption.module.css";
export default function QuizOption({ withEmoji, option, id }) {
  const dispatch = useDispatch();
  function changeStore() {
    dispatch(setOneAnswer(id));
  }

  return (
    <div onClick={() => changeStore()} className={cls.wrapper}>
      {withEmoji ? (
        <EmojiText src={option.src} text={option.text} />
      ) : (
        option.text
      )}
    </div>
  );
}
