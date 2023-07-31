import { useEffect, useState } from 'react'
import './App.css'
import fetchGifts from './services/fetchGifts'
function App() {

  const [gifts, setGifts] = useState([])

  useEffect(function(){
    fetchGifts().then(gifts => setGifts(gifts))
  },[])


  return (
    <div className='giftsContainer'>
      {
        gifts.map(singleGift =>
          <img className='gift' src={singleGift}/>
        )
     }      
    </div>
  )
}

export default App
