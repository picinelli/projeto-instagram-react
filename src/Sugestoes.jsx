export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

        {sugestoes.map(sugestao => {
            const {src, usuario, razao} = sugestao
            return (
                <Sugestao src={src} usuario={usuario} razao={razao} />
            )
        })}
        </div>
    )
}

const sugestoes = [
    {
        src: "assets/img/bad.vibes.memes.svg",
        usuario: "bad.vibes.memes",
        razao: "Segue você"
    },
    {
        src: "assets/img/chibirdart.svg",
        usuario: "chibirdart",
        razao: "Segue você"
    },
    {
        src: "assets/img/razoesparaacreditar.svg",
        usuario: "razoesparaacreditar",
        razao: "Novo no Instagram"
    },
    {
        src: "assets/img/adorable_animals.svg",
        usuario: "adorable_animals",
        razao: "Segue você"
    },
    {
        src: "assets/img/smallcutecats.svg",
        usuario: "smallcutecats",
        razao: "Segue você"
    }
]

function Sugestao(props) {
    const {src, usuario, razao} = props

    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={src} />
            <div class="texto">
            <div class="nome">{usuario}</div>
            <div class="razao">{razao}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
        </div>
    )
}