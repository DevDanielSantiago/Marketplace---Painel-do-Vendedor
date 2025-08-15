import { useState, useRef } from "react";
import { cn } from "../../utils/cn";
import { Icon } from "./Icon";

interface ImageUploadProps {
  size: "small" | "large";
  image?: string | null;
  text?: string;
  onImageSelect?: (file: File) => void;
  className?: string;
}

export function ImageUpload({
  size,
  image,
  text = "Selecione a imagem do produto",
  onImageSelect,
  className,
}: ImageUploadProps) {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageSelect) {
      onImageSelect(file);
    }
  };

  const sizeConfig = {
    small: {
      container: "w-[120px] h-[120px] rounded-[12px]",
      icon: 32,
      showText: false,
    },
    large: {
      container: "w-[415px] h-[340px] rounded-[20px]",
      icon: 40,
      showText: true,
    },
  };

  const config = sizeConfig[size];

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative overflow-hidden",
          "cursor-pointer",
          "transition-all duration-200",
          config.container,
          !image && [
            "bg-shape-shape",
            "flex flex-col items-center justify-center",
          ]
        )}
      >
        {!image ? (
          <>
            <Icon
              name="imageUpload"
              className="text-gray-300 mb-4"
              size={config.icon as 32 | 40}
            />
            {config.showText && (
              <div className="w-[159px]">
                {" "}
                <span className="font-poppins text-body-sm text-gray-300 text-center block">
                  {text}
                </span>
              </div>
            )}
          </>
        ) : (
          <>
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-cover"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                <Icon
                  name="imageUpload"
                  className="text-white mb-4"
                  size={config.icon as 32 | 40}
                />
                {config.showText && (
                  <div className="w-[159px]">
                    {" "}
                    <span className="font-poppins text-body-sm text-white text-center block">
                      {text}
                    </span>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
