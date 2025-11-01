import { z } from "zod";

export const driverRegisterSchema = z.object({
  licenseNumber: z.string().min(1, { message: "License number is required" }),
  nationalId: z.string().min(1, { message: "National ID is required" }),
  vehicle: z.object({
    make: z.string().min(1, { message: "Vehicle make is required" }),
    model: z.string().min(1, { message: "Vehicle model is required" }),
    plateNumber: z.string().min(1, { message: "Plate number is required" }),
  }),
});

export type RegisterFormData = z.infer<typeof driverRegisterSchema>;
