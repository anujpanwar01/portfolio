import { CustomInputContainer, TextArea } from "./custom-input.styles";
const CustomInput = ({ element, handleChange, name, ...otherProps }) => {
  console.log(element);
  return !element ? (
    <CustomInputContainer name={name} onChange={handleChange} {...otherProps} />
  ) : (
    <TextArea name={name} onChange={handleChange} {...otherProps} />
  );
};
export default CustomInput;
