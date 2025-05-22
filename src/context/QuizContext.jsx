import { createContext, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import { questionsData } from "../data/questions";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const initialState = questionsData.map(q => ({
    ...q,
    validated: false,
    userAnswer: null,
  }));

  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
