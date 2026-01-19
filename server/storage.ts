import { vehicles, bookings, testimonials, type Vehicle, type InsertVehicle, type Booking, type InsertBooking, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  // Vehicle operations
  getVehicles(): Promise<Vehicle[]>;
  getVehicleById(id: number): Promise<Vehicle | undefined>;
  getVehiclesByCategory(category: string): Promise<Vehicle[]>;
  createVehicle(vehicle: InsertVehicle): Promise<Vehicle>;
  
  // Booking operations
  getBookings(): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Testimonial operations
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private vehicles: Map<number, Vehicle>;
  private bookings: Map<number, Booking>;
  private testimonials: Map<number, Testimonial>;
  private currentVehicleId: number;
  private currentBookingId: number;
  private currentTestimonialId: number;

  constructor() {
    this.vehicles = new Map();
    this.bookings = new Map();
    this.testimonials = new Map();
    this.currentVehicleId = 1;
    this.currentBookingId = 1;
    this.currentTestimonialId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize luxury sports cars fleet
    const initialVehicles: Omit<Vehicle, 'id'>[] = [
      {
        name: "Aston Martin DB11 V12",
        brand: "Aston Martin",
        model: "DB11 V12",
        year: 2024,
        category: "Sports Car",
        pricePerDay: "1400.00",
        horsepower: 630,
        zeroToSixty: "3.9",
        topSpeed: 335,
        imageUrl: "/attached_assets/0N4A6816.jpeg",
        features: ["Twin-Turbo V12", "Aeroblade Technology", "Handcrafted Interior", "Active Suspension"],
        isAvailable: true,
        description: "Elegant grand touring with unmistakable British luxury and V12 power.",
        tag: "Luxury"
      },
      {
        name: "Ferrari 812 GTS",
        brand: "Ferrari",
        model: "812 GTS",
        year: 2024,
        category: "Convertible",
        pricePerDay: "2200.00",
        horsepower: 800,
        zeroToSixty: "2.9",
        topSpeed: 340,
        imageUrl: "/attached_assets/IMG_4251.jpeg",
        features: ["Naturally Aspirated V12", "Retractable Hardtop", "F1-Derived Technology", "Launch Control"],
        isAvailable: true,
        description: "The pinnacle of Ferrari's front-engined V12 convertible excellence.",
        tag: "Premium"
      },
      {
        name: "Mercedes AMG GT S",
        brand: "Mercedes-AMG",
        model: "GT S",
        year: 2024,
        category: "Sports Car",
        pricePerDay: "1600.00",
        horsepower: 515,
        zeroToSixty: "3.9",
        topSpeed: 311,
        imageUrl: "/attached_assets/IMG_4141.jpeg",
        features: ["Handcrafted AMG V8", "AMG DYNAMIC SELECT", "Active Aerodynamics", "Race-Derived Suspension"],
        isAvailable: true,
        description: "German engineering meets race-bred performance in this AMG masterpiece.",
        tag: "Performance"
      },
      {
        name: "Maserati Ghibli SQ4",
        brand: "Maserati",
        model: "Ghibli SQ4",
        year: 2024,
        category: "Luxury Sedan",
        pricePerDay: "1100.00",
        horsepower: 424,
        zeroToSixty: "4.9",
        topSpeed: 286,
        imageUrl: "/attached_assets/IMG_0204.jpeg",
        features: ["Twin-Turbo V6", "Q4 All-Wheel Drive", "Skyhook Suspension", "Luxury Interior"],
        isAvailable: true,
        description: "Italian luxury sedan with distinctive style and engaging performance.",
        tag: "Luxury"
      }
    ];

    initialVehicles.forEach(vehicle => {
      const id = this.currentVehicleId++;
      this.vehicles.set(id, { ...vehicle, id });
    });

    // Initialize testimonials
    const initialTestimonials: Omit<Testimonial, 'id'>[] = [
      {
        name: "James Sullivan",
        location: "San Francisco, CA",
        rating: 5,
        review: "Absolutely incredible experience! The Ferrari 488 was pristine and the service was impeccable. Made my anniversary unforgettable.",
        initials: "JS"
      },
      {
        name: "Maria Rodriguez",
        location: "Los Angeles, CA",
        rating: 5,
        review: "The wedding package exceeded our expectations. The Bentley was beautifully decorated and the chauffeur was professional and courteous.",
        initials: "MR"
      },
      {
        name: "David Kim",
        location: "Miami, FL",
        rating: 5,
        review: "The track day experience was phenomenal. Professional instruction and top-tier vehicles. Will definitely book again!",
        initials: "DK"
      }
    ];

    initialTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getVehicles(): Promise<Vehicle[]> {
    return Array.from(this.vehicles.values());
  }

  async getVehicleById(id: number): Promise<Vehicle | undefined> {
    return this.vehicles.get(id);
  }

  async getVehiclesByCategory(category: string): Promise<Vehicle[]> {
    return Array.from(this.vehicles.values()).filter(vehicle => 
      vehicle.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  async createVehicle(insertVehicle: InsertVehicle): Promise<Vehicle> {
    const id = this.currentVehicleId++;
    const vehicle: Vehicle = { ...insertVehicle, id };
    this.vehicles.set(id, vehicle);
    return vehicle;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
