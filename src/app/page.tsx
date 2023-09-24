import Image from 'next/image'
import styles from './page.module.css'
import movie_data from '../../Moviedata.json'
import MovieCard from '@/components/MovieCard'
export default function Home() {
  return (
    <section className={styles.movieSection}>
  <div className={styles.container}>
      <h1 style={{color:'#ad03fc',fontWeight:'bold',fontSize:'40px'}}> Movies</h1>
      <div className={styles.card_section}>
      { 
       movie_data.map(item=>{
           return <MovieCard key={item.id} title={item?.title} tagline={item?.tagline} vote_average={item?.vote_average} idsss={item?.id}/>
        })
      }
      </div></div>
      </section>

  )
}
