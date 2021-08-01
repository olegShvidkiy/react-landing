import { Fragment, useState } from "react";
import cls from "./bubbleQuiz.module.scss";

export function BubbleQuiz({ options, getData }) {
  const [answers, setAnswers] = useState(options);

  function onChange(id) {
    const buff = answers.slice();
    buff[id].selected = !buff[id].selected;
    setAnswers(buff);
    getData(answers);
  }

  const bubbles = Object.keys(cls)
    .filter((item) => item.indexOf("bubble_") > -1)
    .map((item, i) => (
      <Fragment key={i}>
        <input
          onChange={() => onChange(i)}
          className={cls.input}
          type="checkbox"
          checked={options[i].selected}
          id={i}
        ></input>
        <label className={cls.bubble + " " + cls[item]} htmlFor={i}>
          {options[i].text}
        </label>
      </Fragment>
    ));

  return <div className={cls.wrapper}>{bubbles}</div>;
}
