import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";

export default async function Page() {
  const quizzes = await getQuizzes();
  const hrefCategory = quizzes[0].hrefCategory;

  return (
    <div className="flex items-center min-h-screen flex-col max-w-5xl ">
      {quizzes.map((element: any) => (
        <Link
          href={`/${element.hrefCategory}/${element.href}`}
          className="rounded-2xl border min-h-32 p-4"
          key={element.id}
        >
          <div>
            <h1>{element.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
