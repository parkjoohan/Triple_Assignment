import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Triple from '../../public/triple2x.png';

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

export default function ContentImage() {

    const [operation, setOperation] = useState(false);
    
    // 움직이는 효과 진행되도록 하기
    useEffect(() => {
        setOperation(true);
    }, [operation]);
    
    return (
        // duration은 700ms 
        <TripleImage isOperation={operation} offsetY={-15}>
            <p style={{color: "black", fontSize: "16px", }}>2019년 2월 기준</p>
        </TripleImage>
    )
}