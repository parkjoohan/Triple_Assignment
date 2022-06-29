import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PlayStore from '../../public/play-store2x.png';
import Apple from '../../public/badge-apple4x.png';

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

export default function Awards() {

    const [operation, setOperation] = useState(false);

    // 움직이는 효과 진행되도록 하기
    useEffect(() => {
        setOperation(true);
    }, [operation]);
    
    return (
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
    )
}