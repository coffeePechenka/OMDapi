
import { createPortal } from 'react-dom'
import './Modal.css'

export default function Modal( {data, close} ) {

    console.log(data.Title)

  return createPortal(
    <div className='modal'>

        <div className="inner">
        <img src={data.Poster} alt="" />
        <h2>{data.Title}</h2>
        <p>{data.Genre}</p>
        <p>{data.imdbRating}</p>

        <button onClick={() => close(prev => !prev)}>Close</button>
        </div>

    </div>,
    document.querySelector(".modalSpawn")
  )
}
