import React, { useState, useEffect } from "react";
import styled from 'styled-components';

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

const Count = styled(SlideUp)`
    margin-left: 625px;
    padding-top: 130px;
`

const CountFrame = styled.div`
    font-size: 30px;
`

export default function Counting() {

    const [operation, setOperation] = useState(false);
    const Users = CountUp(2000, 350);
    const Reviews = CountUp(2000, 21);
    const Saves = CountUp(2000, 650);
    
    // 움직이는 효과 진행되도록 하기
    useEffect(() => {
        setOperation(true);
    }, [operation]);

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
    
    return (
        <Count isOperation={operation} offsetY={-15}>
            <CountFrame>
                <p><strong>{Users}만 명</strong>의 사용자</p>
                <p><strong>{Reviews}개</strong>의 리뷰</p>
                <p><strong>{Saves}만 개</strong>의 저장</p>
            </CountFrame>
        </Count>
    )
}