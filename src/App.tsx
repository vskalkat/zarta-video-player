import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import VideoTile from './components/VideoTile'
import data from './apiResponse.json'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Banner/>
        <div className='grid'>
          {data && data.videos && data.videos.map((video, index) => (
            <div key={index} className="grid-item">
              <VideoTile 
                title={video.title} 
                author={video.user.name}
                thumbnailURL={data.signed_urls[video.s3_key_thumb].url} 
                videoURL={data.signed_urls[video.s3_key_vid].url} 
                uploadDate={video.updated_at}
                followerCount={video.user.num_followers}
                description={video.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
