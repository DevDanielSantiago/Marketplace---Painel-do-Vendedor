import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface MenuItemProps {
  children: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function MenuItem({
  children,
  icon,
  active = false,
  onClick,
  disabled = false,
  className,
}: MenuItemProps) {
  const baseClasses = cn(
    "inline-flex items-center rounded-[10px] font-medium transition-all duration-200",
    "h-10 px-4",
    icon && "gap-2",
    "cursor-pointer select-none",

    active
      ? "text-orange-base bg-shape-shape"
      : "text-gray-300 hover:text-orange-base bg-transparent",

    disabled && "opacity-50 cursor-not-allowed pointer-events-none"
  );

  return (
    <div className={cn(baseClasses, className)} onClick={onClick}>
      {icon && <span className="flex-shrink-0">{icon}</span>}

      <span className="font-poppins text-action-sm">{children}</span>
    </div>
  );
}
