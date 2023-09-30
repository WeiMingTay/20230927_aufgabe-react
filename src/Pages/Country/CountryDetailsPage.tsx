import {Country} from "../../assets/countryData.ts";
import {useParams} from "react-router-dom";

type CountryDetailsProps = {
    countries: Country[]
}
type UrlParams = {
    cca2: string
}

export default function CountryDetailsPage(props: CountryDetailsProps) {

    const {cca2} = useParams<UrlParams>()
    const currentCountry = props.countries.find((country) => country.cca2.toString() === cca2)

    let ausgabe;
    if (currentCountry) {
        if (currentCountry.name.official === currentCountry.translations.deu.official) {
            ausgabe = <h2><span>{currentCountry.flag}</span> {currentCountry.translations.deu.official}
                <span>{currentCountry.flag}</span></h2>
        } else {
            ausgabe = <>
                <h2><span>{currentCountry.flag}</span> {currentCountry.name.official}
                    <span>{currentCountry.flag}</span></h2>
                <h2>{currentCountry.translations.deu.official}</h2>
            </>
        }
    }
    return <div className={"countryDetail"}>
        {currentCountry ?
            <>

                {currentCountry.translations.deu.official ? (
                        ausgabe
                    )

                    : (
                        <h2><span>{currentCountry.flag}</span> {currentCountry.name.official}
                            <span>{currentCountry.flag}</span></h2>
                    )}

                <img src={currentCountry.flags.svg} alt={currentCountry.name.official}/>
                <p>Hauptstadt: {currentCountry.capital}</p>
                <p>Einwohnerzahl: {currentCountry.population.toLocaleString('de-DE')}</p>
                <a href={currentCountry.maps.googleMaps}>zu GoogleMaps</a>
                <a href={currentCountry.maps.openStreetMaps}>zu OpenStreetMap</a>


            </>
            : <>
                <p>Country Not Found</p>
            </>
        }
    </div>
}