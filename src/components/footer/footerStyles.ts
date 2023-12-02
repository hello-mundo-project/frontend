import styled from "styled-components";

interface FooterTextProps {
  $twilightTheme?: TwilightPalette;
}

export const FooterWrapper = styled.footer`
  font-size: ${(props) => props.theme.fontSizes.sm};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-top: 1px solid #ccbafe;
  background-color: inherit;
  width: 100vw;
  height: 100%;
  position: relative;
  bottom: 10px;
  gap: 10px;
`;

export const FooterText = styled.p<FooterTextProps>`
  color: ${(props) => props.$twilightTheme?.text_primary};
`;

export const Logo = styled.img`
  height: 150px;
  position: absolute;
  right: 10px;
`;
