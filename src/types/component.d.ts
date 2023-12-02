/* eslint-disable prettier/prettier */
type ProgressWay = "오프라인" | "온라인" | "온오프라인";
type Category = {
  id: number;
  name: "스터디" | "프로젝트" | "해커톤";
};
/**
 * 1-6: 1-6개월
 * 7: 상시모집
 */
type Duration = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Career = {
  id: number | string;
  name: string;
};
type Skill = {
  id: number | string;
  name: string;
};
type City = {
  id: number;
  name: string;
  districts: District[];
};
type District = {
  id: number;
  name: string;
  city_id: number;
};

type Dates = {
  years: number;
  months: number;
  days: number;
};
type Times = {
  hours: number;
  minutes: number;
  seconds: number;
};

export interface Card {
  progress_way: ProgressWay;
  category: Category;
  duration: Duration;
  title: string;
  career: Career[];
  skill: Skill[];
  city: City | null;
  district: District | null;
  deadline: Dates;
  created: Dates & Times;
}

export interface Post extends Card {
  id: string;
  user_id: string;
  headcount: number;
  expected_date: Dates;
  recruit_status: boolean;
  deleted?: Dates | null;
  contact: string;
  content: string;
}
