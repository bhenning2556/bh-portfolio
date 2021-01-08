import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Blog() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Benjamin Henning - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>Blog</h1>  

      </div>
    </Layout>
  )
}