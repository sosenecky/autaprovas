import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const serviceTypes = [
  { value: "Luxusní půjčování", label: "Luxusní půjčování" },
  { value: "Svatební balíček", label: "Svatební balíček" },
  { value: "Zážitková jízda", label: "Zážitková jízda" },
];

const vehiclePreferences = [
  { value: "Jakékoliv dostupné", label: "Jakékoliv dostupné" },
  { value: "Aston Martin DB11 V12", label: "Aston Martin DB11 V12" },
  { value: "Ferrari 812 GTS", label: "Ferrari 812 GTS" },
  { value: "Mercedes AMG GT S", label: "Mercedes AMG GT S" },
  { value: "Maserati Ghibli SQ4", label: "Maserati Ghibli SQ4" },
];

export default function BookingForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      serviceType: "",
      vehiclePreference: "",
      pickupDate: "",
      returnDate: "",
      fullName: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Poptávka odeslána!",
        description: "Váš emailový klient byl otevřen s předvyplněnou zprávou. Odešlete email pro dokončení poptávky.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Chyba při odesílání",
        description: error.message || "Došlo k chybě při odesílání poptávky. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    createBookingMutation.mutate(data);
    sendEmail(data);
  };

  const sendEmail = (bookingData: InsertBooking) => {
    // Create email content with booking details
    const emailSubject = encodeURIComponent(`Poptávka ${bookingData.serviceType} - ${bookingData.fullName}`);
    const emailBody = encodeURIComponent(`Dobrý den,

chtěl(a) bych požádat o ${bookingData.serviceType}.

Osobní údaje:
- Jméno: ${bookingData.fullName}
- Email: ${bookingData.email}
- Telefon: ${bookingData.phone}

Detaily rezervace:
- Služba: ${bookingData.serviceType}
- Preferované vozidlo: ${bookingData.vehiclePreference || "Jakékoliv dostupné"}
- Datum vyzvednutí: ${bookingData.pickupDate}${bookingData.returnDate ? `\n- Datum vrácení: ${bookingData.returnDate}` : ""}${bookingData.specialRequests ? `\n- Speciální požadavky: ${bookingData.specialRequests}` : ""}

S pozdravem,
${bookingData.fullName}`);

    // Open email client with pre-filled content
    const mailtoLink = `mailto:autaprovas@centrum.cz?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink);
  };

  return (
    <Card className="max-w-4xl mx-auto bg-charcoal border-gray-800">
      <CardHeader>
        <CardTitle className="text-4xl md:text-5xl font-luxury font-bold text-center text-white mb-4">
          Rezervujte si svůj zážitek
        </CardTitle>
        <p className="text-xl text-gray-300 text-center">
          Začněte s půjčováním luxusního vozu nebo službou
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Typ služby</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black border-gray-700 text-white focus:border-luxury-gold">
                        <SelectValue placeholder="Vyberte typ služby" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black border-gray-700">
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="text-white hover:bg-gray-800">
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vehiclePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Preference vozidla</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black border-gray-700 text-white focus:border-luxury-gold">
                        <SelectValue placeholder="Vyberte preferované vozidlo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black border-gray-700">
                      {vehiclePreferences.map((vehicle) => (
                        <SelectItem key={vehicle.value} value={vehicle.value} className="text-white hover:bg-gray-800">
                          {vehicle.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pickupDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Datum vyzvednutí</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Datum vrácení</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Celé jméno</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Zadejte své celé jméno"
                      {...field}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Telefonní číslo</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Vaše telefonní číslo"
                      {...field}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-semibold">E-mailová adresa</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="vas.email@priklad.cz"
                        {...field}
                        className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-semibold">Speciální požadavky</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Jakékoliv speciální požadavky nebo přání..."
                        {...field}
                        className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-luxury-gold resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2 text-center">
              <Button
                type="submit"
                disabled={createBookingMutation.isPending}
                className="bg-luxury-gold text-black px-12 py-4 text-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                {createBookingMutation.isPending ? "Odesílání..." : "Odeslat poptávku"}
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Ozveme se vám do 24 hodin pro potvrzení vaší rezervace
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
