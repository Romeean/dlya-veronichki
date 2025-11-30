"use client";
import { createContext } from "react";
import { useState } from "react";

interface StatusLogged {
  isLogged: boolean;
  unLog: () => void;
}

export const authContext = createContext<StatusLogged | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  function unLog() {
    setIsLogged((prev) => !prev);
  }

  return <authContext.Provider value={{ isLogged, unLog }}>{children}</authContext.Provider>;
}
