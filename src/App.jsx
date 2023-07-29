import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export default function App (){
  return(
    <div className='App'>
      <TwitterFollowCard name="Ibai LLanos" nick="ibailLanos" isFollowing={false}/>
      <TwitterFollowCard name="Marco Creativo" nick="marcoCreativo" isFollowing/>
      <TwitterFollowCard name="Pedro Buerbaum" nick="pedrobuerbaum" isFollowing/>
    </div>
  )
}
  