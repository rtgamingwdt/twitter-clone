import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twizzle",
  description: "Twizzle is a website that allows people to create posts and comment, just like twitter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Sidebar />
          <main>
            <div className="view">{children}</div>
            <Feed />
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}
