import "./custom-btn.styles.scss";
const CustomBtn = ({ handleChange, children, ...otherProps }) => {
  return (
    <button onClick={handleChange} {...otherProps}>
      {children}
    </button>
  );
};
export default CustomBtn;
