import {Country} from "../../assets/countryData.ts";
import CountryCard from "./CountryCard.tsx";

type CountryGalleryProps = {
    countries: Country[];
}

export default function CountryGallery(props: CountryGalleryProps) {
    return <>
        <section>
            {props.countries.map((country, index) =>
                <CountryCard country={country} key={index}/>)}
        </section>
    </>
}