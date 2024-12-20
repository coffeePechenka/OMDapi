
import './Card.css'
import { useGetMoviesByIdQuery, useGetMoviesByTitleQuery } from '../redux/store/siteApi'
import React, { useState } from 'react'
import Modal from './modal/Modal'

export default function Card({ movie }) {


  const [modal, setModal] = useState(false)
  const {data} = useGetMoviesByIdQuery(movie.imdbID)


  

  return (
    <div className="card">
        <img src={movie.Poster} alt="" />
        <p>{movie.Title}</p>

        <button className="readMore" onClick={() => setModal(prev => !prev)}>Read more</button>

        {
          modal && <Modal data={data} close={setModal}/>
        }
    </div>
  )
}
