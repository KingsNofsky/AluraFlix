import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
    position: fixed;
    z-index: 2;
    background-color: rgba(3, 18, 47, 0.76);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 84px 20px;
        justify-content: space-between;
        width: 90%;
        max-width: 750px;
        background: #03122f;
        border: 5px solid #6bd1ff;
        border-radius: 15px;
        color: #2271d1;

        @media (max-width: 768px) {
            padding: 40px 10px;
        }

        @media (max-width: 480px) {
            padding: 20px;
        }
    }

    h1 {
        margin: 0 0 15px 0;
        font-family: Roboto;
        font-size: 40px;
        text-align: left;
        width: 100%;

        @media (max-width: 480px) {
            font-size: 30px;
        }
    }

    form {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        @media (max-width: 480px) {
            font-size: 18px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-family: Source Sans Pro;
    }

    label {
        font-size: 20px;
    }

    input,
    textarea {
        border: 3px solid #2271d1;
        border-radius: 10px;
        font-size: 20px;
        background-color: transparent;
        padding: 10px;
        resize: none;
    }

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0;
        list-style: none;
        width: 100%;

        @media (max-width: 480px) {
            flex-direction: column;
            gap: 10px;
        }

        li {
            width: 48%;

            @media (max-width: 480px) {
                width: 100%;
            }
        }
    }
`;

const Modal = ({ video, onClose, onSave }) => {
    const [formData, setFormData] = useState(video);

    useEffect(() => {
        setFormData(video);
    }, [video]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <ModalStyle>
            <dialog open>
                <h1>EDITAR CARD:</h1>
                <form onSubmit={handleSubmit} onReset={() => setFormData(video)}>
                    <div>
                        <label>Título</label>
                        <input
                            type="text"
                            name="titulo"
                            placeholder="O que é JavaScript?"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Categoria</label>
                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Imagem</label>
                        <input
                            type="url"
                            name="imagem"
                            placeholder="https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg"
                            value={formData.imagem}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Vídeo</label>
                        <input
                            type="url"
                            name="link"
                            placeholder="https://www.youtube.com/watch?v=59txMBPLdPQ"
                            value={formData.link}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Descrição</label>
                        <textarea
                            name="descricao"
                            rows="4"
                            placeholder="Descrição para o Vídeo"
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <ul>
                        <li><button type="submit">GUARDAR</button></li>
                        <li><button type="reset">LIMPAR</button></li>
                    </ul>
                </form>
            </dialog>
        </ModalStyle>
    );
};

export default Modal;
