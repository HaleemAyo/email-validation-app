// eslint-disable-next-line react/prop-types
function Button({children, onClick}) {
  return (
    <div className="btn">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
