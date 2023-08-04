export function GifListComponent() {
  return (
    <div className="giftsContainer">
      {gifs.map(({ id, title, url }) => (
        <div key={id} className="singleGifContainer">
          <img className="gif" src={`${url}`} />
          <span className="gifTitle">{title}</span>
        </div>
      ))}
    </div>
  );
}
