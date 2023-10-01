import {Character} from "../../assets/rmapi.ts";
import {useParams} from "react-router-dom";

type CharacterDetailProps = {
    character: Character[]
}

export default function CharacterDetailPage(props: CharacterDetailProps) {
    const {id} = useParams()

    if (typeof id !== "string") {
        return <div>Ungültige Charakter-ID.</div>;
    }

    const selectedCharacter = props.character.find((character) => character.id?.toString() === id);
    if (!selectedCharacter) {
        return <div>Charakter nicht gefunden</div>
    }
    return <div className={"charakterDetail"}>
        <h3>{selectedCharacter.name}</h3>
        <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
        <p>Spezies: {selectedCharacter.species}</p>
        <p>Geschlecht: {selectedCharacter.gender}</p>
        <p>Herkunft: {selectedCharacter.origin ? selectedCharacter.origin.name : "from Nowhere"}</p>
        <p>Aufenthaltsort: {selectedCharacter.location ? selectedCharacter.location.name : "nowhere"}</p>
        <p>Status: {selectedCharacter.status}</p>
        <p>{selectedCharacter.type ? `Typ: ${selectedCharacter.type}` : ""}</p>
    </div>
}

/*
*   "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Citadel of Ricks",
                "url": "https://rickandmortyapi.com/api/location/3"
            },*/