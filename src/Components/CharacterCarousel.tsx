import {Character} from "../assets/rmapi.ts";
import "../Pages/RickMorty/RickMorty.css"

type CharacterCardProps = {
    character: Character
}

export default function CharacterCarousel(props: CharacterCardProps) {


    return <>
        <img src={props.character.image} alt={props.character.name}/>

    </>
}