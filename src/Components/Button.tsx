import Arrow from "../img/icon-arrow.svg";

type ButtonProps = {
  onClikc: () => void;
};

const Button = ({ onClikc }: ButtonProps) => {
  return (
    <div className="lineBx" onClick={onClikc}>
      <button>
        <img src={Arrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default Button;
