import { useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'

export function Home(){
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState('')

    useEffect(function(){
      fetchGifs('rick and morty').then(gifs => setGifs(gifs))
      console.log({gifs})
    },[])
}