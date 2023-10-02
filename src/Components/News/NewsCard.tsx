import "../../Pages/News/News.css"


export default function NewsCard({article}) {



    return <article className={"newsCard"}>
        <h3>{article.title}, <span>{article.author}</span></h3>
        <img src={article.urlToImage} alt={article.author}/>
        <p>{article.description}</p>
        <p>{article.publishedAt.replace("T", " ").replace("Z", "")}</p>
        <a href={article.url}>Read More</a>
    </article>
}