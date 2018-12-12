import React from 'react';
import './VideoItem.css';

const VideoItem = ({vid, onSelectVideo}) => {
    
    return (
        <div 
            className="video-item item"
            onClick={()=> onSelectVideo(vid)}
        >
            <img 
                className="ui image"
                alt={vid.snippet.title}
                src={vid.snippet.thumbnails.default.url}
            />
            <div className="content">
                <div className="header">
                    {vid.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;