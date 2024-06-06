import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  /* HEADINGS font: */

  .space-mono {
    .space-mono-regular {
      font-family: "Space Mono", monospace;
      font-weight: 400;
      font-style: normal;
      color: #FFFFFF; 
    }
    
    .space-mono-bold {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      font-style: normal;
      color: #FFFFFF; 
    }
    
    .space-mono-regular-italic {
      font-family: "Space Mono", monospace;
      font-weight: 400;
      font-style: italic;
      color: #FFFFFF;
    }
    
    .space-mono-bold-italic {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      font-style: italic;
      color: #FFFFFF;
    }
  }

  /* TEXT font: */

  .roboto-mono {
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #FFE4C4;
  }
`;

export const Fonts = () => {
  return <GlobalFonts />;
};
