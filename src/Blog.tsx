import "./Blog.css"
import BlogEintrag from "./assets/BlogEintrag.tsx";

type blogProps = {
    myCallback: (info: string) => void
}

export default function Blog(props: blogProps) {




    let key = 1;

    const Jahr = new Date().getFullYear();
    const Monat = new Date().getMonth() + 1;
    const Tag = new Date().getDate();

    props.myCallback("Was geht ab!? Heute ist der "+Tag+"."+Monat);

    const blogDate = [
    {
        title: "Hier ist was passiert",
        image: "https://source.unsplash.com/random/100x100",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
        date: Tag + "." + Monat + "." + Jahr,
        key: key++
    },
        {
            title: "Hier ist was anderes passiert",
            image: "https://source.unsplash.com/random/200x200",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
            date: Tag-1 + "." + Monat + "." + Jahr,
            key: key++
        },
        {
            title: "Hier ist noch was anderes passiert",
            image: "https://source.unsplash.com/random/300x300",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
            date: Tag-3 + "." + Monat + "." + Jahr,
            key: key++
        }
]

    return <div className={"main"}>
        <h1>Blog</h1>
        <section>
            {blogDate.map((blog, index) => {
                return <BlogEintrag title={index+1+". "+blog.title} date={blog.date} content={blog.content} image={blog.image} key={index}/>
            })}
            {/*<BlogEintrag value={eintrag} content={} date={Tag + "." + Monat + "." + Jahr}/>*/}
            {/*<BlogEintrag value={eintrag += 1} date={Tag - 1 + "." + Monat + "." + Jahr}/>*/}
            {/*<BlogEintrag value={eintrag += 1} date={new Date().toString()}/>*/}
        </section>
    </div>
}