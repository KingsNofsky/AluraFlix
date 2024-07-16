import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape';
import Modal from '../../componentes/Modal'; // Importa o Modal

export default function PaginaBase() {
    const [modalDados, setModalDados] = useState(null); // Estado para armazenar os dados do vídeo para edição

    const handleEditClick = (dadosVideo) => {
        console.log(dadosVideo)
        setModalDados(dadosVideo); // Define os dados do vídeo para serem editados no modal
    };

    const handleModalClose = () => {
        setModalDados(null); // Função para fechar o modal
    };

    return (
        <main>
            {modalDados && <Modal dadosVideo={modalDados} onClose={handleModalClose} />} {/* Renderiza o modal se houver dados */}
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    );
}
