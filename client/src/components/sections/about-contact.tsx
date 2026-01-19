import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function AboutContact() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">About Elite Drive</h2>
            <p className="text-xl text-gray-300 mb-6">
              For over a decade, Elite Drive has been the premier destination for luxury car rentals and exclusive automotive experiences. We specialize in providing access to the world's most prestigious vehicles.
            </p>
            <p className="text-gray-400 mb-8">
              Our carefully curated fleet features only the finest sports cars, luxury sedans, and exotic vehicles, all maintained to the highest standards. Whether you're celebrating a special occasion, attending a business event, or simply wanting to experience automotive excellence, we deliver unparalleled service and unforgettable moments.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">50+</div>
                <div className="text-gray-400">Premium Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>

          <Card 
            id="contact" 
            className="bg-black border-gray-800 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-luxury-gold text-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-luxury-gold text-xl">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-luxury-gold text-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a href="mailto:autaprovas@centrum.cz" className="text-gray-400 hover:text-luxury-gold transition-colors cursor-pointer">autaprovas@centrum.cz</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-luxury-gold text-xl">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Hours</div>
                    <div className="text-gray-400">Mon-Sun: 8:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="text-luxury-gold hover:text-yellow-500 text-2xl transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-luxury-gold hover:text-yellow-500 text-2xl transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-luxury-gold hover:text-yellow-500 text-2xl transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-luxury-gold hover:text-yellow-500 text-2xl transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
