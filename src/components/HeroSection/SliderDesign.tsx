import Button from "../Button";
interface SliderDesignProps {
    text: string;
    img: string;
}

const SliderDesign: React.FC<SliderDesignProps> = ({ text, img }) => {
    return (
        <div className="lg:grid grid-cols-2">
            <div className="flex items-center">
                <div>
                    <h1 className="text-black font-bold text-3xl">{text}</h1>
                    <Button title="Read More" />
                </div>
            </div>
            <div className="sliderImage">
                <img src={img} alt={text} className="rounded"/>
            </div>

        </div>
    );
};

export default SliderDesign;