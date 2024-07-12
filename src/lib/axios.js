import axios from "axios";


export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KingsNofsky/video-api/'
})

export const listarVideos = async (url, setDados) => {
    const resposta = await api.get(url)
    setDados(resposta)
}