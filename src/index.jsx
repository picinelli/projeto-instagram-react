import reactDom from "react-dom"
import Navbar from "./Navbar"
import Corpo from "./Corpo"
import FundoMobile from "./FundoMobile"

function Page() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

reactDom.render(Page(), document.querySelector('.root'))
