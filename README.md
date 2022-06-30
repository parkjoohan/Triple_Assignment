## 프로젝트 실행 방법

```bash
1. npm i
   # or
   yarn add
   
2. npm run dev
   # or
   yarn dev
```

<br /><br />

## 사용한 기술
**1. Styled-Components**
* 중복되는 코드를 줄이는 동시 자유로운 커스텀 컴포넌트를 제작하기 위해 사용
```js
const SlideUp = styled.div`
    opacity: ${(props) => (props.isOperation ? 1 : 0)};
    transition-property: all;
    transition-duration: 700ms;
    transition-timing-function: ease-out;
    transition-delay: 0ms;
    transform: translateY(${(props) => (props.isOperation ? `${props.offsetY}px` : "0px")});
`

const Award = styled(SlideUp)`
    width: 450px;
    height: 70px;
    margin: 50px 50px 50px 630px;
    white-space: nowrap;
`
```
<br /><br />

**2. 애니메이션**
```js
const SlideUp = styled.div`
    opacity: ${(props) => (props.isOperation ? 1 : 0)};
    transition-property: all;
    transition-duration: 700ms;
    transition-timing-function: ease-out;
    transition-delay: 0ms;
    transform: translateY(${(props) => (props.isOperation ? `${props.offsetY}px` : "0px")});
`
```
* 영역별 등장애니메이션 : opacity, transition, transform을 사용하여 구현
  * 요소 투명하게 만들기 (opacity) : 등장 시작 신호가 오면 opacity값 변화를 통해 등장
  * 요소의 속성을 서서히 변화 (transition) 
    * transition-property : 트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다	
    * transition-duration : 트랜지션이 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다	
    * transition-timing-function : 트랜지션 효과를 위한 수치 함수를 지정한다.	
    * transition-delay : 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다	
  * y축으로 움직이게 하기 (transform) : offset가 음수이면 아래서 위로 이동
  * duration은 700ms, 애니메이션 사이 간격은 100ms로 지정

<br /><br />

**3. 컴포넌트 분리**
* 기능별로 개발하고 유지보수를 용이하기 위해 기능별 컴포넌트 분리 후 index.js에서 합쳐 구현
```js
export default function Home() {

  return (
    <Container>
      <ContentCotainer>
        <ContentImage></ContentImage>
        <Counting></Counting>
        <Awards></Awards>
      </ContentCotainer>
    </Container>
  )
}
```
