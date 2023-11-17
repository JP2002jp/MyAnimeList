import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/auth_provider";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyAnimeList",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
