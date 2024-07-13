import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();
const VideoUpdateContext = createContext();

export function useVideoContext() {
    return useContext(VideoContext);
}

export function useVideoUpdateContext() {
    return useContext(VideoUpdateContext);
}

export function VideoProvider({ children }) {
    const [videoSelecionado, setVideoSelecionado] = useState(null);

    return (
        <VideoContext.Provider value={videoSelecionado}>
            <VideoUpdateContext.Provider value={setVideoSelecionado}>
                {children}
            </VideoUpdateContext.Provider>
        </VideoContext.Provider>
    );
}
