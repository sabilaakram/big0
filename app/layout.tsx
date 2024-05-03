import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { madeTommy, fontSans } from "@/app/fonts";
import { Suspense } from "react";
import Loading from "./loading";

//Get metadata from strapi
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BigO",
    description:
      "BigO is a responsible AI-driven Business Intelligence (BI) service provider, leveraging the power of technology to drive meaningful change for their clients.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased",
          fontSans.variable,
          madeTommy.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
