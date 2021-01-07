import Layout from '../components/layout'
import Card from 'react-bootstrap/Card'
import Button from'react-bootstrap/Button'

const Projects = () => {
  return (
    <>
      <Layout>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
              lorem ipsum
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Layout>
    </>
  )
}

export default Projects