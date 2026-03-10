import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Zeylon Travel AI – AI-Powered Travel Planner for Sri Lanka",

  description:
    "Plan your perfect Sri Lanka trip with artificial intelligence. Zeylon Travel AI creates personalized travel itineraries based on your budget, interests, and travel style.",

  keywords: [
    "AI travel planner",
    "Sri Lanka travel planner",
    "AI itinerary generator",
    "travel AI Sri Lanka",
    "smart travel planning",
    "Sri Lanka tourism AI",
  ],

  metadataBase: new URL("https://zeylon-travel-ai.vercel.app"),

  openGraph: {
    title: "Zeylon Travel AI – Smart AI Trip Planner",
    description:
      "Discover Sri Lanka with AI-powered travel planning. Instantly generate personalized itineraries for Colombo, Kandy, Galle and hidden gems.",
    url: "https://zeylon-travel-ai.vercel.app",
    siteName: "Zeylon Travel AI",
    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zeylon Travel AI – Smart Sri Lanka Trip Planner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zeylon Travel AI – AI Travel Planner",
    description:
      "Create personalized Sri Lanka travel itineraries using artificial intelligence.",
    images: ["og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}