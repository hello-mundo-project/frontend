import { Category } from "@/types/category.d";

type Nickname = {
  nickname: string;
};

type City = {
  _id?: string | number; // string남기고 ? 제거
  name: string;
};

type District = {
  id: string;
  name: string;
  city_id: string;
};

type Career = {
  _id: string;
  name: string;
};

type Skill = {
  _id: string;
  name: string;
};

type UserType = Nickname & {
  email: string;
  check_email?: string;
  annual: number;
  introduce: string | null;
  isSocial?: boolean;
  career_id: string;
  skill_id: string;
};

export interface PostTitleType {
  title?: string; // ? 추후 제거
  user_id?: UserType | string;
  nickname: string; // 추후 제거
  createdAt: Date | ReactNode | string;
  viewcount?: number;
}

export interface PostPanelType {
  category: { _id?: number; name?: string }; // Category
  progress_way?: string; // ? 추후 제거
  city_id: { name?: string }; // City | null;
  district_id: { name?: string }; // District | null;
  expected_date: Date | ReactNode | string;
  deadline?: Date | ReactNode | string;
  contact?: string; // ? 추후 제거
}

interface PostDescriptionType {
  career_id: Career[];
  skill_id: Skill[];
  headcount: number;
  duration: number;
}

export interface PostDescriptionTypeExtendExpectedDate extends PostDescriptionType {
  expected_date: Date | ReactNode | string;
}

export interface PostContentType {
  content: string | null;
}

export interface CardType {
  _id: string;
  category: Category;
  duration: number;
  title: string;
  career_id: Career[];
  skill_id: Skill[];
  progress_way: string;
  city_id: City | null;
  district_id: District | null;
  deadline?: Date | string;
  createdAt: Date | string;
}

export interface PostType
  extends PostTitleType,
    PostPanelType,
    PostDescriptionTypeExtendExpectedDate,
    PostContentType {}
