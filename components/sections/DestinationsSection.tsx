'use client'
import { Card } from "../ui/card"
import { Button } from "../ui/button"

export default function DestinationsSection({ setActiveTab }: any) {
  const destinations = [
  {
    city: 'Colombo',
    tagline: 'The Vibrant Capital',
    image: '/images/Colombo.jpg',
    description: "Sri Lanka's bustling capital city is the perfect starting point for your adventure. Explore urban attractions, shopping, and dining experiences.",
    highlights: [
      'Colombo National Museum',
      'Galle Face Green',
      'Old Parliament Building',
      'Shopping malls & markets',
      'Diverse cuisine',
      'Nightlife & entertainment',
    ],
    vibe: 'Urban, Modern, Cosmopolitan',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    city: 'Kandy',
    tagline: 'The Cultural Heart',
    image: '/images/Kandy.jpg',
    description: "High in the misty mountains, Kandy is Sri Lanka's cultural and spiritual center. Experience ancient temples and lush gardens.",
    highlights: [
      'Temple of the Tooth Relic',
      'Kandy Lake walks',
      'Botanical Gardens',
      'Traditional dance shows',
      'Tea plantations nearby',
      'Mountain scenery',
    ],
    vibe: 'Cultural, Spiritual, Scenic',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    city: 'Galle',
    tagline: 'The Coastal Gem',
    image: '/images/Galle.jpg', 
    description: 'A picturesque coastal town famous for its UNESCO World Heritage fort. Relax on pristine beaches and explore historic architecture.',
    highlights: [
      'Galle Fort (UNESCO site)',
      'Unawatuna Beach',
      'Sunrise Point',
      'Local fish markets',
      'Seafood restaurants',
      'Coral reefs & snorkeling',
    ],
    vibe: 'Relaxing, Historic, Beachy',
    color: 'from-amber-500/20 to-orange-500/20',
  },
]
  return (
    <div className="space-y-20 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold">Featured Destinations</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our flagship cities and plan your perfect travel
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {destinations.map((dest, i) => (
          <Card
            key={i}
            className={`border-border bg-gradient-to-br ${dest.color} overflow-hidden hover:border-accent/50 transition-all group cursor-pointer`}
          >

            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.city}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-8 space-y-4">

              <div>
                <h3 className="text-3xl font-bold">{dest.city}</h3>
                <p className="text-accent font-semibold text-sm mt-1">
                  {dest.tagline}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {dest.description}
              </p>

              <p className="text-sm font-semibold text-secondary mb-3">
                Vibe: {dest.vibe}
              </p>

              <ul className="space-y-2">
                {dest.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-6"
                onClick={() => setActiveTab('contact')}
              >
                Plan Trip to {dest.city}
              </Button>

            </div>
          </Card>
        ))}

      </div>

      {/* Custom Travel Section */}
      <Card className="p-12 border-border bg-gradient-to-r from-accent/10 to-secondary/10">

        <h3 className="text-3xl font-bold mb-4">
          Custom Itineraries
        </h3>

        <p className="text-lg text-muted-foreground mb-6">
        Start by planning a trip for a selected city and discover the best nearby attractions with an AI-generated itinerary. Multi city travel planning with personalized preferences is coming soon.
      </p>

        <Button
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground"
  onClick={() => setActiveTab('contact')}
>
  Create Custom Travel
</Button>

      </Card>

    </div>
  )
}