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
  const [dialogStyles, setDialogStyles] = useState(() => styles.animCont);

  useEffect(() => {
    setIsOpen(isGameOver);
  }, [isGameOver]);

  useEffect(() => {
    setDialogStyles(`${styles.animCont} out`);
  }, []);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      transition
      className={dialogStyles}
      open={isOpen}
      onClose={() => {}}
    >
      <DialogBackdrop className={styles.backdrop} onClick={() => {}} />
      <DialogPanel className={styles.dialog}>
        {correctAnswerIndex > -1 && (
          <div className={styles.happyBanner}>
            <DialogTitle>Congratulations!</DialogTitle>
            <Description>
              Got it in <strong>{correctAnswerIndex + 1} guesses</strong>.
            </Description>
          </div>
        )}
        {isGameOver && correctAnswerIndex < 0 && (
          <div className={styles.sadBanner}>
            <DialogTitle>Sorry,</DialogTitle>
            <Description>
              the correct answer is{" "}
              <strong>{correctAnswer.toUpperCase()}</strong>.
            </Description>
          </div>
        )}
        <button onClick={handleCloseDialog}>Reset game</button>
      </DialogPanel>
    </Dialog>
  );
};

export default GameOverDialog;
