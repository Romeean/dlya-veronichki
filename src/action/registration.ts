  "use server";
  import prisma from "@/lib/prisma";
  import bcrypt from "bcrypt";
  import { cookies } from "next/headers";
  import { redirect } from "next/navigation";

  async function CreateHTTPOnlyCoolie(value: string) {
    (await cookies()).set("user-name", value, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }
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
      await CreateHTTPOnlyCoolie(login);
      redirect("/")
    }

    return { success: true };
  }
