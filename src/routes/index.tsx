import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { Login } from "@/pages/logIn";
import { SearchId } from "@/pages/searchId";
import { SearchPW } from "@/pages/searchPW";
import { Signup } from "@/pages/signUp";
import { MyInfo } from "@/pages/myInfo";
import { BookmarkList } from "@/pages/bookMark";
import { MyPostList } from "@/pages/myPostList";
import { BoardDetail } from "@/pages/boardDetail";
import { Write, Write as Edit } from "@/pages/write";
import { PageNotFound } from "@/pages/pageNotFound";

export const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/search-id" element={<SearchId />} />
        <Route path="/search-pw" element={<SearchPW />} />
        {/* change-password/:id 추가 필요 */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/bookmark" element={<BookmarkList />} />
        <Route path="/my-posts" element={<MyPostList />} />

        <Route path="/board/:id" element={<BoardDetail />} />

        <Route path="/board/edit" element={<Edit />} />
        <Route path="/write" element={<Write />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
