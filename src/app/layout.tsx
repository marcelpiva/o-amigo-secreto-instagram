import type { Metadata } from "next";
import { Oxanium, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "O Amigo Secreto - Posts Instagram",
  description: "Campanha de lançamento do app O Amigo Secreto para Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${oxanium.variable} ${sourceCodePro.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
