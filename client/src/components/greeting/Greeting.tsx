import React from "react";
import styled from "styled-components";

const Greeting = () => {
  return (
    <Container>
      <ProfileImg src={process.env.PUBLIC_URL + "/reserve/imgs/profile.jpeg"} />
      <SayHello>
        <MyName>침착한 프론트엔드 개발자 이강철 입니다.</MyName>
        <KeySentence>
          <span className="colored">직관적인 것</span>. 그리고{" "}
          <span className="colored">클린코드</span>를 추구합니다.
          <span className="blinking">|</span>
        </KeySentence>
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
  width: 380px;
  border-radius: ${(props) => props.theme.radius};
`;

const SayHello = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    .colored {
      color: ${(props) => props.theme.purple};
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

const MyName = styled.span`
  display: block;
  margin: 30px;
  font-size: 35px;
`;

const KeySentence = styled.span`
  margin: 30px;
  font-size: 35px;
`;
