'use client'
import { useState } from "react"

import Navbar from "@/components/sections/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import DestinationsSection from "@/components/sections/DestinationsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Page Content */}
      <main className="flex-1">

        {activeTab === 'home' && (
          <HeroSection
            onGetStarted={() => setActiveTab('contact')}
            onLearnMore={() => setActiveTab('how-it-works')}
          />
        )}

        {activeTab === 'features' && <FeaturesSection setActiveTab={setActiveTab} />}

        {activeTab === 'how-it-works' && <HowItWorksSection />}

        {activeTab === 'destinations' && <DestinationsSection setActiveTab={setActiveTab} />}

        {activeTab === 'contact' && <ContactSection  />}

      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  )
}