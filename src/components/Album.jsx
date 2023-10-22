import { Buttons } from "./Buttons";
import { AlbumArtists } from "./AlbumArtists";


export const Album = ({albumData}) => {

    const albumName = albumData.name;
    const albumCover = albumData.images[1].url;
    const albumUrl = albumData.external_urls.spotify;

    return (
        <div className="album-card">
            <img className="album-img" src={albumCover}/>
            <Buttons/>
            <a target="_blank" href={albumUrl} className="album-name">{albumName}</a>
            <AlbumArtists artistsList={albumData.artists}/>
        </div>
    );
};