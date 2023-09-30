import './App.css'
import Header from "./Components/Header/Header.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import BlogPage from "./Pages/Blog/BlogPage.tsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfilePage from "./Pages/Profile/ProfilePage.tsx";
import RickMortyPage from "./Pages/RickMorty/RickMortyPage.tsx";
import Counter from "./Pages/Counter/CounterPage.tsx";
import RickMortyFischePage from "./Pages/RickMortyFische/RickMortyFischePage.tsx";
import KontaktPage from "./Pages/Kontakt/KontaktPage.tsx";
import CountryPage from "./Pages/Country/CountryPage.tsx";
// import CharacterDetailPage from "./Pages/RickMortyFische/CharacterDetailPage.tsx";
import React, {useState} from "react";
import CountryDetails from "./Components/Country/CountryDetails.tsx";
import {Country, countryResponse} from "./assets/countryData.ts";


export default function App() {
    const [countries, setCountries] = useState<Country[]>(countryResponse.countries)

    function myCallBackFunction(info: string) {
        console.log(info)
    }

    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <div className={"content"}>
                    <Routes>
                        <Route path="/" element={<BlogPage myCallback={myCallBackFunction}/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/rickmorty" element={<RickMortyPage/>}/>
                        <Route path="/rickmorty2" element={<RickMortyFischePage/>}/>
                        {/*<Route path="/rickmorty2/:id" element={<CharacterDetailPage/>}/>*/}
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/kontakt" element={<KontaktPage/>}/>
                        <Route path="/country" element={<CountryPage/>}/>
                        <Route path="/country/:cca2" element={<CountryDetails countries={countries}/>}/>

                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

