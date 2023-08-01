import { useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'
import copyToClipboard from '../services/copyToClipboard'

export function Home(){
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState('')

    useEffect(function(){
      fetchGifs('rick and morty').then(gifs => setGifs(gifs))
      //console.log({gifs})
    },[])
  
    
  
    return (
        <>
        <nav className="navbar">
        <h1>Giphy</h1>
  
        <div className="searchBox">
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" placeholder="Search" onChange={event => {
            console.log(event.target.value)
            fetchGifs(event.target.value).then(
                gifts => setGifs(gifts)
            )
            
            }}/>
        </div>
      </nav>

      <div className='giftsContainer'>
        {
          gifs.map(({id, title, url}) =>
            <div className='singleGifContainer' style={{backgroundImage: `url(${url})`}} onClick={ event => {copyToClipboard(id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="copySVG">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </div>
          )
       }      
      </div>
      </>
    )
}