  "use server";
  import prisma from "@/lib/prisma";
  import bcrypt from "bcrypt";
  import { redirect } from "next/navigation";
  import { createHTTPOnlyCookie } from "@/app/utils/cookies"; 
import { revalidatePath } from "next/cache";

  
  export async function registration(formData: FormData) {
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;

    const user = await prisma.user.findUnique({
      where: { login },
    });

    if (user) {
      throw new Error("Користувач з таким логіном вже існує");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { login, password: hashedPassword },
    });

    if (newUser) {
      await createHTTPOnlyCookie(login);
      revalidatePath("/")
      redirect("/")
    }

    return { success: true };
  }
