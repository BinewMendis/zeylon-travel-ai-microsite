'use client'
import { useState } from "react"
import { Plane, Menu, X } from "lucide-react"

export default function Navbar({ activeTab, setActiveTab }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'contact', label: 'Join Early Access' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Plane className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Zeylon Travel AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                  activeTab === link.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                  activeTab === link.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}