import { getQuizzes } from "@/action/getQuizzes";

import { ClientSummary } from "./components/ClientSummary";

export default async function Page({ params }: { params: { testId: string } }) {
  const awaitedParams = await params;
  const testId = awaitedParams.testId;
  const quiz = await getQuizzes({ testId });
  const totalTask = quiz[0].tasks.length;

  return <ClientSummary testId={testId} totalTask={totalTask} quiz={quiz} />;
}
