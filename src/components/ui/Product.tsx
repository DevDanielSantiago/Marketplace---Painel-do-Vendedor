import { cn } from "../../utils/cn";

interface ProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  isAdvertised?: boolean;
  className?: string;
}

export function Product({
  name,
  price,
  description,
  image,
  category = "MÓVEL",
  isAdvertised = true,
  className,
}: ProductProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div
      className={cn(
        "relative max-w-[322px]",
        "bg-shape-white",
        "rounded-[20px]",
        "p-1",
        "border-2 border-transparent",
        "hover:border-blue-base",
        "transition-all duration-200",
        className
      )}
    >
      <div className="absolute top-3 right-3 z-10 flex gap-1">
        {" "}
        {isAdvertised && (
          <span
            className={cn(
              "bg-blue-dark !text-white",
              "font-poppins text-label-sm",
              "rounded-full",
              "py-1 px-2"
            )}
          >
            ANUNCIADO
          </span>
        )}
        <span
          className={cn(
            "bg-gray-400 !text-white",
            "font-poppins text-label-sm",
            "rounded-full",
            "py-1 px-2"
          )}
        >
          {category}
        </span>
      </div>

      <img
        src={image}
        alt={name}
        className={cn("w-full h-36", "object-cover", "rounded-2xl", "mb-1")}
      />

      <div className="p-3">
        {" "}
        <div className="flex items-start justify-between gap-4 mb-4">
          {" "}
          <h3 className="flex-1 font-poppins text-subtitle text-gray-400">
            {" "}
            {name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            {" "}
            <span className="font-poppins text-label-md text-gray-500">R$</span>
            <span className="font-dm-sans text-[18px] leading-[120%] text-gray-500">
              {formatPrice(price)}
            </span>
          </div>
        </div>
        <p className="font-poppins text-body-sm text-gray-300 line-clamp-2">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
}
