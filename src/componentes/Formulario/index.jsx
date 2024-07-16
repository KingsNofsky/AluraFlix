import React, { useState } from 'react';
import styled from 'styled-components';
import CampoFormulario from "../CampoFormulario";
import ListaSuspensa from "../ListaSuspensa";
import Textarea from "../Textarea";
import BotaoFormulario from "../BotaoFormulario";
import { criarVideo } from '../../lib/axios';

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #fff;
    font-family: Roboto;

    div {
        margin-bottom: 20px;
        flex-direction: column;
    }

    h1, h2, p {
        margin: 0;
    }

    h1 {
        font-size: 32px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    button {
        font-size: 18px;
        padding: 10px;
        background-color: #6BD1FF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button[type="reset"] {
        background-color: #FF6B6B;
    }
`;

function Formulario({ aoCadastrar, categorias }) {
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        thumbnail: '',
        video: '',
        categoria: '',
    });

    const limparFormulario = () => {
        setFormData({
            titulo: '',
            descricao: '',
            thumbnail: '',
            video: '',
            categoria: '',
        });
    };

    const aoSalvar = async (evento) => {
        evento.preventDefault();
        try {
            const response = await criarVideo(formData);
            if (response.status === 201 || response.status === 200) {
                console.log('Vídeo cadastrado com sucesso!');
                alert('Vídeo cadastrado com sucesso!');
                limparFormulario();
                aoCadastrar(formData);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro no cadastro!');
        }
    };

    return (
        <FormStyle onSubmit={aoSalvar} onReset={limparFormulario}>

                    <CampoFormulario
                        obrigatorio={true}
                        label="Título"
                        placeholder="Insira o título"
                        valor={formData.titulo}
                        aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
                        tipo="text"
                        minLength="3"
                    />

                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoria"
                        placeholder="Selecione uma categoria..."
                        itens={categorias}
                        valor={formData.categoria}
                        aoAlterado={(valor) => setFormData({ ...formData, categoria: valor })}
                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="URL da imagem"
                        valor={formData.thumbnail}
                        aoAlterado={(valor) => setFormData({ ...formData, thumbnail: valor })}
                        tipo="url"
                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Vídeo"
                        placeholder="URL do vídeo"
                        valor={formData.video}
                        aoAlterado={(valor) => setFormData({ ...formData, video: valor })}
                        tipo="url"
                    />

                    <Textarea
                        obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={formData.descricao}
                        aoAlterado={(valor) => setFormData({ ...formData, descricao: valor })}
                        minLength="10"
                        maxLength="250"
                    />
                <div>
                    <BotaoFormulario children="Guardar" type="submit" />
                    <BotaoFormulario children="Limpar" type="reset" />
            </div>
        </FormStyle>
    );
}

export default Formulario;
