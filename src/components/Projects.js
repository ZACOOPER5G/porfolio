import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import zacstracks from '../assets/img/zacstracks.png';
import filmfinder from '../assets/img/film-finder-v2.png';
import arsenal from '../assets/img/arsenal.png';

export const Projects = () => {
    const projects = [
        {
            title: 'Arsenal Fan Stat Tracker',
            description: 'Built using React with TypeScript as a dependency. As a fan of the Premier League and Arsenal Football Club, I created a stat tracker app for Arsenal fans. The idea was to showcase each of the Arsenal player\'s statistics during the season and have them visually look like trading cards. All the advanced statistics are updated throughout the season using an external API.',
            imgUrl: arsenal,
            urlLink: 'https://arsenalstats.surge.sh/',
            github: 'https://github.com/ZACOOPER5G/arsenal-stats-app',
            tech: [
                "React",
                "TypeScript",
                "Axios",
                "FootAPI"
            ],
            eventKey: 'first'
        },
        {
            title: 'Film Finder',
            description: 'Built using React, TypeScript, Bootstrap, and Material UI. I created a random film generator, for when my partner and I can\'t decide on a movie. The database is gathered from the TMDB API and is the second iteration of the film finder app, which originally used vanilla JavaScript and had limited filtering options. You can  see the original version for comparison here: film-finder.surge.sh .',
            imgUrl: filmfinder,
            urlLink: 'https://film-finder-v2.surge.sh/',
            github: 'https://github.com/ZACOOPER5G/film-finder-v2',
            tech: [
                "React",
                "TypeScript",
                "Bootstrap",
                "Material UI",
                "TMBD API"
            ],
            eventKey: 'second'
        },
        {
            title: 'Zac\'s tracks',
            description: 'Built using React. I created a personal Spotify playlist creator using a Spotify API to search their vast library of music. This app also allows me to save a new playlist directly to my linked Spotify account.',
            imgUrl: zacstracks,
            urlLink: 'https://zacstracks-spotifyapp.surge.sh/',
            github: 'https://github.com/ZACOOPER5G/portfolio-project-zacstracks',
            tech: [
                "React",
                "JavaScript",
                "Spotify API"
            ],
            eventKey: 'third'
        },
    ]
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Below are just some of my most recent projects. For more projects and examples, feel free to visit my <a href="https://github.com/ZACOOPER5G/" >GitHub!</a></p>
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