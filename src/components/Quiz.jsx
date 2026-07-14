import { useState, useEffect } from 'react';

export default function Quiz({ quizData, lessonId }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset quiz state when switching to a new lesson
  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  }, [lessonId, quizData]);

  if (!quizData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === null) return;

    const correct = selectedOption === quizData.answer;
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  return (
    <div className="quiz-card glass">
      <div className="quiz-header">
        <svg
          className="quiz-header-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <h4>Quick Quiz Checkpoint</h4>
      </div>

      <p className="quiz-question">{quizData.question}</p>

      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="quiz-options-list">
          {quizData.options.map((option, idx) => (
            <label
              key={idx}
              className={`quiz-option-label ${
                selectedOption === idx ? 'selected' : ''
              } ${
                isSubmitted && idx === quizData.answer ? 'correct-highlight' : ''
              } ${
                isSubmitted && selectedOption === idx && selectedOption !== quizData.answer
                  ? 'incorrect-highlight'
                  : ''
              }`}
            >
              <input
                type="radio"
                name="quiz-options"
                value={idx}
                checked={selectedOption === idx}
                disabled={isSubmitted}
                onChange={() => setSelectedOption(idx)}
                className="quiz-option-radio"
              />
              <span className="quiz-option-text">{option}</span>
            </label>
          ))}
        </div>

        <div className="quiz-footer-actions">
          {!isSubmitted ? (
            <button
              type="submit"
              disabled={selectedOption === null}
              className="quiz-submit-btn"
            >
              Submit Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedOption(null);
                setIsSubmitted(false);
                setIsCorrect(false);
              }}
              className="quiz-retry-btn"
            >
              Try Again
            </button>
          )}
        </div>
      </form>

      {isSubmitted && (
        <div className={`quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="feedback-heading">
            {isCorrect ? (
              <>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Correct! Well done.</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Incorrect. Let's learn!</span>
              </>
            )}
          </div>
          <p className="feedback-explanation">{quizData.explanation}</p>
        </div>
      )}
    </div>
  );
}
