import React, { useLayoutEffect, useState } from "react";
import Masonry from "react-masonry-component";
import { NavLink } from "react-router-dom";
import {
    SubmissionContainer,
    TextBubbleContainer,
    BubbleImage,
    BubbleHeader,
    HeaderText,
    BubbleMessage,
    Title
} from "../Takodex/styles";
import { Navbar, MessageBoard, SearchBar as MessagesSearchBar } from "../Messages/styles";

const iconImages = [
    "8-bit Tako.png",
    "Hollow Tako.png",
    "Ikadachi.png",
    "Mori Tako.png",
    "Robodachi.png",
    "Tako Amelia (Takoson).png",
    "Tako Gura (Chum Tako).png",
    "Tako Ina.png",
    "Tako Kiara (Tako Bell).png",
    "Tako Ross.png",
    "Takodachi.png",
    "Takomfy.png",
    "Tophat Tako.png",
    "Violet Tako.png",
    "Wonder Tako.png",
    "Yuul B. Tako.png"
];

function getRandomIcon(index: number) {
    return iconImages[index % iconImages.length];
}

interface TakodexEntry {
    name: string;
    author: string;
    category: string;
    attributes: string;
    description: string;
    image: string;
}

export const TakodexMessages = ({ entries }: { entries: TakodexEntry[] }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [failedImages, setFailedImages] = useState<{ [key: number]: boolean }>({});
    const [search, setSearch] = useState("");

    const handleImgError = (i: number) => {
        setFailedImages((prev) => ({ ...prev, [i]: true }));
    };

    const filteredEntries = entries.filter(
        ({ name, author, category, attributes, description }) =>
            [name, author, category, attributes, description]
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar>
                <NavLink exact to="/">
                    <i className="fa fa-angle-left" /> Return
                </NavLink>
                <Title>Takodex</Title>
            </Navbar>
            <MessageBoard>
                <MessagesSearchBar
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Takodex..."
                />
                <Masonry
                    options={{
                        gutter: 40,
                        columnWidth: 1,
                        fitWidth: true,
                        transitionDuration: 0,
                    }}
                    style={{ margin: "0 auto" }}
                >
                    {filteredEntries.map(({ name, author, category, attributes, description, image }, i) => (
                        <SubmissionContainer key={i}>
                            <TextBubbleContainer>
                                <BubbleHeader>
                                    <HeaderText>{name}</HeaderText>
                                </BubbleHeader>
                                <BubbleMessage>
                                    <b>Category:</b> {category}
                                </BubbleMessage>
                                <BubbleMessage>
                                    <b>Attributes:</b> {attributes}
                                </BubbleMessage>
                                    {(image && !failedImages[i]) ? (
                                        <BubbleImage
                                            src={process.env.PUBLIC_URL + "/takoswentries/" + image}
                                            alt={name}
                                            onError={() => handleImgError(i)}
                                        />
                                    ) : (
                                        <BubbleImage
                                            src={process.env.PUBLIC_URL + "/icon/" + getRandomIcon(i)}
                                            alt="random tako icon"
                                        />
                                    )}
                                <hr />
                                <BubbleMessage>{description}</BubbleMessage>
                                <BubbleMessage>
                                    <b>by: {author}</b>
                                </BubbleMessage>
                            </TextBubbleContainer>
                        </SubmissionContainer>
                    ))}
                </Masonry>
            </MessageBoard>
        </>
    );
};