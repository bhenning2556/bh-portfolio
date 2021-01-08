import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Benjamin Henning - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Contact</h1>  

      </div>
    </Layout>
  )
}

export default Contact