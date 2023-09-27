

type BlogEintragProps = {
    title : string,
    date : string
    content : string
}


export default function BlogEintrag(props: BlogEintragProps) {
    return <div className={"blogEintrag"}>
        <img src={"https://source.unsplash.com/random/100x100"} alt={"unsplash"}/>
        <article>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.content}</p>
        </article>


    </div>
}