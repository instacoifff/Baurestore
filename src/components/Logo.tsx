import logoImage from "@/assets/logo.svg";

interface LogoProps {
  className?: string;
  showText?: boolean;
  inverted?: boolean;
}

const Logo = ({ className = "", inverted = false }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="BauRestore Logo" 
        className={`h-10 w-auto ${inverted ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
