import React from "react";
import styled from "styled-components";
import { Submission } from "./Submission";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";

const SubmissionContainer = styled.div`
    margin :10px;
    width: 450px;
    @media only screen and (max-width: 768px) {
        margin-left: 0px;
        width: 100%;
    }

`;

const TextBubbleContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  padding: 15px;
  border: 3px solid var(--inai-purple);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 3px solid #A198B3;
  border-radius: 15px;
  opacity: 1;
  
`;

// const TextBubbleBottom = styled.div`
//     content: "";
//     width: 0px;
//     height: 0px;
//     position: absolute;
//     border-left: 24px solid #fff;
//     border-right: 12px solid transparent;
//     border-top: 12px solid #fff;
//     border-bottom: 20px solid transparent;
//     left: 50%;
//     bottom: -17px;
//     // border-color: purple;
// `;

const BubbleMessage = styled.div`
    padding-top: 5px;
    overflow-wrap: break-word;
    color: var(--ika-purple);
    text-align: left;
    font: normal normal 300 20px/25px Mulish;
    letter-spacing: 0px;
    opacity: 1;
`;

const BubbleImage = styled.img`
    border: 2px solid var(--inai-purple);
    border: 2px solid #A198B3;
    border-radius: 23px;
    opacity: 1;  
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const BubbleHeader = styled.div`
    color: var(--ina-orange);
    text-align: left;

    
    font: normal normal 600 37px/45px Montserrat;

    @media only screen and (max-width: 768px) {
        font: normal normal 600 24px/30px Montserrat;    
    }
    
    letter-spacing: 0px;
    opacity: 1;
    display: flex;
    width: 100%;
    align-items: center;
`;

const HeaderText = styled.div`
    overflow-wrap: break-word;

`;

const TakoImgContainer = styled.div`
    display: flex;
`;

interface TakoMessagesProps {
    submissions: Submission[];
    isToggledOnlyImg: boolean;
    isToggledTextOnly: boolean;
}

const TakoMessages = ({ submissions, isToggledOnlyImg, isToggledTextOnly }: TakoMessagesProps): JSX.Element => {

    if (isToggledOnlyImg) {
        submissions = submissions.filter((sub) => {
            return sub.image;
        })
    }


    return (
        <Masonry
            options={{
                gutter: 40,
                columnWidth: 1,
                fitWidth: true,
                transitionDuration: 0,
            }}
            style={{ margin: "0 auto" }}
        >
            {
                submissions.map(({ message, user, icon, image }, i) => (
                    <SubmissionContainer key={i}>
                        <TextBubbleContainer>
                            <BubbleHeader>
                                <TakoImgContainer>
                                    <TakoIcon id={icon} />
                                </TakoImgContainer>
                                <HeaderText>
                                {user != '' ? user : 'Anonymous Tako'}:
                                </HeaderText>
                            </BubbleHeader>
                            <hr/>
                            {!isToggledTextOnly && image && (
                                //Using ina pfp as placeholder.
                                <BubbleImage src="https://pbs.twimg.com/profile_images/1339283318848716801/_zU72OLZ_400x400.jpg" />
                            )}
                            {!isToggledOnlyImg && (
                                <BubbleMessage>{message}</BubbleMessage>
                            )}
                            {/* <TextBubbleBottom/> */}
                        </TextBubbleContainer>
                    </SubmissionContainer>
                ))
            }
        </Masonry>
    );

};

export default TakoMessages;
