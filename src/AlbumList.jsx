import { Album } from "./Album";

export const AlbumList = ({albums}) => {

    const albumsList = albums.map((album) => (<Album key={album.id} albumData={album}/>));

    return (
        <section className="albums-container">
            {albumsList}
        </section>
    );
};
