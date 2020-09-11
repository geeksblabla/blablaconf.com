import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Registration from "../components/registration";
import Ticket from "../components/ticket";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
    background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%);
    min-height: 100%;
  }
`;

const Index = () => {
  return (
     <Layout title="Create Next App">
        <GlobalStyle />
        {/* <Registration />  */}
        <Ticket /> 
     </Layout>
  );
};

export default Index;
