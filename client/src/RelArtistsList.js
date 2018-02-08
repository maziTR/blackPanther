import React from 'react';
import RelArtist from './RelArtist';

const RelArtistsList = (props) => {
    const relArtists = props.relArtists.map((item, index) => <RelArtist 
                                                                key={index} 
                                                                relArtistId={item.relArtistId} 
                                                                relArtistName={item.relArtistName} 
                                                                searchArtist={props.searchArtist}/>)
    return (
      <div className="grid-item">
        {relArtists}
      </div>
    );
  };

export default RelArtistsList;