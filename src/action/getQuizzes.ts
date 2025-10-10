"use server"
import prisma from "@/lib/prisma"


export async function getQuizzes(){
  const quizzes = await prisma.quiz.findMany();
  
  return quizzes
}