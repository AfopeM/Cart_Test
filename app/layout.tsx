import "../styles/globals.css";
import { Barlow_Condensed } from "@next/font/google";
import { Navbar } from "@/component";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const Bar = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-base",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Bar.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ShoppingCartProvider>
          <Navbar />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
