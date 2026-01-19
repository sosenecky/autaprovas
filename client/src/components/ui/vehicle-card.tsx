import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vehicle } from "@shared/schema";
import { Link } from "wouter";

interface VehicleCardProps {
  vehicle: Vehicle;
  compact?: boolean;
}

export default function VehicleCard({ vehicle, compact = false }: VehicleCardProps) {
  const getTagColor = (tag: string) => {
    switch (tag?.toLowerCase()) {
      case 'premium':
        return 'bg-luxury-gold text-black';
      case 'luxury':
        return 'bg-purple-600 text-white';
      case 'performance':
        return 'bg-red-500 text-white';
      case 'hybrid':
        return 'bg-green-500 text-white';
      case 'classic':
        return 'bg-blue-600 text-white';
      case 'convertible':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <Card className="bg-black border-gray-800 overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name}
          className={`w-full object-cover object-center ${compact ? 'h-48' : 'h-56'}`}
          style={{ 
            objectPosition: vehicle.name === 'Maserati Ghibli SQ4' ? '50% 60%' : '50% 30%' 
          }}
        />
        {vehicle.tag && (
          <Badge 
            className={`absolute top-4 right-4 ${getTagColor(vehicle.tag)} font-semibold`}
          >
            {vehicle.tag}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-white">{vehicle.name}</h3>
        
        {!compact && (
          <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
            <div className="text-center">
              <div className="text-luxury-gold font-semibold">{vehicle.horsepower}</div>
              <div className="text-gray-400">HP</div>
            </div>
            <div className="text-center">
              <div className="text-luxury-gold font-semibold">{vehicle.zeroToSixty}s</div>
              <div className="text-gray-400">0-100</div>
            </div>
            <div className="text-center">
              <div className="text-luxury-gold font-semibold">{vehicle.topSpeed}</div>
              <div className="text-gray-400">km/h</div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center">
          <Link href="/booking">
            <Button className="bg-luxury-gold text-black hover:bg-yellow-500 font-semibold transition-colors w-full">
              Rezervovat
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
