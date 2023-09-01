import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/* 10. Remove list styles on ul, ol elements
 with a list role, which suggests default styling will be
 removed 
*/
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* 11. A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* 12 remove button styles */
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
}

body{
  font-family: 'Lato', sans-serif;
}

:root{
  --map-popup-width:400px;
  --font-1: rgb(28, 32, 36);
  --river-blue: #0954A5;
  --dark-river-blue: #0a4481;
  --light-river-blue: #52A9FF;
  --faded-river-blue: #EAF6FF;
  --border-grey:#E6E6E6;
  --danger:#FFCCCC;
  --warning:#FFF1AD;
  --good: #BFF3C3;
  --blackA1: hsla(0, 0%, 0%, 0.012);
  --blackA2: hsla(0, 0%, 0%, 0.027);
  --blackA3: hsla(0, 0%, 0%, 0.047);
  --blackA4: hsla(0, 0%, 0%, 0.071);
  --blackA5: hsla(0, 0%, 0%, 0.090);
  --blackA6: hsla(0, 0%, 0%, 0.114);
  --blackA7: hsla(0, 0%, 0%, 0.141);
  --blackA8: hsla(0, 0%, 0%, 0.220);
  --blackA9: hsla(0, 0%, 0%, 0.439);
  --blackA10: hsla(0, 0%, 0%, 0.478);
  --blackA11: hsla(0, 0%, 0%, 0.565);
  --blackA12: hsla(0, 0%, 0%, 0.910);
}
`;

export default GlobalStyles;
