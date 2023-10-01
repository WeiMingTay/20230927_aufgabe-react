import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../../assets/rmapi.ts";
import {useNavigate} from "react-router-dom";

type AddCharacterProps = {
    saveCharacter: (characterToSave: Character) => void
}
export default function AddCharacter(props: AddCharacterProps) {
    const [newCharacter, setNewCharacter] = useState<Character>({name: "", status: ""})

    const navigate = useNavigate()

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }


    function onCharacterSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        props.saveCharacter(newCharacter)

        navigate("/rickmorty2")
    }

    return <form onSubmit={onCharacterSave}>
        <label> Name
            <input name="name" value={newCharacter.name} type={"text"} onChange={onInputChange}/>
        </label>
        <input name="status" value={newCharacter.status} type={"text"} onChange={onInputChange}/>
        <button>Save</button>


    </form>
}