import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import FeaturedFleet from "@/components/sections/featured-fleet";
import ServicesOverview from "@/components/sections/services-overview";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeaturedFleet />
      <Gallery />
      <ServicesOverview />
      <Footer />
    </div>
  );
}
