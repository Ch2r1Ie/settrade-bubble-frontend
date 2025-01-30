import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Settrade-bubbles.com",
  description:
    "Discover Settrade Bubbles, the platform that brings your investment journey to life with dynamic, data-driven tools. Stay ahead in the market with real-time stock updates, portfolio management, and expert analysis—all in an interactive, user-friendly interface. Dive into the bubbles of opportunity today at settrade-bubbles.com!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
