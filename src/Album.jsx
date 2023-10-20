import { Buttons } from "./Buttons";

export const Album = ({albumData}) => {

    const albumName = albumData.name;
    const artists = albumData.artists.map((artist) => ({ name: artist.name, url: artist.external_urls.spotify, id: artist.id}));
    const albumCover = albumData.images[1].url;
    const albumUrl = albumData.external_urls.spotify;
    //need to create a separate Component for artists because of "& stretch goal"
    const artistsLinks = artists.map((artist) => <a target="_blank" href={artist.url} key={artist.id} className="artist-name">{artist.name}</a>);

    return (
        <div className="album-card">
            <img className="album-img"src={albumCover}/>
            <a target="_blank" href={albumUrl} className="album-name">{albumName}</a>
            <div className="artists-container">{artistsLinks}</div>
            <Buttons/>
        </div>
    );
};