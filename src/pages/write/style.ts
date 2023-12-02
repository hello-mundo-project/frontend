import { TwilightTheme } from "@/types/twilightTheme";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const InnerWrapper = styled.div`
  padding: 60px 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
`;

export const Section = styled.section`
  box-sizing: inherit;
`;

export const SectionMargin = styled.section`
  margin-bottom: 20px;
`;

export const PostContentWrapper = styled.div<TwilightTheme>`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 36px;
  border-bottom: 1px solid ${(props) => props.$twilightTheme?.outline_gray};
  color: ${(props) => props.$twilightTheme?.text_primary};
`;

export const ContentIndexBackground = styled.div`
  position: relative;
  height: 20px;
  min-width: 20px;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.primary};
  margin-right: 12px;
`;

export const ContentIndex = styled.span<TwilightTheme>`
  position: absolute;
  top: 4px;
  left: 6.5px;
  font-size: ${(props) => props.theme.fontSizes.xxs};
  color: ${(props) => props.$twilightTheme?.background_primary};
`;

export const ContentText = styled.div<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 600;
  min-width: 400px;
  color: ${(props) => props.$twilightTheme?.text_primary};
`;

export const InputList = styled.ul`
  margin-top: 40px;
  display: flex;
  gap: 15px;
`;

export const ListItem = styled.li`
  flex: 1 1;
`;

export const InfoSelect = styled.select<TwilightTheme>`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 16px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.$twilightTheme?.outline_gray};
  color: ${(props) => props.$twilightTheme?.text_secondary};
  background-color: ${(props) => props.$twilightTheme?.background_primary};
  &:hover {
    border: 1px solid ${(props) => props.$twilightTheme?.text_primary};
  }
`;

export const SelectOption = styled.option<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.$twilightTheme?.text_secondary};
`;

export const ContentEditorWrapper = styled.div`
  margin-top: 16px;
`;

export const ContentEditorContainer = styled.div<TwilightTheme>`
  border: 1px solid ${(props) => props.$twilightTheme?.outline_gray};
  font-size: ${(props) => props.theme.fontSizes.sm};
  height: 100%;
  margin: 0;
  position: relative;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  & > button {
    margin-left: 12px;
  }
  & > button:hover {
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 400;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px 16px;
  color: ${(props) => props.$twilightTheme?.text_primary};
  border: none;
`;

export const CancelButton = styled.button<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 400;
  border-radius: 4px;
  background: ${(props) => props.$twilightTheme?.background_gray};
  padding: 8px 16px;
  color: ${(props) => props.$twilightTheme?.text_primary};
  border: none;
`;
