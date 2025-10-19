import Link from "next/link";

export default async function Page({ params }: { params: { categoryId: string; testId: string } }) {
  const awaitedParams = await params;

  const categoryId = awaitedParams.categoryId;
  const testId = awaitedParams.testId;

  return (
    <div>
      <Link href={`/${categoryId}/${testId}/1`}>Почати тест</Link>
    </div>
  );
}
