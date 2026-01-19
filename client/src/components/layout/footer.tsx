import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/attached_assets/DALL·E 2023-05-06 16.35.32.jpeg" 
                alt="Autaprovas Logo" 
                className="h-8 w-auto"
              />
              <div className="text-2xl font-luxury font-bold text-luxury-gold">
                Autaprovas
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:autaprovas@centrum.cz" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <span className="text-sm">autaprovas@centrum.cz</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services">
                  <a className="hover:text-luxury-gold transition-colors">Luxusní půjčování</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-luxury-gold transition-colors">Svatební balíčky</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-luxury-gold transition-colors">Zážitkové jízdy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Autaprovas. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Licensed & Insured Premium Car Rental Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
