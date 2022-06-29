import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Triple from '../public/triple2x.png';
import PlayStore from '../public/play-store2x.png';
import Apple from '../public/badge-apple4x.png';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
  justify-content: center;
  // 최소 화면폭 1200px
  min-width: 1200px;
`;

const ContentCotainer = styled.div`
  width: 1200px;
  height: 500px;
`;

// 위로 떠오르게 움직이기
const SlideUp = styled.div`
  /* 요소 투명하게 만들기 (opacity) */
  opacity: ${(props) => (props.isOperation ? 1 : 0)};
  /* 요소의 속성을 서서히 변화 (transition) */
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-out;
   /* y축으로 움직이게 히기 (transform), offset가 음수이면 아래서 위로 이동 */
  transform: translateY(${(props) => (props.isOperation ? `${props.offsetY}px` : "0px")});
`

const TripleImage = styled(SlideUp)`
  position: absolute;
  top: 155px;
  width: 450px;
  height: 350px;
  background-image: url(${Triple.src});
  background-repeat: no-repeat;
  background-size: 450px 370px;
  padding-top: 280px;
  text-align: center;
`

const Count = styled(SlideUp)`
  margin-left: 625px;
  padding-top: 130px;
`

const CountFrame = styled.div`
  font-size: 30px;
`

const Award = styled(SlideUp)`
  width: 450px;
  height: 70px;
  margin: 50px 50px 50px 630px;
  white-space: nowrap;
`

const PlayStoreImage = styled.div`
  font-size: 15px;
  height: 70px;
  line-height: 25px;
  padding: 5px 10px 10px 70px;
  display: inline-block;
  margin-right: 30px;
  background-image: url(${PlayStore.src});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 58px 58px;
  font-weight: bold;
  color: grey;
`;

const AppleImage = styled(PlayStoreImage)`
  background-image: url(${Apple.src});
`;

export default function Home() {

  const [operation, setOperation] = useState(false);
  // 2초 동안 증가해야하므로 duration을 2000으로
  const Users = CountUp(2000, 350);
  const Reviews = CountUp(2000, 21);
  const Saves = CountUp(2000, 650);

  function CountUp(duration, end) {
    const [count, setCount] = useState(0);
    const Target = Math.round(duration/10);

    // 스피드 변화량 함수
    function Speed_Change(number) {
      return 1-Math.pow(1-number, 3);
    }

    useEffect(() => {
      let num = 0;

      // 10이란 시간 간격 두고 실행
      const counter = setInterval(() => {
        // 횟수(num)이 목표치에 다다르면 멈춤
        if (num === Target) clearInterval(counter);
        
        // 횟수 증가
        num = num+1;

        // 스피드
        const Speed = Speed_Change(num/Target);
        // Count 변화
        setCount(Math.round(end*Speed));
      }, 10);
    }, []);

    return count;
  }

  // 움직이는 효과 진행되도록 하기
  useEffect(() => {
    setOperation(true);
  }, [operation]);

  return (
    <Container>
      <ContentCotainer>
        {/* duration은 700ms */}
        <TripleImage isOperation={operation} offsetY={-15}>
          <p style={{color: "black", fontSize: "16px", }}>2019년 2월 기준</p>
        </TripleImage>
        <Count isOperation={operation} offsetY={-15}>
          <CountFrame>
            <p><strong>{Users}만 명</strong>의 사용자</p>
            <p><strong>{Reviews}개</strong>의 리뷰</p>
            <p><strong>{Saves}만 개</strong>의 저장</p>
          </CountFrame>
        </Count>
        <Award isOperation={operation} offsetY={-15}>
          <PlayStoreImage>
            <a>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </a>
          </PlayStoreImage>
          <AppleImage>
            <a>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </a>
          </AppleImage>
        </Award>
      </ContentCotainer>
    </Container>
  )
}
