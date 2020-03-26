import React, { useState, useEffect, useMemo } from "react"
import Popup from "reactjs-popup"
import { v4 as uuidv4 } from "uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"
import Lottie from "react-lottie"
import dataHomePage from "../../../images/dataHomePage.json"
import firebase from "../../firebase"
import useGlobalState from "../../useGlobalState"
import {
  Container,
  Row,
  ChildCard,
  GradientBorder,
  ChildCardAdd,
  ActionsModal,
  CloseModal,
  ContentModal,
  HeaderModal,
  Bord,
  Title,
  SubTitle
} from "./components"

const Home = ({ history }) => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [isAnimationDone, setAnimationDone] = useState(false)

  const globalState = useGlobalState()

  useEffect(() => {
    const getUsers = firebase.database().ref("users")
    getUsers.on("value", snapshot => {
      const users = snapshot.val()
      let newState = []
      for (const user in users) {
        newState.push({
          id: user,
          name: users[user].name
        })
      }
      setUsers(newState)
    })
    setTimeout(() => setAnimationDone(true), 3000)
  }, [])

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const getBackgroundColor = () =>
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"

  const defaultOptionsBackground = {
    loop: false,
    autoplay: true,
    animationData: dataHomePage
  }

  const handleChildClick = element => {
    globalState.setChild({
      name: element.name,
      childId: element.id
    })
    localStorage.setItem("childId", element.id)
    history.push("/zorgen")
  }

  const handleAddChildToFirebase = () => {
    const uuid = uuidv4()
    firebase
      .database()
      .ref(`users/${uuid}`)
      .set({
        name: name
      })
    globalState.setChild({
      name: name,
      childId: uuid
    })
    localStorage.setItem("childId", uuid)
    history.push("/zorgen")
  }

  const renderUser = element => (
    <GradientBorder key={uuidv4()} onClick={() => handleChildClick(element)}>
      <ChildCard backgroundColor={getBackgroundColor}>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <p>{element.name}</p>
      </ChildCard>
    </GradientBorder>
  )

  const mapRenderUsers = useMemo(() => users?.map(renderUser), [users])

  return (
    <>
      <Container id="container">
        {isAnimationDone && (
          <>
            <Bord>
              <Title style={{ flex: 1 }}>Welkom Open Poortje!</Title>
              {Boolean(mapRenderUsers.length) ? (
                <SubTitle style={{ flex: 1 }}>
                  kies uit 1 van de volgende kindjes
                </SubTitle>
              ) : (
                <SubTitle style={{ flex: 1 }}>
                  Je hebt nog geen kindjes toegevoegd, voeg er nu toe!
                </SubTitle>
              )}
              {Boolean(mapRenderUsers.length) && <Row>{mapRenderUsers}</Row>}
              <Popup
                trigger={
                  <Row>
                    <ChildCardAdd>
                      <FontAwesomeIcon icon={faPlus} size="2x" />
                      <br></br>
                      <p style={{ display: "inline-block" }}>Nieuw kind</p>
                    </ChildCardAdd>
                  </Row>
                }
                modal
              >
                {close => (
                  <div style={{ width: "100%" }}>
                    <CloseModal
                      onClick={() => {
                        close()
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </CloseModal>
                    <HeaderModal>Wat is jouw naam?</HeaderModal>
                    <ContentModal>
                      <input
                        style={{
                          width: "98%",
                          outline: 0,
                          resize: 0,
                          overflow: "auto",
                          borderRadius: 5
                        }}
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </ContentModal>
                    <ActionsModal>
                      <button
                        style={{
                          backgroundColor: "#77dd77",
                          borderRadius: 5,
                          border: 0,
                          padding: 5,
                          color: "#FFF",
                          fontSize: 14,
                          outline: 0
                        }}
                        onClick={() => {
                          handleAddChildToFirebase()
                          close()
                        }}
                      >
                        Ga door!
                      </button>
                    </ActionsModal>
                  </div>
                )}
              </Popup>
            </Bord>
          </>
        )}
        <Lottie
          options={defaultOptionsBackground}
          width="100%"
          style={{
            zIndex: 1
          }}
        />
      </Container>
    </>
  )
}

export default Home
