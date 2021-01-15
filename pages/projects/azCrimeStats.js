import { Container } from 'react-bootstrap'
import { Document } from 'react-pdf'

export default function AZCrimeStats() {
  return (
    <Container>
      <Document file="../../public/AZCrimeData.pdf" />
    </Container>
  )
  
}