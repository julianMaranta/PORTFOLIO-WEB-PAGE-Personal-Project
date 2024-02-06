import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImgGitHub from "../assets/img/GitHub-Logo.jpg";
import projImgYouTube from "../assets/img/YTLogo.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ir a mi GitHub",
      description: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a>,
      imgUrl: projImgGitHub,
    },
    {
      title: "Ir a mi GitHub",
      description: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a>,
      imgUrl: projImgGitHub,
    },
    {
      title: "Ir a mi GitHub",
      description: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a>,
      imgUrl: projImgGitHub,
    },
    
  ];

    const projects1 = [
      {
        title: "Ir a mi Canal de YouTube",
        description: <a>Ir a mi Canal de YouTube</a>,
        imgUrl: projImgYouTube,
      },
      {
        title: "Ir a mi Canal de YouTube",
        description: <a>Ir a mi Canal de YouTube</a>,
        imgUrl: projImgYouTube,
      },
      {
        title: "Ir a mi Canal de YouTube",
        description: <a>Ir a mi Canal de YouTube</a>,
        imgUrl: projImgYouTube,
      },
      
    ];
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                <p>Puedes Ver y Descargar mis proyectos directamente desde mi GitHub! Y también pasarte por mi Canal de YouTube "Soy Full Stack" donde subo tutoriales Gratuitos y Completos para aprender a programar!.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sección 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Sección 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Sección 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Ir a mi Repositorio de GitHub: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Ir a mi Canal de YouTube: <a>https://www.youtube.com/channel/UCOWm85iyFimEKJPmAskbMcA</a></p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Ir a mi Repositorio de GitHub: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Ir a mi Canal de YouTube: <a>https://www.youtube.com/channel/UCOWm85iyFimEKJPmAskbMcA</a></p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Ir a mi Repositorio de GitHub: <a>https://github.com/julianMaranta/Repository-Julian-Maranta-</a></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Ir a mi Canal de YouTube: <a>https://www.youtube.com/channel/UCOWm85iyFimEKJPmAskbMcA</a></p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
