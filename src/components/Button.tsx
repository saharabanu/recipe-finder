interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <button className="bg-orange-500 text-white  px-6 py-2 rounded-full hover:bg-transparent hover:text-orange-500 hover:border  transition-all duration-150 delay-300">
      {title}
    </button>
  );
};

export default Button;
