import { useSelector } from "react-redux";
import cls from "./forecast.module.scss";
export function Forecast() {
  const state = useSelector((state) => state);

  const powerfulHabits = state.quizList[0].options.reduce((acc, cur) => {
    return acc + cur.selected;
  }, 0);
  const oldBadHabits = state.quizList[4].options.reduce((acc, cur) => {
    return acc + cur.selected;
  }, 0);

  const timingGoal = state.quizList[3].options[state.quizList[3].selected];

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
    (item, i) =>
      i != 6 ? (
        <div key={i} className={cls.day_wrapper}>
          <div>{item}</div>
          <div style={{ color: "#C4C4C4" }}>{i + 1}</div>
          <div style={{ color: "#C4C4C4" }} className={cls.dot}>
            .
          </div>
        </div>
      ) : (
        <div key={i} className={cls.day_wrapper}>
          <div style={{ color: "#15C963" }}>{item}</div>
          <div style={{ color: "#15C963" }}>{i + 1}</div>
          <div style={{ color: "#15C963" }} className={cls.dot}>
            .
          </div>
        </div>
      )
  );
  return (
    <div className={cls.forecast}>
      <div className={cls.title}>Forecast based on your answers</div>
      <div className={cls.week_block}>
        <div className={cls.week}>{days}</div>
        <div className={cls.divider}></div>
        <h1 className={cls.habits}>{powerfulHabits}</h1>
        <h3
          style={{
            textAlign: "center",
            fontSize: "18px",
            paddingBottom: "15px",
            color: "#222427",
          }}
        >
          Super powerful habits <i style={{ color: "#4380FF" }}>In 7 days</i>,
          you will already get
        </h3>
      </div>
      <div className={cls.blocks}>
        <div className={cls.block}>
          <div className={cls.block_inner}>
            <div>Old bad habbits</div>
            <h4 style={{ color: "#FF6332" }}>
              -{oldBadHabits ? oldBadHabits : 1} habbits
            </h4>
          </div>
        </div>
        <div className={cls.block}>
          <div className={cls.block_inner}>
            <div>Timing goal</div>
            <h4>
              <i style={{ color: "#4380FF" }}>{timingGoal.text}</i>day
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
