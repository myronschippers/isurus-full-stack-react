import React, { Component } from 'react';
import SongItem from '../SongItem/SongItem';

class SongsList extends Component {
    render() {
        const songElements = this.props.list.map((song, index) => {
            return  <SongItem
                        key={index}
                        getSongsCallback={this.props.getSongsCallback}
                        itemData={song}
                    />;
        });
        console.log(songElements);

        return (
            <ul>
                {songElements}
            </ul>
        );
    }
}

export default SongsList;
