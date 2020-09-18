import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Registration from "../components/registration";
import ComingSoon from "../components/coming_soon";
  
//background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%) no-repeat;
  
const Index = () => {
  return (
     <Layout title="BlaBlaConf Registration">
        <Registration /> 
     </Layout>
  );
};

export default Index;
