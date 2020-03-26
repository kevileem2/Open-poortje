import React from "react"
import { Navbar } from "react-bootstrap"
import logoOpenPoortje from "../../../images/logoOpenPoortje.png"
import {
  NavigationContainer,
  StyledSideNav,
  Section,
  SectionData
} from "./components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUser,
  faPeopleCarry,
  faGavel,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons"
const Navigation = () => {
  return (
    <>
      <StyledSideNav>
        <Section backgroundColor="#3a8e45" first>
          <a href="/home">
            <span style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </span>
            Home
          </a>
        </Section>
        <Section backgroundColor="#e6b190">
          <p>
            <span style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </span>
            Ik
          </p>
        </Section>
        <SectionData>
          <ul>
            <a href="/zorgen">Zorgen</a>
          </ul>
        </SectionData>
        <Section backgroundColor="#F1c926">
          <p>
            <span style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faUserFriends} size="lg" />
            </span>
            Gezin
          </p>
        </Section>
        <SectionData>
          <ul>
            <a>Lorem</a>
          </ul>
        </SectionData>
        <Section backgroundColor="#c83d3b">
          <p>
            <span style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faPeopleCarry} size="lg" />
            </span>
            CKG
          </p>
        </Section>
        <SectionData>
          <ul>
            <a>Ipsum</a>
          </ul>
        </SectionData>
        <Section backgroundColor="#0099bc">
          <p>
            <span style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faGavel} size="lg" />
            </span>
            Rechten
          </p>
        </Section>
        <SectionData>
          <ul>
            <a>Dolor</a>
          </ul>
        </SectionData>
      </StyledSideNav>
      <NavigationContainer>
        <Navbar expand="lg">
          <Navbar.Brand href="/home">
            <img src={logoOpenPoortje} />
          </Navbar.Brand>
        </Navbar>
      </NavigationContainer>
    </>
  )
}

export default Navigation
