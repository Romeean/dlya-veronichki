import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center p-3">
      <nav className="w-full flex justify-between">
        <div />
        <Link href="/account" className="">
          <h1 className="text-white uppercase font-bold">профіль</h1>
        </Link>
        
      </nav>
    </header>
  );
}
