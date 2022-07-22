import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import zacstracks from '../assets/img/zacstracks.png';
import filmfinder from '../assets/img/film-finder.png';
import comingsoon from '../assets/img/coming-soon.jpeg';

export const Projects = () => {
    const projects = [
        {
            title: 'Zac\'s tracks',
            description: 'Built using React. I created a personal Spotify playlist creator using a Spotify API to search their vast library of music. This app also allows me to save a new playlist directly to my linked Spotify account.',
            imgUrl: zacstracks,
            urlLink: 'https://zacstracks-spotifyapp.surge.sh/',
            eventKey: 'first'
        },
        {
            title: 'Film Finder',
            description: 'Build using vanilla Javascript. I created a random film generator, for when my partner and I can\'t decide on a movie. The database is gathered from the TMDB API and the results show only films that are rated 4 stars and above.',
            imgUrl: filmfinder,
            urlLink: '#',
            eventKey: 'second'
        },
        {
            title: 'Coming soon...',
            description: '',
            imgUrl: comingsoon,
            urlLink: '#',
            eventKey: 'third'
        }
    ]
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my most recent projects:</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                            <Nav variant="pills" >
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Project 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Project 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <Tab.Content>
                                    {
                                        projects.map((project, index, eventKey, urlLink) => {
                                            return <ProjectCard key={index} eventKey={eventKey} href={urlLink} {...project} />
                                        })
                                    }
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background image"/>
        </section>
    )
}