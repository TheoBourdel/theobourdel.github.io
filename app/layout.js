import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/ui/spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="md:overflow-x-visible overflow-x-hidden">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Dimezi Events</title>
        <meta name="description" content="DJ professionnel pour mariages et soirées inoubliables. Une expérience musicale personnalisée du cocktail jusqu’à la dernière danse." /> 
        <meta httpEquiv="Content-Language" content="fr-FR" />
        <meta name="author" content="Dimezi Events" />
        <meta name="keywords" content="Dimezi Events, DJ, Mariage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased relative mx-auto flex max-w-7xl flex-col items-center justify-center`}
      >
              <Spotlight />
        {children}
      </body>
    </html>
  );
}
