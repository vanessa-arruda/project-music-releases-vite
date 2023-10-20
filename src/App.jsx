import data from "./data.json";
import { Header } from "./components/Header";
import { AlbumList } from "./components/AlbumList";
//console.log(data);

export const App = () => {
  const albumsType = data.albums.items.filter((album) => album.album_type === "album");
  const singlesType = data.albums.items.filter((album) => album.album_type === "single");

  return (
    <>
      <Header/>
      <h2 className="singles-title">Singles release</h2>
      <hr/>
      <AlbumList albums={singlesType}/>
      <h2 className="albums-title">Albums release</h2>
      <hr/>
      <AlbumList albums={albumsType}/>

    </>
  );
};

export default App;