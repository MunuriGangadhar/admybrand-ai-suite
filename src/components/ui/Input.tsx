import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>) & {
  label: string;
  error?: any;
  as?: "input" | "textarea";
};

export function Input({ label, error, as = "input", className, ...props }: InputProps) {
  const Component = as;
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <Component className={clsx("w-full p-2 border rounded", error && "border-red-500", className)} {...props} />
      {error && <p className="text-red-500 text-sm">Required</p>}
    </div>
  );
}
