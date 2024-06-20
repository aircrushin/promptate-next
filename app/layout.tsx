import type { Metadata } from "next";
import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Abyssinica_SIL({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promptate",
  description: "AI powered prompt generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
