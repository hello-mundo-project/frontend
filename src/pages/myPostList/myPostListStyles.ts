import styled from "styled-components";

export const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

export const MyPostButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  max-width: 1000px;
  margin-bottom: 2rem;
`;

export const FilterMyPostButton = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#04D98B" : "#000")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #04d98b;
  }

  &:not(:last-child)::after {
    content: "|";
    margin-left: 10px;
    color: #ccc;
  }
`;

export const MyPostCardContainer = styled.div`
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

export const MyPostCardHeader = styled.div`
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
