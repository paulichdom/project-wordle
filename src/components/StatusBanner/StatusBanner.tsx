import * as React from "react";

type StatusBannerProps = {
  isGameOver: boolean;
  correctAnswerIndex: number;
  correctAnswer: string;
};

const StatusBanner: React.FC<StatusBannerProps> = ({
  isGameOver,
  correctAnswerIndex,
  correctAnswer,
}) => {
  const isGameWon = correctAnswerIndex > -1;
  const isGameLost = isGameOver && correctAnswerIndex === -1;
  return (
    <div>
      {isGameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{correctAnswerIndex + 1} guesses</strong>.
          </p>
        </div>
      )}
      {isGameLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is{" "}
            <strong>{correctAnswer.toUpperCase()}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default StatusBanner;
