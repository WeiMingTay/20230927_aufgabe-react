import './App.css'
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import BlogPage from "./Pages/Blog/BlogPage.tsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfilePage from "./Pages/Profile/ProfilePage.tsx";
import RickMortyPage from "./Pages/RickMorty/RickMortyPage.tsx";
import Counter from "./Pages/Counter/CounterPage.tsx";
import RickMortyFischePage from "./Pages/RickMortyFische/RickMortyFischePage.tsx";


export default function App() {

    function myCallBackFunction(info: string) {
        console.log(info)
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<BlogPage myCallback={myCallBackFunction}/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/rickmorty" element={<RickMortyPage/>}/>
                <Route path="/rickmorty2" element={<RickMortyFischePage/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

