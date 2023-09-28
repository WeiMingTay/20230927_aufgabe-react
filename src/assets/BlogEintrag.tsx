

type BlogEintragProps = {
    title : string,
    date : string
    content : string
    image : string
}


export default function BlogEintrag(props: BlogEintragProps) {

    function myButton() {
        console.log("klick"+props.date)
    }
    return <div className={"blogEintrag"}>
        <img src={props.image} alt={"unsplash"}/>
        <article>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.content}</p>
            <button onClick={myButton}>Klick</button>
        </article>


    </div>
}