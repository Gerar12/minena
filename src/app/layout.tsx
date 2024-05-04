import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Layout } from "@/components/Layout";
import "@/app/styles/globals.css";

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diana",
  description: "A Next.js starter with Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
