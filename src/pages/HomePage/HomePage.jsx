import { QuizTimer } from "../../components/QuizTimer";
import { QuizPage } from "../HomePage/QuizPage";

export function HomePage({
  quizData,
  selectedCategory,
  currentQuestion,
  setCurrentQuestion,
}) {
  return (
    <>
      <QuizPage
        quizData={quizData}
        selectedCategory={selectedCategory}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </>
  );
}
