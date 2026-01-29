"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

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

  return { success: true };
}
