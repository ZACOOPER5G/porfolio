import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';
import js from '../assets/img/img_js.png';
import html from '../assets/img/img.html.svg';
import css from '../assets/img/img_css.png';
import reactIMG from '../assets/img/react.png';
import node from '../assets/img/node.png';
import bootstrap from '../assets/img/bootstrap.svg';
import git from '../assets/img/git-logo.png';
import ts from '../assets/img/ts.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
      <section className='skills' id='skills' >
          <Container>
              <Row>
                  <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>Here are some of my favourite technologies, and the ones I have been working with most recently:</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} autoPlaySpeed={1800} >
                            <div className="item">
                                <img src={reactIMG} alt='Image' />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt='Image' />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={ts} alt='Image' />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt='Image' />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt='Image' />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt='Image' />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt='Image' />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt='Image' />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                  </Col>
              </Row>
          </Container>
          <img className="background-image-left" src={colorSharp} />
      </section>
      )
}