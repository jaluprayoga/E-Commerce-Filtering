const Button = ({ onClickHandler, value, title, name }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns" name={name}>
      {title}
    </button>
  );
};

export default Button;
