import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import {
  BookmarkContainer,
  BookmarkButtonContainer,
  FilterBookmarkButton,
  BookmarkCardContainer,
  BookmarkCardHeader
} from "./bookMarkStyles";

import { ProgressWay, Category, Duration, Career, Skill, City, District, Dates, Times } from "../../types/component";
import { Pagination } from "@/components/Pagination";

const currentBookmarksOptions = ["전체", "프로젝트", "스터디", "해커톤"];

interface Bookmark {
  id: number;
  title: string;
  tags: string[];
  category: Category;
  timestamp: string;
  content: string;
  progress_way: ProgressWay;
  duration: Duration;
  career: Career;
  skill: Skill[];
  city: City | null;
  district: District;
  deadline: Dates;
  created: Dates & Times;
  headcount: number;
  expected_date: Dates;
  recruit_status: boolean;
  deleted: Dates | null;
  contact: string;
}

export const BookmarkList: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("전체");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get("/mockData/BookmarkList.json");
        setBookmarks(response.data.bookmarks);
      } catch (error) {
        console.error("북마크 데이터를 불러오지 못했습니다:", error);
      }
    };

    fetchBookmarks();
  }, []);

  //일단! 모든 필터가 기본값인지 확인!
  const isAllFiltersDefault = () => {
    return activeFilter === "전체";
  };

  useEffect(() => {
    if (isAllFiltersDefault()) {
      // 모든 필터가 기본값이면 모든 북마크를 표시..
      setFilteredBookmarks(bookmarks);
    } else {
      // 특정 필터가 선택된 경우 해당 필터에 맞는 북마크만 표시?
      const filteredByCategory = bookmarks.filter((bookmark) => bookmark.category.name === activeFilter);
      setFilteredBookmarks(filteredByCategory);
    }
  }, [activeFilter, bookmarks]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentBookmarks = filteredBookmarks.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <BookmarkContainer>
        <BookmarkCardHeader>
          <h1>🔖 Bookmarks 🔖</h1>
        </BookmarkCardHeader>
        <BookmarkButtonContainer>
          {currentBookmarksOptions.map((filter) => (
            <FilterBookmarkButton
              key={filter}
              onClick={() => handleFilterClick(filter)}
              $isActive={activeFilter === filter}
            >
              {filter}
            </FilterBookmarkButton>
          ))}
        </BookmarkButtonContainer>
        <BookmarkCardContainer>
          {currentBookmarks.length > 0 ? (
            currentBookmarks.map((bookmark) => (
              <Card
                key={bookmark.id}
                title={bookmark.title}
                tags={bookmark.tags}
                category={bookmark.category}
                content={bookmark.content}
                progress_way={bookmark.progress_way}
                duration={bookmark.duration}
                career={bookmark.career}
                skill={bookmark.skill}
                deadline={bookmark.deadline}
              />
            ))
          ) : (
            <p>북마크가 없습니다.</p>
          )}
        </BookmarkCardContainer>
      </BookmarkContainer>
      <Pagination cardsPerPage={cardsPerPage} totalCards={filteredBookmarks.length} paginate={paginate} />
      <Footer />
    </>
  );
};

// const removeBookmark = async (postId: number): Promise<void> => {
//   try {
//     // 이 부분은 실제 서버 연동 시, 실제 사용자 ID를 사용하여 구현
//     // const userId = getCurrentUserId();
//     await axios.delete(`/api/user/${userId}/bookmarks/${postId}`);
//     setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== postId));
//   } catch (error) {
//     console.error("북마크를 제거하는 데 실패했습니다:", error);
//   }
// };

// // 북마크 로직 수정중 (서버 받을 시의 함수 추가)
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "@/components/card/Card";
// import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/footer/Footer";
// import {
//   BookmarkContainer,
//   BookmarkButtonContainer,
//   FilterBookmarkButton,
//   BookmarkCardContainer,
//   BookmarkCardHeader
// } from "./bookMarkStyles";
// import { ProgressWay, Category, Duration, Career, Skill, City, District, Dates, Times } from "../../types/component";
// import { Pagination } from "@/components/Pagination";

// const currentBookmarksOptions = ["전체", "프로젝트", "스터디", "해커톤"];

