import Image from "next/image"
import Link from "next/link"
import logo from "@public/logo.svg"

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 flex items-center justify-center">
      <div className="max-w-5xl min-w-4xl mx-auto py-2 h-20 ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image className="rounded-2xl" src={logo} alt="logotype" width={120} height={40} />
          </Link>

          <nav>
            <ul className="flex items-center gap-4 text-lg">
              <li>
                <Link href="/math-tests" className="hover:text-blue-600 transition">
                  Тесты
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}
