"use server";
import prisma from "@/lib/prisma";

export async function getQuizzes(testId?: string, categoryId?: string) {
  const quizzes = await prisma.quiz.findMany({
    where: { testId, categoryId },
    include: {
      tasks: true,
    },
  });

  return quizzes;
}
