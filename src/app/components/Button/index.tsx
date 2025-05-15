type Props = {
  children: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button = ({ children, className, onClick, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-4 bg-[#103E3A] rounded-lg py-3 px-5 cursor-pointer transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px]  hover:shadow-lg active:shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
