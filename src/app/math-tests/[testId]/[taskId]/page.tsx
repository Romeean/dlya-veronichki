import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";


export default async function Page({params}: {params: {taskId: string}}){
  const awaitedParams = await params; // ожидаем парамсы перед тем как их использовать
  const index = parseInt(awaitedParams.taskId, 10); // конвертирую строку в числовое значение, получаю индекс из парамсов
  const quizzes = await getQuizzes(); // из ServerAction получаю информацию про quiz из DB
  const currentTask = quizzes[0].tasks[index - 1] // получаю информацию про текущее задание
  const href = quizzes[0].href // уникальная ссылка на тест
  const totalTask = quizzes[0].tasks.length // общее количество заданий внутри одного теста

  return(
    <div>
      <p>Завдання номер: {index} з {totalTask}</p>
      <h1>{currentTask.question}</h1>
      {currentTask.answers.map((element, index) => (
          <div key={index} className="flex flex-row gap-2">
            <input type="checkbox" />
            <p>{element}</p>            
          </div>
      ))}

      {
        index > 1 ? (
          <div>
            <Link href={`/math-tests/${href}/${index + 1}`}>Наступне завдання</Link>
            <Link href={`/math-tests/${href}/${index - 1}`}>Минуле завдання</Link>
          </div>
        ) : (
            <Link href={`/math-tests/${href}/${index + 1}`}>Наступне завдання</Link>
        )
      }
    </div>
  )
}