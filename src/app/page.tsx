import { cookies } from "next/headers";
import { Hero } from "./components/Hero";
import { SubjectBlock } from "./components/SubjectBlock";

export default async function Home() {
  const userCookies = await cookies();
  const userDefiner = userCookies.get("unique-definer");
  console.log(userDefiner);
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Hero />
      <SubjectBlock />
    </div>
  );
}
