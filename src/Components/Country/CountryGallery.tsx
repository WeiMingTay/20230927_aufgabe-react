import {Country} from "../../assets/countryData.ts";
import CountryCard from "./CountryCard.tsx";

type CountryGalleryProps = {
    countries: Country[];
}

export default function CountryGallery(props: CountryGalleryProps) {
    return <>
        <section>
            {props.countries.map((country) =>
                <CountryCard country={country} key={country.cca2}/>)}
        </section>
    </>
}