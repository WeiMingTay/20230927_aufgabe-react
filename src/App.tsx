import './App.css'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Blog from "./Blog.tsx";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from "./Profile.tsx";


export default function App() {

    function myCallBackFunction(info: string) {
        console.log(info)
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Blog myCallback={myCallBackFunction}/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

