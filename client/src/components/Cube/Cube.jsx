import React from 'react';

import styled, { keyframes } from 'styled-components';

const rotationKeyFrames = keyframes`
  0%   { -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) }
`;

const CubeContainer = styled.div`
width: 150px;
height: 150px;
position: relative;
top: 300px;
left: 50%;
margin-left: -75px;

-webkit-transform-style: preserve-3d;
-webkit-transform: rotateY(0deg) translateZ(-200px);

-webkit-animation-name: ${rotationKeyFrames};
-webkit-animation-duration: 5s;
-webkit-animation-timing-function: linear;
-webkit-animation-iteration-count: infinite;
-webkit-animation-play-state: running;
`;

const CubeFace = `
width: 150px;
height: 150px;
position: absolute;
opacity: .95;
border: 1px solid white;

-webkit-transform-origin: 50% 50%;

-webkit-animation-duration: 5s;
-webkit-animation-timing-function: linear;
-webkit-animation-iteration-count: infinite;
-webkit-animation-play-state: running;

background-color: var(--primary);
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover; /* Resize the background image to cover the entire container */
`;

const Cube = ({
  front, back, left, right, top, bottom,
}) => {
  const CubeFaceFront = styled.div`
  ${CubeFace}
  -webkit-transform: translateZ(75px);
  -webkit-animation-name: bgCAFace;
  background-image: url(${front});
  `;

  const CubeFaceLeft = styled.div`
  ${CubeFace}
  -webkit-transform: rotateY(90deg) translateZ(75px);
  -webkit-animation-name: bgCALeft;
  background-image: url(${left});
  `;

  const CubeFaceBack = styled.div`
  ${CubeFace}
  -webkit-transform: translateZ(-75px);
  -webkit-animation-name: bgCABack;
  background-image: url(${back});
  `;

  const CubeFaceRight = styled.div`
  ${CubeFace}
  -webkit-transform: rotateY(90deg) translateZ(-75px);
  -webkit-animation-name: bgCARight;
  background-image: url(${right});
  `;

  const CubeFaceTop = styled.div`
  ${CubeFace}
  -webkit-transform: rotateX(90deg) translateZ(-75px);
  -webkit-animation-name: bgCATopBottom;
  background-image: url(${top});
  `;

  const CubeFaceBottom = styled.div`
  ${CubeFace}
  -webkit-transform: rotateX(90deg) translateZ(75px);
  -webkit-animation-name: bgCATopBottom;
  background-image: url(${bottom});
  `;
  return (
    <CubeContainer>
      <CubeFaceFront />
      <CubeFaceLeft />
      <CubeFaceBack />
      <CubeFaceRight />
      <CubeFaceTop />
      <CubeFaceBottom />
    </CubeContainer>
  );
};

export default Cube;
