import Header from "./Component/Header";
import MainContent from "./Component/Main"; 
import About from "./Component/About";
import Footer from "./Component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <div> 
        <Header></Header>
        <About></About>
        <MainContent></MainContent>
        <Footer></Footer>
      </div> 
    </>
  );
};
export default App;
