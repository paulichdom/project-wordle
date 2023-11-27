import styles from './Input.module.css';

function Input() {
  return (
    <form className={styles.guessInputForm}>
      <label htmlFor="guess-input" className={styles.guessLabel}>
        Enter guess:
        <input
          className={styles.inputField}
          id="guess-input"
          type="text"
          placeholder="email@domain.com"
        />
      </label>
    </form>
  );
}

export default Input;
