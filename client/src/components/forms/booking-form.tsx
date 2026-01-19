import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";

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

  const onSubmit = async (data: InsertBooking) => {
    try {
      toast({
        title: "Odesílám...",
        description: "Prosím čekejte.",
      });

      const response = await fetch("https://formsubmit.co/ajax/autaprovas@centrum.cz", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `Poptávka ${data.serviceType} - ${data.fullName}`,
          _template: "table", // Makes the email look nicer
          _captcha: "false"   // Disables captcha redirection
        })
      });

      if (response.ok) {
        toast({
          title: "Poptávka odeslána!",
          description: "Děkujeme za vaši rezervaci. Brzy se vám ozveme na uvedený email.",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error("Chyba při odesílání");
      }
    } catch (error) {
      toast({
        title: "Chyba při odesílání",
        description: "Omlouváme se, něco se pokazilo. Zkuste to prosím znovu nebo nám napište přímo na autaprovas@centrum.cz",
        variant: "destructive",
      });
    }
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
                className="bg-luxury-gold text-black px-12 py-4 text-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Odeslat poptávku
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Po kliknutí se otevře váš emailový klient s předvyplněnou zprávou.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
