import { useState } from "react";
import { cn } from "../../utils/cn";
import { Icon } from "./Icon";

interface UserProps {
  name: string;
  avatar: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onLogout?: () => void;
  className?: string;
}

export function User({
  name,
  avatar,
  isOpen: controlledIsOpen,
  onToggle,
  onLogout,
  className,
}: UserProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className={cn("relative w-fit", className)}>
      {" "}
      <button
        onClick={handleToggle}
        className={cn(
          "w-12 h-12",
          "rounded-xl",
          "border border-shape-shape",
          "overflow-hidden",
          "transition-all duration-200",
          "hover:border-orange-base",
          "focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-offset-2"
        )}
      >
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </button>
      {isOpen && (
        <div
          className={cn(
            "absolute top-[60px]",
            "right-0 z-50",
            "min-w-[200px]",
            "bg-shape-white",
            "rounded-xl",
            "p-4",
            "border border-shape-shape",
            "shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-200"
          )}
        >
          <div className="flex items-center gap-3">
            {" "}
            <img
              src={avatar}
              alt={name}
              className={cn(
                "w-8 h-8",
                "rounded-xl",
                "border border-shape-shape",
                "object-cover"
              )}
            />
            <span className="font-poppins text-body-sm text-gray-300">
              {name}
            </span>
          </div>
          <hr className="my-5 border-t border-shape-shape" />{" "}
          <button
            onClick={onLogout}
            className={cn(
              "flex items-center justify-between",
              "w-full",
              "font-poppins text-action-sm text-orange-base",
              "hover:text-orange-dark",
              "transition-colors duration-200"
            )}
          >
            <span>Sair</span>
            <Icon name="logout" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
