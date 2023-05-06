import './styles.module.css';
import { useEffect, useState } from 'react';
import {
  TimeMainContainer,
  TimerColon,
  TimerContainer,
  TimerLabel,
} from './components';

// set countdown target date
const countdownTarget = new Date('07-18-2023');

// function to give us the remaining time between today and target date
const getTimeLeft = () => {
  const totalRemainingTime = countdownTarget - new Date();
  const days = Math.floor(totalRemainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalRemainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalRemainingTime / 1000 / 60) % 60);
  const seconds = Math.floor((totalRemainingTime / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    // set timer to update the timeLeft state every second
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000); // 1000 milisecond

    // clean the interval
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TimeMainContainer>
      <TimerContainer>
        {timeLeft.days} <TimerLabel>days</TimerLabel>{' '}
      </TimerContainer>{' '}
      <TimerColon>:</TimerColon>
      <TimerContainer>
        {timeLeft.hours} <TimerLabel>hours</TimerLabel>
      </TimerContainer>
      <TimerColon>:</TimerColon>
      <TimerContainer>
        {timeLeft.minutes} <TimerLabel>minutes</TimerLabel>
      </TimerContainer>{' '}
      <TimerColon>:</TimerColon>
      <TimerContainer>
        {timeLeft.seconds} <TimerLabel>seconds</TimerLabel>
      </TimerContainer>
    </TimeMainContainer>
  );
}
