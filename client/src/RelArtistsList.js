import React from 'react';
import RelArtist from './RelArtist';

const RelArtistsList = (props) => {
    const relArtists = props.relArtists.map((item, index) => <RelArtist key={index} index={index} relArtistName={item}/>)
    return (
      <div>
        {relArtists}
      </div>
    );
  };

export default RelArtistsList;