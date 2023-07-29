import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const suggestedUsersData = [
  {
    'name': 'Ibai LLanos',
    'nick':'ibailLanos',
    'initialIsFollowing': false,
    'accountType': 'verified'
  },
  {
    'name': 'Marco Creativo',
    'nick':'marcoCreativo',
    'initialIsFollowing': true,
    'accountType': 'business'
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
      <h2 className='cardTitle'>Who to follow</h2>
      {
        suggestedUsersData.map(user => {
          return(
            <TwitterFollowCard
              key={user.name}
              name={user.name}
              nick={user.nick}
              initialIsFollowing={user.initialIsFollowing}
              accountType={user.accountType}
            />
          )
        })
      }
      <a className='showMore' href='#'>Show more</a>
    </section>
  )
}
  