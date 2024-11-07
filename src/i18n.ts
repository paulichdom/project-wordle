export const i18n = {
  game: {
    title: "Word Game",
    input_label: "Enter guess",
    input_title: "Enter 5 letter word",
    dialog_title_happy: "Congratulations!",
    dialog_title_sad: "Sorry",
    dialog_description_happy: (index: number) => {
      if (index > 1) {
        return `Got it in ${index} guesses`;
      } else {
        return `Got it in ${index} guess`;
      }
    },
    dialog_description_sad: (answer: string): string =>
      `the correct answer is ${answer}`,
    dialog_button_label: "Try again",
  },
};
