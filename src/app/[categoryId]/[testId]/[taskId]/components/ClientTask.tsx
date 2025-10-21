"use client";
import Link from "next/link";
import { useState } from "react";

type CurrentTask = {
  question: string;
  answers: string[];
  id: number;
  correctAnswer: string;
  quizId: number;
};

export function ClientTask({
  index,
  totalTask,
  currentTask,
  testId,
  categoryId,
  rightAnswer,
}: {
  index: number;
  totalTask: number;
  currentTask: CurrentTask;
  testId: string | null;
  categoryId: string | null;
  rightAnswer: string;
}) {
  const [userAnswer, setUserAnswer] = useState<number>();
  const [toggle, setToggle] = useState<boolean>(false);
  function handleLocalSave() {
    const id = index.toString() + "-" + testId;

    localStorage.setItem(
      id,
      JSON.stringify({
        userAnswer,
        rightAnswer: parseInt(rightAnswer),
      }),
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="max-w-5xl w-full">
        <div className="flex flex-row">
          <div className="max-w-3xl w-full">
            <p>
              Завдання номер: {index} з {totalTask}
            </p>
            <h1>{currentTask.question}</h1>
            <div className="w-full grid grid-cols-2 gap-2">
              {currentTask.answers.map((element: string, index: number) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-center gap-2 w-40 h-40 bg-gray-200 cursor-pointer select-none rounded-[12px] hover:bg-gray-300 transition-all"
                  onClick={() => {
                    setUserAnswer(index)
                    setToggle((prev) => !prev);
                  }}
                >
                  <label htmlFor={`${element}-answer`} className="text-center">
                    {element}
                  </label>
                </div>
              ))}
            </div>

            {index >= 1 && index < totalTask && (
              <div>
                <Link
                  className="rounded-2xl border p-2"
                  onClick={() => handleLocalSave()}
                  href={`/${categoryId}/${testId}/${index + 1}`}
                >
                  Наступне завдання
                </Link>
              </div>
            )}
            {index > 1 && <Link href={`/${categoryId}/${testId}/${index - 1}`}>Минуле завдання</Link>}
            {index === totalTask && (
              <Link
                className="max-w-24 max-h-8 w-full h-full"
                onClick={() => handleLocalSave()}
                href={`/${categoryId}/${testId}/summary`}
              >
                Закінчити тест
              </Link>
            )}
          </div>
          <div>
            {Array.from({ length: totalTask }).map((_, index) => (
              <Link key={index} className="px-2 py-0.5 border border-gray-400" href={`/${categoryId}/${testId}/${index + 1}`}>
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
