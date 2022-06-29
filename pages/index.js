import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ContentImage from './Components/ContentImage';
import Counting from './Components/Counting';
import Awards from './Components/Awards';

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
