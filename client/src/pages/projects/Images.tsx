import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import honey from "../../assets/myhoneytripImage.jpg";
import turtle from "../../assets/turtlehomeImage.jpg";
import weggle from "../../assets/weggleImage.jpg";

interface Props {
  imgLinks: string[];
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
    <Slider {...settings}>
      <Container>
        <Image src={imgLinks[0]} width={350} height={400} />
      </Container>
      <div>
        <Image src={imgLinks[1]} width={350} height={400} />
      </div>
      <div>
        <Image src={imgLinks[2]} width={350} height={400} />
      </div>
    </Slider>
  );
};

export default Images;
//

const Container = styled.div``;

const Image = styled.img``;
