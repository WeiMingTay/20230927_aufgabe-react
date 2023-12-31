import "./Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return <div className={"header"}>
        <img src={"https://source.unsplash.com/random/100×100"} alt={"logo"}/>
        <nav>
            <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/profile">Profil</Link></li>
                {/*<li><Link to={"/rickmorty"}>Rick</Link></li>*/}
                <li><Link to={"/rickmorty2"}>Rick & Morty</Link></li>
                <li><Link to={"/news"}>News</Link></li>
                <li><Link to={"/counter"}>Counter</Link></li>
                <li><Link to={"/country"}>Countries</Link></li>
            </ul>
        </nav>
    </div>

}