'use client'
import { Plane } from "lucide-react"

export default function Footer({ setActiveTab }: any) {
  return (
    <footer className="border-t border-border bg-card/40 mt-20">

      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Plane className="w-5 h-5 text-accent" />
          <span className="font-semibold text-accent">
            Zeylon Itinerary AI
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © 2024 Zeylon Itinerary AI. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">

          <button
            onClick={() => setActiveTab('destinations')}
            className="text-accent hover:opacity-80 transition"
          >
            Destinations
          </button>

          <button
            onClick={() => setActiveTab('features')}
            className="text-accent hover:opacity-80 transition"
          >
            Features
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className="text-accent hover:opacity-80 transition"
          >
            Contact
          </button>

        </div>

      </div>

    </footer>
  )
}