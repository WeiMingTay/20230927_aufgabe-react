import {Character} from "../assets/rmapi.ts";
import CharacterCard from "./CharacterCard.tsx";
import {ChangeEvent, useState} from "react";

type CharacterGalleryProps = {
    characters: Character[]
}
export default function CharacterGallery(props: CharacterGalleryProps) {
    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = props.characters.filter((character) =>
        (character.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (character.species.toLowerCase().includes(searchText.toLowerCase())) ||
        (character.location.name.toLowerCase().includes(searchText.toLowerCase()))
    )
    console.log(filteredCharacters.length <= 0 ? "No characters" : filteredCharacters)

    function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return <>

        <input onChange={onSearchTextChange} value={searchText}/>
        <section>{
            filteredCharacters.length <= 0 ?
            "No characters" :
            filteredCharacters.map(character =>
                <CharacterCard
                    key={character.id}
                    character={character}
                />)}</section>
    </>
}