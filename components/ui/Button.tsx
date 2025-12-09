import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/50",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === 'primary' && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;