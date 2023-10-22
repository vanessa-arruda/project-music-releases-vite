
export const AlbumArtists = ({artistsList}) => {

    const artists = artistsList.map((artist) => (
        {
        name: artist.name, 
        url: artist.external_urls.spotify, 
        id: artist.id
        }
    ));

    //check number of artist to format "," and "&"
    const artistsNameDisplay = artists.map((artist, index, data) => {
        if(index === 0) {
            return (
                <span key={artist.id}>
                    <a target="_blank" href={artist.url} className="artist-name">
                        {artist.name}
                    </a>
                </span>
            );
        } else if (index === data.length -1){
            return (
                <span key={artist.id}> 
                    <span className="artist-name-separator"> & </span> 
                    <a target="_blank" href={artist.url} className="artist-name">
                        {artist.name}
                    </a>
                </span>
            );
        } else {
            return (
                <span key={artist.id}>
                    <span className="artist-name-separator">, </span> 
                    <a target="_blank" href={artist.url} className="artist-name">
                        {artist.name}
                    </a>
                </span>
            );
        }
    });

  return (
    
    <div className="artists-container">{artistsNameDisplay}</div>

  )
}