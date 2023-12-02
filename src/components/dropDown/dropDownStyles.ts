import { TwilightTheme } from "@/types/twilightTheme";
import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const SelectContainer = styled.div`
  width: 95%;
`;

export const TagContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
`;

export const TagInfo = styled.span<TwilightTheme>`
  border: 1px solid ${(props) => props.$twilightTheme?.outline_gray};
  display: inline-block;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.$twilightTheme?.background_primary};
  border-radius: 2px;
  cursor: pointer;
`;
