import {Country} from "../../assets/countryData.ts";
import CountryCard from "./CountryCard.tsx";
import {useState} from "react";

type CountryGalleryProps = {
    countries: Country[];
}

export default function CountryGallery(props: CountryGalleryProps) {

    const [sortedCountries, setSortedCountries] = useState([...props.countries]);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const sortAlphabetically = () => {
        const sorted = [...sortedCountries];
        if (sortDirection === 'asc') {
            sorted.sort((a, b) => a.name.official.localeCompare(b.name.official));
        } else {
            sorted.sort((a, b) => b.name.official.localeCompare(a.name.official));
        }
        setSortedCountries(sorted);
    };
    const sortPopulation = () => {
        const sorted = [...sortedCountries];
        if (sortDirection === 'asc') {
            sorted.sort((a, b) => a.population - b.population);
        } else {
            sorted.sort((a, b) => b.population - a.population);
        }
        setSortedCountries(sorted);
    };

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };
    return <>
        <div>
            <button onClick={sortAlphabetically}>
                {sortDirection === 'asc' ? 'Sort A-Z ⬇️' : 'Sort Z-A ⬆️'}
            </button>
            <button onClick={sortPopulation}>
                {sortDirection === 'asc' ? 'Sort by Population ⬇️' : 'Sort by Population ⬆️'}
            </button>
            <button onClick={toggleSortDirection}>Toggle Direction</button>
        </div>
        <section>
            {sortedCountries.map((country) =>
                <CountryCard country={country} key={country.cca2}/>)}
        </section>
    </>
}