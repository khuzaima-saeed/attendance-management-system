'use client'
// import { SessionProvider as Provider } from 'next-auth/react';
import { AuthContextProvider } from "@/context/AuthContext"

export default function SessionProvider({children}) {
  return (
    // {children}
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}