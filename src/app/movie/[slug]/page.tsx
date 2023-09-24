"use client"
import React,{FC} from 'react'

import styles from '../../page.module.css'
import movie_data from '../../../../Moviedata.json'
import Link from 'next/link';
const Movie:FC = ({params}) => {

  const movieInfo = movie_data.find(item => item?.id.toString() === params?.slug);

  
  return (
    <div className={styles.bgImg}> <div className={styles.container}>
       <h2 className={styles.movie_title}>   Movie Details \ <span>{movieInfo?.title}  </span> </h2>
       <div className={styles.hero_card}>
       {
  Object.entries(movieInfo).map(([key, value]) => {
    return (
      <div key={key} className={styles.key_value_pair }>
        <span className={styles.key}>{key}:</span>
        <span className={styles.value}>{value}</span>
      </div>
    );
  })
}
      </div>
      <Link href={'/'}><button className={styles.button4} style={{backgroundColor:"#9a4ef1"}}>Go Back</button></Link>
       </div></div>

  )
}

export default Movie