import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toPrev } from "../../../store/actions/actions";
import cls from "./progressBar.module.scss";
export function ProgressBar({ currentQuiz, total }) {
  const width = (currentQuiz * 100) / total;
  const dispatch = useDispatch();
  const history = useHistory();

  const toPreviousStep = () => {
    dispatch(toPrev());

    currentQuiz != 1 && history.push(`/quiz/${currentQuiz - 2}`);
  };
  return (
    <div className={cls.wrapper}>
      <div className={cls.progressBar}>
        <div className={cls.progress} style={{ width: `${width}%` }}></div>
      </div>
      <div className={cls.header_controls}>
        {currentQuiz > 1 && (
          <div onClick={toPreviousStep} className={cls.prev}>
            <div className={cls.left_arrow}>
              <svg
                width="9"
                height="20"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15L1 8L8 1"
                  stroke="#2E323F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* <img className={cls.left_arrow} src="/images/Vector.svg"></img> */}
            <i>Previous step</i>
          </div>
        )}
        <div className={cls.counter}>
          {currentQuiz}/{total}
        </div>
      </div>
    </div>
  );
}
