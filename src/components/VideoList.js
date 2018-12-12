import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {

    const vids = videos.map(vid => (
        <VideoItem 
            key={vid.etag} 
            vid={vid}
            onSelectVideo={onSelectVideo}
        />
        )
    );
    return (
        <div className="ui relaxed divided list">
            {vids}
        </div>
    );
}

export default VideoList;