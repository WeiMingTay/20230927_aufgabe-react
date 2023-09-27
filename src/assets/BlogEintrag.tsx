

type BlogEintragProps = {
    title : string,
    date : string
    content : string
    image : string
}


export default function BlogEintrag(props: BlogEintragProps) {
    return <div className={"blogEintrag"}>
        <img src={props.image} alt={"unsplash"}/>
        <article>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.content}</p>
        </article>


    </div>
}