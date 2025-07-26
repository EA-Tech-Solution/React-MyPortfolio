import { Container } from "react-bootstrap";
import "./Main.css";

const Main = () => {
  return (
    <section id="main" className="main-section">
      <Container className="mt-4">
        <div>
          <h1>Main Section</h1>
          <h1>Welcome to My Portfolio</h1>
          <p>This is the main component of my portfolio application.</p>
        </div>
      </Container>
    </section>
  );
};
export default Main;
