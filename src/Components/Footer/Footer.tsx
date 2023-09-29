import "./Footer.css"
import {Link} from "react-router-dom";

export default function Footer() {
    return <div className={"footer"}>
    <ul>
        <li><a href="#">Impressum</a></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><a href="#">Jobs</a></li>

    </ul>
    </div>
}