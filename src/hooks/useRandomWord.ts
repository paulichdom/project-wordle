import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<string[], string> = (url) =>
  fetch(url).then((res) => res.json());

export const useRandomWord = (params: { wordLength: number }) => {
  const { data, mutate, error, isLoading } = useSWR(
    `https://random-word-api.herokuapp.com/word?length=${params.wordLength}`,
    fetcher
  );

  const wordList = data ?? [];
  const randomWord = wordList[0] ?? "";
  const answer = randomWord.trim().toUpperCase();

  return {
    answer,
    mutate,
    error,
    isLoading,
  };
};
