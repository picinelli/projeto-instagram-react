export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            <Sugestao
            src="assets/img/bad.vibes.memes.svg"
            usuario="bad.vibes.memes"
            razao="Segue você"
            />

            <Sugestao
            src="assets/img/chibirdart.svg"
            usuario="chibirdart"
            razao="Segue você"
            />

            <Sugestao
            src="assets/img/razoesparaacreditar.svg"
            usuario="razoesparaacreditar"
            razao="Novo no Instagram"
            />

            <Sugestao
            src="assets/img/adorable_animals.svg"
            usuario="adorable_animals"
            razao="Segue você"
            />

            <Sugestao
            src="assets/img/smallcutecats.svg"
            usuario="smallcutecats"
            razao="Segue você"
            />
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
            <div class="nome">{props.usuario}</div>
            <div class="razao">{props.razao}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
        </div>
    )
}