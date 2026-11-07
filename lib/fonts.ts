import { Montserrat, Playfair_Display } from "next/font/google";

/** Body / UI typeface. */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

/** Display typeface for headings. */
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-playfair-display",
});
