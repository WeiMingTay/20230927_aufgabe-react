import { Country, countryResponse } from "../../assets/countryData.ts";
import { useState } from "react";
import CountryGallery from "../../Components/Country/CountryGallery.tsx";
import "./Country.css"

export default function CountryPage() {
    // Extract the array of countries from countryResponse.countries

    const [countries] = useState<Country[]>(countryResponse.countries);

    return (
        <div className={"main country"}>
            <CountryGallery countries={countries} />
        </div>
    );
}
