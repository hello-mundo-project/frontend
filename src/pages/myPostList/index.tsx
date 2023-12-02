import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import {
  MyPostContainer,
  //MyPostButtonContainer,
  //FilterMyPostButton,
  MyPostCardContainer,
  MyPostCardHeader
} from "./myPostListStyles";

import { ProgressWay, Category, Duration, Career, Skill, City, District, Dates, Times } from "../../types/component";
import { Pagination } from "@/components/Pagination";

interface MyPost {
  id: number;
  progress_way: ProgressWay;
  category: Category;
  duration: Duration;
  title: string;
  career: Career;
  skill: Skill[];
  city: City | null;
  district: District | null;
  deadline: Dates;
  created: Dates & Times;
  headcount: number;
  expected_date: Dates;
  recruit_status: boolean;
  deleted: Dates | null;
  contact: string;
  tags: string[];
  //timestamp: string;
  content: string;
  onRemoveBookmark?: () => Promise<void>;
}

export const MyPostList: React.FC = () => {
  const [myPosts, setMyPosts] = useState<MyPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  const currentMyPosts = myPosts.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axios.get("/mockData/MyPostList.json");
        if (Array.isArray(response.data.myposts)) {
          setMyPosts(response.data.myposts);
        } else {
          console.error("응답 데이터가 배열이 아닙니다.");
        }
      } catch (error) {
        console.error("내가 작성한 글 데이터를 불러오지 못했습니다:", error);
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <>
      <Header />
      <MyPostContainer>
        <MyPostCardHeader>
          <h1> 🖋️ 내 작성글 모아보기 🖋️</h1>
        </MyPostCardHeader>
        <MyPostCardContainer>
          {myPosts && currentMyPosts.length > 0 ? (
            currentMyPosts.map((myPost) => (
              <Card
                key={myPost.id}
                title={myPost.title}
                tags={myPost.tags?.map((tag) => tag)}
                category={myPost.category}
                content={myPost.content}
                //timestamp={myPost.timestamp}
                progress_way={myPost.progress_way}
                duration={myPost.duration}
                career={myPost.career}
                skill={myPost.skill?.map((skillItem) => skillItem)}
                city={myPost.city}
                district={myPost.district}
                deadline={myPost.deadline}
                created={myPost.created}
                headcount={myPost.headcount}
                expected_date={myPost.expected_date}
                recruit_status={myPost.recruit_status}
                deleted={myPost.deleted}
                contact={myPost.contact}
              />
            ))
          ) : (
            <p>작성한 글이 없습니다.</p>
          )}
        </MyPostCardContainer>
      </MyPostContainer>
      <Pagination cardsPerPage={cardsPerPage} totalCards={myPosts.length} paginate={paginate} />
      <Footer />
    </>
  );
};
