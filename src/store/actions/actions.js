import {
  SET_BUBBLEQUIZ,
  SET_CHECKLIST,
  SET_ONEANSWER,
  TO_PREV,
} from "../types/types";

export function setChecklist(answers) {
  return { type: SET_CHECKLIST, payload: answers };
}

export function setOneAnswer(answer) {
  return { type: SET_ONEANSWER, payload: answer };
}

export function setBubbleQuiz(answers) {
  return { type: SET_BUBBLEQUIZ, payload: answers };
}

export function toPrev() {
  return { type: TO_PREV };
}
