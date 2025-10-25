import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";

export default async function Page({ params }: { params: { categoryId: string; testId: string } }) {
  const awaitedParams = await params;

  const categoryId = awaitedParams.categoryId;
  const testId = awaitedParams.testId;

  const quizzes = await getQuizzes(testId);
  const currentQuiz = quizzes[0]
  console.log(quizzes)


  return (
    <div>
      <p>{currentQuiz.title}</p>
      <p>Кількість питань: {currentQuiz.tasks.length}</p>
      <Link href={`/${categoryId}/${testId}/1`}>Почати тест </Link>

    </div>
  );
}
