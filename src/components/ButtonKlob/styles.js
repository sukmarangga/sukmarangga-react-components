import styled, { css } from "styled-components";
import { darkSlateBlue, cinnabar, white } from "../../config/utils/theme";
import { rem, lighten, darken } from "polished";

export const StyledButton = styled.button`
  border-radius: 21px;
  text-transform: uppercase;
  border-color: transparent;
  cursor: pointer;

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 9px 28px;
      font-size: 13px;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 6px 24px;
      font-size: 11px;
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${darkSlateBlue};
      color: ${white};
      box-shadow: 3px 4px 6px rgba(39, 53, 106, 0.5);

      &:hover {
        background: ${lighten(0.1, darkSlateBlue)}
          radial-gradient(
            circle,
            transparent 1%,
            ${lighten(0.1, darkSlateBlue)} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${lighten(0.3, darkSlateBlue)};
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: ${cinnabar};
      color: ${white};
      box-shadow: 3px 4px 6px rgba(216, 84, 72, 0.5);

      &:hover {
        background: ${lighten(0.1, cinnabar)}
          radial-gradient(circle, transparent 1%, ${lighten(0.1, cinnabar)} 1%)
          center/15000%;
      }

      &:active {
        background-color: ${lighten(0.3, cinnabar)};
      }
    `}

    ${({ variant }) =>
    variant === "outline" &&
    css`
      background: ${white};
      color: ${darkSlateBlue};
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.15);
      border: 1px solid ${darkSlateBlue};

      &:hover {
        background: ${lighten(0.7, darkSlateBlue)}
          radial-gradient(
            circle,
            transparent 1%,
            ${lighten(0.7, darkSlateBlue)} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${lighten(0.4, darkSlateBlue)};
      }
    `}
`;
