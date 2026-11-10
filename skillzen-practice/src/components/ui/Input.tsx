import type{ FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
   label?: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  className?: string;
}

export default function Input({
  label,
  placeholder,
  registration,
  error,
  type = "text",
  className = "",
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">
        {label?.replace("*", "")}
        {label?.includes("*") && (
          <span className="text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }
          ${className}`}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}