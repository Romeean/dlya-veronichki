import { cookies } from "next/headers";

export async function createHTTPOnlyCookie(value: string) {
  (await cookies()).set("user-name", value, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
export async function getHTTPOnlyCookie(value: string) {
  return (await cookies()).get(value)?.value;
}