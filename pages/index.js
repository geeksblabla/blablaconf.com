import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Registration from "../components/registration";
import Ticket from "../components/ticket";
import ComingSoon from "../components/coming_soon";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%);
    min-height: 100%;
  }

  @media (max-width: 850px) {
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div,
    div#__next > div > div {
      display: flex;

    }
  }
`;
 
const Index = () => {
  return (
     <Layout title="Create Next App">
        <GlobalStyle />
        {/* <Registration />  */}
        <Ticket /> 
        {/* <ComingSoon /> */}
     </Layout>
  );
};

export default Index;
