"use client"
import { useState } from "react"
import { authentication } from "@/action/authentication"
import Image from "next/image"
import Link from "next/link"

export function ClientLogin(){
  const [isShown, setIsShown] = useState<boolean>(false)
  function handleClickShow(){
    setIsShown((prev) => !prev)
  }
  return(
      <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4">
      <h1 className="text-white text-2xl ">
        З поверненням!
      </h1>
      <form className="block w-full max-w-[400px] border rounded-[12px] bg-[#1e2939] min-h-[200px]" action={authentication}>
        <div className="flex flex-col w-full p-2 gap-1">
          <div className="flex flex-col p-2 gap-0.5">
            <label className="text-[#d0d3d7]">Логін</label>
            <input
              autoComplete="off"
              name="login"
              placeholder="Login"
              className="p-2 outline-2 rounded-[6px] focus:outline-2 focus:outline-[#00a6f4] text-[#bec3ca]"
            />
          </div>

          <div className="flex flex-col p-2 gap-0.5">
            <label className="text-[#d0d3d7]">Пароль</label>
            <div className="relative w-full h-fit">
              
              <input
                autoComplete="off"
                name="password"
                placeholder="Password"
                type={ isShown ? "text" : "password"}
                className="w-full p-2 outline-2 rounded-[6px] focus:outline-2 focus:outline-[#00a6f4] text-[#bec3ca]"
              />
              {
                isShown ? (
                  <Image 
                    className="absolute top-2 right-2" src={"/eye-close.svg"} width={20} height={20} alt="closed-eye" 
                    onClick={() => handleClickShow()}
                    />
                ) : (
                  <Image className="absolute top-2 right-2" src={"/eye-open.svg"} width={20} height={20} alt="closed-eye" 
                    onClick={() => handleClickShow()}
                  />
                )
              }

            </div>
          </div>

          <div className="p-2 flex flex-col gap-1">
            <button
              type="submit"
              className="p-2 rounded-[6px] w-full bg-[#00a6f4] cursor-pointer text-white hover:bg-[#0069a8] transition-all "
            >
              Увійти
            </button>
            <Link href={"/auth"} className="text-gray-500" >Ще немає аккаунту?</Link>

          </div>
        </div>
      </form>
    </div>
  )
}