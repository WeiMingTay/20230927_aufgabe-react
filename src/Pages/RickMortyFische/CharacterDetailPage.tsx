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
    const selectedCharacter = props.character.find((character) => character.id === id);
    if (!selectedCharacter) {
        return <div>Charakter nicht gefunden</div>
    }

    return <>
        <h3>{selectedCharacter.name}</h3>
        <img width={400} src={selectedCharacter.image} alt={selectedCharacter.name}/>
    </>
}