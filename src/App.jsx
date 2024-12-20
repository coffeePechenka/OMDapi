
import { useState } from 'react'
import { useGetMoviesByTitleQuery } from './redux/store/siteApi'
import Card from './components/Card'
import './App.css'

function App() {
  
  const [searchItem, setSearchItem] = useState('')

  const { data: movies, error, isLoading } = useGetMoviesByTitleQuery(searchItem || 'Spider')

  const handleInputChange = (e) => {
    setSearchItem(e.target.value)
  }

  return (
    <>


        <h1>OMDapi</h1>

        <div className="mainBlock">
          <input type="text" 
            value={searchItem}
            onChange={handleInputChange}
            placeholder='Введите название фильма...'
          />

          <div className="cards">
              {
                movies?.Search?.map((movie) => (
                  <Card movie={movie} key={movie.imdbID}/>
                ))
              }
          </div>

          <button className="loadMore">Load more</button>
          

          <div className="modalSpawn"></div>
          
        </div>

        
        
    </>
  )
}

export default App
