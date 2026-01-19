import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/fleet", label: "Fleet" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-black border-b border-gray-800" : "bg-black/90 backdrop-blur-sm border-b border-gray-800"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-luxury font-bold text-yellow-400">Elite Drive</div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-300",
                    location === item.href
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                Book Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                    location === item.href
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
