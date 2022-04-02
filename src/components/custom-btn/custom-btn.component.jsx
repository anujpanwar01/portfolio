import "./custom-btn.styles.scss";
import { CustomButtonStyle } from "./custom-btn.styles";
const CustomBtn = ({ handleChange, children, ...otherProps }) => {
  return (
    <CustomButtonStyle onClick={handleChange} {...otherProps}>
      {children}
    </CustomButtonStyle>
  );
};
export default CustomBtn;
