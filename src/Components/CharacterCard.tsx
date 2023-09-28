import {Character} from "../assets/rmapi.ts";
import "../Pages/RickMorty/RickMorty.css"

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    return <div className={"character"}>
        <img src={props.character.image} alt={props.character.name}/>
        <h5>{props.character.name}, <span>{props.character.species}</span></h5>
        <p>{props.character.location.name}</p>
    </div>
}