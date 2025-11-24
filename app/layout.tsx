import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tanish | Portfolio",
  description:
    "Tanish builds calm, reliable software with a focus on real-world problems and human experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000] antialiased">
        <Navbar />
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
