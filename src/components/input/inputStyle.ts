import styled from "styled-components";
import { TwilightTheme } from "@/types/twilightTheme";

export const InputLabel = styled.label<TwilightTheme>`
  display: inline-block;
  margin-bottom: 12px;
  color: ${(props) => props.$twilightTheme?.text_primary};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 600;
`;

export const InputBar = styled.input<TwilightTheme>`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 17px 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.$twilightTheme?.outline_gray};
  color: ${(props) => props.$twilightTheme?.text_primary};
  background: ${(props) => props.$twilightTheme?.background_primary};
  &:hover {
    border: 1px solid ${(props) => props.$twilightTheme?.text_primary};
  }
  &::selection {
    background: ${(props) => props.$twilightTheme?.background_primary};
  }
`;
