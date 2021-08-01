import {
  SET_BUBBLEQUIZ,
  SET_CHECKLIST,
  SET_ONEANSWER,
  TO_PREV,
} from "../types/types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  currentQuiz: 0,
  test: {
    lol: 0,
  },
  quizList: [
    {
      type: "checklist",
      withButton: true,
      allowSkip: false,
      title: "The checklist you can't do without!",
      text: "Let's make your checklist plan. Opt for your goals to get excited:",
      options: [
        {
          src: "/images/1.1.png",
          text: "Perform cleaning",
          selected: false,
        },
        {
          src: "/images/1.2.png",
          text: "Keep mental health",
          selected: false,
        },
        {
          src: "/images/1.3.png",
          text: "Be productive",
          selected: false,
        },
        {
          src: "/images/1.4.png",
          text: "Set useful nutrition ",
          selected: false,
        },
        {
          src: "/images/1.5.png",
          text: "Love & be loved",
          selected: false,
        },
        {
          src: "/images/1.6.png",
          text: "Have a healthy body",
          selected: false,
        },
        {
          src: "/images/1.7.png",
          text: "Bring self-care into life",
          selected: false,
        },
      ],
    },
    {
      type: "oneAnswer",
      title: "What is your temperament type?",
      text: "This information will help us to give you the best result",
      withButton: false,
      withEmoji: false,
      options: [
        { text: "Sanguine" },
        { text: "Choleric" },
        { text: "Melancholic" },
        { text: "Phlegmatic" },
        { text: "I don't know" },
      ],
      selected: null,
    },
    {
      type: "oneAnswer",
      title: "What would you like to have?",
      text: "What are you missing for a fulfilling life?",
      withButton: false,
      withEmoji: true,
      options: [
        { src: "/images/2.1.png", text: "More focus" },
        { src: "/images/2.2.png", text: "More strength" },
        { src: "/images/2.3.png", text: "More calm" },
        { src: "/images/2.4.png", text: "More energy" },
      ],
      selected: null,
    },
    {
      type: "oneAnswer",
      title: "What is your timing goal?",
      text: "How much time do you want to spend on self-development every day?",
      withButton: false,
      withEmoji: false,
      options: [
        {
          text: "5 min / ",
        },
        {
          text: "10 min / ",
        },
        {
          text: "15 min / ",
        },
        {
          text: "20+  min / ",
        },
      ],
      selected: null,
    },
    {
      type: "bubbleQuiz",
      title: "Are there any habits you’d like to quit?",

      withButton: true,
      allowSkip: true,
      options: [
        {
          text: "Procrastination",
          selected: false,
        },
        {
          text: "Drinking",
          selected: false,
        },
        {
          text: "Fast food",
          selected: false,
        },
        {
          text: "Social media",
          selected: false,
        },
        {
          text: "Doubting yourself",
          selected: false,
        },
        {
          text: "Nail biting",
          selected: false,
        },
        {
          text: "Smoking",
          selected: false,
        },

        {
          text: "Lack of sleep",
          selected: false,
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  let buff;
  let testbuff;
  switch (action.type) {
    case SET_CHECKLIST:
      buff = JSON.parse(JSON.stringify(state.quizList));
      buff[state.currentQuiz].options = action.payload;
      return {
        ...state,
        currentQuiz: state.currentQuiz + 1,
        quizList: buff,
      };
    case SET_ONEANSWER:
      buff = JSON.parse(JSON.stringify(state.quizList));
      buff[state.currentQuiz].selected = action.payload;
      return { ...state, currentQuiz: state.currentQuiz + 1, quizList: buff };
    case SET_BUBBLEQUIZ:
      buff = JSON.parse(JSON.stringify(state.quizList));
      buff[state.currentQuiz].options = action.payload;
      return { ...state, quizList: buff };
    case TO_PREV:
      return { ...state, currentQuiz: state.currentQuiz - 1 };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
