import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

function ButtonKlob({ variant, size, backgroundColor, ...props }) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

export default ButtonKlob;

ButtonKlob.propTypes = {
  /**
   * Is this the principal call to action on the page?
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
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonKlob.defaultProps = {
  backgroundColor: null,
  variant: "primary",
  size: "medium",
  onClick: undefined,
};
