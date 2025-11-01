import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";

export default async function Page({ params }: { params: { categoryId: string; testId: string } }) {
  const awaitedParams = await params;

  const categoryId = awaitedParams.categoryId;
  const testId = awaitedParams.testId;

  const quizzes = await getQuizzes({ testId });
  const currentQuiz = quizzes[0];

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-5xl ">
        <p className="text-2xl">{currentQuiz.title}</p>
        <p className="text-2xl">Кількість питань: {currentQuiz.tasks.length}</p>
        <Link
          className="border rounded-[4px] p-1.5 hover:bg-amber-300 transition-all hover:border-0"
          href={`/${categoryId}/${testId}/1`}
        >
          Почати тест{" "}
        </Link>
      </div>
    </div>
  );
}