// interface Bookmark {
//   id: number;
//   title: string;
//   tags: string[];
//   category: Category;
//   timestamp: string;
//   content: string;
//   progress_way: ProgressWay;
//   duration: Duration;
//   career: Career;
//   skill: Skill[];
//   city: City | null;
//   district: District;
//   deadline: Dates;
//   created: Dates & Times;
//   headcount: number;
//   expected_date: Dates;
//   recruit_status: boolean;
//   deleted: Dates | null;
//   contact: string;
// }

// // // getCurrentUserId.. 이거 사용자 인증 로직임!
// // const getCurrentUserId = (): number => {
// //   return 0;
// // };

// export const BookmarkList: React.FC = () => {
//   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
//   const [activeFilter, setActiveFilter] = useState<string>("전체");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardsPerPage] = useState(10);

//   const filteredBookmarks = bookmarks.filter(
//     (bookmark) => activeFilter === "전체" || bookmark.category.name === activeFilter
//   );

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentBookmarks = filteredBookmarks.slice(indexOfFirstCard, indexOfLastCard);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     const fetchBookmarks = async () => {
//       try {
//         const response = await axios.get("/mockData/BookmarkList.json");
//         setBookmarks(response.data.bookmarks);
//       } catch (error) {
//         console.error("북마크 데이터를 불러오지 못했습니다:", error);
//       }
//     };

//     fetchBookmarks();
//   }, []);

// 서버로부터 사용자의 북마크 정보 가져오기, 아마도 게시글 아이디와 유저 아이디를 이용해서.. 서버랑 연결되면 여기 살리기
// useEffect(() => {
//   const fetchUserBookmarks = async () => {
//     try {
//       const userId = getCurrentUserId();
//       const response = await axios.get(`/api/user/${userId}/bookmarks`);
//       const bookmarkIds = response.data.bookmarks;
//       const bookmarkDetails = await Promise.all(
//         bookmarkIds.map((id: number) => axios.get(`/api/posts/${id}`))

//       );
//       setBookmarks(bookmarkDetails.map((res) => res.data.post));
//     } catch (error) {
//       console.error("북마크 데이터를 불러오지 못했습니다:", error);
//     }
//   };

//   fetchUserBookmarks();
// }, []);

//   // 북마크 제거 함수임...
//   const removeBookmark = async (postId: number): Promise<void> => {
//     try {
//       const userId = getCurrentUserId();
//       await axios.delete(`/api/user/${userId}/bookmarks/${postId}`);
//       setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== postId));
//     } catch (error) {
//       console.error("북마크를 제거하는 데 실패했습니다:", error);
//     }
//   };

//   const handleFilterClick = (filter: string) => {
//     setActiveFilter(filter);
//   };

//   return (
//     <>
//       <Header />
//       <BookmarkContainer>
//         <BookmarkCardHeader>
//           <h1>🔖 Bookmarks 🔖</h1>
//         </BookmarkCardHeader>
//         <BookmarkButtonContainer>
//           {currentBookmarksOptions.map((filter) => (
//             <FilterBookmarkButton
//               key={filter}
//               onClick={() => handleFilterClick(filter)}
//               $isActive={activeFilter === filter}
//             >
//               {filter}
//             </FilterBookmarkButton>
//           ))}
//         </BookmarkButtonContainer>
//         <BookmarkCardContainer>
//           {currentBookmarks.length > 0 ? (
//             currentBookmarks.map((bookmark) => (
//               <Card
//                 key={bookmark.id}
//                 title={bookmark.title}
//                 tags={bookmark.tags?.map((tag) => tag)}
//                 category={bookmark.category}
//                 content={bookmark.content}
//                 timestamp={bookmark.timestamp}
//                 progress_way={bookmark.progress_way}
//                 duration={bookmark.duration}
//                 career={bookmark.career}
//                 skill={bookmark.skill?.map((skillItem) => skillItem)}
//                 city={bookmark.city}
//                 district={bookmark.district}
//                 deadline={bookmark.deadline}
//                 created={bookmark.created}
//                 headcount={bookmark.headcount}
//                 expected_date={bookmark.expected_date}
//                 recruit_status={bookmark.recruit_status}
//                 deleted={bookmark.deleted}
//                 contact={bookmark.contact}
//                 onRemoveBookmark={() => removeBookmark(bookmark.id)}
//               />
//             ))
//           ) : (
//             <p> 북마크가 없습니다.</p>
//           )}
//         </BookmarkCardContainer>
//       </BookmarkContainer>
//       <Pagination cardsPerPage={cardsPerPage} totalCards={filteredBookmarks.length} paginate={paginate} />
//       <Footer />
//     </>
//   );
// };

// // // 북마크 페이지 입니다.
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Card } from "@/components/card/Card";
// // import { Header } from "@/components/header/Header";
// // import { Footer } from "@/components/footer/Footer";
// // import {
// //   BookmarkContainer,
// //   BookmarkButtonContainer,
// //   FilterBookmarkButton,
// //   BookmarkCardContainer,
// //   BookmarkCardHeader
// // } from "./bookMarkStyles";
// // import { ProgressWay, Category, Duration, Career, Skill, City, District, Dates, Times } from "../../types/component";
// // import { Pagination } from "@/components/Pagination";

