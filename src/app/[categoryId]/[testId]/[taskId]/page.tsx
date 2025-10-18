import { getQuizzes } from "@/action/getQuizzes";
import { ClientTask } from "./components/ClientTask";

export default async function Page({ params }: { params: { categoryId: string, testId: string, taskId: string } }) {
  const awaitedParams = await params;
  
  const index = parseInt(awaitedParams.taskId, 10);
  const quizzes = await getQuizzes();

  const currentTask = quizzes[0].tasks[index - 1];
  const href = quizzes[0].href;
  const hrefCategory = quizzes[0].hrefCategory;
  const totalTask = quizzes[0].tasks.length;
  const rightAnswer = quizzes[0].tasks[index - 1].correctAnswer;
  const quizzes1 = await getQuizzes(0);
  console.log(quizzes1)
  if (!currentTask) {
    return <div>Такого тесту не існує</div>;
  }

  return (
    <ClientTask
      index={index}
      href={href}
      hrefCategory={hrefCategory}
      totalTask={totalTask}
      currentTask={currentTask}
      rightAnswer={rightAnswer}
    />
  );
}
