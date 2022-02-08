import React from "react";
import PropTypes from "prop-types";

import { StyledButton, Loader } from "./styles";

function ButtonKlob({
  variant,
  size,
  backgroundColor,
  isLoading,
  disabled,
  ...props
}) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      style={backgroundColor && { backgroundColor }}
      isLoading={(isLoading && !disabled) || false}
      disabled={disabled || false}
      {...props}
    >
      {props.children}
      {isLoading && !disabled && (
        <Loading className={props.className} variant={variant} />
      )}
    </StyledButton>
  );
}

export default ButtonKlob;

function Loading({ className, variant }) {
  return (
    <Loader className={className} variant={variant}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </Loader>
  );
}

ButtonKlob.propTypes = {
  /**
   * What variant ?
   */
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium"]),
  /**
   * show loading
   */
  isLoading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * What variant ?
   */
  disabled: PropTypes.bool,
};

ButtonKlob.defaultProps = {
  backgroundColor: null,
  variant: "primary",
  size: "medium",
  isLoading: false,
  onClick: undefined,
  disabled: false,
};
