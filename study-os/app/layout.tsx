import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StudyOS",
  description:
    "StudyOS is an open-source study tracker that helps you monitor your study sessions and analyze your study habits. With StudyOS, you can easily log your study sessions, track your progress, and gain insights into your study patterns. Whether you're a student looking to improve your study routine or a lifelong learner seeking to optimize your learning process, StudyOS is the perfect tool to help you achieve your goals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "bg-[#0F1115]", poppins.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
