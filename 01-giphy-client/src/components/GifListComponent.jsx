export function GifListComponent(props) {
  return (
    <div className="giftsContainer">
      {props.gifs.map(({ id, title, url }) => (
        <div key={id} className="singleGifContainer">
          <img className="gif" src={`${url}`} />
          <span className="gifTitle">{title}</span>
        </div>
      ))}
    </div>
  );
}