// // const currentBookmarksOptions = ["전체", "프로젝트", "스터디", "해커톤"];

// // interface Bookmark {
// //   id: number;
// //   title: string;
// //   tags: string[];
// //   category: Category;
// //   timestamp: string;
// //   content: string;
// //   progress_way: ProgressWay;
// //   duration: Duration;
// //   career: Career;
// //   skill: Skill[];
// //   city: City | null;
// //   district: District;
// //   deadline: Dates;
// //   created: Dates & Times;
// //   headcount: number;
// //   expected_date: Dates;
// //   recruit_status: boolean;
// //   deleted: Dates | null;
// //   contact: string;
// // }

// // export const BookmarkList: React.FC = () => {
// //   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
// //   const [activeFilter, setActiveFilter] = useState<string>("전체");

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [cardsPerPage] = useState(10);

// //   const filteredBookmarks = bookmarks.filter(
// //     (bookmark) => activeFilter === "전체" || bookmark.category.name === activeFilter
// //   );

// //   const indexOfLastCard = currentPage * cardsPerPage;
// //   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
// //   const currentBookmarks = filteredBookmarks.slice(indexOfFirstCard, indexOfLastCard);

// //   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// //   useEffect(() => {
// //     const fetchBookmarks = async () => {
// //       try {
// //         const response = await axios.get("/mockData/BookmarkList.json");
// //         setBookmarks(response.data.bookmarks);
// //       } catch (error) {
// //         console.error("북마크 데이터를 불러오지 못했습니다:", error);
// //       }
// //     };

// //     fetchBookmarks();
// //   }, []);

// //   const handleFilterClick = (filter: string) => {
// //     setActiveFilter(filter);
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <BookmarkCardHeader />
// //       <BookmarkContainer>
// //         <BookmarkButtonContainer>
// //           {currentBookmarksOptions.map((filter) => (
// //             <FilterBookmarkButton
// //               key={filter}
// //               onClick={() => handleFilterClick(filter)}
// //               $isActive={activeFilter === filter}
// //             >
// //               {filter}
// //             </FilterBookmarkButton>
// //           ))}
// //         </BookmarkButtonContainer>
// //         <BookmarkCardContainer>
// //           {currentBookmarks.length > 0 ? (
// //             currentBookmarks.map((bookmark) => (
// //               <Card
// //                 key={bookmark.id}
// //                 title={bookmark.title}
// //                 tags={bookmark.tags?.map((tag) => tag)}
// //                 category={bookmark.category}
// //                 content={bookmark.content}
// //                 timestamp={bookmark.timestamp}
// //                 progress_way={bookmark.progress_way}
// //                 duration={bookmark.duration}
// //                 career={bookmark.career}
// //                 skill={bookmark.skill?.map((skillItem) => skillItem)}
// //                 city={bookmark.city}
// //                 district={bookmark.district}
// //                 deadline={bookmark.deadline}
// //                 created={bookmark.created}
// //                 headcount={bookmark.headcount}
// //                 expected_date={bookmark.expected_date}
// //                 recruit_status={bookmark.recruit_status}
// //                 deleted={bookmark.deleted}
// //                 contact={bookmark.contact}
// //               />
// //             ))
// //           ) : (
// //             <p> 북마크가 없습니다.</p>
// //           )}
// //         </BookmarkCardContainer>
// //       </BookmarkContainer>

// //       <Pagination cardsPerPage={cardsPerPage} totalCards={filteredBookmarks.length} paginate={paginate} />
// //       <Footer />
// //     </>
// //   );
// // };
