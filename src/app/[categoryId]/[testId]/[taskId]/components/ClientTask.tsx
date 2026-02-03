"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FinishTest } from "./FinishTest";
import { NextTask } from "./NextTask";
import { PreviousTask } from "./PreviousTask";

type CurrentTask = {
  question: string;
  answers: string[];
  id: number;
  correctAnswer: string;
  quizId: number;
};

export function ClientTask({
  taskId,
  totalTask,
  currentTask,
  testId,
  categoryId,
  rightAnswer,
}: {
  taskId: number;
  totalTask: number;
  currentTask: CurrentTask;
  testId: string | null;
  categoryId: string | null;
  rightAnswer: string;
}) {
  const [userAnswer, setUserAnswer] = useState<number>();
  const id = taskId.toString() + "-" + testId;

  function handlesessionStorage(index: number) {
    setUserAnswer(index);
    sessionStorage.setItem(
      id,
      JSON.stringify({
        index,
        rightAnswer: parseInt(rightAnswer),
      }),
    );
  }

  useEffect(() => {
    const item = sessionStorage.getItem(id);
    if (item) {
      const parsed = JSON.parse(item);
      setUserAnswer(parsed.index);
    }
  }, [id]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-5xl w-full">
        <div className="flex flex-row">
          <div className="max-w-3xl w-full">
            <div className="block w-full text-gray-300 p-4 rounded-[12px] border-transparent bg-[#1e2939]">
              <p className="text-lg">
                Завдання номер: {taskId} з {totalTask}
              </p>
              <h1 className="text-xl">{currentTask.question}</h1>
            </div>

            <div className="w-full grid grid-cols-2 gap-2 pt-2">
              {currentTask.answers.map((element: string, index: number) => (
                <div
                  key={index}
                  className="w-full relative flex items-center justify-center gap-2 h-40 bg-[#1e2939] cursor-pointer select-none rounded-[12px] hover:bg-[#273346] transition-all"
                  onClick={() => {
                    handlesessionStorage(index);
                  }}
                >
                  <label
                    htmlFor={`${element}-answer`}
                    className="text-center text-gray-300 text-lg"
                  >
                    {element}
                  </label>
                  <div
                    className="absolute top-3 right-6 w-6 h-6 rounded-[16px] color-transparent bg-transparent border"
                    style={{
                      backgroundColor: userAnswer === index ? "#22C55E" : "transparent",
                      borderColor: userAnswer === index ? "#22C55E" : "#9CA3AF",
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 w-full pt-2 gap-2">
              {taskId >= 1 && taskId < totalTask && (
                <NextTask categoryId={categoryId} testId={testId} taskId={taskId} />
              )}
              {taskId > 1 && taskId !== totalTask && (
                <PreviousTask categoryId={categoryId} testId={testId} taskId={taskId} />
              )}
              {taskId === totalTask && <div className="invisible" />}
              {taskId === totalTask && (
                <PreviousTask categoryId={categoryId} testId={testId} taskId={taskId} />
              )}
            </div>
            <div className="w-full pt-2">
              {taskId === totalTask && <FinishTest categoryId={categoryId} testId={testId} />}
            </div>
          </div>

          <div className="pl-1 pt-1">
            {Array.from({ length: totalTask }).map((_, index) => (
              <Link
                key={index}
                className="px-3 py-1.5 bg-[#1e2939] rounded-[12px] text-gray-300 border-[#] text-lg"
                style={{
                  backgroundColor: taskId - 1 === index ? "#32415b" : "#1e2939",
                }}
                href={`/${categoryId}/${testId}/${index + 1}`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
