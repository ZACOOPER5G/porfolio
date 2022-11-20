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
import express from '../assets/img/express.svg';
import mongo from '../assets/img/mongo.png';
import jest from '../assets/img/jest.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
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
                        <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} autoPlaySpeed={1800} itemClass="image-item">
                            <div className="item">
                                <img src={reactIMG} alt='skill-logo' />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt='skill-logo' />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={ts} alt='skill-logo' />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt='skill-logo' />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt='skill-logo' />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt='skill-logo' />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item express">
                                <img src={express} alt='skill-logo' />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt='skill-logo' />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt='skill-logo' />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt='skill-logo' />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={jest} alt='skill-logo' />
                                <h5>Jest</h5>
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