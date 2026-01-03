
import Button from "../Button/Button.jsx";


export function MultiplePeopleButton({
  count = "10k+",
  label = "Students",
  image,
  disabled = false,
  onClick,
}) {
  return (
    <Button
      as="div"
      disabled={disabled}
      onClick={onClick}
      className="MultiplePeopleButton"
    >
      <div className="MultiplePeopleButton_content">
        <h4>{count}</h4>
        <h4>{label}</h4>
      </div>

      <img
       src={image}
        alt={label}
        className="MultiplePeopleButton_image"
      />
    </Button>
  );
}

