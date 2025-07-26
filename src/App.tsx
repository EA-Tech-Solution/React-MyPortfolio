import Header from "./Component/Header";
import MainContent from "./Component/Main";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <div>
        <Header></Header>
        <MainContent></MainContent>
      </div>
      <div>
        <h1>App</h1>
      </div>
    </>
  );
};
export default App;
