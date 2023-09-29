import "../../Pages/RickMorty/RickMorty.css"

type characterProps = {
    name: string,
    image: string,
    origin: string,
    species: string,
    location: string,
}

export default function RMCharacter(props: characterProps) {
    return <div className={"character"}>
        <img src={props.image} alt={props.name}/>
        <h5>{props.name}, <span>{props.species}</span></h5>
        {/*<p>{props.origin}</p>*/}
        <p>{props.location}</p>
    </div>
}