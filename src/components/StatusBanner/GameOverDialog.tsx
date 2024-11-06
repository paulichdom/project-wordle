import React, { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  DialogBackdrop,
} from "@headlessui/react";
import { Smile, Frown } from "react-feather";

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
  const [dialogStyles, setDialogStyles] = useState(() => styles.wrapper);

  useEffect(() => {
    setIsOpen(isGameOver);
  }, [isGameOver]);

  const handleCloseDialog = () => {
    setDialogStyles(`${styles.wrapper} ${styles.out}`);
    setTimeout(() => setIsOpen(false), 1200);
  };

  const isGameWon = correctAnswerIndex > -1;
  const isGameLost = isGameOver && correctAnswerIndex < 0;
  const happyColor = "#00d605";
  const sadColor = "#ff1a2a";

  return (
    <Dialog
      transition
      className={dialogStyles}
      open={isOpen}
      onClose={() => {}}
    >
      <DialogBackdrop className={styles.backdrop} onClick={() => {}} />
      <DialogPanel className={styles.dialog}>
        {isGameWon && (
          <Fragment>
            <DialogTitle>Congratulations!</DialogTitle>
            <Smile color={happyColor} size={48} />
            <Description>
              Got it in <strong>{correctAnswerIndex + 1} guesses</strong>.
            </Description>
          </Fragment>
        )}
        {isGameLost && (
          <Fragment>
            <DialogTitle>Sorry</DialogTitle>
            <Frown color={sadColor} size={48} />
            <Description>
              the correct answer is{" "}
              <strong>{correctAnswer.toUpperCase()}</strong>.
            </Description>
          </Fragment>
        )}
        <button className={styles.resetButton} onClick={handleCloseDialog}>
          Reset game
        </button>
      </DialogPanel>
    </Dialog>
  );
};

export default GameOverDialog;
