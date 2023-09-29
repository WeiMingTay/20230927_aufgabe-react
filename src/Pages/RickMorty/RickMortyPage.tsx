import RMCharacter from '../../Components/rickMorty/RMCharacter.tsx';
import RMapi from '../../assets/RMapi.json';
import "./RickMorty.css"

export default function RickMortyPage() {

    const rmData = RMapi;
    return <div className={"main rickMorty"}>
        {/*<label for={"search"}>Suche:
            <input type="text" id={"search"} />
        </label>*/}
        <section>

            {rmData.map((item) => {
                return <RMCharacter image={
                    item.image}
                                    species={item.species}
                                    origin={item.origin.name}
                                    location={item.location.name}
                                    name={item.name}
                                    key={item.id}/>
            })}
        </section>
    </div>
}