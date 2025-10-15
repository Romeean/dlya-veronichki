import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";


export default async function Page({params}: {params: {taskId: string}}){
  const quizzes = await getQuizzes();
  const awaitedParams = await params;
  const index = parseInt(awaitedParams.taskId, 10);
  const href = quizzes[0].href
  // const totalTask = quizzes[0].tasks[0]. количество всех тасков
 
  console.log(typeof(index), index);

  return(
    <div>
      <h1>{awaitedParams.taskId}</h1>
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