import styled from "styled-components";

export const Wrapper = styled.div<{ $twilightTheme?: TwilightPalette }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.$twilightTheme?.background_primary};
  color: ${(props) => props.$twilightTheme?.text_primary};
  transition: all 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;
