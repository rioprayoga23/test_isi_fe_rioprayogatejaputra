import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen w-full">
          <div className="w-full flex items-center h-screen justify-center border border-solid">
            <div className="bg-white border border-solid rounded-md shadow p-5 w-1/2">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
