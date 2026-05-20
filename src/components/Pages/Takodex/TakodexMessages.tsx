import React, { useLayoutEffect, useState } from "react";
import Masonry from "react-masonry-component";
import {
    SubmissionContainer,
    TakodexCard,
    TakodexCardHeader,
    TakodexText,
    TakodexImage,
    NavTitle,
    AddTakoButton
} from "./styles";
import {SiteBoard, SearchBar as MessagesSearchBar } from "../Messages/styles";
import { Navbar, NavHome } from "../../Common/Navbar";

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
        <div style={{ minHeight: "100vh", background: "var(--background)" }}>
            <Navbar>
                <NavHome />
                <NavTitle>Takodex</NavTitle>
                <div style={{ marginLeft: "auto" }}>
                  <AddTakoButton
                    href="https://forms.gle/qnrMrk2z6QaRHsdZ7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add my Tako
                  </AddTakoButton>
                </div>
            </Navbar>
            <SiteBoard>
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
                    {filteredEntries.map(({ name, author, category, attributes, description, image }, i) => {
                        const displayName = name && name.trim() !== "" ? name : author;
                        return (
                            <SubmissionContainer key={i}>
                                <TakodexCard>
                                    <TakodexCardHeader>{displayName ? displayName : author}</TakodexCardHeader>
                                    <div style={{ padding: "0.75rem" }}>
                                        <TakodexText>
                                            <b>Category:</b> {category ? category : "Uncategorized"}
                                        </TakodexText>
                                        <TakodexText>
                                            <b>Attributes:</b> {attributes ? attributes : "Unknown"}
                                        </TakodexText>
                                        <hr />
                                        {(image && !failedImages[i]) ? (
                                            <TakodexImage
                                                src={process.env.PUBLIC_URL + "/takoswentries/" + image}
                                                alt={displayName}
                                                onError={() => handleImgError(i)}
                                            />
                                        ) : (
                                            <TakodexImage
                                                src={process.env.PUBLIC_URL + "/icon/" + getRandomIcon(i)}
                                                alt="random tako icon"
                                            />
                                        )}
                                        <hr />
                                        <TakodexText>{description}</TakodexText>
                                        <TakodexText>
                                            <b>by: {author}</b>
                                        </TakodexText>
                                    </div>
                                </TakodexCard>
                            </SubmissionContainer>
                        );
                    })}
                </Masonry>
            </SiteBoard>
        </div>
    );
};