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
import { i18n } from "../../i18n.ts";

type GameOverDialogProps = {
  isGameOver: boolean;
  correctAnswerIndex: number;
  correctAnswer: string;
  handleGameReset: () => void;
};

const GameOverDialog: React.FC<GameOverDialogProps> = ({
  isGameOver,
  correctAnswerIndex,
  correctAnswer,
  handleGameReset,
}) => {
  const [isOpen, setIsOpen] = useState(isGameOver);
  const [dialogStyles, setDialogStyles] = useState(() => styles.wrapper);

  useEffect(() => {
    setIsOpen(isGameOver);
  }, [isGameOver]);

  const handleCloseDialog = () => {
    setDialogStyles(`${styles.wrapper} ${styles.out}`);
    setTimeout(() => {
      setIsOpen(false);
      setDialogStyles(styles.wrapper);
      handleGameReset();
    }, 1300);
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
            <DialogTitle>{i18n.game.dialog_title_happy}</DialogTitle>
            <Smile color={happyColor} size={48} />
            <Description>
              {i18n.game.dialog_description_happy(correctAnswerIndex + 1)}
            </Description>
          </Fragment>
        )}
        {isGameLost && (
          <Fragment>
            <DialogTitle>{i18n.game.dialog_title_sad}</DialogTitle>
            <Frown color={sadColor} size={48} />
            <Description>
              {i18n.game.dialog_description_sad(correctAnswer.toUpperCase())}
            </Description>
          </Fragment>
        )}
        <button className={styles.resetButton} onClick={handleCloseDialog}>
          {i18n.game.dialog_button_label}
        </button>
      </DialogPanel>
    </Dialog>
  );
};

export default GameOverDialog;
