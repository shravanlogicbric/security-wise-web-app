// components/GradientOutlineButton.tsx
import React from "react";

type GradientOutlineButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const GradientOutlineButton: React.FC<GradientOutlineButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-[var(--button-gradient-start)] via-[var(--button-gradient-end)] to-[var(--button-gradient-end)] hover:shadow-2xl shadow-[rgb(var(--button-shadow))]/30"
    >
      <div className="bg-[var(--bg-color)] rounded-full px-6 py-4 m-0.5">
        <div className="bg-clip-text max-sm:text-sm text-transparent bg-gradient-to-r from-[var(--button-gradient-end)] via-[var(--button-gradient-end)] to-[var(--button-gradient-end)]">
          {children}
        </div>
      </div>
    </button>
  );
};

export default GradientOutlineButton;
