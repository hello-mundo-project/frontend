import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Header } from "@/components/header/Header";
import {
  Wrapper,
  InnerWrapper,
  DivideLine,
  ContentWrapper,
  DescriptionAndInnerContentWrapper
} from "./boardDetailStyles";
// import { PostType } from "@/types/post.d";
import { Title } from "./Title";
import { Description } from "./Description";
import { Content } from "./Content";
import { Panel } from "./Panel";
import React from "react";

interface CardProps {
  career: { id: number; name: string };
  category: { id: number; name: string };
  city: string;
  contact: string;
  content: string;
  created: string;
  deadline: string;
  deleted?: string;
  district: string;
  duration: string;
  expected_date: string;
  headcount: number;
  id: number;
  progress_way: string;
  recruit_status: boolean;
  skill: string[];
  tags: string[];
  timestamp: string;
  title: string;
}

export const BoardDetail = () => {
  const { twilightTheme } = useDarkMode();
  const param = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<CardProps | null>(null);

  React.useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get("/mockData/CardsData.json");
        const post = response.data.CardsData.filter((post) => post.id === Number(param.id));
        if (post.length != 0) setPost(post[0]);
        else throw new Error("fail to fetch data");
      } catch (error) {
        if (error instanceof Error) alert(error.message);
        navigate("/");
      }
    };
    postData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <Title title={post?.title} createdAt={post?.created} nickname={"rnd"} viewcount={123} />
        <DivideLine $twilightTheme={twilightTheme} />
        <ContentWrapper>
          <Panel
            category={{
              _id: post?.category.id,
              name: post?.category.name
            }}
            progress_way={post?.progress_way}
            city_id={{ name: post?.city }}
            district_id={{ name: post?.district }}
            expected_date={post?.expected_date}
            deadline={post?.deadline}
            contact={post?.contact}
          />
          <DescriptionAndInnerContentWrapper>
            <Description
              expected_date={post?.expected_date}
              career_id={[post?.career]}
              skill_id={post?.skill}
              headcount={post?.headcount}
              duration={post?.duration}
            />
            <Content content={post?.content} />
          </DescriptionAndInnerContentWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
