import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-4">Client Experiences</h2>
            <p className="text-xl text-gray-300">Hear from our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="bg-black border-gray-800 animate-pulse">
                <CardContent className="p-8 h-64"></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-4">Client Experiences</h2>
          <p className="text-xl text-gray-300">Hear from our satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-black border-gray-800 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-luxury-gold text-xl">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-black font-semibold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
