'use client'
import { Card } from "../ui/card"
import { Check } from "lucide-react"

export default function HowItWorksSection() {

  const steps = [
    {
      number: "1",
      title: "Choose Your Destination",
      description:
        "Select from Colombo, Kandy, Galle, or explore multiple cities",
    },
    {
      number: "2",
      title: "Customize Your Travel Preferences",
      description:
        "Set your budget, interests, and trip duration to create your ideal Sri Lanka itinerary.",
    },
    {
      number: "3",
      title: "Get Your Personalized Sri Lanka Itinerary",
      description:
        "Instantly receive a personalised itinerary for your Sri Lanka trip.",
    },
  ]

  const process = [
    {
      title: "Step 1: Enter Your Details",
      description:
        "Tell us where you want to go and what you love doing",
    },
    {
      title: "Step 2: AI Analyzes",
      description:
        "Our system processes thousands of data points to create your perfect trip",
    },
    {
      title: "Step 3: Start Exploring",
      description:
        "Download your itinerary and begin your adventure",
    },
  ]

  return (
    <div className="space-y-20 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold">How Our Sri Lanka Itinerary Planner Works</h2>

        <p className="text-xl text-muted-foreground">
          Follow these simple steps to create your personalised Sri Lanka itinerary and plan your trip easily.
        </p>
      </div>

      {/* 3 Steps */}
      <div className="grid md:grid-cols-3 gap-8">

        {steps.map((step, i) => (
          <Card
            key={i}
            className="p-10 border-border bg-card hover:border-accent/50 transition-all text-center"
          >

            {/* Plain Number */}
            <div className="text-5xl font-bold text-accent mb-6">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>

          </Card>
        ))}

      </div>

      {/* Process Section */}
      <Card className="p-12 border-border bg-gradient-to-br from-accent/10 to-secondary/10">

        <h3 className="text-3xl font-bold mb-8">
          How the Sri Lanka Trip Planner Works
        </h3>

        <div className="space-y-8">

          {process.map((item, i) => (
            <div key={i} className="flex items-start gap-4">

              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {item.title}
                </h4>

                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </Card>

    </div>
  )
}