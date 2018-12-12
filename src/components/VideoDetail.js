import React from 'react';

const VideoDetail = ({selectedVideo}) => {

    return !selectedVideo ? (
        <div>Loading...</div>
    ) : (
        <div>
            <div className="ui embed">
                <iframe
                    title="video player"
                    alt={selectedVideo.snippet.title} 
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} 
                />
            </div>

            <div className="ui segment">
                <h4 className="ui header">
                    {selectedVideo.snippet.title}
                </h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;