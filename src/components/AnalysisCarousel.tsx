import { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import kimsije from "/png/kimsije.png";
import _PrevButton from "../assets/svg/carousel-prev-button.svg?react";
import _NextButton from "../assets/svg/carousel-next-button.svg?react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        adaptiveHeight={false}
      >
        {[1, 2, 3, 4, 5].map((_, index) => {
          return (
            <Slide key={index}>
              <PrevButton onClick={onPrevClick} />
              <NextButton onClick={onNextClick} />
              <FlexRow>
                <FlexColumn>
                  <Text>#38</Text>
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
                </FlexColumn>
                <FlexColumn>
                  <ImgContainer>
                    <Img src={kimsije} />
                  </ImgContainer>
                  <Name>Sije Kim</Name>
                </FlexColumn>
              </FlexRow>
            </Slide>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4 1 0;
  width: 440px;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
`;

const Slide = styled.div`
  position: relative;
`;

const FlexRow = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 120px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
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

const Name = styled.span`
  color: #3e3f41;
  font-size: 13px;
  font-weight: 500;
  line-height: 18.2px;
`;

const PrevButton = styled(_PrevButton)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 40%;
  left: 10px;
`;

const NextButton = styled(_NextButton)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 40%;
  right: 10px;
`;

export default AnalysisCarousel;
