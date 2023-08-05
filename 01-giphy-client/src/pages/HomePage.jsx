import { GifListComponent } from "../components/GifListComponent";

export function HomePage(props) {
  return <GifListComponent gifs={props.gifs} />;
}
