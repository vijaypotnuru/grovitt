import Image from "next/image";
import logoSrc from "@/assets/main-logo.svg";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width = 140, height = 44, className }: LogoProps) {
  return (
    <Image
      src={logoSrc}
      alt="Grovitt"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
