"use client";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
