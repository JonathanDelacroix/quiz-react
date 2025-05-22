import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { QuizContext } from "../context/QuizContext";
import QuestionItem from "./QuestionItem";

const QuizAccordion = ({ category }) => {
  const { state } = useContext(QuizContext);

  const filtered = category === "All"
    ? state
    : state.filter(question => question.category === category);

  return (
    <Accordion alwaysOpen>
      {filtered.map((question, index) => (
        <QuestionItem key={question.id} question={question} eventKey={index.toString()} />
      ))}
    </Accordion>
  );
};

export default QuizAccordion;
