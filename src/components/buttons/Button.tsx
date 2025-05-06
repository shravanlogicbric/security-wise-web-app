// components/GradientOutlineButton.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#2E2E2E] hover:shadow-2xl shadow-[rgb(var(--button-shadow))]/30 rounded-full px-6 py-4 ${className}`}
    >
      <div className="max-sm:text-sm text-white">{children}</div>
    </button>
  );
};

export default Button;
