import {Character} from "../../assets/rmapi.ts";
import "../../Pages/RickMorty/RickMorty.css"
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCarousel(props: CharacterCardProps) {


    return <div className={"characterCarousel"}>
        <Link target={"_blank"} to={`/rickmorty2/${props.character.id}`}>
            <img src={props.character.image} alt={props.character.name}/>
        </Link>
    </div>
}