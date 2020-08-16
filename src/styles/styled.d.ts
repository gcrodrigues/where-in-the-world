import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      complement: string;
      input: string;
      text: string;
      switchOn: string;
    };
  }
}
