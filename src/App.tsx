import './App.css'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Blog from "./Blog.tsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from "./Profile.tsx";


export default function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Blog/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

