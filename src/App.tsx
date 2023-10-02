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
import CountryDetailsPage from "./Pages/Country/CountryDetailsPage.tsx";
import {Country, countryResponse} from "./assets/countryData.ts";
import CharacterDetailPage from "./Pages/RickMortyFische/CharacterDetailPage.tsx";
import {Character, characterResponse} from "./assets/rmapi.ts";
import AddCharacter from "./Components/rickMortyFische/AddCharacter.tsx";
import NewsGallery from "./Pages/News/NewsGallery.tsx";


export default function App() {
    const [characters, setCharacters] = useState<Character[]>(characterResponse.results)
    const [countries] = useState<Country[]>(countryResponse.countries)

    function myCallBackFunction(info: string) {
        console.log(info)
    }
    function saveCharacter(characterToSave: Character) {
        setCharacters([...characters, characterToSave])
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
                        <Route path="/rickmorty2/:id" element={<CharacterDetailPage character={characters}/>}/>
                        <Route path="/rickmorty2/add" element={<AddCharacter saveCharacter={saveCharacter}/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/kontakt" element={<KontaktPage/>}/>
                        <Route path="/news" element={<NewsGallery/>}/>
                        <Route path="/country" element={<CountryPage/>}/>
                        <Route path="/country/:cca2" element={<CountryDetailsPage countries={countries}/>}/>

                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

