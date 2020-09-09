import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styled, { createGlobalStyle } from "styled-components";
import TopLeftIcon from '../svg/top_left_icon';
import TopRightIcon from '../svg/top_right_icon';
import BottomLeftIcon from '../svg/bottom_left_icon';
import BottomRightIcon from '../svg/bottom_right_icon';


const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
  }
`;

const Home = ({ className }) => {
  return (
    <div className={className}>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopLeftIcon className="top_left_icon" />
        <TopRightIcon className="top_right_icon" />
        <BottomLeftIcon className="bottom_left_icon" />
        <BottomRightIcon className="bottom_right_icon" />
      </main>
 
    </div>
  )
}

const StyledHome = styled(Home)`
  background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%);
  min-height: 100%;

  .top_left_icon{
    margin-top: 78px;
    margin-left: 186px;
  }

`

export default StyledHome;