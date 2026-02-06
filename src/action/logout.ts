"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(){
  const cookieStore = await cookies()
  const userName = cookieStore.get("user-name") 

  await cookieStore.delete("user-name")
  revalidatePath("/");
  redirect("/auth")
}