import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

interface PlayerProps {
    url: string
}
const Player: React.FC<PlayerProps> = ({ url }) => (
    <div className="player-wrapper">
        <ReactPlayer
            url={url}
            controls
            className="react-player"
            width="100%"
            height="100%"
        />
    </div>
);

export default Player;