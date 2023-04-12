import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";

type TButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "children" | "onClick"
>;

export interface ButtonProps extends TButtonBaseProps {
  isLink?: boolean;
}

export function Button({ children, isLink, ...rest }: ButtonProps) {
  return (
    <MuiButton component={isLink ? "span" : "button"} disableRipple {...rest}>
      {children}
    </MuiButton>
  );
}
