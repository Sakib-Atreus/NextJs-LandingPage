export interface ButtonGradientProps {
    text: string;
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({ text }) => {
    return (
        <div>
            <button className="btn text-white font-normal bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">
                {text}
            </button>
        </div>
    );
};

export default ButtonGradient;
