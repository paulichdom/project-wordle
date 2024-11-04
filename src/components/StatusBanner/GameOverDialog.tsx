import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  DialogBackdrop,
} from "@headlessui/react";

import styles from "./GameOverDialog.module.css";

type GameOverDialogProps = {
  isGameOver: boolean;
  correctAnswerIndex: number;
  correctAnswer: string;
};

const GameOverDialog: React.FC<GameOverDialogProps> = ({
  isGameOver,
  correctAnswerIndex,
  correctAnswer,
}) => {
  const [isOpen, setIsOpen] = useState(isGameOver);

  useEffect(() => {
    setIsOpen(isGameOver);
  }, [isGameOver]);

  return (
    <Dialog
      className={styles.wrapper}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <DialogBackdrop className={styles.backdrop} />
      <DialogPanel className={styles.dialog}>
        {correctAnswerIndex > -1 && (
          <div className="happy banner">
            <DialogTitle>Congratulations!</DialogTitle>
            <Description>
              Got it in
              <strong>{correctAnswerIndex + 1} guesses</strong>.
            </Description>
          </div>
        )}
        {isGameOver && correctAnswerIndex < 0 && (
          <div className="sad banner">
            <DialogTitle>Sorry,</DialogTitle>
            <Description>
              the correct answer is{" "}
              <strong>{correctAnswer.toUpperCase()}</strong>.
            </Description>
          </div>
        )}
        <button onClick={() => setIsOpen(false)}>Reset game</button>
      </DialogPanel>
    </Dialog>
  );
};

export default GameOverDialog;
