import Link from 'next/link'
import { Button, Col, Container } from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import styles from '../../styles/Home.module.css'

export default function AZCrimeStats() {

  return (
    <Container className={styles.content + " ml-auto mr-auto"}>
      <Link href="/projects" passHref><a><i className="fas fa-arrow-left"></i> Back to Projects</a></Link>
      <Col className="d-flex flex-column align-items-center">
        <h1 className="text-center w-100">Using Machine Learning to Predict Arizona Crime Rates</h1>
        <Link href="https://github.com/bhenning2556/AZCrimeData"><a target="_blank"><Button><i className="fab fa-github"></i> View Source Code</Button></a></Link>

        <h2 className="mt-5">Presentation</h2>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed src="https://www.youtube.com/embed/cx8I4MnkYc4" />
        </ResponsiveEmbed>

        <Link href="https://github.com/bhenning2556/AZCrimeData/blob/main/presentation.pptx"><a target="_blank"><Button variant="primary" className="mt-3">Download Slides</Button></a></Link>

      </Col>
      
    </Container>
  )
  
}