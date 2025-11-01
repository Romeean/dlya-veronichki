"use client";
import { useState, useEffect } from "react";
import { TestResults } from "./TestResults";
import Image from "next/image";

export function ClientSummary({ testId, totalTask }: { testId: string; totalTask: number }) {
  const [tasks, setTasks] = useState<Record<string, any>>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const results: Record<string, any> = {};
    for (let index = 1; index <= totalTask; index++) {
      let pathToTest = `${index.toString() + "-" + testId}`;
      const test = sessionStorage.getItem(pathToTest);
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
    <div className="min-h-screen w-full flex justify-center items-center ">
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
            <div className="transition flex flex-row gap-4 rounded-[12px] p-4 hover:translate-x-1.5 bg-[#1e2939]" key={key}>
              <p className="text-xl text-[#bec3ca]">Завдання номер {key}: </p>
              <TestResults key={key} value={value} />
              <div className="flex-grow" />

              <div className="flex self-end">
                {isOpen ? (
                  <Image src="/arrow-ready-to-open.svg" width={30} height={30} alt="open" />
                ) : (
                  <Image src="/arrow-ready-to-close.svg" width={30} height={30} alt="close" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
