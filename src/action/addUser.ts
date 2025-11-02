import prisma from "@/lib/prisma";

export function addUser({login, password}: {login: string, password: string }){
  
  
  const checkForUser = prisma.user.findUnique({
    where: { login },
  })

  if(){

  }
  const newUser = prisma.user.create({
    data: {
      login: login,
      password: password
    }
  });
}