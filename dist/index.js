"use strict";require("react");var a=require("prop-types"),r=require("styled-components"),e=require("polished");function o(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=o(a),n=o(r);const i=r.keyframes`
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
`;n.default.button`
  border-radius: 21px;
  text-transform: uppercase;
  border-color: transparent;
  cursor: pointer;
  /* position: relative; */

  ${({size:a})=>"medium"===a&&r.css`
      padding: 9px 28px;
      font-size: 13px;
    `}

  ${({size:a})=>"small"===a&&r.css`
      padding: 6px 24px;
      font-size: 11px;
    `}

  ${({variant:a})=>"primary"===a&&r.css`
      background: ${"#27356a"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(39, 53, 106, 0.5);

      &:hover {
        background: ${e.lighten(.1,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${e.lighten(.1,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${e.lighten(.3,"#27356a")};
      }
    `}

  ${({variant:a})=>"secondary"===a&&r.css`
      background: ${"#d85448"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(216, 84, 72, 0.5);

      &:hover {
        background: ${e.lighten(.1,"#d85448")}
          radial-gradient(circle, transparent 1%, ${e.lighten(.1,"#d85448")} 1%)
          center/15000%;
      }

      &:active {
        background-color: ${e.lighten(.3,"#d85448")};
      }
    `}

    ${({variant:a})=>"outline"===a&&r.css`
      background: ${"#fff"};
      color: ${"#27356a"};
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.15);
      border: 1px solid ${"#27356a"};

      &:hover {
        background: ${e.lighten(.7,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${e.lighten(.7,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${e.lighten(.4,"#27356a")};
      }
    `}


    ${({isLoading:a})=>a&&r.css`
      cursor: not-allowed;
      opacity: 0.75;
      position: relative;
    `}

    ${({disabled:a})=>a&&r.css`
      cursor: not-allowed;
      background-color: ${"#e8e9e9"};
      color: #747474 !important;
      border: unset !important;
      box-shadow: 0px 3px 30px rgba(232, 233, 233, 0.5);

      &:hover {
        background-color: ${"#e8e9e9"};
      }
    `}
`,n.default.div`
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
    animation: ${i} 2s infinite ease-in-out;

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

  ${({variant:a})=>"primary"===a&&r.css`
      background: ${"#27356a"};
    `}

  ${({variant:a})=>"secondary"===a&&r.css`
      background: ${"#d85448"};
    `}

    ${({variant:a})=>"outline"===a&&r.css`
      background: ${"#fff"};
      .dot {
        background-color: ${"#27356a"};
      }
    `}
`,t.default.oneOf(["primary","secondary","outline"]),t.default.string,t.default.oneOf(["small","medium"]),t.default.bool,t.default.func,t.default.bool;
