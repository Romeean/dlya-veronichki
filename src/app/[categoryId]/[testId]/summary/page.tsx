import { ClientSummary } from "./components/ClientSummary";
import { getQuizzes } from "@/action/getQuizzes";

export default async function Page({ params }: { params: { testId: string } }) {
  const awaitedParams = await params;
  const href = awaitedParams.testId;
  const quizzes = await getQuizzes();
  const totalTask = quizzes[0].tasks.length;

  return <ClientSummary href={href} totalTask={totalTask} />;
}
