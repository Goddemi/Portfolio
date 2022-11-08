import React from "react";
import styled from "styled-components";

const Greeting = () => {
  return (
    <Container>
      <ProfileImg src={process.env.PUBLIC_URL + "/reserve/imgs/profile.jpeg"} />
      <SayHello>
        <span>성실하고 책임감 있는,</span>
        <span>프론트엔드 개발자 이강철 입니다.</span>
        <span className="blinking">|</span>
      </SayHello>
    </Container>
  );
};

export default Greeting;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ProfileImg = styled.img`
  width: 350px;
  border-radius: 20px;
`;

const SayHello = styled.div`
  padding: 100px 50px;
  span {
    font-size: 40px;
    margin: 50px 10px;

    &:first-child {
      display: block;
    }
  }
  .blinking {
    animation: blink-effect 1s step-end infinite;
  }
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;
