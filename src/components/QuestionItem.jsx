import { useContext } from "react";
import { Accordion, Button} from "react-bootstrap";
import { QuizContext } from "../context/QuizContext";

const QuestionItem = ({ question, eventKey }) => {
  const { dispatch } = useContext(QuizContext);

  const handleAnswer = (answer) => {
    dispatch({ type: "VALIDATE_ANSWER", payload: { id: question.id, answer } });
  };

  const isCorrect = question.userAnswer === "Juste";

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        {question.question}
        {question.validated && (
          <span className={`ms-auto badge ${isCorrect ? "bg-success" : "bg-danger"}`}>
            {isCorrect ? "Juste" : "Faux"}
          </span>
        )}
      </Accordion.Header>
      <Accordion.Body>
        <p><strong>Réponse :</strong> {question.answer}</p>
        {!question.validated && (
          <div className="d-flex gap-2">
            <Button variant="success" onClick={() => handleAnswer("Juste")}>Juste</Button>
            <Button variant="danger" onClick={() => handleAnswer("Faux")}>Faux</Button>
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default QuestionItem;
