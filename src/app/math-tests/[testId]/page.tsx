import Link from "next/link"
import { getQuizzes } from "@/action/getQuizzes"

export default async function Page({ params }: { params: { testId: string[] } }) {
  const awaitedParams = await params;
  const quizzes = await getQuizzes()
  const href = quizzes[0].href
  const hrefCategory = quizzes[0].hrefCategory  
  return (
    <div>
      <p>Текущая страница: {awaitedParams.testId}</p>
      <Link href={`/${hrefCategory}/${href}/1`}>Почати тест</Link>
    </div>
  )
}
