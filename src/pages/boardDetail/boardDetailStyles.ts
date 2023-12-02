import { TwilightTheme } from "@/types/twilightTheme";
import { responsiveStyle } from "@/utils/responsiveStyle";
import styled, { css } from "styled-components";

const textCenter = css`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
`;

export const InnerWrapper = styled.div`
  margin: 16px auto 0;
  width: 85%;
`;

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

export const TitleTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleStyle = styled.div`
  margin-right: 32px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  ${(props) =>
    responsiveStyle({
      mobileStyles: `font-size: ${props.theme.fontSizes.md};`,
      desktopStyles: `font-size: ${props.theme.fontSizes.lg};`
    })};
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TitleBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 16px;
`;

export const UserInfoAndWriteAt = styled.div`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const NickName = styled.span`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const PostCreatedAt = styled.span<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.$twilightTheme?.text_secondary};
  vertical-align: top;
  &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 4px 8px 0;
    background-color: ${(props) => props.$twilightTheme?.outline_gray};
  }
`;

export const ViewWrapper = styled.div<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const DivideLine = styled.div<TwilightTheme>`
  margin: 24px 0;
  color: ${(props) => props.$twilightTheme?.outline_gray};
  border-top: 1.5px solid;
  border-bottom: none;
  height: 1px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  position: relative;
  min-width: 360px;
  padding-bottom: 32px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const DescriptionAndInnerContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) and (max-width: ${(props) =>
      props.theme.breakpoints.desktop - 1}px) {
    width: 55%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    width: 66%;
  }
`;

export const DescriptionWrapper = styled.div`
  padding-top: 8px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding-top: 24px;
  }
`;

export const DescriptionInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  & + & {
    margin-top: 32px;
  }
`;

export const DescriptionTitle = styled.div<TwilightTheme>`
  margin-right: 20px;
  color: ${(props) => props.$twilightTheme?.text_secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const DescriptionChipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const DescriptionChip = styled.div<TwilightTheme>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.primary};
  padding: 4px 16px;
  margin: auto 0;
  background: ${(props) => props.$twilightTheme?.background_gray};
  border-radius: 15px;

  & + & {
    margin-left: 8px;
  }
`;

export const DescriptionTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const DescriptionTag = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  & + & {
    margin-left: 8px;
  }
`;

export const DescriptionTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const DescriptionText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const InnerContentWrapper = styled.div`
  margin: 80px 0 32px;
`;

export const ContentTitle = styled.div`
  ${(props) =>
    responsiveStyle({
      mobileStyles: `font-size: ${props.theme.fontSizes.md};`,
      desktopStyles: `font-size: ${props.theme.fontSizes.lg};`
    })};
`;

export const ContentText = styled.div`
  white-space: pre-line;
`;

export const PanelWrapper = styled.div`
  padding-top: 8px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) {
    height: 1px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    position: relative;
  }
`;

export const PanelContainer = styled.div<TwilightTheme>`
  border-radius: 6px;
  min-width: 160px;
  padding: 20px;
  background: ${(props) => props.$twilightTheme?.background_gray};
  ${responsiveStyle({
    mobileStyles: `width: 240px;`,
    desktopStyles: `width: 280px;`
  })};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const PanelInnerContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const PanelTitle = styled.div<TwilightTheme>`
  color: ${(props) => props.$twilightTheme?.text_secondary};
  padding-bottom: 4px;
  ${(props) =>
    responsiveStyle({
      mobileStyles: `font-size: ${props.theme.fontSizes.xxs};`,
      desktopStyles: `font-size: ${props.theme.fontSizes.xs};`
    })};
  ${textCenter}
`;

export const PanelContent = styled.div`
  margin-bottom: 16px;
  ${(props) =>
    responsiveStyle({
      mobileStyles: `font-size: ${props.theme.fontSizes.xs};`,
      desktopStyles: `font-size: ${props.theme.fontSizes.sm};`
    })};
  ${textCenter}
`;

export const PanelContact = styled.button<TwilightTheme>`
  color: ${(props) => props.$twilightTheme?.text_secondary};
  border: none;
  background: none;
  padding: 0;
  margin: 0 auto;

  border-radius: 10%;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: flex;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background: ${(props) => props.$twilightTheme?.background_gray};
  }
`;
