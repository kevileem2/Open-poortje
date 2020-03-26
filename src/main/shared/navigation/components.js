import styled from "styled-components"

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  .navbar {
    background-color: #99c8c1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  }
  .navbar img {
    margin: 10px;
  }
`

/* This defines the actual bar going down the screen */
export const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100vh;
  width: 150px; /* Set the width of the sidebar */
  background-color: #fff;
  top: 0px;
  z-index: 9;
  margin-top: 80px;
  box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.15);
  overflow-x: hidden; /* Disable horizontal scroll */
`

export const Section = styled.div`
  z-index: 100;
  display: block;
  padding: 10px;
  background: ${props => props.backgroundColor};
  border-bottom: ${props => (props.first ? "" : "1px solid #000")};
  border-top: 1px solid #000;
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    color: #fff;
    margin: 0px;
  }
`

export const SectionData = styled.div`
  background: linear-gradient(to right, #afb9bf, #c2cbd0);
  ul {
    margin: 0;
    padding: 10px 10px 10px 40px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`
