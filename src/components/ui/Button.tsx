import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "large",
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: cn(
      "bg-orange-base text-white border border-orange-base",
      "hover:bg-orange-dark hover:border-orange-dark",
      "focus:ring-orange-base",
      "disabled:hover:bg-orange-base disabled:hover:border-orange-base"
    ),
    secondary: cn(
      "bg-white text-orange-base border border-orange-base",
      "hover:bg-white hover:text-orange-dark hover:border-orange-dark",
      "focus:ring-orange-base",
      "disabled:hover:bg-white disabled:hover:text-orange-base disabled:hover:border-orange-base"
    ),
  };

  const sizes = {
    large: cn("h-14 px-5 text-base font-poppins", icon ? "gap-3" : ""),
    small: cn("h-10 px-4 text-sm font-poppins", icon ? "gap-2" : ""),
  };

  const loadingGap = size === "large" ? "gap-3" : "gap-2";

  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClasses,
        loading && loadingGap,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div
            className={cn(
              "animate-spin rounded-full border-b-2 border-current",
              size === "large" ? "h-5 w-5" : "h-4 w-4"
            )}
          ></div>
          <span>Carregando...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          <span>{children}</span>
          {icon && iconPosition === "right" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}
