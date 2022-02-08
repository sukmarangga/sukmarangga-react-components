import"react";import r from"prop-types";import a,{keyframes as o,css as e}from"styled-components";import{lighten as n}from"polished";const t=o`
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
`;a.button`
  border-radius: 21px;
  text-transform: uppercase;
  border-color: transparent;
  cursor: pointer;
  /* position: relative; */

  ${({size:r})=>"medium"===r&&e`
      padding: 9px 28px;
      font-size: 13px;
    `}

  ${({size:r})=>"small"===r&&e`
      padding: 6px 24px;
      font-size: 11px;
    `}

  ${({variant:r})=>"primary"===r&&e`
      background: ${"#27356a"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(39, 53, 106, 0.5);

      &:hover {
        background: ${n(.1,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${n(.1,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${n(.3,"#27356a")};
      }
    `}

  ${({variant:r})=>"secondary"===r&&e`
      background: ${"#d85448"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(216, 84, 72, 0.5);

      &:hover {
        background: ${n(.1,"#d85448")}
          radial-gradient(circle, transparent 1%, ${n(.1,"#d85448")} 1%)
          center/15000%;
      }

      &:active {
        background-color: ${n(.3,"#d85448")};
      }
    `}

    ${({variant:r})=>"outline"===r&&e`
      background: ${"#fff"};
      color: ${"#27356a"};
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.15);
      border: 1px solid ${"#27356a"};

      &:hover {
        background: ${n(.7,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${n(.7,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${n(.4,"#27356a")};
      }
    `}


    ${({isLoading:r})=>r&&e`
      cursor: not-allowed;
      opacity: 0.75;
      position: relative;
    `}

    ${({disabled:r})=>r&&e`
      cursor: not-allowed;
      background-color: ${"#e8e9e9"};
      color: #747474 !important;
      border: unset !important;
      box-shadow: 0px 3px 30px rgba(232, 233, 233, 0.5);

      &:hover {
        background-color: ${"#e8e9e9"};
      }
    `}
`,a.div`
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
    animation: ${t} 2s infinite ease-in-out;

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

  ${({variant:r})=>"primary"===r&&e`
      background: ${"#27356a"};
    `}

  ${({variant:r})=>"secondary"===r&&e`
      background: ${"#d85448"};
    `}

    ${({variant:r})=>"outline"===r&&e`
      background: ${"#fff"};
      .dot {
        background-color: ${"#27356a"};
      }
    `}
`,r.oneOf(["primary","secondary","outline"]),r.string,r.oneOf(["small","medium"]),r.bool,r.func,r.bool;
