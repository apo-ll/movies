import { Inter } from 'next/font/google'
import '@/styles/globals.css';
import { Navbar } from '@/components/Navbar';

const roboto = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black text-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
