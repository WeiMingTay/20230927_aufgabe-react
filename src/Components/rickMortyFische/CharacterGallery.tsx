import React, { ChangeEvent, useState, useEffect } from "react";
import {Character, characterResponse} from "../../assets/rmapi.ts";
import CharacterCard from "./CharacterCard.tsx";
import CharacterCarousel from "./CharacterCarousel.tsx";
import CharacterDetailPage from "../../Pages/RickMortyFische/CharacterDetailPage.tsx";
import {Route} from "react-router-dom";

type CharacterGalleryProps = {
    characters: Character[];
};

export default function CharacterGallery(props: CharacterGalleryProps) {
    const [searchText, setSearchText] = useState<string>("");
    const [scrollers, setScrollers] = useState<HTMLElement[]>([]);

    const filteredCharacters = props.characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase()) ||
        character.species.toLowerCase().includes(searchText.toLowerCase()) ||
        character.location.name.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        // After the component mounts, find and store the scrollers in state
        const foundScrollers = document.querySelectorAll(".scroller");
        setScrollers(Array.from(foundScrollers) as HTMLElement[]);
    }, []);

    useEffect(() => {
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, [scrollers]); // Run this effect whenever scrollers change

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", "true");

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner?.children || []);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                // duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner?.appendChild(duplicatedItem);
            });
        });
    }

    function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value);
    }

    return (
        <>
            <input onChange={onSearchTextChange} value={searchText} />
            <article className={"scroller"} data-direction={"left"} data-speed={"slow"}>
                <div className={"characterCarousel scroller__inner"}>
                    {props.characters.map((character) => (
                        <CharacterCarousel character={character} key={character.id} />
                    ))}
                </div>
            </article>

            <section>
                {filteredCharacters.length <= 0
                    ? "No characters"
                    : filteredCharacters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
            </section>
        </>
    );
}