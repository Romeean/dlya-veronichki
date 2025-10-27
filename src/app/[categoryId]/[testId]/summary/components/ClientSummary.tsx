"use client";
import { useState, useEffect } from "react";
import { TestResults } from "./TestResults";

export function ClientSummary({ testId, totalTask }: { testId: string; totalTask: number }) {
  const [tasks, setTasks] = useState<Record<string, any>>({});
  useEffect(() => {
    const results: Record<string, any> = {};
    for (let index = 1; index <= totalTask; index++) {
      let pathToTest = `${index.toString() + "-" + testId}`;
      const test = localStorage.getItem(pathToTest);
      if (test) {
        const parsed = JSON.parse(test);
        results[index] = parsed;
      } else {
        results[index] = "none";
      }
    }
    setTasks(results);
  }, []);
  console.log(Object.entries(tasks));

  const correctAnswers = Object.values(tasks).filter((task: any) => task.index === task.rightAnswer).length;

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-5xl">
        {Object.keys(tasks).length === 0 ? (
          <p>Немає відповідей на цей тест</p>
        ) : (
          <p className="text-3xl">
            з {totalTask} задач вірних відповідей {correctAnswers}
          </p>
        )}
        <div className="flex flex-col gap-4">
          {Object.entries(tasks).map(([key, value]) => (
            <div
              className="transition flex flex-row gap-4 rounded-[12px] border-[#e5e7eb] p-4 hover:translate-x-1.5 bg-[#e5e7eb]"
              key={key}
            >
              <p className="text-2xl">Завдання номер {key}: </p>
              <TestResults key={key} value={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
