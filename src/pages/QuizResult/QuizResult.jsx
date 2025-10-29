import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./QuizResult.css";

export function QuizResult({ selectedCategory }) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isPercentageCalculate, setIsPercentageCalculate] = useState(false);
  const circleRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    score,
    answer,
    attemptCount,
    selectedQuiz,
    fromReview = false,
  } = location.state;

  const totalQuestions = selectedQuiz.questions.length;
  const percentageObtained = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (fromReview) {
      setDisplayPercentage(percentageObtained);
      setIsPercentageCalculate(true);
      return;
    }

    let current = 0;
    const increment = percentageObtained / 100;

    const interval = setInterval(() => {
      current += increment;

      if (current >= percentageObtained) {
        current = percentageObtained;
        clearInterval(interval);
        setIsPercentageCalculate(true);
      }
      setDisplayPercentage(Math.floor(current));
    }, 25);
    return () => clearInterval(interval);
  }, [percentageObtained]);

  useEffect(() => {
    const element = circleRef.current;
    let deg = { value: -90 };

    const glowAnimation = gsap.to(deg, {
      value: 270,
      repeat: -1,
      ease: "none",
      duration: "0.35",
      onUpdate: () => {
        element.style.setProperty("--glow-deg", `${deg.value}deg`);
      },
    });

    if (isPercentageCalculate) {
      gsap.to(glowAnimation, {
        timeScale: 0.2,
        duration: "0.5",
        ease: "power2.out",
      });
    }

    return () => glowAnimation.kill();
  }, [isPercentageCalculate]);

  return (
    <>
      <div className="scorecard-container">
        <div className="percentage-obtained-container">
          <div ref={circleRef} className="percentage">
            <h1>{displayPercentage}%</h1>
          </div>
        </div>
        <div className="score-content">
          <div className="quiz-result-category">
            <div className="quiz-category">CATEGORY</div>
            <div className="">{selectedCategory}</div>
          </div>
          <div className="quiz-attempt-container">
            <div>QUIZ ATTEMPT</div>
            <div className="quiz-attempt-count">
              {attemptCount}/{totalQuestions}
            </div>
          </div>
          <div className="quiz-attempt-container">
            <div>CORRECT ANSWERS</div>
            <div className="quiz-attempt-count">
              {score}/{totalQuestions}
            </div>
          </div>
          <div className="quiz-attempt-container">
            <div>TIME TAKEN</div>
            <div className="quiz-attempt-count">02M:29S</div>
          </div>
        </div>
        <button
          className="see-answers"
          onClick={() => {
            navigate("/quiz-review", {
              state: {
                selectedQuiz,
                answer,
                score,
                attemptCount,
              },
            });
          }}
        >
          Check Answers
        </button>
      </div>
    </>
  );
}
