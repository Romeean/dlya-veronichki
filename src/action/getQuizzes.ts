"use server";
import prisma from "@/lib/prisma";

export async function getQuizzes(id?: number) {
  const quizzes = await prisma.quiz.findMany({
    where: {},
    include: {
      tasks: true,
    },
  });

  return quizzes;
}
