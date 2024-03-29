import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Slide } from "@/styles/slide";
import { MainNav } from "@/components/main-nav";

const roboto = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-[#0e100f] text-white`}
      >
        <MainNav />
        {children}
      </body>
    </html>
  );
}
