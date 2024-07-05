import styled from "styled-components"

const ModalStyle = styled.div`
    position: absolute;
    z-index: 2;

    background-color: rgba(3, 18, 47, 0.76);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    dialog{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 84px 0px;
        justify-content: space-between;
        width:900px;
        top: 223px;
        background: #03122F;
        border: 5px solid #6BD1FF;
        border-radius: 15px;
        color:#2271D1;

        
    }
    h1{
        margin: 0;
        font-family: Roboto;
        text-align: left;
        width: 250px;
    }
    form{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
    }
    label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 15px;
        margin: 0 auto;
    }
`

export default function Modal() {
    return (
        <ModalStyle>
            <dialog open>
                <h1>EDITAR CARD:</h1>
                <form method="dialog">
                    <label>Title
                        <input type="text" />
                    </label>

                    <label>Categoria
                        <input type="text" />
                    </label>

                    <label>Title
                        <input type="text" />
                    </label>

                    <label>Title
                        <input type="text" />
                    </label>

                    <label>Title
                        <input type="text" />
                    </label>
                    
                </form>
            </dialog>
        </ModalStyle>
    )
}