import { useDarkMode } from "@/hooks/useDarkMode";
import { PanelContact, PanelContainer, PanelContent, PanelTitle, PanelWrapper } from "./boardDetailStyles";
import { PostPanelType } from "@/types/post.d";

export const Panel = ({
  category,
  progress_way,
  city_id,
  district_id,
  expected_date = "2023-12-31",
  deadline = "D-13",
  contact
}: PostPanelType) => {
  const { twilightTheme } = useDarkMode();
  const categoryName = category?.name;
  const cityName = city_id?.name;
  const districtName = district_id?.name;
  return (
    <PanelWrapper>
      <PanelContainer $twilightTheme={twilightTheme}>
        <PanelTitle $twilightTheme={twilightTheme}>모집구분</PanelTitle>
        <PanelContent>{categoryName || "프로젝트"}</PanelContent>
        <PanelTitle $twilightTheme={twilightTheme}>진행방식</PanelTitle>
        <PanelContent>{`${progress_way || "오프라인"}/${cityName || "서울"} ${districtName || "성수동"}`}</PanelContent>
        <PanelTitle $twilightTheme={twilightTheme}>시작일</PanelTitle>
        <PanelContent>{expected_date}</PanelContent>
        <PanelTitle $twilightTheme={twilightTheme}>마감일</PanelTitle>
        <PanelContent>{deadline}</PanelContent>
        <PanelContact $twilightTheme={twilightTheme}>{contact || "오픈카톡"}</PanelContact>
      </PanelContainer>
    </PanelWrapper>
  );
};
