"use client"

import React,{FC} from 'react'
import { useRouter } from 'next/navigation';

import styles from '../app/page.module.css'

interface Card{
    title:string;
    tagline:string;
    vote_average:number;
    idsss:number;
}


const MovieCard:FC<Card> = ({title,tagline,vote_average,idsss}) => {
    const router = useRouter()
 
  return (
    <>
    <div className={styles.card} >

<div className={styles.card_data}>
                    <h2 onClick={()=>  router.push(`/movie/${idsss}`)}>{title}</h2>
                    <p>
                        {tagline}
                    </p>
                    <p className='card_vote'>
                      Vote Average:  {vote_average}
                    </p>
                    
                        
                   
                </div>
    </div>
    
    </>
  )
}

export default MovieCard
