import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "hebrew"] });

export const metadata: Metadata = {
  title: "AI-Enhanced Education Platform",
  description: "פלטפורמה חינוכית מודרנית המשתמשת בבינה מלאכותית לקידום למידה בקבוצות קטנות",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
