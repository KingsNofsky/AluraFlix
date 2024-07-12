import axios from "axios";


export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KingsNofsky/video-api/categorias'

})

export const listarCategoria = async (url, setDados) => {
    const resposta = await api.get(url)
    setDados(resposta)
}

export const deletarCategoria = async (id) => {
    const resposta = await api.delete(`/categorias/${id}`)
    return resposta
}

export const obterCategoria = async (id) => {
    const resposta = await api.get(`/categorias/${id}`)
    return resposta.data
}

export const criarCategoria = async (dados) => {
    const resposta = await api.post(`/categorias`)
}

export const editarCategoria = async (id, dados) => {
    const resposta = await api.put(`/categorias/${id}`,{
        ...dados
    })
    return resposta
}