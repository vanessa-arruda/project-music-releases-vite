import { Buttons } from "./Buttons";

export const Album = ({albumData}) => {

    const albumName = albumData.name;
    const albumCover = albumData.images[1].url;
    const albumUrl = albumData.external_urls.spotify;
    //move this to another Component?
    //create artist object:
    const artists = albumData.artists.map((artist) => (
        { 
        name: artist.name, 
        url: artist.external_urls.spotify, 
        id: artist.id
        }
    ));
    const artistsLinks = artists.map((artist) => 
    <a target="_blank" href={artist.url} key={artist.id} className="artist-name">{artist.name}</a>);
    
    //check number of artist to format "," and "&"
    const artistsNameDisplay = artistsLinks.map((artist, index, data) => {
        if(index === 0) {
            return artist;
        } else if (index === data.length -1){
            return <> <span className="artist-name-separator">&</span> {artist}</>;
        } else {
            return <><span className="artist-name-separator">,</span> {artist}</>;;
        }
    });

    return (
        <div className="album-card">
            <img className="album-img"src={albumCover}/>
            <a target="_blank" href={albumUrl} className="album-name">{albumName}</a>
            <div className="artists-container">{artistsNameDisplay}</div>
            <Buttons/>
        </div>
    );
};