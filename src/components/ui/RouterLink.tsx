import {
  Link as ReactRouterLink,
  type LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface RouterLinkProps extends Omit<ReactRouterLinkProps, "to"> {
  children: ReactNode;
  to: string; // Rotas internas do React Router
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

export function RouterLink({
  children,
  to,
  icon,
  iconPosition = "left",
  disabled = false,
  className,
  ...props
}: RouterLinkProps) {
  const baseClasses = cn(
    "inline-flex items-center font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-offset-2 rounded-sm",
    "px-0.5", // padding lateral 2px
    icon && "gap-2", // gap 8px entre ícone e texto
    disabled && "opacity-50 cursor-not-allowed pointer-events-none"
  );

  const textClasses = cn(
    "font-poppins text-action-sm text-orange-base", // Estado padrão: laranja
    "hover:text-orange-dark", // Estado hover: laranja escuro
    disabled && "hover:text-orange-base" // Disabled: não muda no hover
  );

  // Se disabled, renderiza um span ao invés de Link
  if (disabled) {
    return (
      <span className={cn(baseClasses, textClasses, className)}>
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0">{icon}</span>
        )}

        <span>{children}</span>

        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    );
  }

  return (
    <ReactRouterLink
      to={to}
      className={cn(baseClasses, textClasses, className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </ReactRouterLink>
  );
}
