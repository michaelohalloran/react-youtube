import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import './App.css';

class App extends Component {

        state = {
            videos: [],
            selectedVideo: null,
        }

    onSearchSubmit = async term => {
        
        let endURL = '/search';
        const response = await youtube.get(endURL, {
            params: {
                q: term
            }
        });
        //array of 5 video objects
        // console.log('response: ', response.data.items);
        const videos = await response.data.items;
        //videoId: response.data.items[1].id.videoId
        //desc: response.data.items[1].snippet.description
        //title: response.data.items[1].snippet.title
        //title: response.data.items[1].snippet.thumbnails.default.url
        //https://www.youtube.com/watch?v=${id here}
        // const data = await response.data
        this.setState({
            videos,
            selectedVideo: videos[0]
        });
    }

    onSelectVideo = selectedVideo => {
        console.log('selectedVideo: ', selectedVideo);
        // href={`https://www.youtube.com/watch?v=${vid.id.videoId}`}

        
        this.setState({selectedVideo});
    }

    render() {

        const {videos, selectedVideo} = this.state;

        const detail = selectedVideo ? (
            <VideoDetail selectedVideo={selectedVideo}/>
        ) : (null);

        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                {/* <VideoDetail selectedVideo={selectedVideo}/> */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {detail}
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onSelectVideo={this.onSelectVideo} 
                                videos={videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;