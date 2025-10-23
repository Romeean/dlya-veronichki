import Link from "next/link"

export function PreviousTask({categoryId, testId, taskId}: {
  categoryId: string | null,
  testId: string | null
  taskId: number 
}){
  return(
    <Link className="rounded-[12px] bg-[#e5e7eb] p-2 w-full" href={`/${categoryId}/${testId}/${taskId - 1}`}>
      Наступне завдання
    </Link>
  )
}