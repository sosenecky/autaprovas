import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const vehicles = pgTable("vehicles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  model: text("model").notNull(),
  year: integer("year").notNull(),
  category: text("category").notNull(), // Sports Car, Luxury Sedan, SUV, Convertible
  pricePerDay: decimal("price_per_day", { precision: 10, scale: 2 }).notNull(),
  horsepower: integer("horsepower").notNull(),
  zeroToSixty: decimal("zero_to_sixty", { precision: 3, scale: 1 }).notNull(), // in seconds
  topSpeed: integer("top_speed").notNull(), // in MPH
  imageUrl: text("image_url").notNull(),
  features: text("features").array(),
  isAvailable: boolean("is_available").default(true),
  description: text("description"),
  tag: text("tag"), // Premium, Luxury, Performance, Hybrid, Classic, Convertible
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  serviceType: text("service_type").notNull(), // Luxury Rental, Chauffeur Service, Wedding Package, Experience Drive
  vehiclePreference: text("vehicle_preference"),
  pickupDate: text("pickup_date").notNull(),
  returnDate: text("return_date"),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  specialRequests: text("special_requests"),
  status: text("status").default("pending"), // pending, confirmed, cancelled
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
  initials: text("initials").notNull(),
});

export const insertVehicleSchema = createInsertSchema(vehicles).omit({
  id: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  status: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertVehicle = z.infer<typeof insertVehicleSchema>;
export type Vehicle = typeof vehicles.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
