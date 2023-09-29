import "./Kontakt.css"
import {ChangeEvent, FormEvent, useState} from "react";
import KontaktGallery from "../../Components/Kontakt/KontaktGallery.tsx";
import {Kontakt, kontaktData} from "../../assets/kontakt.ts";

export default function KontaktPage() {
    const [kontakts, setKontakts] = useState<Kontakt[]>(kontaktData)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [color, setColor] = useState("#fff")

    function onFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value)
    }
    function onColorChange(event: ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value)
    }

    function onKontaktSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(color)

        const newKontakt: Kontakt = {
            firstName: firstName,
            lastName: lastName,
            color: color
        }
        const newKontakts: Kontakt[] = [...kontakts, newKontakt]
        setKontakts(newKontakts)

        setFirstName("")
        setLastName("")
    }


    return <div className={"kontakt"}>
        <section>
            <p>Vorname: {firstName}</p>
            <p>Name: {lastName}</p>

            <form onSubmit={onKontaktSave}>
                <label>Vorname
                    <input type="text" onChange={onFirstNameChange} value={firstName} required/>
                </label>
                <label>Name
                    <input type="text" onChange={onLastNameChange} value={lastName} required/>
                </label>
                <label>Farbe
                    <input type="color" onChange={onColorChange} value={color}/>
                </label>
                <label>Email
                    <input type="email"/>
                </label>
                <button>Save</button>
            </form>

        </section>
        <KontaktGallery kontakts={kontakts}/>
    </div>
}