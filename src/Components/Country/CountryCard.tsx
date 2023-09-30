import {Country} from "../../assets/countryData.ts"
import {Link} from "react-router-dom";

type CountryCardProps = {
    country: Country
}

export default function CountryCard(props: CountryCardProps) {

    const id = props.country.cca2

    return <Link to={"/country/"+id} className={"countryCard"}>
        <img src={props.country.flags.png}/>
      {/*   <div>
            <p>{props.country.name.official}</p>
            <p>{props.country.capital}</p>
        </div>*/}
    </Link>
}