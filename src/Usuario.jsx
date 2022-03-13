export default function Usuario() {
    return (
        <Conta
        src="assets/img/catanacomics.svg"
        apelidoUsuario="catanacomics"
        nomeUsuario="Catana"
        />
    )
}

function Conta(props) {
    const {src, apelidoUsuario, nomeUsuario} = props

    return (
        <div className="usuario">
            <img src={src} />
            <div className="texto">
            <strong>{apelidoUsuario}</strong>
            {nomeUsuario}
            </div>
        </div>
    )
}