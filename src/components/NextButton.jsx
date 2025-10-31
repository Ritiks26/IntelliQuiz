import "./NextButton.css";

export function NextButton({
  selectedQuiz,
  currentQuestion,
  selectedOption,
  onButtonClick,
  recordTimeSpent,
  totalTime,
  timeLeft,
}) {
  return (
    <div className="next-question">
      <button
        onClick={() => {
          const timeSpent = totalTime - timeLeft;
          onButtonClick(
            selectedQuiz.questions[currentQuestion].options,
            selectedQuiz.questions[currentQuestion].answer,
            recordTimeSpent(currentQuestion, timeSpent)
          );
        }}
      >
        {currentQuestion === selectedQuiz.questions.length - 1
          ? selectedOption !== null
            ? "Submit"
            : "Next"
          : "Next"}
      </button>
    </div>
  );
}
