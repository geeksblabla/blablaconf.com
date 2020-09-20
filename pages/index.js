import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Hero from "../components/hero";
import ComingSoon from "../components/coming_soon";
  
//background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%) no-repeat;
  
const Index = () => {
  return (
     <Layout title="BlaBlaConf Registration">
        <Hero /> 
     </Layout>
  );
};

export default Index;
