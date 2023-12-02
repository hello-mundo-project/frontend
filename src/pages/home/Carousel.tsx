import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "@/assets/test8.png";
import test2 from "@/assets/test7.png";

// Banner 컨테이너인데, 수정할 것.
const BannerContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
`;

// 이미지 스타일 넣은 부분!
const BannerImage = styled.img`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  object-fit: cover;
  border: none;
  border-radius: 15px;
  padding-bottom: 40px;
`;

// FirstBanner 컴포넌트
const FirstBanner = () => (
  <BannerContainer>
    <BannerImage src={test1} alt="First Banner" />
  </BannerContainer>
);

// SecondBanner 컴포넌트임!
const SecondBanner = () => (
  <BannerContainer>
    <BannerImage src={test2} alt="Second Banner" />
  </BannerContainer>
);

// 슬라이더 스타일 설정한 부분
const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;

  padding-top: 20px;

  .slick-slide {
    border-radius: 15px; 
  }

  .slick-track {
    border-radius: 15px;
  }

  .slick-dots {
    display: block;
    text-align: center;
    padding: 0; 
    margin: 0; 
    list-style: none;
    position: absolute; 
    bottom: -25px; 
    width: 100%;
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 5px; 
  }

  .slick-dots li button {
    display: block;
    width: 10px;
    height: 10px; 
    padding: 0;
    border: none;
    border-radius: 50%; 
    background: #ccc; 

    &:before {
      content: '';
  }

  .slick-dots li.slick-active button {
    background: #222;
  }
`;

export const Carousel = () => {
  const settings: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    infinite: true,
    lazyLoad: "progressive",
    speed: 400,
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false
        }
      }
    ]
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <SecondBanner />
        <FirstBanner />
      </Slider>
    </SliderWrapper>
  );
};
