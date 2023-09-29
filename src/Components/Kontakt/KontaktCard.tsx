import {Kontakt} from "../../assets/kontakt.ts";

type KontaktCardProps = {
    kontakt: Kontakt
}

export default function KontaktCard(props: KontaktCardProps) {
    const cardStyle = {
        background: props.kontakt.color
    };
    return <div className={"kontaktCard"}>
        <p style={cardStyle}>{props.kontakt.lastName} <span>{props.kontakt.firstName}</span></p>

    </div>
}