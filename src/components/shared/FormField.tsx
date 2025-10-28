/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type Control } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 

interface FormFieldInputProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control<any>;
  type?: string;
  description?: string;
}

export const FormFieldInput = ({
  name,
  label,
  placeholder,
  control,
  type = "text",
  description,
}: FormFieldInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                type={isPasswordField && showPassword ? "text" : type}
                placeholder={placeholder}
                value={field.value || ""}
                className={isPasswordField ? "pr-10" : ""}
              />
              {isPasswordField && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
