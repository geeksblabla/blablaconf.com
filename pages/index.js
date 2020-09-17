import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Registration from "../components/registration";
import Ticket from "../components/ticket";
import ComingSoon from "../components/coming_soon";

const GlobalStyle = createGlobalStyle`

html,
body {
  background-image: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%);
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
 
 
 
`;
  
//background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%) no-repeat;
  
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
