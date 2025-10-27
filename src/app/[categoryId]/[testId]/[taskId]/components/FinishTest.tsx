import Link from "next/link";

export function FinishTest({ categoryId, testId }: { categoryId: string | null; testId: string | null }) {
  return (
    <Link
      className="block rounded-[12px] bg-[#e5e7eb] p-2 w-full hover:bg-gray-300 transition-all"
      href={`/${categoryId}/${testId}/summary`}
    >
      Закінчити тест
    </Link>
  );
}
