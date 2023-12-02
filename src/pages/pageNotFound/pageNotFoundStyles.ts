import styled from "styled-components";

interface FooterTextProps {
  $twilightTheme?: TwilightPalette;
}

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Logo = styled.img`
  width: 500px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Text404 = styled.div`
  font-size: 100px;
  font-weight: bold;
`;

export const PageNotFoundText1 = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const PageNotFoundText2 = styled.div`
  font-size: 30px;
  width: 800px;
`;

export const Button = styled.button<FooterTextProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 200px;
  border-radius: 6px;
  padding: 12px 10px;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #00c37c;
  }
`;
