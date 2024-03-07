import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "What's Tempo!!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto text-zinc-100  bg-slate-500">
        <Header/>

        {children}

        <footer>footer</footer>
      </body>
    </html>
  );
}
