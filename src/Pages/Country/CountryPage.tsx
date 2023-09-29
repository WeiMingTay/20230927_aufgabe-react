import { Country, countryResponse } from "../../assets/countryData.ts";
import { useState } from "react";
import CountryGallery from "../../Components/Country/CountryGallery.tsx";

export default function CountryPage() {
    // Extract the array of countries from countryResponse.countries
    const initialCountries: Country[] = countryResponse.countries;

    const [countries, setCountries] = useState<Country[]>(initialCountries);

    return (
        <div className={"main country"}>
            <CountryGallery countries={countries} />
        </div>
    );
}
