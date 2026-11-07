import type { Metadata } from "next";
import Script from "next/script";
import { GOOGLE_ANALYTICS_KEY } from "@/lib/config";
import { montserrat, playfairDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "ryscheng Inc.",
  description: "ryscheng Inc. — Real Estate and Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {children}
        {GOOGLE_ANALYTICS_KEY && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_KEY}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
