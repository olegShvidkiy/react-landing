import { useRef } from "react";
import QuizOption from "./quizOption/quizOption";

export function OneAnswer({ withEmoji, options }) {
  const optionsList = options.map((item, i) => (
    <QuizOption withEmoji={withEmoji} option={item} id={i} key={i} />
  ));

  return <div>{optionsList}</div>;
}
