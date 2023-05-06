import { HeaderInfo, HeaderSpan, HeaderTitle } from './components';

// import image from './headerimg.png';

export default function Header() {
  return (
    <header>
      {/* <HeaderImage src={image} /> */}
      <HeaderTitle>Countdown</HeaderTitle>
      <HeaderSpan>to</HeaderSpan>
      <HeaderInfo>upLeveled Spring '23 Cohort Graduation</HeaderInfo>
    </header>
  );
}
