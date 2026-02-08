"use server"
import prisma from "@/lib/prisma"

export async function testResult({quizId} : {quizId: number}){

  const existedTestREsult = await prisma.userResultTest.findUnique({
    where: {quizId}
  
  
  })
  


}