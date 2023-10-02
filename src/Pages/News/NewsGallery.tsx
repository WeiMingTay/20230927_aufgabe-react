import {useEffect, useState} from "react";
import axios from "axios";
import NewsCard from "../../Components/News/NewsCard.tsx";
import "./News.css";

export default function NewsGallery() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    const apiKey = "61a51e6230e145a2b1bda71a11df1048";
    const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=" + apiKey
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setArticles(res.data.articles);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data', error);
                setLoading(false)
            })
    }, [])
    // If you want to prevent the extra renders, you can consider using the useEffect hook with an empty dependency array ([]) to make the API request only once during the component's initial render. However, be aware that this approach won't allow your component to update when the URL changes or other dependencies change. It's essential to choose the approach that best suits your application's requirements.

    if (loading) {
        return <h1>Loading...</h1>
    }

    return <section className={"main newsGallery"}>
        {articles.map((article, index) =>
            <NewsCard key={index} article={article}/>
        )}

    </section>
}