import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import Welcome from "./welcome.md";

//import { Welcome } from "@storybook/react/demo";

storiesOf("Klob UI|Introduction", module).add(
  "Getting Started",
  () => <div />,
  {
    info: {
      text: Welcome,
      header: false,
      inline: true,
      styles: {
        infoBody: {
          padding: "20px 100px 100px",
        },
      },
    },
  }
);
