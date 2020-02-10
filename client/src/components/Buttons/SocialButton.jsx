import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import * as icomoon from "react-icons-kit/icomoon";

const StyledButton = styled.a`
  display: table-cell;
  width: 70px;
  height: 70px;
  position: relative;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
  &:hover .button-polygon {
    filter: url(#glow);
  }
  &:hover .button-icon {
    color: var(--accent);
    text-shadow: 0 0 15px var(--accent);
  }
`;

const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  &:not(:root) {
    overflow: hidden;
  }
`;
const StyledPolygon = styled.polygon`
  fill: transparent;
  stroke: var(--accent);
`;

const StyledIcon = styled(Icon)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  color: var(--white);
`;

const SocialButton = ({ icon, url }) => {
  return (
    <StyledButton href={url} target="_blank">
      <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 60 50">
        <defs>
          <filter id="glow">
            <feGaussianBlur
              result="coloredBlur"
              stdDeviation="2"
            ></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <StyledPolygon
          className="button-polygon"
          points="47,37.5 25,50 3,37.5 3,12.5 25,0 47,12.5"
        ></StyledPolygon>
      </StyledSVG>
      <StyledIcon className="button-icon" icon={icomoon[icon]} />
    </StyledButton>
  );
};
export default SocialButton;
