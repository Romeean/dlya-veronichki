"use server";

import prisma from "@/lib/prisma";

export async function getUserInformation(login: string) {
  const user = await prisma.user.findUnique({
    where: { login },
  });

  if(!user){
    throw new Error("User not found");
  }
  return user;
}
