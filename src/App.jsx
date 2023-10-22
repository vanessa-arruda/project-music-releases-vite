import data from "./data.json";
import playlistData from "./stretched-goal.json";
import { Header } from "./components/Header";
import { AlbumList } from "./components/AlbumList";
import { Playlist } from "./components/Playlist";
//console.log(data);

export const App = () => {
  const albumsType = data.albums.items.filter((album) => album.album_type === "album");
  const singlesType = data.albums.items.filter((album) => album.album_type === "single");

  return (
    <>
      <Header/>
      <div className="main-content-container">
        <div className="sidebar-container">
          <Playlist playlistData={playlistData}/>
        </div>
        <div className="singles-albums-container">
          <h2 className="singles-title">Singles release</h2>
          <hr/>
          <AlbumList albums={singlesType}/>
          <h2 className="albums-title">Albums release</h2>
          <hr/>
          <AlbumList albums={albumsType}/>
        </div>
      </div>
    </>
  );
};

export default App;