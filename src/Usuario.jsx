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
    return (
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
            <strong>{props.apelidoUsuario}</strong>
            {props.nomeUsuario}
            </div>
        </div>
    )
}