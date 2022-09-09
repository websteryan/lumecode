

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  const {signIn, user, signOut} = useContext(AuthContext)




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {user?.email}
        </h1>

        <p className={styles.description}>
          {user?.uid}
        </p>  
        
        <button onClick={() => {
          signOut()
        }}>
           deslogar
        </button>
      </main>
    </div>
  )
}

export default Home
