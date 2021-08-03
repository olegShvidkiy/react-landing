import { SET_BUBBLEQUIZ, SET_CHECKLIST, SET_ONEANSWER } from "../types/types";

export function setChecklist(answer, id) {
  return { type: SET_CHECKLIST, payload: { answer, id } };
}

export function setOneAnswer(answer, id) {
  return { type: SET_ONEANSWER, payload: { answer, id } };
}

export function setBubbleQuiz(answer, id) {
  return { type: SET_BUBBLEQUIZ, payload: { answer, id } };
}
