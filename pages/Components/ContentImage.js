import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Triple from '../../public/triple2x.png';
import SlideUp from './SlideUp';

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