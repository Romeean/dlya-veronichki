export function useSetsessionStorage({ key, answerTask }: { key: number; answerTask?: object }) {
  const keyString = key.toString();

  sessionStorage.setItem(keyString, JSON.stringify(answerTask));
}
