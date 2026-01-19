import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BookingForm from "@/components/forms/booking-form";

export default function Booking() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-luxury font-bold mb-4 text-white">
              Rezervujte si svůj <span className="text-luxury-gold">zážitek</span>
            </h1>
            <p className="text-xl text-gray-300">
              Rezervujte si luxusní vozidlo nebo prémiovou službu ještě dnes
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
