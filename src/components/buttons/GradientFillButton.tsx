// components/GradientOutlineButton.tsx
import React from "react";

type GradientFillButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const GradientFillButton: React.FC<GradientFillButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[var(--button-gradient-start)] via-[var(--button-gradient-end)] to-[var(--button-gradient-end)] hover:shadow-2xl shadow-[rgb(var(--button-shadow))]/30 rounded-full px-6 py-4"
    >
      <div className="max-sm:text-sm text-black">{children}</div>
    </button>
  );
};

export default GradientFillButton;
