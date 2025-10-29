import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizTimer } from "../../components/QuizTimer";
import { NextButton } from "../../components/NextButton";
import "./QuizPage.css";

export function QuizPage({
  quizData,
  selectedCategory,
  currentQuestion,
  setCurrentQuestion,
}) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);

  useEffect(() => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  }, [selectedCategory]);

  const selectedQuiz = quizData.find(
    (item) => item.category === selectedCategory
  );

  const totalQuestions = selectedQuiz.questions.length;

  const currentQuestionHandleClick = (option, answers) => {
    // if (selectedOption === null) {
    //   alert("select an option");
    //   return;
    // }

    const correctAnswer = answers;
    const userAnswer = option[selectedOption];

    let updatedScore = score;
    let updatedAnswers = [...answer];
    let updatedAttempt = attemptCount;

    if (selectedOption !== null) {
      updatedAttempt += 1;
    }

    if (userAnswer === correctAnswer) {
      updatedScore += 1;
    }

    updatedAnswers[currentQuestion] = selectedOption;
    setAnswer(updatedAnswers);
    setAttemptCount(updatedAttempt);
    setScore(updatedScore);

    if (currentQuestion === totalQuestions - 1) {
      navigate("/quiz-result", {
        state: {
          score: updatedScore,
          answer: updatedAnswers,
          attemptCount: updatedAttempt,
          selectedQuiz,
        },
      });
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleSelectedOption = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <QuizTimer
        quizData={selectedQuiz.questions}
        currentQuestion={currentQuestion}
        onButtonClick={currentQuestionHandleClick}
      />
      <div className="quiz-container">
        <p className="questions-count">
          Question {currentQuestion + 1} of {selectedQuiz.questions.length}
        </p>
        <div className="combined-child">
          <div className="question-content">
            <h2>{selectedQuiz.questions[currentQuestion].question}</h2>
          </div>
          <div className="options-list">
            {selectedQuiz.questions[currentQuestion].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleSelectedOption(index);
                  }}
                  className={`options-list-button ${
                    selectedOption === index ? "selected" : ""
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
        <NextButton
          selectedQuiz={selectedQuiz}
          currentQuestion={currentQuestion}
          selectedOption={selectedOption}
          onButtonClick={currentQuestionHandleClick}
        />
      </div>
    </>
  );
}
