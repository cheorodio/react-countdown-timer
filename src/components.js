import './styles.module.css';
import styled from '@emotion/styled';

// styling the header component
export const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HeaderSpan = styled.p`
  text-align: center;
  font-family: 'Caveat', sans-serif;
  font-size: 2rem;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderInfo = styled.p`
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 64px;
`;

export const HeaderImage = styled.img`
  height: 80px;
  position: absolute;
  left: 18%;
  top: 18%;
`;

// styling the timer container
export const TimeMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const TimerContainer = styled.div`
  height: 150px;
  width: 150px;
  background-color: #9eede697;
  border: 2px solid #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5.5rem;
  font-family: 'Roboto Mono', sans-serif;
  z-index: 2;
  color: #333;
`;

export const TimerColon = styled.span`
  font-size: 64px;
  color: #333;
`;

export const TimerLabel = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
`;
