import styled, { css } from "styled-components";

type FilterBookmarkButtonProps = {
  $isActive: boolean;
  $isLast?: boolean;
};

export const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

export const BookmarkButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  max-width: 1000px;
  margin-bottom: 2rem;
`;

export const FilterBookmarkButton = styled.span<FilterBookmarkButtonProps>`
  ${({ $isActive, $isLast }) => css`
    color: ${$isActive ? "#04d98b" : "#718096"};
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1.3rem;
    font-weight: bold;
    transition: color 0.2s;
    margin-right: ${$isLast ? "0" : "10px"};

    &:hover {
      color: ${$isActive ? "#04d98b" : "#718096"};
    }

    &:not(:last-child)::after {
      content: "|";
      padding-left: 50px;
      color: #ccc;
    }

    ${$isLast &&
    css`
      &:after {
        content: none;
      }
    `}
  `}
`;

export const BookmarkCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 1rem;
  justify-content: center;
  align-content: center;
  margin-bottom: 2rem;
  width: 1325px;
  padding: 0 2rem;
`;

export const BookmarkCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #727272;
    margin: 0;
  }
`;
