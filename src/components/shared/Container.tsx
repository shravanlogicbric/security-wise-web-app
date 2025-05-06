interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`md:px-[var(--main-x-padding)] max-md:px-4 ${className} `}>
      {children}
    </div>
  );
};
