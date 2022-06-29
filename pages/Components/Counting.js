import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SlideUp from './SlideUp';

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