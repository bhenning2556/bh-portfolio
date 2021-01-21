import { Button, Col, Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function BinaryNumbers() {
  return (
    <Container className={styles.content + " ml-auto mr-auto"}>
      <Link href="/projects" passHref><a><i className="fas fa-arrow-left"></i> Back to Projects</a></Link>
      <Col className="d-flex flex-column align-items-center">
        <h1 className="text-center w-100">Binary Numbers Data Structure</h1>
        <Link href="https://github.com/bhenning2556/Binary-Number-Data-Structure"><a target="_blank"><Button><i className="fab fa-github"></i> View Source Code</Button></a></Link>

      </Col>
      
    </Container>
  )
}