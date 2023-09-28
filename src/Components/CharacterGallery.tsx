import {Character} from "../assets/rmapi.ts";
import CharacterCard from "./CharacterCard.tsx";
import {ChangeEvent, useState} from "react";
import CharacterCarousel from "./CharacterCarousel.tsx";

type CharacterGalleryProps = {
    characters: Character[]
}
export default function CharacterGallery(props: CharacterGalleryProps) {
    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = props.characters.filter((character) =>
        (character.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (character.species.toLowerCase().includes(searchText.toLowerCase())) ||
        (character.location.name.toLowerCase().includes(searchText.toLowerCase()))
    )

    // console.log(filteredCharacters.length <= 0 ? "No characters" : filteredCharacters)

    function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
    //if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    //}

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", "true");

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                // duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    return <>

        <input onChange={onSearchTextChange} value={searchText}/>
        <article className={"scroller"} data-direction={"left"} data-speed={"slow"}>
            <div className={"characterCarousel scroller__inner"}>
                {props.characters.map(character => <CharacterCarousel character={character} key={character.id}/>)}
            </div>
        </article>
        <section>{
            filteredCharacters.length <= 0 ?
                "No characters" :
                filteredCharacters.map(character =>
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />)}</section>
    </>
}