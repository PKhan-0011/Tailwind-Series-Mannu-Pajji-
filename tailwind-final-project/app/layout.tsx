import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-providers";

const manRope = Manrope({
  variable: "--font-Manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AgenForce Marketing Tempalte - Acertinity UI Pro",
  description:
    "AgenForce is a multipurpose marketing template built with next.js Typescript Css and Motion for read",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manRope.className} ${inter.className} antialiased`}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {" "}
          <main className="bg-background text-foreground ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
