import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.svg";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 flex items-center justify-center">
      <div className="max-w-5xl min-w-4xl mx-auto py-2 h-20 ">
        <div className="flex items-center gap-6">
          <nav>
            <Link>
              <h1></h1>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
