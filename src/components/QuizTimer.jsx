import BackIcon from "../assets/back-arrow.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./QuizTimer.css";

export function QuizTimer({
  quizData,
  currentQuestion,
  onButtonClick,
  selectedCategory,
  totalTime = 30,
}) {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    setTimeLeft(totalTime);
    document.documentElement.style.setProperty("--progress-width", "100%");
    document.documentElement.style.setProperty("--smooth", "");
    let currentTime = totalTime;
    const interval = setInterval(() => {
      if (currentTime === 0) {
        onButtonClick(
          quizData[currentQuestion].options,
          quizData[currentQuestion].answer
        );
        return;
      } else {
        currentTime -= 1;
      }
      setTimeLeft(currentTime);

      const progress = (currentTime / totalTime) * 100;
      document.documentElement.style.setProperty(
        "--progress-width",
        `${progress}%`
      );
      document.documentElement.style.setProperty("--smooth", "width 1s linear");
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  return (
    <>
      <div className="quiz-timer-container">
        <div className="top-section">
          <Link to={"/"}>
            <div className="go-back">
              <img src={BackIcon} alt="" />
            </div>
          </Link>
          <div className="category">{selectedCategory}</div>
        </div>
        <div className="time-left">{timeLeft}</div>
      </div>
    </>
  );
}
