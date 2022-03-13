export default function Posts() {
    return (
        <div className="posts">
            {
            posts.map(post => {
                const {srcUsuario, usuario, srcConteudo, srcCurtidas, textoConta, textoPessoas} = post;
                return (
                    <Post
                        key={usuario}
                        srcUsuario={srcUsuario} 
                        usuario={usuario} 
                        srcConteudo={srcConteudo} 
                        srcCurtidas={srcCurtidas} 
                        textoConta={textoConta} 
                        textoPessoas={textoPessoas}
                    />
                    )})
            }
        </div>
    )
}

const posts = [
    {
        srcUsuario: "assets/img/meowed.svg",
        usuario: "meowed",
        srcConteudo: "assets/img/gato-telefone.svg",
        srcCurtidas: "assets/img/respondeai.svg",
        textoConta: "respondeai",
        textoPessoas: "outras 101.523 pessoas"
    },

    {
        srcUsuario: "assets/img/barked.svg",
        usuario: "barked",
        srcConteudo: "assets/img/dog.svg",
        srcCurtidas: "assets/img/adorable_animals.svg",
        textoConta: "adorable_animals",
        textoPessoas: "outras 99.159 pessoas"
    }
]

function Post(props) {
    const {srcUsuario, usuario, srcConteudo, srcCurtidas, textoConta, textoPessoas} = props

    return (
        <div className="post">
        <div className="topo">
            <div className="usuario">
            <img src={srcUsuario} />
            {usuario}
            </div>
            <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={srcConteudo} />
        </div>

        <div className="fundo">
            <div className="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div className="curtidas">
            <img src={srcCurtidas} />
            <div className="texto">
            Curtido por <strong>{textoConta}</strong> e <strong>{textoPessoas}</strong>
            </div>
            </div>
        </div>
        </div>
    )
}