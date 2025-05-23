import { createContext, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import { questionsData } from "../data/questions";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, questionsData);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};