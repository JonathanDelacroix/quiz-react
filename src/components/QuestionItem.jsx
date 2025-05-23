import { useContext } from "react";
import { Accordion, Button } from "react-bootstrap";
import { QuizContext } from "../context/QuizContext";

const QuestionItem = ({ question, eventKey }) => {
  const { dispatch } = useContext(QuizContext);

  const handleAnswer = (result) => {
    dispatch({ type: "VALIDATE_ANSWER", payload: { id: question.id, validation: result }});
  };

  const isCorrect = question.validation === "Juste";

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <span>{question.question}</span>
        {question.validation && (
          <div className="d-flex justify-content-end w-100">
            <span className={`${isCorrect ? "text-success" : "text-danger"}`}>
              {isCorrect ? "Juste" : "Faux"}
            </span>
          </div>
        )}
      </Accordion.Header>
      <Accordion.Body>
        <div className="p-3 border rounded bg-white shadow-sm">
          <p><strong>Réponse :</strong> {question.answer}</p>
          <div className="d-flex gap-2 mt-2">
            <Button variant="success" onClick={() => handleAnswer("Juste")} className={question.validation ? "disabled" : ""}>Juste</Button>
            <Button variant="danger" onClick={() => handleAnswer("Faux")} className={question.validation ? "disabled" : ""}>Faux</Button>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default QuestionItem;