import styled from "styled-components";

//LogInForm 스타일
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
  background-color: inherit;
`;

export const InputWrapper = styled.div<{ $twilightTheme?: TwilightPalette }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  label {
    display: block;
    color: ${(props) => props.$twilightTheme?.text_primary};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const Input = styled.input<{ $twilightTheme?: TwilightPalette }>`
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.$twilightTheme?.background_gray};
  border: none;
  width: 100%;
  color: ${(props) => props.$twilightTheme?.text_primary};
  font-size: ${(props) => props.theme.fontSizes.sm};

  &:focus {
    outline-color: ${(props) => props.$twilightTheme?.outline_gray};
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c37c;
  }
`;

//index 스타일
export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const LinksContainer = styled.div<{ $twilightTheme?: TwilightPalette }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  a {
    margin: 0 5px;
    text-decoration: none;
    color: ${(props) => props.$twilightTheme?.text_primary};
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: bold;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: bold;
  }
`;

export const SignUpContainer = styled.div<{ $twilightTheme?: TwilightPalette }>`
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    margin-right: 5px;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.$twilightTheme?.text_secondary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.$twilightTheme?.text_primary};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;
