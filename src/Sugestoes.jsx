export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => {
                const {src, usuario, razao} = sugestao
                return (
                    <Sugestao key={usuario} src={src} usuario={usuario} razao={razao} />
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
        <div className="sugestao">
        <div className="usuario">
            <img src={src} />
            <div className="texto">
            <div className="nome">{usuario}</div>
            <div className="razao">{razao}</div>
            </div>
        </div>

        <div className="seguir">Seguir</div>
        </div>
    )
}