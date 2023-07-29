import { useState } from "react";

export function TwitterFollowCard({name, nick, initialIsFollowing}){
  const [isFollowing, setFollowing] = useState(initialIsFollowing);

  const buttonText = isFollowing ? 'Following' : 'Follow';
  const followButtonClass = isFollowing ? 'followButton following' : 'followButton'

  const handleClickOnFollowButton=() =>{
    setFollowing(!isFollowing);
  }

  return(
    <section className="suggestionedUsers">
      <header className="userContainer">
        <img className="userImage" alt="User avatar" src={`https://unavatar.io/${nick}`}  />
        <div className="userInfo">
          <strong className="userName">{name}</strong>
          <span className="userNick">@{nick}</span>
        </div>
      </header>
      <aside className="aside">
        <button className={followButtonClass} onClick={handleClickOnFollowButton}>
          <span className="followingSpan">{buttonText}</span>
          <span className="unfollowSpan">Unfollow</span>
        </button>
      </aside>
    </section>
  )
}