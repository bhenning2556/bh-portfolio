import Head from 'next/head'
import Link from 'next/link'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import crimeHeader from '../public/images/projects/azCrimeData/Slide11.png'
import monkeyLeagueHeader from '../public/images/projects/monkeyLeague/landing-page-lg.png'

const Projects = () => {

  return (
    <>
      <Head>
        <title>Portfolio - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content + " d-flex flex-column align-items-center"}>
          <Row>
            <h1>Projects</h1>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Link href="/projects/azCrimeData" passHref>
              <Card>
                <Card.Img variant="top" src={crimeHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">Using Machine Learning to <br />Predict Arizona Crime Rates</Card.Title>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/azCrimeData" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
            <Link href="/projects/monkeyLeague" passHref>
              <Card>
                <Card.Img variant="top" src={monkeyLeagueHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">Monkey League Website</Card.Title>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/monkeyLeague" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
          </Row>
        </div> 
      </div> 
      <style jsx>{`
        h4 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Projects