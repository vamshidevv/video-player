import { useParams, Link } from "react-router-dom";
import "video-react/dist/video-react.css";
import {
  Player,
  ControlBar,
  BigPlayButton,
  ReplayControl,
  ForwardControl,
} from "video-react";

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

const videos = [
  {
    id: 1,
    title: "Video 1",
    src: testvideo,
    description: "A sample video for demo purposes.",
  },
  {
    id: 2,
    title: "Video 2",
    src: testvideo2,
    description: "An example of high-definition video.",
  },
  {
    id: 3,
    title: "Video 3",
    src: testvideo3,
    description: "A beautiful nature scenery in 4K.",
  },
  {
    id: 4,
    title: "Video 4",
    src: testvideo4,
    description: "A high-definition demo video.",
  },
  {
    id: 5,
    title: "Video 5",
    src: testvideo5,
    description: "Green screen video with anchor.",
  },
  {
    id: 6,
    title: "Video 6",
    src: testvideo6,
    description: "A calming video of nature.",
  },
  {
    id: 7,
    title: "Video 7",
    src: testvideo7,
    description: "A tranquil view of a tree.",
  },
  {
    id: 8,
    title: "Video 8",
    src: testvideo8,
    description: "The sound of a bell ringing.",
  },
  {
    id: 9,
    title: "Video 9",
    src: testvideo9,
    description: "A guitar solo performance.",
  },
  {
    id: 10,
    title: "Video 10",
    src: testvideo10,
    description: "Relaxing beach waves.",
  },
  {
    id: 11,
    title: "Video 11",
    src: testvideo11,
    description: "A boat sailing on the water.",
  },
  {
    id: 12,
    title: "Video 12",
    src: testvideo12,
    description: "A soothing saxophone melody.",
  },
];

const VideoPlayerPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id, 10));
  const relatedVideos = videos.filter((v) => v.id !== video.id).slice(0, 4);

  console.log("Related Videos:", relatedVideos);
  console.log("selectes Videos:", video);

  if (!video) {
    return <p>Video not found</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f4f4f9",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          {/* {video.title} */}
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
          {video.description}
        </p>
        <Player
          src={video.src}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
          </ControlBar>
        </Player>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Related Videos</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {relatedVideos.map((related) => (
            <Link
              key={related.id}
              to={`/play/${related.id}`}
              className="link"
              style={{
                width: "240px",
                textDecoration: "none",
                color: "inherit",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  height: "140px",
                  backgroundColor: "#ddd",
                  // backgroundImage: `url(${related.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  objectFit: "contain",
                }}
              >
                <video src={related.src} height={140}></video>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <h4 style={{ margin: "0 0 10px" }}>{related.title}</h4>
                <p style={{ margin: "0", color: "#555", fontSize: "0.9em" }}>
                  {related.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
