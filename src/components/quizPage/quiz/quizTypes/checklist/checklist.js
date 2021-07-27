import { useState } from "react";
import { Option } from "./option";

export function Checklist({ options, getData }) {
  const [answers, setAnswers] = useState(options);
  function onChange(id) {
    const buff = answers.slice();
    buff[id].selected = !buff[id].selected;
    setAnswers(buff);
    getData(answers);
  }

  const optionsList = options.map((item, i) => (
    <Option
      src={item.src}
      text={item.text}
      selected={item.selected}
      id={i}
      onChange={(i) => onChange(i)}
      key={i}
    />
  ));
  // console.log(answers);
  return <div>{optionsList}</div>;
}
