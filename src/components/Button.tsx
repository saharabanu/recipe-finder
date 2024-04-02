interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onClick}) => {
  return (

    <button className="bg-orange-500 text-white  px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-150 delay-300 " onClick={onClick}>
      {title}
    </button>

  );
};

export default Button;
