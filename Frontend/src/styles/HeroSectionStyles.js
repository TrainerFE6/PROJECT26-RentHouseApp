import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  ${props =>
    props.direction === 'left' ? css`left: 10px;` : css`right: 10px;`}
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
`;
