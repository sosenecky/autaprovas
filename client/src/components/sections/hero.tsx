import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/0N4A6799.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 leading-tight">
          Zažijte <span className="text-luxury-gold">Luxus</span><br />
          Řiďte <span className="text-luxury-gold">Dokonalost</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Prémiové půjčování sportovních vozů a nezapomenutelné zážitky z jízdy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fleet">
            <Button className="bg-luxury-gold text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300">
              Prohlédnout vozový park
            </Button>
          </Link>
          <Link href="/booking">
            <Button 
              variant="outline" 
              className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 text-lg font-semibold hover:bg-luxury-gold hover:text-black transition-all duration-300"
            >
              Rezervovat zážitek
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-luxury-gold text-2xl" />
      </div>
    </section>
  );
}
