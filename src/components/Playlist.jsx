
export const Playlist = (props) => {
    const playlistHeader = "Popular Playlists";
    const playlistsLinks = props.playlistData.playlists.items.map((playlist) => (

        <div className="playlist-item" key={playlist.id}>
            <img className="playlist-img" src={playlist.images[0].url} alt="album image"/>
            <a className="playlist-name" target="_blank" href={playlist.external_urls.spotify}>{playlist.name}</a> 
        </div>

    ));

  return (
    <div className="playlist-container">
        <div className="playlist-header">
            <img className="playlist-header-icon" src="/icon-playlist-32.png"/>
            <h2 className="playlist-title">{playlistHeader}</h2>
        </div>
        <div className="playlists-items-container">{playlistsLinks}</div>
    </div>
  )
};