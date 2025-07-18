import type { Metadata } from "next";
import "./globals.css"; // includes @tailwind directives
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
// import CustomCursor from "./components/CustomCursor"; // Optional custom cursor
// import localFont from "next/font/local";

// Uncomment and use if you want custom local fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Dontre Quarles",
  description: "Dontre Quarles' personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
