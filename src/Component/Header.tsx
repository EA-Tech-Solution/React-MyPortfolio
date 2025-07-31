import "./Header.css";
import NavigationBar from "./NavigationBar";
const person = {
  name: 'Ian Kevin Esguerra',
  title: 'Software Engineer', 
  decription: 'Passionate about designing and writing clean, elegant and efficient code. My expertise spans both frontend and backend development, particularly for highly scalable web applications. ',
};
const Header = () => {
  return (
    <>
      {/* Fixed Navigation Bar */}
      <div className="fixed-top">
        <NavigationBar />
      </div>
      <section id="Header">
      <div className="hero-section d-flex align-items-center">
        <div className="container text-white py-5"> 
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold">
                <em>I am</em> <span className="text-warning">{person.name}</span><br />
                <strong>{person.title}</strong>
              </h1>
              <p className="lead mt-2">
                   {person.decription}
              </p> 
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"> 
                                    <a className="btn btn-outline-light btn-lg px-4" href="#Contact">Get in touch</a>
              </div>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="Images\ProfileImage.jpg"
                alt="Hero"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '100%', opacity: 1 }}
              />
            </div>
            
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default Header;
