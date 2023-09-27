import "./Blog.css"
import BlogEintrag from "./assets/BlogEintrag.tsx";

export default function Blog() {


    const Jahr = new Date().getFullYear();
    const Monat = new Date().getMonth() + 1;
    const Tag = new Date().getDate();

    const blogDate = [
    {
        title: "Hier ist was passiert",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
        date: Tag + "." + Monat + "." + Jahr
    },
        {
            title: "Hier ist was anderes passiert",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
            date: Tag-1 + "." + Monat + "." + Jahr
        },
        {
            title: "Hier ist noch was anderes passiert",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur eius esse labore odio officia, quos saepe! Alias dicta labore laudantium molestias numquam quis repudiandae sunt! Alias aliquam beatae cum dolore doloremque dolorum facilis id illum laborum laudantium mollitia nobis optio possimus quia sit soluta sunt tempore, vero voluptate?",
            date: Tag-3 + "." + Monat + "." + Jahr
        }
]

    return <div className={"main"}>
        <h1>Blog</h1>
        <section>
            {blogDate.map((blog) => {
                return <BlogEintrag title={blog.title} date={blog.date} content={blog.content} />
            })}
            {/*<BlogEintrag value={eintrag} content={} date={Tag + "." + Monat + "." + Jahr}/>*/}
            {/*<BlogEintrag value={eintrag += 1} date={Tag - 1 + "." + Monat + "." + Jahr}/>*/}
            {/*<BlogEintrag value={eintrag += 1} date={new Date().toString()}/>*/}
        </section>
    </div>
}