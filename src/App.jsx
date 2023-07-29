import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export default function App (){
  return(
    <div className='App'>
      <TwitterFollowCard name="Ibai LLanos" nick="ibailLanos" initialIsFollowing={false}/>
      <TwitterFollowCard name="Marco Creativo" nick="marcoCreativo" initialIsFollowing/>
      <TwitterFollowCard name="Pedro Buerbaum" nick="pedrobuerbaum" initialIsFollowing/>
    </div>
  )
}
  