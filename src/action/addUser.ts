"use server"
import prisma from "@/lib/prisma";

export async function addUser(formData: FormData){
  const login = formData.get("login") as string
  const password = formData.get("password") as string
  
  const checkForUser = await prisma.user.findUnique({
    where: { login },
  })

  if(checkForUser) {
    throw new Error("Такий логін існіє")
  }
  
  const newUser = await prisma.user.create({
    data: { login, password }
  });

}