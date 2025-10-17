"use client"
import { useState, useEffect } from "react";


export function ClientSummary({href, totalTask}: {href: string, totalTask: number}){
  const [tasks, setTasks] = useState<object>({})
  useEffect(() => {
    forEachKey()

  }, [])
  function forEachKey() {
    for(let index = 0; index < localStorage.length; index++){
      let item = localStorage.getItem(index.toString() + "-" + href)
      let currentAnswer: null | string = null  // решение проблемы с типизацией
      if(item){
        currentAnswer = JSON.parse(item) // парсим строку в объект
        setTasks((prev) => ({
          ...prev, // подтягиваем все пары ключ значений которые были раньше
          [index.toString()]: currentAnswer // дабовляем новое ключ значение в состояние tasks 
        }))
      }
    }
  }
  const correctAnswers = Object.values(tasks).filter((task: any) => task.userAnswer === task.rightAnswer).length  // получаем только значения из объекта, и делаем из них массив значений
  
  // Object.keys(obj) - превращает объект c ключами, в массив ключей
  // Object.values(obj) - превращает объект значений и ключей, в массив объектов внутри со значениями
  // Object.entries(obj) - прерващает объект ключ значение, в массив объектов с ключ значением
  // это позволяет нам удобно пользоваться данными которые лежат внутри объекта, с помощью методов(filter, reduce, map)
 


  return(
    <div>
      {
        Object.keys(tasks).length === 0 ? (
          <p>Немає відповідей на цей тест</p>
        ) : (
          <p>з {totalTask} задач вірних відповідей {correctAnswers}</p>
        )
      }
      
      {
        Object.entries(tasks).map(([key, value]) => (
          <div className="flex flex-row gap-4"  key={key}>
            Завдання номер {key}: {value?.userAnswer === value?.rightAnswer ? 
            (
              <p>Відповідь правильна</p>
            ) 
            : 
            (
              <p>Відповідь неправильна</p>
            )}
            </div>
          ))
      }
    </div>
  )

}