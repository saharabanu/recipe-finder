interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onClick}) => {
  return (

    

    <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group" ><span className="w-60 h-48 rounded rotate-[-40deg] bg-[#FC5201] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" onClick={onClick}></span><span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white" onClick={onClick}>{title}</span></button>




  );
};

export default Button;
