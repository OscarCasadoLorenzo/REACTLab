export function TwitterFollowCard({name, nick, isFollowing}){
  const buttonText = isFollowing ? 'Following' : 'Follow';
  const followButtonClass = isFollowing ? 'followButton following' : 'followButton'

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
        <button className={followButtonClass}>
          {buttonText}
        </button>
      </aside>
    </section>
  )
}