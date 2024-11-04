import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "px-6 py-4 text-lg tracking-tight leading-none rounded-[980px] max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-sky-600",
    secondary: "text-blue-500 border border-blue-500 border-solid"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;