import "./Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return <div className={"header"}>
        <img src={"https://source.unsplash.com/random/100×100"} alt={""}/>
        <nav>
            <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/profile">Profil</Link></li>
                <li><a href={"#"}>Blog3</a></li>
                <li><a href={"#"}>Blog4</a></li>
            </ul>
        </nav>
    </div>

}