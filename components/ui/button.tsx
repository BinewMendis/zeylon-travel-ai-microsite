import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-border hover:bg-card",
  }

  const sizes = {
    default: "h-10 px-4",
    lg: "h-12 px-8 text-lg",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}