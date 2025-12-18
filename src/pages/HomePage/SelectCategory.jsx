import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import movingball from "../../assets/moving-ball.jpg";
import "./SelectCategory.css";

export function SelectCategory({ quizData, setSelectedCategory }) {
  const navigate = useNavigate();
  const startQuizRef = useRef(null);
  const selectCategoryRef = useRef(null);
  const ballImgRef = useRef(null);

  const startingQuiz = () => {
    gsap.to(startQuizRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.3,
      display: "none",
      ease: "power2.inOut",
      onComplete: () => {
        gsap.fromTo(
          selectCategoryRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            display: "block",
            duration: 0.3,
            ease: "power3.out",
          }
        );
      },
    });
  };

  useEffect(() => {
    gsap.to(ballImgRef.current, {
      rotate: "360",
      repeat: -1,
      duration: 5,
      ease: "none",
    });
  }, []);

  return (
    <>
      <div ref={startQuizRef} className="first-interaction">
        <div className="greeting-user">
          <p>Hello, There!</p>
          <h1>Welcome to Quizzy!</h1>
        </div>
        <div className="start-quiz-button" onClick={startingQuiz}>
          START QUIZ
        </div>
        <div className="main-pic">
          <img ref={ballImgRef} src={movingball} alt="" />
        </div>
      </div>
      <div ref={selectCategoryRef} className="category-parent-container">
        <h2 className="select-category-heading">Select Quiz Category</h2>
        <div className="category-container">
          {quizData.map((data, i) => {
            return (
              <div
                key={i}
                className="category-type"
                onClick={() => {
                  setSelectedCategory(data.category);
                  navigate("/start-quiz");
                }}
              >
                <div className="svg-container">
                  <img src={data.iconLink} alt="" />
                </div>
                {data.category}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
