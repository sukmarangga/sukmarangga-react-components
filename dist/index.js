"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("react"),e=require("prop-types"),r=require("styled-components"),t=require("polished");function o(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=o(a),i=o(e),l=o(r);function s(){return s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},s.apply(this,arguments)}const d=r.keyframes`
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
`,c=l.default.button`
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
        background: ${t.lighten(.1,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${t.lighten(.1,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${t.lighten(.3,"#27356a")};
      }
    `}

  ${({variant:a})=>"secondary"===a&&r.css`
      background: ${"#d85448"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(216, 84, 72, 0.5);

      &:hover {
        background: ${t.lighten(.1,"#d85448")}
          radial-gradient(circle, transparent 1%, ${t.lighten(.1,"#d85448")} 1%)
          center/15000%;
      }

      &:active {
        background-color: ${t.lighten(.3,"#d85448")};
      }
    `}

    ${({variant:a})=>"outline"===a&&r.css`
      background: ${"#fff"};
      color: ${"#27356a"};
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.15);
      border: 1px solid ${"#27356a"};

      &:hover {
        background: ${t.lighten(.7,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${t.lighten(.7,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${t.lighten(.4,"#27356a")};
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
`,u=l.default.div`
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
    animation: ${d} 2s infinite ease-in-out;

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
`;function p({variant:a,size:e,backgroundColor:r,isLoading:t,disabled:o,...i}){return n.default.createElement(c,s({variant:a,size:e,style:r&&{backgroundColor:r},isLoading:t&&!o||!1,disabled:o||!1},i),i.children,t&&!o&&n.default.createElement(f,{className:i.className,variant:a}))}function f({className:a,variant:e}){return n.default.createElement(u,{className:a,variant:e},n.default.createElement("div",{className:"dot"}),n.default.createElement("div",{className:"dot"}),n.default.createElement("div",{className:"dot"}))}p.propTypes={variant:i.default.oneOf(["primary","secondary","outline"]),backgroundColor:i.default.string,size:i.default.oneOf(["small","medium"]),isLoading:i.default.bool,onClick:i.default.func,disabled:i.default.bool},p.defaultProps={backgroundColor:null,variant:"primary",size:"medium",isLoading:!1,onClick:void 0,disabled:!1},exports.ButtonKlob=p;
