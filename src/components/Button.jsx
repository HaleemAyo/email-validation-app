// eslint-disable-next-line react/prop-types
function Button({text ,onClick}) {
  return (
    <div className="btn">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
