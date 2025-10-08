import Image from "next/image"
import logo from "@public/logo.svg"

export function Header(){
  return(
    <header className="w-full h-full flex justify-center p-1">
      <div className="max-w-5xl max-h-20">
        <ul>
        <Image src={logo} alt="logotype" width={160} height={40} />
        <li>Тесты</li>
        </ul>
        
      </div>
    </header>
  )
}