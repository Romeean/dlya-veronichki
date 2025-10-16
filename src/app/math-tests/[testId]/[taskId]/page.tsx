import { getQuizzes } from "@/action/getQuizzes";
import { ClientTask } from "./components/ClientTask";


export default async function Page({params}: {params: {taskId: string}}){
  const index = parseInt(params.taskId, 10);
  const quizzes = await getQuizzes();
  const currentTask = quizzes[0].tasks[index - 1];
  const href = quizzes[0].href;
  const totalTask = quizzes[0].tasks.length;
  const rightAnswer = quizzes[0].tasks[index - 1].correctAnswer;

  if (!currentTask) {
    return <div>Такого тесту не існує</div>;
  }

  return (
    <ClientTask
      index={index}
      href={href}
      totalTask={totalTask}
      currentTask={currentTask}
      rightAnswer={rightAnswer}
    />
  )
}