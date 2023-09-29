import {Kontakt} from "../../assets/kontakt.ts";
import KontaktCard from "./KontaktCard.tsx";

type KontaktGalleryProps = {
    kontakts: Kontakt[]
}

export default function KontaktGallery(props: KontaktGalleryProps) {

    return <div className={"kontaktGallery"}>
        {props.kontakts.map((kontakt, index) => <KontaktCard key={index} kontakt={kontakt}/>)}
    </div>
}