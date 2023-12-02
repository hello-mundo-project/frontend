import styled from "styled-components";

interface CategoryTagProps {
  category: "프로젝트" | "스터디" | "해커톤";
}

interface BookmarkIconContainerProps {
  isDarkMode?: boolean;
  isActive?: boolean;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  padding: 20px 25px;
  width: 300px;
  min-height: 340px;
  background-color: transparent;
  border: 4px solid #ccbafe;
  border-radius: 30px;
  font-color: #inherit;
  font-family: "Spoqa Han Sans Neo";
  font-display: swap;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }
`;

// 헤더 부분은 카테고리 태그가 담긴다. (아직 수정)
export const CardHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-display: swap;
`;

// "누구누구 찾아요" 와 같은 타이틀 부분인데, 폰트 다시 볼 것
export const CardTitle = styled.h5`
  font-weight: bold;
  font-size: 1.3rem;
  font: #inherit;
  color: #inherit;
  background-color: transparent;
  margin-bottom: 2.2rem;
  line-height: 28px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

// 푸터 부분 : 마감일이랑 생성일 넣는 부분인데, 여기 작성자 넣을 것을 고려하기
export const DividerLine = styled.div`
  height: 1px;
  background-color: #ececec;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
`;

export const CardContent = styled.div`
  font-size: 0.8rem;
  margin: 0;
  line-height: 20px;
  font-weight: 400;
  font-display: swap;
  overflow: hidden;
  min-height: 80px;
`;

// 내용 부분
// export const CardContent = styled.div`
//   font-size: 0.8rem;
//   margin-top: 10px;
//   padding: 16px;
//   padding-bottom: 80px;
//   line-height: 20px;
//   font-weight: 400;
//   font-display: swap;
// `;

export const CardTextWrapper = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  + div {
    margin-top: 80px;
  }
`;

// 온라인 부분은 좀 더 아래로 내리기
export const ProgressWayTag = styled.span`
  display: block;
  position: absolute;
  bottom: 130px;
  left: 40px;
  margin-bottom: -60px;
  color: #inherit;
`;

export const DeadlineTag = styled.span`
  display: block;
  bottom: 30px;
  right: 16px;
  font-weight: bold;
  color: #f94669;
  font-size: 0.8rem;
  margin-left: auto;
  text-align: right;
`;

export const CardFooter = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0.3rem;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #inherit;
  border-radius: 12px;
  padding: 8px 16px;
  margin-right: 8px;
  font-size: 0.8rem;
`;

// 프로젝트/스터디/전체/해커톤 부분!
export const CategoryTag = styled.span<CategoryTagProps>`
  display: inline-block;
  background-color: transparent;
  color: "#04d98b";
  border: 3px solid
    ${(props) => {
      switch (props.category) {
        case "프로젝트":
          return "#04d98b";
        case "스터디":
          return "#BEA7FF";
        case "해커톤":
          return "#E9B0C8";
        default:
          return "#04d98b";
      }
    }};
  border-radius: 15px;
  padding: 5px 13px;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 8px;
`;

export const TagContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: -5px;
  margin: 0;
  margin-top: 1.2rem;
  min-height: 30px;
  overflow: hidden;
`;

export const SkillTag = styled(Tag)`
  background-color: transparent;
  color: #inherit;
  text-align: center;
  border: 3px solid #ffcf21;
  border-radius: 20px;
  padding: 2px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #e3f0ff;
    color: black;
  }
  margin: 0 10px 10px 0;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BookmarkIconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isDarkMode", "isActive"].includes(prop)
})<BookmarkIconContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  &:hover {
    transform: scale(1.4);
    transition: transform 0.2s ease-in-out;
  }
  svg {
    stroke: ${(props) => (props.isDarkMode ? "black" : "white")};
    fill: ${(props) => (props.isActive ? "white" : props.isDarkMode ? "white" : "#04D98B")};
  }
`;

export const CareerTag = styled.span`
  background-color: #e1e6ff;
  color: #073462;
  padding: 2px 8px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;

  margin: 4px 1px 1px 4px;
  display: inline-block;
`;
