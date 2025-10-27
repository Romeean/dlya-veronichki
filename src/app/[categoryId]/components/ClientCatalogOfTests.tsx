import { StarField } from "./StarField";
import Link from "next/link";

type quizType = {
  id: number;
  title: string;
  difficulty: number;
  testId: string | null;
  categoryId: string | null;
};

type ClientCatalogOfTestsProps = {
  quizzes: quizType[];
};

export function ClientCatalogOfTests({ quizzes }: ClientCatalogOfTestsProps) {
  return (
    <div className="w-full min-h-screen flex justify-center ">
      <div className="max-w-5xl">
        <div className="flex min-h-screen w-full items-center justify-center">
          <h1 className="text-3xl text-center">
            В цій категорії ми детально будемо вивчати на практиці завдання з математики, у кожного тесту, є своя складність,
            подивись на зірочки, чим більше зірочок - тим важче.
          </h1>
        </div>
        <div id="tests">
          {quizzes.map((element, index) => (
            <Link key={index} href={`/${element.categoryId}/${element.testId}`} className="rounded-2xl  min-h-32 p-4">
              <div className="rounded-2xl p-6 text-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] cursor-pointer flex flex-col justify-center h-48 w-full">
                <h1 className="text-black">{element.title}</h1>
                <StarField difficulty={element.difficulty} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
