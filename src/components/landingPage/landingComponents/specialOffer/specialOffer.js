import { useEffect, useRef, useState } from "react";
import cls from "./specialOffer.module.scss";
export function SpecialOffer() {
  const [time, setTime] = useState(120);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let interval = useRef();
  useEffect(() => time && startTimer(), []);
  const startTimer = () => {
    if (!interval.current) {
      interval.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
  };

  if (time === 0) clearInterval(interval.current);
  const showedTime = `0${minutes}:
  ${seconds.toString().length > 1 ? seconds : "0" + seconds}`;
  return (
    <div className={cls.box}>
      <div className={cls.text}>Special offer expires in</div>
      <div className={cls.timer}>{time ? showedTime : "Offer expired("}</div>
    </div>
  );
}
