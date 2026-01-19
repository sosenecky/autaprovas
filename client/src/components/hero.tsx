import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 leading-tight">
          Experience <span className="text-yellow-400">Luxury</span><br/>
          Drive <span className="text-yellow-400">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Premium sports car rentals, professional chauffeur services, and unforgettable driving experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fleet">
            <Button 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Explore Fleet
            </Button>
          </Link>
          <Link href="/services">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Book Experience
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-yellow-400 text-2xl" />
      </div>
    </section>
  );
}
