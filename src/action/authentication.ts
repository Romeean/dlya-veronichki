"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createHTTPOnlyCookie } from "@/app/utils/cookies";

export async function authentication(formData: FormData) {
  const login = formData.get("login") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: { login },
  });

  if (!user) {
    throw new Error("Такого логіну не існує");
  }

  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    throw new Error("Невірний пароль");
  }
  if(isValid){
    await createHTTPOnlyCookie(login);
    revalidatePath("/")
    redirect("/")
  }
  
  return { success: true, };
}
