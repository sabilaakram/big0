import localFont from "next/font/local";
import { Quicksand as FontSans, Bebas_Neue } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin-ext"],
});

export const madeTommy = localFont({
  src: [
    { path: "../public/fonts/made-tommy-bold-outline.otf", weight: "700" },
    { path: "../public/fonts/made-tommy-bold.otf", weight: "400" },
  ],
  variable: "--font-tommy",
  preload: false,
});
