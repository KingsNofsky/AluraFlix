import styled from 'styled-components';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalStyle = styled.div`
  color: #fff;
  position: fixed;
  z-index: 999;
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
  select,
  textarea {
    border: 3px solid #2271d1;
    border-radius: 10px;
    font-size: 20px;
    background-color: transparent;
    padding: 10px;
    resize: none;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    min-height: 150px;
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

export default function Modal({ onClose, videoData, onInputChange, onSave }) {
  const handleCloseModal = () => {
    onClose(); 
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <ModalStyle>
      <dialog open>
        <h1>EDITAR CARD:</h1>
        <form onSubmit={handleSave}>
          <div>
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              value={videoData.titulo}
              onChange={onInputChange}
              placeholder="O que é JavaScript?"
            />
          </div>

          <div>
            <label>Categoria</label>
            <select name="categoria" value={videoData.categoria} onChange={onInputChange}>
              <option value="FRONT END">FRONT END</option>
              <option value="BACK END">BACK END</option>
              <option value="MOBILE">MOBILE</option>
            </select>
          </div>

          <div>
            <label>Imagem</label>
            <input
              type="text"
              name="thumbnail"
              value={videoData.thumbnail}
              onChange={onInputChange}
              placeholder='https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg'
            />
          </div>

          <div>
            <label>Video</label>
            <input
              type="text"
              name="video"
              value={videoData.video}
              onChange={onInputChange}
              placeholder='https://www.youtube.com/watch?v=59txMBPLdPQ'
            />
          </div>

          <div>
            <label>Descricao</label>
            <textarea
              name="descricao"
              rows="4"
              value={videoData.descricao}
              onChange={onInputChange}
              placeholder='Descricao para o Video'
            />
          </div>

          <ul>
            <li><button type="submit">GUARDAR</button></li>
            <li><button type="reset">LIMPAR</button></li>
            <li onClick={handleCloseModal}><IoIosCloseCircleOutline /></li>
          </ul>
        </form>
      </dialog>
    </ModalStyle>
  );
}
