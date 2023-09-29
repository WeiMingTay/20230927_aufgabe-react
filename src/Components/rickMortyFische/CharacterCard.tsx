import {Character} from "../../assets/rmapi.ts";
import "../../Pages/RickMorty/RickMorty.css"
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    //const params = useParams()

    return <div className={"character"}>
        <Link to={`/rickmorty2/${props.character.id}`}>
            <img src={props.character.image} alt={props.character.name}/>
            <h5>{props.character.name}, <span>{props.character.species}</span></h5>
            <p>{props.character.location.name}</p>
        </Link>
    </div>
}