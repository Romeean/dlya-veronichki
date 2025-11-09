"use server"
import prisma from "@/lib/prisma"

export async function login(formData: FormData){
  const login = formData.get("login") as string
  const password = formData.get("password") as string

  
  const user = await prisma.user.findUnique({
    where: {login, password}
  })

  // if(user )

}