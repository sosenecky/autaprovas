import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Car, Heart, Trophy } from "lucide-react";

const services = [
  {
    id: "luxury-rental",
    icon: Car,
    title: "Luxusní půjčování",
    description: "Zažijte naši prémiovou flotilu sportovních a luxusních vozidel na jakoukoliv dobu.",
    features: [
      "Denní, týdenní, měsíční sazby",
      "Komplexní pojistné krytí",
      "24/7 silniční asistence",
      "Flexibilní místa vyzvednutí a vrácení",
      "Profesionální příprava vozidla",
      "Detailní orientační sezení"
    ],

    image: "/attached_assets/IMG_4141.jpeg"
  },

  {
    id: "wedding-packages",
    icon: Heart,
    title: "Svatební balíčky",
    description: "Auto Vám přistavíme i s řidičem a bude k dispozici po celý den. Odvezeme svatebčany i vážené hosty. Prostě zážitek pro všechny.",
    features: [],

    image: "/attached_assets/IMG_3857.jpeg"
  },
  {
    id: "experience-drives",
    icon: Trophy,
    title: "Zážitkové jízdy",
    description: "Zážitek z jízdy ve voze vašich snů se zkušeným řidičem.",
    features: [],

    image: "/attached_assets/IMG_4251.jpeg"
  }
];



export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-luxury font-bold mb-4 text-white">
              Prémiové služby
            </h1>
            <p className="text-xl text-gray-300">
              Luxusní automobilové zážitky na míru pro každou příležitost
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="bg-charcoal border-gray-800 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full ${service.id === 'experience-drives' ? 'object-contain bg-black' : 'object-cover'}`}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 left-4 text-luxury-gold text-3xl">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <span className="text-luxury-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      {service.priceRange && (
                        <span className="text-luxury-gold font-semibold text-lg">{service.priceRange}</span>
                      )}
                      <Link href="/booking">
                        <Button className="bg-luxury-gold text-black hover:bg-yellow-500 font-semibold">
                          Rezervovat
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
