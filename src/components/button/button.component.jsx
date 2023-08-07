import { BaseButton, GooleSigninButton, InvertedButton } from "./buton.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GooleSigninButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  console.log(CustomButton, "CustomButton");
  return (
    CustomButton !== undefined && (
      <CustomButton {...otherProps}>{children}</CustomButton>
    )
  );
};

export default Button;
