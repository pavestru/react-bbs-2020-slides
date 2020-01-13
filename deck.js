import { slides as s00 } from "./slides/00-intro.mdx";
import { slides as s01 } from "./slides/01-react-hooks-intro.mdx"
import { slides as s02 } from "./slides/02-react-lifecycle-update.mdx";
import { slides as s03 } from "./slides/03-rewriting-to-hooks-live.mdx";
import { slides as s04 } from "./slides/04-js-closure.mdx";
import { slides as s05 } from "./slides/05-error-boundary.mdx";
import { slides as s06 } from "./slides/06-suspense.mdx";
import { slides as s07 } from "./slides/07-outro.mdx";

import { default as defaultTheme, syntaxHighlighterPrism } from "@mdx-deck/themes";

export const themes = [defaultTheme, syntaxHighlighterPrism];

export const slides = [
  ...s00,
  ...s01,
  ...s02,
  ...s03,
  ...s04,
  ...s05,
  ...s06,
  ...s07
];
