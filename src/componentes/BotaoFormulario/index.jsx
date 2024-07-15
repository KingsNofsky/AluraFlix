function BotaoFormulario({ children, type }) {
    return (
        <button type={type}>
            {children}
        </button>
    );
}

export default BotaoFormulario;
