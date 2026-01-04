import logoImage from "@/assets/logo.svg";
import logoWhiteImage from "@/assets/logo-white.svg";

interface LogoProps {
  className?: string;
  showText?: boolean;
  inverted?: boolean;
}

const Logo = ({ className = "", inverted = false }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={inverted ? logoWhiteImage : logoImage} 
        alt="BauRestore Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
