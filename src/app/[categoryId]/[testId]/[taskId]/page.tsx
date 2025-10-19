import { getQuizzes } from "@/action/getQuizzes";
import { ClientTask } from "./components/ClientTask";

export default async function Page({ params }: { params: { categoryId: string; testId: string; taskId: string } }) {
  const awaitedParams = await params;

  const quizzes = await getQuizzes(awaitedParams.testId);
  const index = parseInt(awaitedParams.taskId, 10);
  const currentTask = quizzes[0].tasks[index - 1];
  const totalTask = quizzes[0].tasks.length;
  const rightAnswer = quizzes[0].tasks[index - 1].correctAnswer;

  if (!currentTask) {
    return <div>Такого тесту не існує</div>;
  }

  return (
    <ClientTask
      index={index}
      testId={awaitedParams.testId}
      categoryId={awaitedParams.categoryId}
      totalTask={totalTask}
      currentTask={currentTask}
      rightAnswer={rightAnswer}
    />
  );
}
