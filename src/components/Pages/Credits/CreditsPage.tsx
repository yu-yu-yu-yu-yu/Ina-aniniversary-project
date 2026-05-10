import React from "react";
import { CreditEntry } from "../../../types";
import creditsData from "./credits.json";
import FloatingTakos from "../Home/FloatingTakos";
import { Navbar, NavHome } from "../../Common/Navbar";
import { NavTitle } from "../../../styles/globalStyles";
import { TAKO_COUNT } from "../../../constants/takos";
import {
  CreditsBoard,
  CreditsSection,
  CreditTitle,
  PeopleList,
  PersonLink,
  PersonName,
  TakoCountNote,
  CreditsNote,
  CreditsDivider,
} from "./styles/styles";

const credits = creditsData as CreditEntry[];

const CreditsPage = (): JSX.Element => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--background)" }}>
      <Navbar>
        <NavHome />
        <NavTitle>Credits</NavTitle>
      </Navbar>
      <FloatingTakos freeFloat />
      <CreditsBoard>
        {credits.map((entry, i) => (
          <React.Fragment key={i}>
            {i > 0 && <CreditsDivider />}
            <CreditsSection>
              <CreditTitle>{entry.title}</CreditTitle>
              <PeopleList>
                {entry.people.map((person, j) =>
                  person.url ? (
                    <PersonLink key={j} href={person.url} target="_blank" rel="noopener noreferrer">
                      {person.name}
                    </PersonLink>
                  ) : (
                    <PersonName key={j}>{person.name}</PersonName>
                  )
                )}
              </PeopleList>
              {entry.showTakoCount && (
                <TakoCountNote>More than {TAKO_COUNT} takodachis!</TakoCountNote>
              )}
            </CreditsSection>
          </React.Fragment>
        ))}
        <CreditsNote>
          Thanks to all the amazing takos who shared their art, sent messages, wrote letters, or simply cheered from the sidelines!
        </CreditsNote>
      </CreditsBoard>
    </div>
  );
};

export default CreditsPage;
