import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { SelectCategory } from "./pages/HomePage/SelectCategory";
import { quizData } from "../data/quizData.js";
import { QuizResult } from "./pages/QuizResult/QuizResult.jsx";
import { QuizReview } from "./pages/ReviewQuiz/QuizReview.jsx";
import { ErrorFile } from "./components/ErrorFile.jsx";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SelectCategory
              quizData={quizData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route
          path="/start-quiz"
          element={
            <HomePage
              quizData={quizData}
              selectedCategory={selectedCategory}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          }
        />
        <Route
          path="/quiz-result"
          element={<QuizResult selectedCategory={selectedCategory} />}
        />
        <Route
          path="/quiz-review"
          element={<QuizReview selectCategory={selectedCategory} />}
        />

        <Route path="*" element={<ErrorFile />} />
      </Routes>
    </>
  );
}

export default App;
