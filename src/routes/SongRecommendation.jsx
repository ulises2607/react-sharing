import React, {useState} from 'react'
import ReactPlayer from 'react-player'

const SongRecomendation = () => {
  //for onChange event
  const [youtubeVideo, setYoutubeVideo] = useState('');
  // for submit events
  const [youtubeURL, setYoutubeURL] = useState('https://www.youtube.com/watch?v=jbiw2kKXh1g&ab_channel=InMundos-Topic');

  const handleYoutubeChange = (e) => {
    setYoutubeVideo(e.target.value)
  }

  const handleYoutubeSubmit=(e)=>{
    e.preventDefault();
    setYoutubeURL(youtubeVideo)

  }

  return (
    <>
          <div className="flex">
          <form className="w-1/2 p-4"
          onSubmit={handleYoutubeSubmit}>
            <div className="mb-4">
              <input type="text" 
              placeholder="Name" 
              className="w-full border border-gray-300 rounded-md p-2"
               />
            </div>
            <div className="mb-4">
              <textarea placeholder="Description" className="w-full border border-gray-300 rounded-md p-2"></textarea>
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Link" required 
              className="w-full border border-gray-300 rounded-md p-2"
              onChange={handleYoutubeChange} />
            </div>
            <div>
              <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </div>
          </form>
          <div className="w-1/2 p-4">
            <div className="bg-gray-200 h-full p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Recommendation List</h2>
              <div className="youtube-box">
                <ReactPlayer url={youtubeURL}
                controls />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SongRecomendation