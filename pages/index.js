import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer'
export default function Home() {
  return (
    
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="This is homepage" />
    </Head>
    <h1 className={styles.title}> Welcome to my home Page </h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium dolores nulla sunt? In ducimus perspiciatis iure quos nam voluptatibus ipsum delectus illum.</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium dolores nulla sunt? In ducimus perspiciatis iure quos nam voluptatibus ipsum delectus illum.</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium dolores nulla sunt? In ducimus perspiciatis iure quos nam voluptatibus ipsum delectus illum.</p>
    <button className={styles.btn}>Sign UP</button>
  
  
    </>
  )
}
  