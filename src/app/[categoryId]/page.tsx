import { getQuizzes } from "@/action/getQuizzes";
import { ClientCatalogOfTests } from "./components/ClientCatalogOfTests";

export default async function Page({ params }: { params: { categoryId: string } }) {
  const awaitedParams = await params;
  const categoryId = awaitedParams.categoryId;
  const quizzes = await getQuizzes({ categoryId });

  return <ClientCatalogOfTests quizzes={quizzes} />;
}
