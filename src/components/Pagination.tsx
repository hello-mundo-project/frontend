//페이지네이션 부분

import React from "react";
import styled from "styled-components";

//페이지네이션 버튼 스타일 추가함!
export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const PaginationButton = styled.button`
  border: 1px solid #dddddd;
  background-color: #ffd700;
  text-align: center;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
    border-color: #04d98b;
  }

  &.active {
    background-color: #ffd63f;
    color: #ffd63f;
  }
`;

export const PaginationItem = styled.span`
  padding: 8px 16px;
`;

interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers: Array<any> = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationButton onClick={() => paginate(number)}>{number}</PaginationButton>
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
};
