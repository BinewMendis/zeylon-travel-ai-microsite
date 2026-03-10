'use client'
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Sparkles, Zap, Compass, Shield } from "lucide-react"

export default function FeaturesSection({ setActiveTab }: any) {

  const features = [
    {
      icon: Sparkles,
      title: "AI Itinerary Generator for Sri Lanka",
description:
  "Our AI itinerary generator creates personalized Sri Lanka travel itineraries based on your interests, budget, and travel duration.",
      featuresList: [
        "Personalized based on your preferences",
        "Real-time optimization",
        "Multiple route options",
      ],
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description:
        "Integrates data from Google Maps and OpenWeather for live information.",
      featuresList: [
        "Live traffic updates",
        "Weather forecasts",
        "Dynamic recommendations",
      ],
    },
    {
      icon: Compass,
      title: "Hidden Gem Discovery",
      description:
        "Uses social media data from Instagram and YouTube to find trending spots.",
      featuresList: [
        "Instagram trending locations",
        "YouTube travel guides",
        "Local recommendations",
      ],
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      description:
        "Verified locations, safety ratings, and local insights.",
      featuresList: [
        "Safety ratings",
        "Verified locations",
        "Local guides",
      ],
    },
  ]

  return (
    <div className="space-y-20 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold">
          AI Travel Planner Features for Sri Lanka Trips
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to plan the perfect Sri Lanka adventure
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8">

        {features.map((feature, i) => {
          const Icon = feature.icon

          return (
            <Card
              key={i}
              className="p-8 border-border bg-card hover:border-accent/50 transition-all"
            >

              <Icon className="w-12 h-12 text-accent mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.featuresList.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

            </Card>
          )
        })}

      </div>

      {/* Early Access CTA */}
      <Card className="p-12 border-border bg-gradient-to-r from-accent/10 to-secondary/10 text-center">

        <h3 className="text-3xl font-bold mb-4">
          More Coming Soon
        </h3>

        <p className="text-lg text-muted-foreground mb-6">
          Join our early access program to be the first to try new features.
        </p>

        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => setActiveTab('contact')}
        >
          Join Early Access
        </Button>

      </Card>

    </div>
  )
}