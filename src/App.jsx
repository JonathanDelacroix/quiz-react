import { useState } from "react";
import { QuizProvider } from "./context/QuizContext";
import FilterQuiz from "./components/FilterQuiz";
import QuizAccordion from "./components/QuizAccordion";

const App = () => {
  const [category, setCategory] = useState("All");
  const handleChange = (e) => {
  setCategory(e.target.value);
};

  return (
    <div className="m-1">
      <QuizProvider>
          <h1 className="mt-4 mb-4">Quiz Interactif</h1>
          <FilterQuiz handleChange={handleChange} />
          <QuizAccordion category={category} />
      </QuizProvider>
    </div>
  );
};

export default App;