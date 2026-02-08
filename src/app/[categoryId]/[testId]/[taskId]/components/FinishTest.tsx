"use client"
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";


export function FinishTest({
  categoryId,
  testId,
}: {
  categoryId: string | null;
  testId: string | null;
}) {
  return (
    <Link
      className="text-lg block rounded-[12px] bg-[#1e2939] pl-4 pt-2 pb-2 w-full hover:bg-[#273346] transition-all text-gray-300"
      href={`/${categoryId}/${testId}/summary`}
    >
      Закінчити тест
    </Link>
  );
}
