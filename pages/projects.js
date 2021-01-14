import Head from 'next/head'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <Row>
            <Card>
              <Card.Img variant={top} />
              <Card.Body>
                <Card.Title>Arizona Crime Data</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant={top} />
              <Card.Body>
                <Card.Title>Monkey League Website</Card.Title>
              </Card.Body>
            </Card>
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