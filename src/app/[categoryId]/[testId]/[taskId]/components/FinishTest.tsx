import Link from "next/link";

export function FinishTest({ categoryId, testId }: { categoryId: string | null; testId: string | null }) {
  return (
    <Link className="rounded-[12px] bg-[#e5e7eb] p-2 w-full" href={`/${categoryId}/${testId}/summary`}>
      Закінчити тест
    </Link>
  );
}
