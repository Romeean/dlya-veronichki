import { getQuizzes } from "@/action/getQuizzes"
import Link from "next/link"


export default async function Page(){
  const quizzes = await getQuizzes()
  return(
    <div>
      <h1>Страница с тестами</h1>
      {quizzes.map((element) => {
        return(
          <div key={element.id}>
            <Link href={`/math-tests/${element.href}`}>
              <h1>{element.title}</h1>
            </Link>
          </div>
        )
      })}
    </div>
  )
}