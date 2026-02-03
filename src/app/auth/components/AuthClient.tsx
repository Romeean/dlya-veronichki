"use client";

import { registration } from "@/action/registration";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function AuthClient() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  let interestingNullValue: undefined = undefined;

  function handleClickShow() {
    setIsShown((prev) => !prev);
  }
  async function handleRegistration(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      await registration(formData);
    } catch (error: any) {
      setError(error.message);
      console.log("we have an error", error);
      setTimeout(() => setError(null), 1500);
    }
  }

  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col gap-4">
      <h1 className="text-white text-2xl ">
        Зарееструйся на найкращу<span className="text-[#e94e77]"> Освітню Платформу</span>
      </h1>
      <form
        className="block w-full max-w-[400px] border rounded-[12px] bg-[#1e2939] min-h-[200px]"
        onSubmit={handleRegistration}
      >
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
                type={isShown ? "text" : "password"}
                className="w-full p-2 outline-2 rounded-[6px] focus:outline-2 focus:outline-[#00a6f4] text-[#bec3ca]"
              />
              {isShown ? (
                <Image
                  className="absolute top-2 right-2"
                  src={"/eye-close.svg"}
                  width={20}
                  height={20}
                  alt="closed-eye"
                  onClick={() => handleClickShow()}
                />
              ) : (
                <Image
                  className="absolute top-2 right-2"
                  src={"/eye-open.svg"}
                  width={20}
                  height={20}
                  alt="closed-eye"
                  onClick={() => handleClickShow()}
                />
              )}
            </div>
          </div>

          <div className="p-2 flex flex-col gap-1">
            <button
              type="submit"
              className="p-2 rounded-[6px] w-full bg-[#00a6f4] cursor-pointer text-white hover:bg-[#0069a8] transition-all "
            >
              Створити аккаунт
            </button>
            <Link href={"/login"} className="text-gray-500">
              Вже є аккаунт?
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 100 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              className="min-w-4/12 rounded-2xl bg-amber-50 transition-all"
            >
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      {/* почему оператор ?? работает со значениями типа - null как постоянное true */}
    </div>
  );
}
