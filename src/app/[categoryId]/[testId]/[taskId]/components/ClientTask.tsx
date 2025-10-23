"use client";
import { useEffect, useState } from "react";
import { NextTask } from "./NextTask";
import { PreviousTask } from "./PreviousTask";
import { FinishTest } from "./FinishTest";
import Link from "next/link";
import test from "node:test";


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

  function handleLocalStorage(index: number) {
    setUserAnswer(index);
    localStorage.setItem(
      id,
      JSON.stringify({
        index,
        rightAnswer: parseInt(rightAnswer),
      }),
    );
  }
  

  useEffect(() => {
    const item = localStorage.getItem(id);
    if (item) {
      const parsed = JSON.parse(item);
      setUserAnswer(parsed.index);
    }
    const currentSession = Date.now()
  }, [id]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="max-w-5xl w-full">
        <div className="flex flex-row">
          <div className="max-w-3xl w-full">
            <p>
              Завдання номер: {taskId} з {totalTask}
            </p>
            <h1>{currentTask.question}</h1>
            <div className="w-full grid grid-cols-2 gap-2">
              {currentTask.answers.map((element: string, index: number) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-center gap-2 h-40 bg-gray-200 cursor-pointer select-none rounded-[12px] hover:bg-gray-300 transition-all"
                  onClick={() => {
                    handleLocalStorage(index);
                  }}
                  style={{
                    backgroundColor: userAnswer === index ? "#22c55e" : "#e5e7eb",
                  }}
                >
                  <label htmlFor={`${element}-answer`} className="text-center">
                    {element}
                  </label>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 w-full pt-2 gap-2">
              {taskId >= 1 && taskId < totalTask && (
                <NextTask categoryId={categoryId} testId={testId} taskId={taskId} />
              )}
              {taskId > 1 && (
                <PreviousTask categoryId={categoryId} testId={testId} taskId={taskId} />
              )}
              {taskId === totalTask && (
                <FinishTest categoryId={categoryId} testId={testId} />
              )}
            </div>

              
          </div>

          <div>
            {Array.from({ length: totalTask }).map((_, index) => (
              <Link
                key={index}
                className="px-2 py-0.5 border border-gray-400"
                style={{
                  backgroundColor: taskId - 1 === index ? "green" : "white",
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
