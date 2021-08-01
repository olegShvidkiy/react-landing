import { Link, useParams } from "react-router-dom";
import QuizOption from "./quizOption/quizOption";

export function OneAnswer({ withEmoji, options }) {
  const { id } = useParams();
  const optionsList = options.map((item, i) => (
    <QuizOption withEmoji={withEmoji} option={item} i={i} key={i} />
  ));

  return <div>{optionsList}</div>;
}
