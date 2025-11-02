import * as z from "zod";

// Form Validation Schema using Zod
export const UpdateProfileSchema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  address: z.string().optional(),
  nationalId: z.string().optional(),
  licenseNumber: z.string().optional(),
  vehicleType: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehiclePlateNumber: z.string().optional(),
});

export type UpdateProfileFormValues = z.infer<typeof UpdateProfileSchema>;
