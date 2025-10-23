"use client";
import { useState, useEffect } from "react";

export function ClientSummary({ testId, totalTask }: { testId: string; totalTask: number }) {
  const [tasks, setTasks] = useState<Record<string, any>>({});
  useEffect(() => {
    const results: Record<string, any> = {}; 
    for(let index = 1; index <= localStorage.length; index++){
      
      let pathToTest = `${index.toString() + "-" + testId}`
      const test = localStorage.getItem(pathToTest);
      if(test){
        const parsed = JSON.parse(test);
        results[index] = parsed
      }
    }
    setTasks(results);
  }, []);
  console.log(tasks)

  
  const correctAnswers = Object.values(tasks).filter((task: any) => task.index === task.rightAnswer).length;
  
  return (
    <div>
      {Object.keys(tasks).length === 0 ? (
        <p>Немає відповідей на цей тест</p>
      ) : (
        <p>
          з {Object.keys(tasks).length} задач вірних відповідей {correctAnswers}
        </p>
      )}

      {Object.entries(tasks).map(([key, value]) => (
        <div className="flex flex-row gap-4" key={key}>
          Завдання номер {key}:{" "}
          {value?.index === value?.rightAnswer ? <p>Відповідь правильна</p> : <p>Відповідь неправильна</p>}
        </div>
      ))}
    </div>
  );
}
