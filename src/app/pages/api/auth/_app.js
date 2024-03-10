import React from "react"
import { AuthContextProvider } from "@/context/AuthContext"

 
export default function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}