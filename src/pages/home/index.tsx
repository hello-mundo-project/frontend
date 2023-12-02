import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Carousel } from "./Carousel";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@/components/Pagination";

import {
  HomeWrapper,
  MainContent,
  CardList,
  FilterCardsOption,
  FilterSearchWrapper,
  FilterDropButtonsWrapper,
  DropdownsWrapper,
  HomeDropdown,
  PopularPostsHeader,
  PopularPostsTitle
} from "./homeStyles";

import {
  ProgressWay,
  Category,
  Duration,
  Career,
  Skill
  // City,
  // District,
  // Dates,
  // Times
} from "../../types/component";

interface CardData {
  id: number;
  progress_way: ProgressWay;
  category: Category;
  duration: Duration;
  title: string;
  skill: Skill[];
  city: string | null;
  district: string | null;
  deadline: string;
  created?: string;
  headcount: number;
  expected_date?: string;
  recruit_status: boolean;
  deleted?: string | null;
  contact: string;
  tags: string[];
  content: string;
  onRemoveBookmark?: () => Promise<void>;
  career: Career;
}

const filterCardsOptions = ["전체", "프로젝트", "스터디", "해커톤"];

export const Home: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);
  const [activeFilter, setActiveFilter] = useState("전체");
  const [techStack, setTechStack] = useState("기술 스택");
  const [selectedCareer, setSelectedCareer] = useState("전체");
  const [progressWay, setProgressWay] = useState("진행방식");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  const navigate = useNavigate();

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 데이터를 불러오는 부분을 수정하여 마감일로 정렬한 리스트 (이거는 목업 데이터로!)
  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await axios.get("/mockData/CardsData.json");
        const allCards = response.data.CardsData || [];

        const sortedCardsData = allCards.sort((a, b) => {
          const deadlineA = new Date(a.deadline).getTime();
          const deadlineB = new Date(b.deadline).getTime();
          return deadlineA - deadlineB;
        });

        setCardsData(sortedCardsData);
        setFilteredCards(sortedCardsData);
      } catch (error) {
        console.error("데이터를 불러오지 못했습니다: ", error);
      }
    };

    fetchCardsData();
  }, []);

  // 데이터를 불러오는 부분 (이건 서버 데이터로!)
  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await axios.get("/mockData/CardsData.json");
        const allCards = response.data.CardsData || [];
        setCardsData(allCards);
        setFilteredCards(allCards);
      } catch (error) {
        console.error("데이터를 불러오지 못했습니다: ", error);
      }
    };

    fetchCardsData();
  }, []);

  // 카테고리 필터링
  useEffect(() => {
    setFilteredCards(
      activeFilter === "전체" ? cardsData : cardsData.filter((card) => card.category.name === activeFilter)
    );
  }, [activeFilter, cardsData]);

  //기술 스택 필터링
  useEffect(() => {
    const filterByTechStack = () => {
      if (techStack === "기술 스택") {
        return cardsData;
      } else {
        return cardsData.filter((card) => card.skill.some((skill) => skill.name === techStack));
      }
    };

    setFilteredCards(filterByTechStack());
  }, [techStack, cardsData]);

  // 커리어 필터링
  useEffect(() => {
    const filterByCareer = () => {
      if (selectedCareer === "전체") {
        return cardsData;
      } else {
        return cardsData.filter((card) => card.career.name === selectedCareer);
      }
    };

    setFilteredCards(filterByCareer());
  }, [selectedCareer, cardsData]);

  // 진행방식 필터링
  useEffect(() => {
    const filterByProgressWay = () => {
      if (progressWay === "전체") {
        return cardsData;
      } else {
        return cardsData.filter((card) => card.progress_way === progressWay);
      }
    };

    setFilteredCards(filterByProgressWay());
  }, [progressWay, cardsData]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const techStackOptions = [
    "기술 스택",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Svelte",
    "Nextjs",
    "Nodejs",
    "Java",
    "Spring",
    "Go",
    "Nestjs",
    "Kotlin",
    "Express",
    "MySQL",
    "MongoDB",
    "Python",
    "Django",
    "php",
    "GraphQL",
    "Firebase",
    "Flutter",
    "Swift",
    "ReactNative",
    "Unity",
    "AWS",
    "Kubernetes",
    "Docker",
    "Git",
    "Figma",
    "Zeplin",
    "Jest"
  ];
  const careerOptions = ["전체", "프론트엔드", "백엔드", "모바일", "기타"];
  const progressWayOptions = ["진행방식", "전체", "온라인", "오프라인", "온/오프라인"];

  function moveToPostDetail(id: string | number) {
    navigate(`/board/${id}`);
  }

  return (
    <HomeWrapper>
      <Header />

      <MainContent>
        <Carousel />
        <PopularPostsHeader>
          <PopularPostsTitle> 💡 이번주 마감글 💡 </PopularPostsTitle>
        </PopularPostsHeader>
        <CardList>
          {cardsData.slice(0, 4).map((card) => (
            <Card key={card.id} onClick={moveToPostDetail} {...card} />
          ))}
        </CardList>
        <FilterSearchWrapper>
          <FilterDropButtonsWrapper>
            {filterCardsOptions.map((filter, index) => (
              <FilterCardsOption
                key={filter}
                onClick={() => handleFilterClick(filter)}
                $isActive={activeFilter === filter}
                $isLast={index === filterCardsOptions.length - 1}
              >
                {filter}
              </FilterCardsOption>
            ))}
          </FilterDropButtonsWrapper>

          <DropdownsWrapper>
            <HomeDropdown value={techStack} onChange={(e) => setTechStack(e.target.value)}>
              {techStackOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </HomeDropdown>

            <HomeDropdown value={selectedCareer} onChange={(e) => setSelectedCareer(e.target.value)}>
              {careerOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </HomeDropdown>

            <HomeDropdown value={progressWay} onChange={(e) => setProgressWay(e.target.value)}>
              {progressWayOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </HomeDropdown>
          </DropdownsWrapper>
        </FilterSearchWrapper>
        <CardList>
          {filteredCards.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((card) => (
            <Card key={card.id} onClick={moveToPostDetail} {...card} />
          ))}
        </CardList>
        <Pagination cardsPerPage={cardsPerPage} totalCards={filteredCards.length} paginate={paginate} />
      </MainContent>
      <Footer />
    </HomeWrapper>
  );
};

// -----방식 차이긴 하지만..?
// 카테고리 필터링
// useEffect(() => {
//   if (isAllFiltersDefault()) {
//     setFilteredCards(cardsData);
//   } else if (activeFilter !== "전체") {
//     const filteredByCategory = cardsData.filter(card => card.category.name === activeFilter);
//     setFilteredCards(filteredByCategory);
//   }
// }, [activeFilter, cardsData]);

// // 기술 스택 필터링
// useEffect(() => {
//   if (isAllFiltersDefault()) {
//     setFilteredCards(cardsData);
//   } else if (techStack !== "기술 스택") {
//     const filteredByTechStack = cardsData.filter(card =>
//       card.skill.some(skill => skill.name === techStack)
//     );
//     setFilteredCards(filteredByTechStack);
//   }
// }, [techStack, cardsData, isAllFiltersDefault]);

// // 커리어 필터링
// useEffect(() => {
//   if (!isAllFiltersDefault() && selectedCareer !== "전체") {
//     const filteredByCareer = cardsData.filter(card => card.career.name === selectedCareer);
//     setFilteredCards(filteredByCareer);
//   }
// }, [selectedCareer, cardsData]);

// //모집 방식 필터링
// useEffect(() => {
//   if (!isAllFiltersDefault() && progressWay !== "전체") {
//     const filteredByProgressWay = cardsData.filter(card => card.progress_way === progressWay);
//     setFilteredCards(filteredByProgressWay);
//   }
// }, [progressWay, cardsData]);
