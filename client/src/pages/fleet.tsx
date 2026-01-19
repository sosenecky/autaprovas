import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import VehicleCard from "@/components/ui/vehicle-card";
import { Vehicle } from "@shared/schema";

export default function Fleet() {
  const { data: vehicles, isLoading } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-luxury font-bold mb-4 text-white">
              Kompletní vozový park
            </h1>
            <p className="text-xl text-gray-300">
              Objevte naši rozsáhlou kolekci luxusních a sportovních vozidel
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-charcoal rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {vehicles?.map((vehicle, index) => (
                <div key={vehicle.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          )}

          {!isLoading && vehicles?.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">Momentálně nejsou k dispozici žádná vozidla.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
