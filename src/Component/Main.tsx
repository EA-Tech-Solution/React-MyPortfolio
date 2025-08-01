
import { BsGithub, BsFacebook, BsLinkedin, BsEnvelope, BsPhone, BsHouse } from "react-icons/bs";
import "./Main.css";
const title = "Projects";
const description = "As a Project Manager and Lead Developer, I have led and managed various projects from concept to deployment. My responsibilities include overseeing timelines, coordinating teams, and delivering high-quality technical solutions tailored to client needs.";
const frproject = {
  name: '.Net | C# | Bootstrap | Sql Server',
  title: 'HRIS and HRMS Project',
  imageurl: '/React-MyPortfolio/Images/FRdashboard1.jpg',
  description: 'The Human Resource Information System and Human Resource Management System projects manages and control clients employee with various roles, HR dashboard, applicant listing, Jobs and Requisition listing, Positions, applicant statuses, applicant-boarding process, applicant profile, applicant acitvity, Applicant communications, Track Document and Training, Various Report pages and applicant tracking system used by diverese clients.',
};
const fwproject = {
  name: '.Net MVC | API | C# | Bootstrap | Sql Server',
  title: 'Employee Training with an Online Learning Management Project',
  imageurl: '/React-MyPortfolio/Images/TrainingFW.jpg',
  description: 'The Employee training program manages comprehensive modules with videos, PowerPoint presentations, PDFs, quizzes, and a grading system.',
};
const docproject = {
  name: '.Net | C# | Bootstrap | Sql Server',
  title: 'Document Management Project',
  imageurl: '/React-MyPortfolio/Images/DocumentManagement1.jpg',
  description: 'The Employee Management System provides storage space, a filing system, and the ability to easily sign and retrieve documents.',
};

const Main = () => {
  return ( 
    <>
    <section className="py-5" id="Skills">
                <div className="container px-5 my-5">
                    <div className="row gx-5"> 
                        <div className="col-lg-12">
                            <div className="row gx-5 row-cols-1 row-cols-md-3">
                              <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                                    <h2 className="h5">ASP Net | .Net Core</h2>
                                    <p className="mb-0">My expertise includes building robust, scalable applications using ASP.NET and .NET Core frameworks. I specialize in creating scalable applications with clean and robust architecture.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                                    <h2 className="h5">HTML | CSS | BOOTSTRAP | REACT </h2>
                                    <p className="mb-0">My skill set spans in frontend development, with strong proficiency in technologies such as HTML, CSS, Bootstrap, and React on the frontend, I specialize in creating scalable, responsive web applications with clean user interfaces and robust architecture.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                                    <h2 className="h5">C# | MVC | ABP | RESTFUL API</h2>
                                    <p className="mb-0">My expertise includes building robust, scalable applications using C# and clean architectural patterns such as MVC and ABP Framework. I design and implement RESTful APIs that enable seamless communication between systems and frontends. With a focus on maintainability and performance, I write clean, modular code that supports long-term scalability and integration with modern frontend and backend technologies.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                                    <h2 className="h5">SQL SERVER | LINQ | LAMBDA</h2>
                                    <p className="mb-0">With extensive experience in SQL Server, I design and manage complex databases that support scalable, high-performance applications. I utilize LINQ and Lambda expressions to efficiently query and manipulate data within .NET environments, enabling clean, readable, and maintainable data access layers. My database solutions focus on performance optimization, data integrity, and seamless integration with both frontend and backend systems.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5">GIT | GITHUB | SVN</h2>
                                    <p className="mb-0">I have strong experience using version control systems such as Git, GitHub, and SVN to manage source code, collaborate with teams, and maintain clean development workflows. I follow best practices in branching, merging, and commit structuring to ensure code integrity and traceability. Whether working in solo projects or within large teams, I leverage these tools to support continuous integration, code reviews, and seamless collaboration.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5">ASANA | TRELLO</h2>
                                    <p className="mb-0">I use project management tools like Asana and Trello to plan, track, and manage tasks effectively throughout the development lifecycle. These tools help streamline communication, prioritize tasks, and ensure timely delivery of features. Whether managing solo projects or collaborating with cross-functional teams, I rely on organized boards and timelines to keep workflows efficient and transparent.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    <section className="py-5 bg-light" id="Projects">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">{title}</h2>
                                <p className="lead fw-normal text-muted mb-5">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={frproject.imageurl} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{frproject.name}</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{frproject.title}</h5></a>
                                    <p className="card-text mb-0">{frproject.description}</p>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={fwproject.imageurl} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{fwproject.name}</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{fwproject.title}</h5></a>
                                    <p className="card-text mb-0">{fwproject.description}</p>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={docproject.imageurl} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{docproject.name}</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{docproject.title}</h5></a>
                                    <p className="card-text mb-0">{docproject.description}</p>
                                </div>
                                 
                            </div>
                        </div>
                    </div> 
                    <section id="Contact">
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">Get in Touch.</div>
                                <div className="text-white-50">   
                                    <a href="https://www.facebook.com/iankevin.esguerra?mibextid=qi2Omg" className="me-2 text-white"><BsFacebook size={30} className="me-2" /><span className="small fw-bold text-white"></span></a>
                                    <span className="text-white mx-1"> </span>
                                    <a href="#three" className="me-2"><BsGithub size={30} className="me-2 text-white" /> <span className="small fw-bold text-white"></span> </a>
                                    <span className="text-white mx-1"> </span>
                                    <a href="www.linkedin.com/in/ian-kevin-esguerra-2093ba230" className="me-2 text-white"><BsLinkedin size={30} className="me-2" /><span className="small fw-bold text-white"></span></a>
                                </div>
                            </div>
                            <div className="ms-xl-4"> 
                                <div className="small fw-bold text-white"><BsHouse size={20} className="me-2" />Nuvali Canlubang, Calamba, Laguna, Phillipines</div>
                                <div className="small fw-bold text-white"><BsPhone size={20} className="me-2" />0905-455-4734</div>
                                <div className="small fw-bold text-white"><BsEnvelope size={20} className="me-2" />iankevin.esguerra@gmail.com</div>
                            </div>
                        </div>
                    </aside>
                    </section>
                </div>
    </section>
    </>
  );
};
export default Main;
