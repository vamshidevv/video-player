import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import VideoGrid from "./Components/VideoGrid";
import VideoPlayerPage from "./Components/VideoPlayerPage";
import FloatingVideoPlayer from "./Components/FloatingVideoPlayer ";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video.src);
    window.open(`/play/${video.id}`, "_blank");
  };

  const handleVideoClose = () => {
    console.log("Close btn Clicked")
    setSelectedVideo(null);
  };

  return (
    <Router>
      <div className="App">
        {/* <header className="header">
          <h1>Video Gallery</h1>
        </header> */}
        <NavBar />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<VideoGrid onVideoSelect={handleVideoSelect} />}
            />
            <Route
              path="/play/:id"
              element={<VideoPlayerPage videos={selectedVideo} />}
            />
          </Routes>
        </main>
        {/* <footer className="footer">
          <p>@Copyrights-2024</p>
        </footer> */}

        <Footer/>
        {selectedVideo && (
          <FloatingVideoPlayer
            videoSrc={selectedVideo}
            onClose={handleVideoClose}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
