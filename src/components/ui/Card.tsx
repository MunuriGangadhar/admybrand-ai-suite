import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("p-6 rounded-xl shadow-md bg-white", className)}>
      {children}
    </div>
  );
}
