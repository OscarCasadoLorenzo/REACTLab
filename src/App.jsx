import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const suggestedUsersData = [
  {
    'name': 'Ibai LLanos',
    'nick':'ibailLanos',
    'initialIsFollowing': false
  },
  {
    'name': 'Marco Creativo',
    'nick':'marcoCreativo',
    'initialIsFollowing': true
  },
  {
    'name': 'Pedro Buerbaum',
    'nick':'pedrobuerbaum',
    'initialIsFollowing': true
  }
]

export default function App (){
  return(
    <section className='App'>
      {
        suggestedUsersData.map(user => {
          return(
            <TwitterFollowCard
              name={user.name}
              nick={user.nick}
              initialIsFollowing={user.initialIsFollowing}/>
          )
        })
      }
      
    </section>
  )
}
  