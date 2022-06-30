import styled from 'styled-components';

// 위로 떠오르게 움직이기
const SlideUp = styled.div`
    /* 요소 투명하게 만들기 (opacity) */
    opacity: ${(props) => (props.isOperation ? 1 : 0)};
    /* 요소의 속성을 서서히 변화 (transition) */
    transition-property: all;
    transition-duration: 700ms;
    transition-timing-function: ease-out;
    transition-delay: 0ms;
    /* y축으로 움직이게 히기 (transform), offset가 음수이면 아래서 위로 이동 */
    transform: translateY(${(props) => (props.isOperation ? `${props.offsetY}px` : "0px")});
`
export default SlideUp;