import { cn } from "../../utils/cn";

import AccessIcon from "../../assets/icons/32px/access.svg";
import AlertCircleIcon from "../../assets/icons/32px/alert-circle.svg";
import ArrowDownIcon from "../../assets/icons/32px/arrow-down-01.svg";
import ArrowLeftIcon from "../../assets/icons/32px/arrow-left-02.svg";
import ArrowRightIcon from "../../assets/icons/32px/arrow-right-02.svg";
import ArrowUpIcon from "../../assets/icons/32px/arrow-up-01.svg";
import CalendarIcon from "../../assets/icons/32px/calendar-04.svg";
import CallIcon from "../../assets/icons/32px/call.svg";
import CancelIcon from "../../assets/icons/32px/cancel-01.svg";
import ChartHistogramIcon from "../../assets/icons/32px/chart-histogram.svg";
import ImageUploadIcon from "../../assets/icons/32px/image-upload.svg";
import LogoutIcon from "../../assets/icons/32px/logout-01.svg";
import MailIcon from "../../assets/icons/32px/mail-02.svg";
import PackageIcon from "../../assets/icons/32px/package.svg";
import PlusSignIcon from "../../assets/icons/32px/plus-sign.svg";
import SaleTagIcon from "../../assets/icons/32px/sale-tag-02.svg";
import SearchIcon from "../../assets/icons/32px/search-01.svg";
import StoreIcon from "../../assets/icons/32px/store-04.svg";
import TickIcon from "../../assets/icons/32px/tick-02.svg";
import UploadIcon from "../../assets/icons/32px/upload-04.svg";
import UnavailableIcon from "../../assets/icons/32px/unavailable.svg";
import UserMultipleIcon from "../../assets/icons/32px/user-multiple.svg";
import UserIcon from "../../assets/icons/32px/user.svg";
import ViewOffIcon from "../../assets/icons/32px/view-off.svg";
import ViewIcon from "../../assets/icons/32px/view.svg";

const icons = {
  heart: AccessIcon,
  alertCircle: AlertCircleIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUp01: ArrowUpIcon,
  calendar: CalendarIcon,
  call: CallIcon,
  cancel: CancelIcon,
  chartHistogram: ChartHistogramIcon,
  imageUpload: ImageUploadIcon,
  logout: LogoutIcon,
  mail: MailIcon,
  package: PackageIcon,
  plusSign: PlusSignIcon,
  saleTag: SaleTagIcon,
  search: SearchIcon,
  store: StoreIcon,
  tick: TickIcon,
  unavailable: UnavailableIcon,
  upload: UploadIcon,
  userMultiple: UserMultipleIcon,
  user: UserIcon,
  viewOff: ViewOffIcon,
  view: ViewIcon,
} as const;

interface IconProps {
  name: keyof typeof icons;
  size?: 16 | 20 | 24 | 32 | 40 | 48;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const IconSrc = icons[name];

  const getColorFilter = (className: string = "") => {
    if (className.includes("text-white")) {
      return "brightness(0) saturate(100%) invert(100%)";
    }
    if (className.includes("text-gray-300")) {
      return "brightness(0) saturate(100%) invert(84%) sepia(3%) saturate(234%) hue-rotate(176deg) brightness(90%) contrast(84%)";
    }
    if (className.includes("text-gray-400")) {
      return "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(378%) hue-rotate(176deg) brightness(94%) contrast(86%)";
    }
    if (className.includes("text-blue-")) {
      return "brightness(0) saturate(100%) invert(35%) sepia(95%) saturate(1654%) hue-rotate(201deg) brightness(97%) contrast(97%)";
    }
    if (className.includes("text-orange-")) {
      return "brightness(0) saturate(100%) invert(58%) sepia(75%) saturate(2618%) hue-rotate(18deg) brightness(101%) contrast(101%)";
    }
    return "none";
  };

  return (
    <img
      src={IconSrc}
      alt={name}
      width={size}
      height={size}
      className={cn("inline-block", className)}
      style={{
        filter: getColorFilter(className),
        transition: "filter 0.2s ease",
      }}
    />
  );
}
