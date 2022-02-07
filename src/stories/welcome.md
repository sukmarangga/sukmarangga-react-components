<p align="center"> <img src="https://static.klob.id/img/klob_logo_white.png" alt="klob Logo" /> </p>
Klob UI Storybook
klob-ui is a collection of React components, developed by Klob developer team.

Installation
Install with npm or yarn

npm i klob-ui

# OR

yarn add klob-ui

Usage
import React from "react";
import { H1 } from "klob-ui";

<H1>Klob.id</H1>;
Notes
Before using klob-ui components on your project. Wrap your root component, with klob-ui

import React from "react";
import { KlobUI } from "klob-ui";

<KlobUI>
  <App>
</KlobUI>
