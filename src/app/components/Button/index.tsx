type Props = {
  children: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-4 bg-[#103E3A] rounded-lg py-3 px-5 cursor-pointer transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px]  hover:shadow-lg active:shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
