import styled, { css, keyframes } from "styled-components";
import {
  darkSlateBlue,
  cinnabar,
  white,
  lightGray,
} from "../../config/utils/theme";
import { lighten } from "polished";

const dotanim = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;

export const StyledButton = styled.button`
  border-radius: 21px;
  text-transform: uppercase;
  border-color: transparent;
  cursor: pointer;
  /* position: relative; */

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


    ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;
      opacity: 0.75;
      position: relative;
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${lightGray};
      color: #747474 !important;
      border: unset !important;
      box-shadow: 0px 3px 30px rgba(232, 233, 233, 0.5);

      &:hover {
        background-color: ${lightGray};
      }
    `}
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 41px;

  .dot {
    width: 0.8em;
    height: 0.8em;
    border-radius: 0.8em;
    background-color: white;
    transform: scale(0);
    display: inline-block;
    animation: ${dotanim} 2s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: calc(0.3s * 1);
    }
    &:nth-child(2) {
      animation-delay: calc(0.3s * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(0.3s * 3);
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${darkSlateBlue};
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: ${cinnabar};
    `}

    ${({ variant }) =>
    variant === "outline" &&
    css`
      background: ${white};
      .dot {
        background-color: ${darkSlateBlue};
      }
    `}
`;
