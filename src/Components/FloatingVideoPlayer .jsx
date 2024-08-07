import React from "react";
import Draggable from "react-draggable";
// import { Resizable, ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

import CloseIcon from "@mui/icons-material/Close";

const FloatingVideoPlayer = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <Draggable>
      {/* <ResizableBox
        style={{ border: "1px solid red" }}
      > */}
      <div className="floating-video-player">
        <video src={videoSrc} controls autoPlay width="100%" height="100%" />

        <button onClick={onClose} onTouchStart={onClose} className="close-btn">
          <CloseIcon />
        </button>
      </div>
      {/* </ResizableBox> */}
    </Draggable>
  );
};

export default FloatingVideoPlayer;
