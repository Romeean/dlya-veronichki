"use client"
import Link from "next/link"
import { useState } from "react"

type CurrentTask = {
  question: string;
  answers: string[];
  id: number;
  correctAnswer: string;
  quizId: number;
}


export function ClientTask({index, totalTask, currentTask, href, rightAnswer }: {
  index: number,
  totalTask: number,
  currentTask: CurrentTask,
  href: string | null,
  rightAnswer: string

}){
  const [userAnswer, setUserAnswer] = useState<number>()
  function handleLocalSave(){
    
    const id = index.toString()+ "-" + href;

    localStorage.setItem(id, JSON.stringify({
      userAnswer,
      rightAnswer: parseInt(rightAnswer)
    }))
  }
  

  return(
    <div>
      <p>Завдання номер: {index} з {totalTask}</p>
      <h1>{currentTask.question}</h1>
      {currentTask.answers.map((element: string, index: number) => (
          <div key={index} className="flex flex-row gap-2">
            <input 
              onChange={() => setUserAnswer(index)}
              value={userAnswer} 
              type="radio" 
              id={`${element}-answer`} 
              name="answer" 
            />
            <label htmlFor={`${element}-answer`}>{element}</label>            
          </div>
      ))}
      {
        index >= 1 && index < totalTask && (
          <div>
            <Link onClick={() => handleLocalSave()} href={`/math-tests/${href}/${index + 1}`}>Наступне завдання</Link>
          </div>
        )
      }
      {
        index > 1 && (
            <Link href={`/math-tests/${href}/${index - 1}`}>Минуле завдання</Link>
        )
      }
      {
        index === totalTask && (
          <Link onClick={() => handleLocalSave()} href={`/math-tests/${href}/summary`}>Закінчити тест</Link>
        ) 
      }
      <hr></hr>
      {
        Array.from({length: totalTask}).map((_, index) => (
          <Link key={index} className="max-w-4 max-h-6 border" href={`/math-tests/${href}/${index + 1}`}>{index + 1}</Link>
        ))
      }
    </div>
  )
}