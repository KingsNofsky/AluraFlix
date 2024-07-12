import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videoSelecionado, setVideoSelecionado] = useState(null);

    return (
        <VideoContext.Provider value={{ videoSelecionado, setVideoSelecionado }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideoContext = () => useContext(VideoContext);
