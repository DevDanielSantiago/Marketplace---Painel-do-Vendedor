import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

export function Link({
  children,
  icon,
  iconPosition = "left",
  disabled = false,
  className,
  ...props
}: LinkProps) {
  const baseClasses = cn(
    "inline-flex items-center font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-offset-2 rounded-sm",
    "px-0.5",
    icon && "gap-2",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none"
  );

  const textClasses = cn(
    "font-poppins text-action-sm text-orange-base",
    "hover:text-orange-dark",
    disabled && "hover:text-orange-base"
  );

  return (
    <a className={cn(baseClasses, textClasses, className)} {...props}>
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </a>
  );
}
