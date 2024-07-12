import axios from "axios"

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KingsNofsky/video-api/videos'
})

export const listarVideos = async (url, setDados) => {
    const resposta = await api.get(url)
    setDados(resposta)
}

export const deletarVideo = async (id) => {
    const resposta = await api.delete(`/delete/${id}`)
    return (resposta)
}

export const obterVideo = async (id) => {
    const resposta = await api.get(`/videos/${id}`)
    return resposta.data
}

export const criarVideo = async (dados) => {
    const resposta = await api.post(`/videos`{
        ...dados
    })
    return resposta
}

export  const editarVideo = async (id, dados) => {
    const resposta = await api.put(`/videos/${id}`,{
        ...dados
    })
    return resposta
}