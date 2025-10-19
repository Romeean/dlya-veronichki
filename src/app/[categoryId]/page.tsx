import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";

export default async function Page({ params }: { params: { categoryId: string } }) {
  const awaitedParams = await params;
  const categoryId = awaitedParams.categoryId;
  const quizzes = await getQuizzes();
  return (
    <div className="flex items-center min-h-screen flex-col max-w-5xl ">
      {quizzes.map(
        (element: any) =>
          categoryId === element.categoryId && (
            <Link href={`/${element.categoryId}/${element.testId}`} className="rounded-2xl border min-h-32 p-4" key={element.id}>
              <div>
                <h1>{element.title}</h1>
              </div>
            </Link>
          ),
      )}
    </div>
  );
}
