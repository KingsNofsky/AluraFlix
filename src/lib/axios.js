import axios from "axios";

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KingsNofsky/video-api/'
});

export const listarVideos = async (url, setDados) => {
    try {
        const resposta = await api.get(url);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao listar vídeos:', error);
    }
};

export const deletarVideo = async (id) => {
    try {
        const resposta = await api.delete(`/delete/${id}`);
        return resposta;
    } catch (error) {
        console.error('Erro ao deletar vídeo:', error);
    }
};

export const obterVideo = async (id) => {
    try {
        const resposta = await api.get(`/videos/${id}`);
        return resposta.data;
    } catch (error) {
        console.error('Erro ao obter vídeo:', error);
    }
};

export const criarVideo = async (dados) => {
    try {
        const resposta = await api.post(`/videos`, {
            ...dados
        });
        return resposta;
    } catch (error) {
        console.error('Erro ao criar vídeo:', error);
    }
};

export const editarVideo = async (id, dados) => {
    try {
        const resposta = await api.put(`/videos/${id}`, {
            ...dados
        });
        return resposta;
    } catch (error) {
        console.error('Erro ao editar vídeo:', error);
    }
};


// CATEGORIAS 

export const listarCategorias = async () => {
    try {
        const resposta = await api.get("/");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        throw error;
    }
};

export const deletarCategoria = async (id) => {
    try {
        const resposta = await api.delete(`/${id}`);
        return resposta.data;
    } catch (error) {
        console.error(`Erro ao deletar categoria ${id}:`, error);
        throw error;
    }
};

export const obterCategoria = async (id) => {
    try {
        const resposta = await api.get(`/${id}`);
        return resposta.data;
    } catch (error) {
        console.error(`Erro ao obter categoria ${id}:`, error);
        throw error;
    }
};

export const criarCategoria = async (dados) => {
    try {
        const resposta = await api.post("/", dados);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao criar categoria:", error);
        throw error;
    }
};

export const editarCategoria = async (id, dados) => {
    try {
        const resposta = await api.put(`/${id}`, dados);
        return resposta.data;
    } catch (error) {
        console.error(`Erro ao editar categoria ${id}:`, error);
        throw error;
    }
};