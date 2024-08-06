import React from "react";
import { useParams } from "react-router-dom";
import "video-react/dist/video-react.css";

import testvideo from "../Assets/Images/Demo.mp4";
import testvideo2 from "../Assets/Images/5082025-uhd_4096_2160_25fps.mp4";
import testvideo3 from "../Assets/Images/3252145-uhd_3840_2160_25fps (1).mp4";
import testvideo4 from "../Assets/Images/4549682-hd_1920_1080_30fps.mp4";
import testvideo5 from "../Assets/Images/Anchor Green Screen.mp4";
import testvideo6 from "../Assets/Images/nature.mp4";
import testvideo7 from "../Assets/Images/tree.mp4";
import testvideo8 from "../Assets/Images/bell.mp4";
import testvideo9 from "../Assets/Images/guitar.mp4";
import testvideo10 from "../Assets/Images/beach.mp4";
import testvideo11 from "../Assets/Images/boat.mp4";
import testvideo12 from "../Assets/Images/saxophone.mp4";
import { Player } from "video-react";

const videos = [
  { id: 1, title: "Video 1", src: testvideo },
  {
    id: 2,
    title: "Video 2",
    src: testvideo2,
  },
  {
    id: 3,
    title: "Video 3",
    src: testvideo3,
  },
  {
    id: 4,
    title: "Video 4",
    src: testvideo4,
  },
  {
    id: 5,
    title: "Video 5",
    src: testvideo5,
  },
  {
    id: 6,
    title: "Video 6",
    src: testvideo6,
  },
  {
    id: 7,
    title: "Video 7",
    src: testvideo7,
  },
  {
    id: 8,
    title: "Video 8",
    src: testvideo8,
  },
  {
    id: 9,
    title: "Video 9",
    src: testvideo9,
  },
  {
    id: 10,
    title: "Video 10",
    src: testvideo10,
  },
  {
    id: 11,
    title: "Video 11",
    src: testvideo11,
  },
  {
    id: 12,
    title: "Video 12",
    src: testvideo12,
  },
];

const VideoPlayerPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id, 10));

  if (!video) {
    return <p>Video not found</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{video.title}</h2>
      {/* <video
        src={video.src}
        controls
        autoPlay
        style={{ width: "80%", cursor: "pointer" }}
      /> */}

      <Player>
        <source src={video.src} />
      </Player>

      {/* <iframe
        src={video.src}
        title={video.title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default VideoPlayerPage;
