import { useEffect, useState } from "react";
import "./App.css";
import Videos from "./component/Videos";
import axios from "axios";

function App() {
  const [ytVideo, setYtVideo] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios
        .get("api/video/posts")
        .then((res) => res.data)
        .catch((err) => console.log(err));
      //console.log(response);

      setYtVideo(response);
      return response;
    }
    fetchVideos();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {ytVideo.map((vid) => (
          <Videos
            id={vid._id}
            src={vid.url}
            channel={vid.channel}
            description={vid.description}
            like={vid.likes}
            dislike={vid.dislike}
            share={vid.shares}
            comment={vid.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
