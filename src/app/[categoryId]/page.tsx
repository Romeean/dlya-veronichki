import { getQuizzes } from "@/action/getQuizzes";
import Link from "next/link";

export default async function Page({ params }: { params: { categoryId: string } }) {
  const awaitedParams = await params;
  const categoryId = awaitedParams.categoryId;
  const quizzes = await getQuizzes();
  return (
    <div className="min-h-screen max-w-5xl mx-auto ">
      {/* <Header /> */}
      <p>
        В цій категорії ми детально будемо вивчати на практиці завдання з математики, у кожного теста, є своя складність ,
        подивись на зірочки, чим більше зірочок - тим важче.
      </p>
      {quizzes.map(
        (element: any) =>
          categoryId === element.categoryId && (
            <Link href={`/${element.categoryId}/${element.testId}`} className="rounded-2xl  min-h-32 p-4" key={element.id}>
              <div className="rounded-2xl p-6 text-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] cursor-pointer flex flex-col justify-center h-48 w-full">
                <h1 className="text-black">{element.title}</h1>
              </div>
            </Link>
          ),
      )}
    </div>
  );
}
