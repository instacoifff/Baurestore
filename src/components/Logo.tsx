interface LogoProps {
  className?: string;
  showText?: boolean;
  inverted?: boolean;
}

const Logo = ({ className = "", showText = true, inverted = false }: LogoProps) => {
  const primaryColor = inverted ? "hsl(var(--background))" : "hsl(var(--primary))";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg 
        viewBox="0 0 60 70" 
        className="h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Building icon with vertical bars */}
        <path 
          d="M20 5 L20 45 M27 0 L27 45 M33 0 L33 45 M40 5 L40 45" 
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Bottom triangle/shield shape */}
        <path 
          d="M10 45 L30 60 L50 45" 
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Horizontal lines */}
        <line x1="0" y1="50" x2="25" y2="50" stroke={primaryColor} strokeWidth="2" />
        <line x1="35" y1="50" x2="60" y2="50" stroke={primaryColor} strokeWidth="2" />
      </svg>
      
      {showText && (
        <div>
          <span className={`font-display text-xl font-bold ${inverted ? 'text-background' : 'text-primary'}`}>
            BauRestore
          </span>
          <p className={`text-xs hidden sm:block ${inverted ? 'text-background/70' : 'text-muted-foreground'}`}>
            Ingenieurdienstleistungen
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
