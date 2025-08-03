import React from "react";
import clsx from "clsx";

type InputPropsBase = {
  label?: string;
  placeholder?: string;
  error?: { message?: string };
  className?: string;
};

type InputProps =
  | (InputPropsBase & { as?: "input" } & React.InputHTMLAttributes<HTMLInputElement>)
  | (InputPropsBase & { as: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export function Input(props: InputProps) {
  const { label, placeholder, error, as = "input", className, ...restProps } = props;

  // Type guard for input vs textarea props
  const isTextarea = as === "textarea";

  if (isTextarea) {
    // Return textarea with appropriate props
    return (
      <div className="mb-4">
        {label && <label className="block mb-1">{label}</label>}
        <textarea
          placeholder={placeholder}
          className={clsx("w-full p-2 border rounded", error && "border-red-500", className)}
          {...(restProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
        {error?.message && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    );
  } else {
    // Return input with appropriate props
    return (
      <div className="mb-4">
        {label && <label className="block mb-1">{label}</label>}
        <input
          placeholder={placeholder}
          className={clsx("w-full p-2 border rounded", error && "border-red-500", className)}
          {...(restProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        {error?.message && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    );
  }
}
