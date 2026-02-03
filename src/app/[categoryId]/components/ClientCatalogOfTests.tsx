import Link from "next/link";

import { StarField } from "./StarField";

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
    <div className="w-full min-h- flex justify-center ">
      <div className="max-w-5xl w-full">
        <div id="tests" className="flex flex-row ">
          {quizzes.map((element, index) => (
            <Link
              key={index}
              href={`/${element.categoryId}/${element.testId}`}
              className="rounded-2xl min-h-32 p-4"
            >
              <div className="rounded-2xl p-6 text-white bg-[#1e2939] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-center h-48 w-full">
                <h1 className="text-gray-200">{element.title}</h1>
                <StarField difficulty={element.difficulty} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
