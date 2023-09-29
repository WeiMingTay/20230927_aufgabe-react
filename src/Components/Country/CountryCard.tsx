import {Country} from "../../assets/countryData.ts"

type CountryCardProps = {
    country: Country
}

export default function CountryCard(props: CountryCardProps) {
    return <div className={"countryCard"}>
        <h5>{props.country.name}</h5>
        <p>{props.country.capital}</p>
    </div>
}