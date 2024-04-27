import styled from "styled-components";
import Slider from "react-slick";
import kimsije from "/png/kimsije.png";
import carouselPrevButton from "/svg/carousel-prev-button.svg";
import carouselNextButton from "/svg/carousel-next-button.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const AnalysisCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const onPrevClick = () => {
    sliderRef.current && sliderRef.current.slickPrev();
  };

  const onNextClick = () => {
    sliderRef.current && sliderRef.current.slickNext();
  };

  return (
    <Wrapper>
      <Slider
        ref={sliderRef}
        infinite={true}
        autoplay={true}
        autoplaySpeed={5000}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      >
        {[1, 2, 3, 4, 5].map((_, index) => {
          return (
            <Slide key={index}>
              <PrevButton onClick={onPrevClick}>
                <img src={carouselPrevButton} alt="carousel-prev-button" />
              </PrevButton>
              <NextButton onClick={onNextClick}>
                <img src={carouselNextButton} alt="carousel-next-button" />
              </NextButton>
              <Flexbox>
                <ProcessDescription>
                  <ProcessNumber>#38</ProcessNumber>
                  <div>
                    <span>Back - Attach care label + size label</span>
                  </div>
                  <TagContainer>
                    <span>Shell</span>
                    <Divider />
                    <span>SN</span>
                    <Divider />
                    <span>Patch Limit</span>
                    <Divider />
                    <span>A</span>
                  </TagContainer>
                </ProcessDescription>
                <Profile>
                  <ImgContainer>
                    <Img src={kimsije} />
                  </ImgContainer>
                  <ProfileName>Sije Kim</ProfileName>
                </Profile>
              </Flexbox>
            </Slide>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4 1 0;
  padding: 24px;
  width: 440px;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
`;

const Slide = styled.div`
  position: relative;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProcessDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProcessNumber = styled.span`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #565656;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  color: #8c8f94;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
`;

const Divider = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "|";
    color: #e6e7e9;
  }
`;

const Profile = styled.div``;

const ImgContainer = styled.div`
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
`;

const ProfileName = styled.span`
  color: #3e3f41;
  font-size: 13px;
  font-weight: 500;
  line-height: 18.2px;
`;

const PrevButton = styled.div`
  position: absolute;
  top: 40%;
  left: -5px;
`;

const NextButton = styled.div`
  position: absolute;
  top: 40%;
  right: -5px;
`;

export default AnalysisCarousel;
