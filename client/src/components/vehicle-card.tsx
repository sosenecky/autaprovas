import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import type { Vehicle } from "@shared/schema";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case 'sports':
        return 'destructive';
      case 'luxury':
        return 'default';
      case 'hybrid':
        return 'secondary';
      case 'convertible':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'sports':
        return 'bg-red-500 text-white';
      case 'luxury':
        return 'bg-yellow-400 text-black';
      case 'hybrid':
        return 'bg-green-500 text-white';
      case 'convertible':
        return 'bg-yellow-400 text-black';
      default:
        return 'bg-yellow-400 text-black';
    }
  };

  return (
    <Card className="bg-black rounded-xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 border-gray-800">
      <div className="relative">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-4 right-4 text-sm font-semibold ${getBadgeColor(vehicle.category)}`}
        >
          {vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white">{vehicle.name}</h3>
        <p className="text-gray-400 mb-4">{vehicle.description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div className="text-center">
            <div className="text-yellow-400 font-semibold">{vehicle.horsepower}</div>
            <div className="text-gray-400">HP</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-semibold">{vehicle.acceleration}</div>
            <div className="text-gray-400">0-60</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-semibold">{vehicle.topSpeed}</div>
            <div className="text-gray-400">MPH</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-yellow-400">${vehicle.dailyRate}</span>
            <span className="text-gray-400">/day</span>
          </div>
          <Link href="/contact">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
