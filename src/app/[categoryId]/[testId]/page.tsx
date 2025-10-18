import Link from "next/link";
import { getQuizzes } from "@/action/getQuizzes";

export default async function Page({ params }: { params: { categoryId: string[]; testId: string[] } }) {
  const awaitedParams = await params;

  const categoryURL = awaitedParams.categoryId;
  const taskURL = awaitedParams.testId;

  return (
    <div>
      <Link href={`/${categoryURL}/${taskURL}/1`}>Почати тест</Link>
    </div>
  );
}
