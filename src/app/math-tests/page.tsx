import { getQuizzes } from "@/action/getQuizzes"



export default async function Page(){
  const quizzes = await getQuizzes()
  console.log(quizzes)
  return(
    <div>
      <h1>Страница с тестами</h1>

      {/* {quizzes.map((element, index) => {
        <h1 key={index}>
          {element.title}
        </h1>
      })} */}
    </div>
  )
}