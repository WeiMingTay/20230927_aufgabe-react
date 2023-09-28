import {useState} from "react";
import {Character, characterResponse} from "../../assets/rmapi.ts";
import CharacterGallery from "../../Components/CharacterGallery.tsx";

import "../RickMorty/RickMorty.css"

export default function RickMortyFischePage() {

    const [characters, setCharacters] = useState<Character[]>(characterResponse.results)

    return <div className={"main rickMorty"}>
            <CharacterGallery characters={characters}/>
    </div>
}