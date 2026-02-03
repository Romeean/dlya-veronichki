import { Header } from "@/app/components/Header";

import { Hero } from "./components/Hero";
import { SubjectBlock } from "./components/SubjectBlock";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <Header />
      </div>
      <div className="w-full max-w-5xl flex flex-1 items-center">
        <div className="flex flex-col">
          <Hero />
          <SubjectBlock />
        </div>
      </div>
    </div>
  );
}
