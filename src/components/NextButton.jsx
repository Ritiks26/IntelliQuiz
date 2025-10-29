import "./NextButton.css";

export function NextButton({
  selectedQuiz,
  currentQuestion,
  selectedOption,
  onButtonClick,
}) {
  return (
    <div className="next-question">
      <button
        onClick={() => {
          onButtonClick(
            selectedQuiz.questions[currentQuestion].options,
            selectedQuiz.questions[currentQuestion].answer
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
