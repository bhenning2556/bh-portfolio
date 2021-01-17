import Link from 'next/link'
import { Button, Col, Container } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

export default function MonkeyLeague() {
  
  return (
    <Container className={styles.content + " ml-auto mr-auto mb-5 mt-5 pb-5"}>
      <Link href="/projects" passHref><a><i className="fas fa-arrow-left"></i> Back to Projects</a></Link>
      <Col className="d-flex flex-column align-items-center">
        <h1 className="text-center w-100">Monkey League Website</h1>
        <Link href="https://monkey-league-app-nextjs-contentful-git-master.philliplewicki.vercel.app/"><a target="_blank"><Button><i className="fas fa-code"></i> View Live Preview</Button></a></Link>
        
        <Container className="w-75">
          <h2>Overview</h2>
          <p>This Web application was created to provide a hub for users to find out information about the Monkey League, which is an online speedcubing competition hosted by Phillip Lewicki. The goal of this project was to create a clean, modern and mobile-first front end design, with the ability to manage content through a dashboard on the backend.</p>
          <h2>Tech Stack</h2>
          <ul>
            <li>Built with <Link href="https://nextjs.org/">NextJS</Link>.</li>
            <li>Content Managed through <Link href="https://www.contentful.com/">Contentful headless CMS</Link>.</li>
            <li>Hosted on <Link href="https://vercel.com/">Vercel</Link>.</li>
          </ul>
          <h2>Features</h2>
          <ul>
            <li>Custom modern design built using Google material UI guidelines.</li>
            <li>Responsive design for any screen size built using bootstrap and react-bootstrap.</li>
            <li>Easy content management through the Contentful dashboard, which dynamically publishes to production; No rebuild required.</li>
            <li>Static Site generation using NextJS getStaticProps() for fast web performance and better SEO.</li>
          </ul>
          <h2>Credits</h2>
          <p>Developed by <Link href="https://github.com/bhenning2556">Benjamin Henning</Link>.<br />
            Designed by Benjamin Henning in collaboration with Phillip Lewicki.</p>
        </Container>
        

      </Col>
      
    </Container>
  )
}