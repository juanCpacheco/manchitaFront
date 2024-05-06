import React from "react";
import logo from './BlueM.png';

import "./BotAvatar.css";

const BotAvatar = () => {
    return (
        <div className="bot-avatar">
        <img
            src={logo}
            alt="bot-avatar"
            className="bot-avatar__image"
        />
        </div>
    );
    }
    export default BotAvatar;