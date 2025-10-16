
export function useSetLocalStorage(
  {key, answerTask} : 
  {
    key: number
    answerTask?: object
  }

){
  const keyString = key.toString()

  localStorage.setItem(keyString, JSON.stringify(answerTask))
}