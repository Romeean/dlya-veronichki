import { Hero } from "./components/Hero";
import { SubjectBlock } from "./components/SubjectBlock";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Hero />
      <SubjectBlock />
    </div>
  )
}
