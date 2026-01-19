import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, UserCheck, Heart, Trophy } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Luxusní půjčování",
    description: "Zažijte naši prémiovou flotilu sportovních a luxusních vozidel na jakoukoliv dobu.",
    features: [
      "Denní, týdenní, měsíční sazby",
      "Komplexní pojištění",
      "24/7 silniční asistence",
      "Flexibilní vyzvednutí/vrácení"
    ]
  },

  {
    icon: Heart,
    title: "Svatební balíčky",
    description: "Udělejte ze svého velkého dne nezapomenutelný s našimi luxusními svatebními auty.",
    features: [
      "Ferrari 10 000 Kč/den",
      "Aston Martin 8 000 Kč/den",
      "Maserati 6 000 Kč/den",
      "Mercedes 6 000 Kč/den"
    ]
  },
  {
    icon: Trophy,
    title: "Zážitkové jízdy",
    description: "Zážitek z jízdy ve voze vašich snů se zkušeným řidičem.",
    features: []
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-4">Prémiové služby</h2>
          <p className="text-xl text-gray-300">Přizpůsobené zážitky pro každou příležitost</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="bg-charcoal border-gray-800 hover:bg-gray-800 transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-luxury-gold text-4xl mb-6">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button 
                      variant="link" 
                      className="text-luxury-gold hover:text-yellow-500 font-semibold p-0"
                    >
                      Zjistit více →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
