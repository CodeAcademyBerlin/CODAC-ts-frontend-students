import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      textDark: string;
      textLight: string;
      background: string;
    };
  }
}
