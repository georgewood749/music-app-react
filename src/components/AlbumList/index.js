import React from "react";
import AlbumItem from "../AlbumItem";

export default function AlbumList({albums, updateAlbums}) {
    return (
      <div>
        {albums.map((album) => {
          return <AlbumItem album={album} updateAlbums={updateAlbums}/>
        })}
      </div>
    );
  }
