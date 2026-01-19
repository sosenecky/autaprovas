import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "Domů", href: "/" },
  { label: "Vozový park", href: "/fleet" },
  { label: "Služby", href: "/services" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black border-b border-gray-800" : "bg-black/90 backdrop-blur-sm border-b border-gray-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="/attached_assets/DALL·E 2023-05-06 16.35.32.jpeg" 
                alt="Autaprovas Logo" 
                className="h-10 w-auto"
              />
              <div className="text-2xl font-luxury font-bold text-luxury-gold">
                Autaprovas
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-baseline space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`transition-colors duration-300 ${
                  location === item.href 
                    ? "text-luxury-gold" 
                    : "text-gray-300 hover:text-luxury-gold"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Link href="/booking">
              <Button className="bg-luxury-gold text-black hover:bg-yellow-500 font-semibold">
                Rezervovat
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-400" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a className={`text-lg transition-colors duration-300 ${
                        location === item.href 
                          ? "text-luxury-gold" 
                          : "text-gray-300 hover:text-luxury-gold"
                      }`}>
                        {item.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="/booking">
                    <Button className="bg-luxury-gold text-black hover:bg-yellow-500 font-semibold w-full">
                      Rezervovat
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
