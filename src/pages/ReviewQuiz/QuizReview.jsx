import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import backIcon from "../../assets/back-arrow.svg";
import "./QuizReview.css";

export function QuizReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentReviewQuestion, setCurrentReviewQuestion] = useState(0);
  const {
    selectedQuiz,
    selectedCategory,
    answer,
    attemptCount,
    score,
    totalTime,
  } = location.state;
  const question = selectedQuiz.questions[currentReviewQuestion];
  const userSelectedIndex = answer[currentReviewQuestion];
  const userSelectedOption = question.options[userSelectedIndex];
  const correctAnswer = question.answer;

  return (
    <>
      <div className="review-header">
        <div className="top-section-review">
          <div
            className="go-back-review"
            onClick={() => {
              navigate("/quiz-result", {
                state: {
                  selectedQuiz,
                  answer,
                  attemptCount,
                  score,
                  totalTime,
                  fromReview: true,
                },
              });
            }}
          >
            <img src={backIcon} alt="" />
          </div>

          <div className="review-page-category">{selectedCategory}</div>
        </div>
      </div>
      <div className="review-quiz-container">
        <p className="review-questions-count">
          Question {currentReviewQuestion + 1} of{" "}
          {selectedQuiz.questions.length}
        </p>
        <div className="review-combined-child">
          <div className="review-question-content">
            <h2>{selectedQuiz.questions[currentReviewQuestion].question}</h2>
          </div>
          <div className="review-options-list">
            {selectedQuiz.questions[currentReviewQuestion].options.map(
              (option, index) => {
                const isUserChoice = index === userSelectedIndex;
                const isCorrectAnswer = option === correctAnswer;

                let buttonClass = "review-options-list-button";
                if (isCorrectAnswer) {
                  buttonClass += " correct";
                } else if (isUserChoice && !isCorrectAnswer)
                  buttonClass += " wrong";

                return (
                  <button key={index} className={buttonClass}>
                    {option}
                    {isCorrectAnswer && (
                      <div className="answer-label">Correct Answer</div>
                    )}
                    {isUserChoice && !isCorrectAnswer && (
                      <div className="answer-label">Your Answer</div>
                    )}
                  </button>
                );
              }
            )}
          </div>
          <p
            style={{
              margin: "none",
              padding: "none",
              color: "#E81919",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            {userSelectedIndex === null ? "*NOT ATTEMPTED" : ""}
          </p>
        </div>
        <div className="navigate">
          <button
            className="previous-button"
            onClick={() => {
              if (currentReviewQuestion > 0) {
                setCurrentReviewQuestion((prev) => prev - 1);
              }
            }}
          >
            PREV
          </button>
          <button
            className="next-button"
            onClick={() => {
              if (currentReviewQuestion < selectedQuiz.questions.length - 1) {
                setCurrentReviewQuestion((prev) => prev + 1);
              }
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}
