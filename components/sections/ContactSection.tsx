'use client'

import { useState } from "react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Star, Users, Zap, Globe, BarChart3, Heart, ChevronRight } from "lucide-react"

export default function ContactSection() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const benefits = [
    { icon: Star, title: 'Exclusive Launch Price', description: 'Lock in a special founding member rate before public launch' },
    { icon: Users, title: 'Direct Input', description: 'Your feedback shapes the product development roadmap' },
    { icon: Zap, title: 'Priority Support', description: 'Direct access to our team for questions and support' },
    { icon: Globe, title: 'Community Access', description: 'Connect with other early travelers and share experiences' },
    { icon: BarChart3, title: 'Free Premium Features', description: 'Access all features free during the beta period' },
    { icon: Heart, title: 'Lifetime Loyalty Bonus', description: 'Special rewards as a founding member of our community' },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    setLoading(true)

    const response = await fetch("https://formspree.io/f/xnjgjbob", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      setSuccess(true)
      form.reset()
    }

    setLoading(false)
  }

  return (
    <div className="space-y-20 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold">
          Join Our Early Access Program
        </h2>
        <p className="text-xl text-muted-foreground">
          Be among the first to experience Zeylon Travel AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <Card className="p-8 border-border bg-card">

          {success ? (
            <div className="text-center space-y-4 py-10">
              <h3 className="text-2xl font-bold text-green-500">
                🎉 You're on the list!
              </h3>
              <p className="text-muted-foreground">
                Thanks for joining early access. We'll notify you when Zeylon Travel AI launches.
              </p>
            </div>
          ) : (

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="hidden"
              name="_subject"
              value="New Early Access Signup - Zeylon Travel AI"
            />

            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Country *
              </label>
              <select
                name="country"
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
              >
                <option value="">Select your country</option>
                <option>Sri Lanka</option>
                <option>India</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Travel Interests *
              </label>

              <div className="space-y-3">

                {[
                  "Culture & History",
                  "Nature & Adventure",
                  "Beaches & Relaxation",
                  "Food & Dining"
                ].map((interest) => (

                  <label
                    key={interest}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      className="w-4 h-4 rounded border-border bg-muted accent-accent"
                    />
                    <span className="text-muted-foreground">
                      {interest}
                    </span>
                  </label>

                ))}

              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {loading ? "Submitting..." : "Get Early Access"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We'll keep you updated on our launch and send exclusive early access opportunities.
            </p>

          </form>

          )}

        </Card>


        {/* BENEFITS */}
        <div className="space-y-6">

          <h3 className="text-2xl font-bold">
            Why Join Early Access?
          </h3>

          <div className="space-y-4">

            {benefits.map((benefit, i) => {

              const Icon = benefit.icon

              return (
                <div key={i} className="flex gap-4">

                  <Icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold mb-1">
                      {benefit.title}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              )

            })}

          </div>

        </div>

      </div>


      {/* CONTACT */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-border rounded-2xl p-12 text-center">

        <h3 className="text-2xl font-bold mb-3">
          Questions? We'd Love to Help
        </h3>

        <p className="text-muted-foreground mb-4">
          Interested in partnerships or have feedback?
        </p>

        <a
          href="mailto:zeylonai.team@gmail.com"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold"
        >
          Contact us at zeylonai.team@gmail.com
          <ChevronRight className="w-4 h-4" />
        </a>

      </div>

    </div>
  )
}