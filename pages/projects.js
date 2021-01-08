import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'

const Projects = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Portfolio - Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Projects</h1> 

      </div>
    </Layout>
  )
}

export default Projects