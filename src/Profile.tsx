import "./Profile.css"

export default function Profile() {
    return <div className={"main profile"}>

        <div>
            <img
                src={"https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"}
                alt="profile"/>
        </div>
        <h2>Dim Sum</h2>
        <h4>Web-Developer</h4>
        <a href={"https://github.com/weimingtay"} target={"_blank"}>Github-Profil</a>

    </div>
}