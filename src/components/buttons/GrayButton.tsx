// components/GradientOutlineButton.tsx
import React from "react";

type GrayButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const GrayButton: React.FC<GrayButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2E2E2E] hover:shadow-2xl shadow-[rgb(var(--button-shadow))]/30 rounded-full px-6 py-4"
    >
      <div className="max-sm:text-sm text-white">{children}</div>
    </button>
  );
};

export default GrayButton;
