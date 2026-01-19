import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  UserCheck, 
  Heart, 
  Trophy,
  Phone,
  MapPin,
  Star,
  Clock
} from "lucide-react";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  car: Car,
  "user-tie": UserCheck,
  heart: Heart,
  trophy: Trophy,
  phone: Phone,
  "map-marker-alt": MapPin,
  star: Star,
  clock: Clock,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Car;

  return (
    <Card className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors duration-300 border-gray-700">
      <CardContent className="p-0">
        <div className="text-yellow-400 text-4xl mb-6">
          <IconComponent size={48} />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{service.name}</h3>
        <p className="text-gray-300 mb-6">{service.description}</p>
        <ul className="text-sm text-gray-400 space-y-2 mb-6">
          {service.features?.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        {service.startingPrice && (
          <div className="mb-4">
            <span className="text-lg font-bold text-yellow-400">
              From ${service.startingPrice}
            </span>
            <span className="text-gray-400 text-sm ml-1">
              {service.category === 'rental' ? '/day' : '/service'}
            </span>
          </div>
        )}
        <Button 
          variant="ghost" 
          className="text-yellow-400 hover:text-yellow-500 font-semibold p-0"
        >
          Learn More →
        </Button>
      </CardContent>
    </Card>
  );
}
