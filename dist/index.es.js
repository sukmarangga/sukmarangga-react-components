import a from"react";import r from"prop-types";import o,{keyframes as e,css as n}from"styled-components";import{lighten as t}from"polished";function i(){return i=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e])}return a},i.apply(this,arguments)}const c=e`
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
`,d=o.button`
  border-radius: 21px;
  text-transform: uppercase;
  border-color: transparent;
  cursor: pointer;
  /* position: relative; */

  ${({size:a})=>"medium"===a&&n`
      padding: 9px 28px;
      font-size: 13px;
    `}

  ${({size:a})=>"small"===a&&n`
      padding: 6px 24px;
      font-size: 11px;
    `}

  ${({variant:a})=>"primary"===a&&n`
      background: ${"#27356a"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(39, 53, 106, 0.5);

      &:hover {
        background: ${t(.1,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${t(.1,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${t(.3,"#27356a")};
      }
    `}

  ${({variant:a})=>"secondary"===a&&n`
      background: ${"#d85448"};
      color: ${"#fff"};
      box-shadow: 3px 4px 6px rgba(216, 84, 72, 0.5);

      &:hover {
        background: ${t(.1,"#d85448")}
          radial-gradient(circle, transparent 1%, ${t(.1,"#d85448")} 1%)
          center/15000%;
      }

      &:active {
        background-color: ${t(.3,"#d85448")};
      }
    `}

    ${({variant:a})=>"outline"===a&&n`
      background: ${"#fff"};
      color: ${"#27356a"};
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.15);
      border: 1px solid ${"#27356a"};

      &:hover {
        background: ${t(.7,"#27356a")}
          radial-gradient(
            circle,
            transparent 1%,
            ${t(.7,"#27356a")} 1%
          )
          center/15000%;
      }

      &:active {
        background-color: ${t(.4,"#27356a")};
      }
    `}


    ${({isLoading:a})=>a&&n`
      cursor: not-allowed;
      opacity: 0.75;
      position: relative;
    `}

    ${({disabled:a})=>a&&n`
      cursor: not-allowed;
      background-color: ${"#e8e9e9"};
      color: #747474 !important;
      border: unset !important;
      box-shadow: 0px 3px 30px rgba(232, 233, 233, 0.5);

      &:hover {
        background-color: ${"#e8e9e9"};
      }
    `}
`,s=o.div`
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
    animation: ${c} 2s infinite ease-in-out;

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

  ${({variant:a})=>"primary"===a&&n`
      background: ${"#27356a"};
    `}

  ${({variant:a})=>"secondary"===a&&n`
      background: ${"#d85448"};
    `}

    ${({variant:a})=>"outline"===a&&n`
      background: ${"#fff"};
      .dot {
        background-color: ${"#27356a"};
      }
    `}
`;function l({variant:r,size:o,backgroundColor:e,isLoading:n,disabled:t,...c}){return a.createElement(d,i({variant:r,size:o,style:e&&{backgroundColor:e},isLoading:n&&!t||!1,disabled:t||!1},c),c.children,n&&!t&&a.createElement(p,{className:c.className,variant:r}))}function p({className:r,variant:o}){return a.createElement(s,{className:r,variant:o},a.createElement("div",{className:"dot"}),a.createElement("div",{className:"dot"}),a.createElement("div",{className:"dot"}))}l.propTypes={variant:r.oneOf(["primary","secondary","outline"]),backgroundColor:r.string,size:r.oneOf(["small","medium"]),isLoading:r.bool,onClick:r.func,disabled:r.bool},l.defaultProps={backgroundColor:null,variant:"primary",size:"medium",isLoading:!1,onClick:void 0,disabled:!1};export{l as Button};
