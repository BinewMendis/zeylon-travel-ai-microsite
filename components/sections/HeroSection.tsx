'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sparkles, Clock, DollarSign } from 'lucide-react'

interface HeroSectionProps {
  onGetStarted: () => void
  onLearnMore: () => void
}

export default function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  return (
    <section className="text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* Hero Title & Description */}
        <section className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Plan Your Perfect{' '}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Sri Lankan Trip
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ceylon Itinerary AI is an intelligent travel planning platform designed to help tourists and locals discover Sri Lanka effortlessly. Using artificial intelligence, we generate personalized travel itineraries based on your preferences, budget, and travel duration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-12 px-8"
              onClick={onGetStarted}
            >
              Generate Your Itinerary
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-card text-lg h-12 px-8"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'AI-Powered',
              description: 'Smart algorithms create personalized itineraries tailored to your interests',
            },
            {
              icon: Clock,
              title: 'Save Time',
              description: 'Generate complete travel plans in minutes, not hours',
            },
            {
              icon: DollarSign,
              title: 'Budget Smart',
              description: 'Plan within your budget with intelligent recommendations',
            },
          ].map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <Card
                key={i}
                className="p-8 border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </section>

        {/* Sri Lanka Highlights */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Discover Sri Lanka's Beauty</h2>
            <p className="text-lg text-muted-foreground">
              From pristine beaches to ancient temples, explore what makes Sri Lanka unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Pristine Beaches',
                description: 'Experience golden sands and turquoise waters at some of Asia\'s most beautiful beaches',
                color: 'from-accent/20 to-accent/5',
              },
              {
                title: 'Ancient Temples',
                description: 'Visit iconic spiritual sites like the Temple of the Tooth and discover centuries of culture',
                color: 'from-secondary/20 to-secondary/5',
              },
              {
                title: 'Mountain Escapes',
                description: 'Trek through misty highlands and experience stunning views from Ella and Kandy',
                color: 'from-accent/20 to-secondary/20',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`p-8 border-border bg-gradient-to-br ${item.color} hover:border-accent/50 transition-all`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </section>
  )
}