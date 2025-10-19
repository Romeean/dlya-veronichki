import { ClientSummary } from "./components/ClientSummary";
import { getQuizzes } from "@/action/getQuizzes";

export default async function Page({ params }: { params: { testId: string } }) {
  const awaitedParams = await params;
  const testId = awaitedParams.testId;
  const quizzes = await getQuizzes(awaitedParams.testId);
  const totalTask = quizzes[0].tasks.length;

  return <ClientSummary testId={testId} totalTask={totalTask} />;
}
