"use server";

import prisma from "@/lib/prisma";

export async function getUserInformation(login: string) {
  const user = await prisma.user.findUnique({
    where: { login },
  });

  return user;
}
