import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
