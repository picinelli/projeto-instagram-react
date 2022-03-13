export default function Stories() {
    return (
        <div className="stories">
            {stories.map(storie => {
                const {src, usuario} = storie
                return (
                    <Story key={usuario} src={src} usuario={usuario}/>
                )
            })}

            <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

const stories = [
    {
        src: "assets/img/9gag.svg",
        usuario: "9gag" 
    },

    {
        src: "assets/img/meowed.svg",
        usuario: "meowed"
    },

    {
        src: "assets/img/barked.svg",
        usuario: "barked"
    },

    {
        src: "assets/img/nathanwpylestrangeplanet.svg",
        usuario: "nathanwpylestrangeplanet"
    },

    {
        src: "assets/img/wawawicomics.svg",
        usuario: "wawawicomics"
    },

    {
        src: "assets/img/respondeai.svg",
        usuario: "respondeai"
    },

    {
        src: "assets/img/filomoderna.svg",
        usuario: "filomoderna"
    },

    {
        src: "assets/img/memeriagourmet.svg",
        usuario: "memeriagourmet"
    }
    
]

function Story(props) {
    const {src, usuario} = props

    return (
        <div className="story">
        <div className="imagem">
            <img src={src} />
        </div>
        <div className="usuario">
            {usuario}
        </div>
        </div>
    )
}