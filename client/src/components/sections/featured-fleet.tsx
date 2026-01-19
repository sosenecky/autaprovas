import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/ui/vehicle-card";
import { vehicles } from "@/lib/data";

export default function FeaturedFleet() {
  const featuredVehicles = vehicles.slice(0, 4);

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-4">Náš prémiový vozový park</h2>
          <p className="text-xl text-gray-300">Ručně vybrané luxusní a sportovní vozy pro ultimátní zážitek z jízdy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <VehicleCard vehicle={vehicle} compact />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/fleet">
            <Button className="bg-luxury-gold text-black px-8 py-3 font-semibold hover:bg-yellow-500 transition-colors duration-300">
              Zobrazit celý vozový park
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
