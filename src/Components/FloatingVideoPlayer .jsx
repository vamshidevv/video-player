import React from "react";
import Draggable from "react-draggable";
// import { ResizableBox } from "react-resizable";
// import "react-resizable/css/styles.css";
import CloseIcon from "@mui/icons-material/Close";

const FloatingVideoPlayer = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <Draggable>
      <div className="floating-video-player">
        <video src={videoSrc} controls autoPlay width="100%" height="100%" />

        <button onClick={onClose} onTouchStart={onClose} className="close-btn">
          <CloseIcon />
        </button>
      </div>
    </Draggable>
  );
};

export default FloatingVideoPlayer;
