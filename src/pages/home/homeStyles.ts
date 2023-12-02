import styled, { css } from "styled-components";

type FilterCardsOptionProps = {
  $isActive: boolean;
  $isLast?: boolean;
};

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
`;

export const MainContent = styled.main`
  margin: 0 auto;
  width: 95%;
  flex: 1;
  padding: 20px;
  padding-bottom: 60px;
  margin-bottom: 100px;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e1e1e1;
  margin: 20px 0;
`;

export const CardList = styled.div`
  width: 1325px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 0 20px;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: start;
`;

// 바를 넣어서 조건부 섹션 분리해줌! 그리고 다크모드일 때 색 전환 넣음
export const FilterCardsOption = styled.span<FilterCardsOptionProps>`
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

// export const FilterCardsButton = styled.button<{ $isActive: boolean }>`
//   background-color: ${({ $isActive }) => ($isActive ? "#04D98B" : "white")};
//   color: ${({ $isActive }) => ($isActive ? "white" : "black")};
//   border: none;
//   border-radius: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   transition:
//   background-color 0.2s,
//   box-shadow 0.2s,
//   color 0.2s;
//   box-shadow: ${({ $isActive }) => ($isActive ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "0px 4px 8px rgba(0, 0, 0, 0.1)")};

//   :hover {
//     background-color: #f0f0f0;
//     color: black;
//     box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
//   }

//   :active {
//     background-color: #04d98b;
//     color: #ffffff;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//   }
// `;

export const FilterSearchWrapper = styled.div`
display: flex;
flex-direction: column; 
justify - content: flex - start;
align - items: center;
padding: 1rem 0;
row-gap: 20px;
column-gap: 10px; 
margin: 0 auto;
margin-top: 40px;
padding: 0 0px;
width: 1325px;
`;

export const FilterCardsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
`;

// 드롭 부분인데... 이거 나중에 훅으로 빼기
export const FilterDropButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 16px;
  color: #inherit;
  width: 100%;
`;

// export const FilterDropButtonsWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   row-gap: 20px;
//   column-gap: 10px;
//   margin: 0 auto;
//   margin-bottom: 20px;
//   padding: 0 20px;
//   width: 1325px;
// `;

export const DropdownsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 16px;
  color: #inherit;
  width: 100%;
`;

export const Dropdown = styled.select`
  justify-content: space-between;
  padding: 8px 16px;
  minheight: 40px;
  gap: 40px;
  height: 40px;
  border: 3px solid #04d98b;
  background-color: transparent;
  color: #718096;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: #inherit;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;

  &:hover {
    border: 2px solid #eee;
  }
  &::after {
    margin-left: 0.5em;
    position: absolute;
    display: inline-block;
    margin-left: 0.5em;

    content: "▼";
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const HomeDropdown = styled(Dropdown)`
  & option {
    background-color: transparent;
  }
`;

// 인기글 타이틀 컨테이너 부분임
export const PopularPostsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px auto;
  padding: 0 20px;
  width: 1325px;
`;

// 인기글 타이틀 스타일
export const PopularPostsTitle = styled.h3`
font - size: 1.3em;
align - items: center;
font-weight: bold;
`;
