import Link from "next/link";

export function NextTask({ categoryId, testId, taskId }: { categoryId: string | null; testId: string | null; taskId: number }) {
  return (
    <Link
      className="rounded-[12px] text-lg text-gray-300 bg-[#1e2939] pl-4 pt-2 pb-2 w-full hover:bg-[#273346] transition-all "
      href={`/${categoryId}/${testId}/${taskId + 1}`}
    >
      Наступне завдання
    </Link>
  );
}
