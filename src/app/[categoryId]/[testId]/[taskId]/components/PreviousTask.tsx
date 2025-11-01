import Link from "next/link";

export function PreviousTask({
  categoryId,
  testId,
  taskId,
}: {
  categoryId: string | null;
  testId: string | null;
  taskId: number;
}) {
  return (
    <Link
      className="text-lg rounded-[12px] bg-[#1e2939] pl-4 pt-2 pb-2 w-full hover:bg-[#273346] transition-all text-gray-300 "
      href={`/${categoryId}/${testId}/${taskId - 1}`}
    >
      Попереднє завдання
    </Link>
  );
}
