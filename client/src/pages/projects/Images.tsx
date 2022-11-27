import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { PUBLIC_URL } from "../../config";

interface Props {
  imgLinks: string[] | undefined;
}

const Images: React.FC<Props> = ({ imgLinks }) => {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        {imgLinks?.map((imgLink) => {
          return (
            <Image
              key={imgLink}
              crossOrigin="anonymous"
              src={imgLink}
              width={350}
              height={410}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Images;
//

const Container = styled.div`
  width: 350px;
`;

const Image = styled.img`
  border-radius: ${(props) => props.theme.radius};
`;
