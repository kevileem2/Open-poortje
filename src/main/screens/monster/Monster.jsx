import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faSave,
  faChevronCircleRight,
  faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons"
import Lottie from "react-lottie"
import backgroundDataMonster from "../../../images/backgroundDataMonster.json"
import data from "../../../images/data.json"
import firebase from "../../firebase"
import {
  Container,
  InputMentor,
  HeaderModal,
  ContentModal,
  ActionsModal,
  CloseModal
} from "./components"

const Monster = ({ history }) => {
  const [getHeight, setHeight] = useState(0)
  const [date, setDate] = useState(new Date())
  const [mentor, setMentor] = useState("")
  const [description, setDescription] = useState("")
  const [animationDone, setAnimationDone] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data
  }

  const defaultOptionsBackground = {
    loop: false,
    autoplay: true,
    animationData: backgroundDataMonster
  }

  const getHeightDifference = () => {
    const clientHeight = document.getElementById("container").clientHeight + 70
    const windowHeight = window.innerHeight
    if (clientHeight < windowHeight) {
      setHeight(windowHeight - clientHeight)
    } else {
      setHeight(0)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true)
    }, 1500)

    if (localStorage.getItem("childId")) {
      const getChildData = firebase
        .database()
        .ref(`users/${localStorage.getItem("childId")}/worries`)
      getChildData.on("value", snapshot => {
        const worries = snapshot.val()
        if (worries) {
          setMentor(worries.mentor)
          setDescription(worries.description)
          if (worries.date) {
            setDate(new Date(worries.date))
          }
        }
      })
    }

    getHeightDifference()
    window.addEventListener("resize", getHeightDifference)

    return () => {
      window.removeEventListener("resize", getHeightDifference)
    }
  }, [])

  const handleMentorChange = event => {
    setMentor(event.target.value)
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const getDate = () => {
    const dateObj = date
    const month = dateObj.getUTCMonth() + 1 //months from 1-12
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    return `${day}/${month}/${year}`
  }

  const handleSaveToFirebase = () => {
    firebase
      .database()
      .ref(`users/${localStorage.getItem("childId")}/worries`)
      .set({
        mentor: mentor,
        description: description,
        date: new Date().getTime()
      })
  }

  const handleRedirectNext = () => {
    history.push("/leefgroep")
  }

  const handleRedirectPrevious = () => {
    history.push("/home")
  }

  return (
    <>
      <Container id="container">
        <Lottie
          options={defaultOptionsBackground}
          width="100%"
          style={{ zIndex: 1 }}
        />
        {animationDone && (
          <>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                right: 0,
                textAlign: "left",
                marginLeft: "auto",
                marginRight: "auto",
                zIndex: 10
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "90%",
                  height: "100%",
                  left: 0,
                  right: 0,
                  margin: "auto"
                }}
              >
                <Popup
                  trigger={
                    <div
                      style={{
                        cursor: "pointer",
                        display: "inline-block",
                        position: "absolute",
                        top: "6%",
                        width: "16vw",
                        height: "30%",
                        borderColor: "#FF0000",
                        borderWidth: 3,
                        left: "60vw",
                        fontSize: "1vw",
                        margin: 0
                      }}
                    ></div>
                  }
                  contentStyle={{
                    padding: 20,
                    paddingTop: 10,
                    width: "50%",
                    borderWidth: 3,
                    borderColor: "#8e5326",
                    borderRadius: 5
                  }}
                  position="bottom right"
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
                      <HeaderModal>
                        Waar word jij boos, verdrietig of bang van?
                      </HeaderModal>
                      <ContentModal>
                        <textarea
                          style={{
                            width: "98%",
                            outline: 0,
                            resize: 0,
                            overflow: "auto",
                            borderRadius: 5
                          }}
                          name="description"
                          id=""
                          cols="30"
                          rows="10"
                          value={description}
                          onChange={handleDescriptionChange}
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
                            close()
                          }}
                        >
                          Opslaan
                        </button>
                      </ActionsModal>
                    </div>
                  )}
                </Popup>
                <p
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: "4.5%",
                    left: "37.5vw",
                    fontSize: "1vw",
                    margin: 0
                  }}
                >
                  {getDate()}
                </p>
                <form
                  style={{
                    position: "absolute",
                    bottom: "4%",
                    left: "56.5vw",
                    fontSize: "1vw",
                    margin: 0
                  }}
                >
                  <InputMentor
                    type="text"
                    value={mentor}
                    onChange={handleMentorChange}
                  />
                </form>
              </div>
            </div>
            <Lottie
              options={defaultOptions}
              style={{
                zIndex: 3,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
              }}
            />
          </>
        )}
        <div
          style={{
            cursor: "pointer",
            display: "inline-block",
            position: "fixed",
            top: 100,
            right: 20,
            borderRadius: 50,
            zIndex: 20
          }}
          onClick={handleRedirectNext}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} size="3x" color="#FFF" />
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "inline-block",
            position: "fixed",
            top: 100,
            left: 200,
            borderRadius: 50,
            zIndex: 20
          }}
          onClick={handleRedirectPrevious}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" color="#FFF" />
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "inline-block",
            position: "fixed",
            top: 100,
            right: 90,
            borderRadius: 10,
            zIndex: 20
          }}
          onClick={handleSaveToFirebase}
        >
          <FontAwesomeIcon icon={faSave} size="3x" color="#FFF" />
        </div>
      </Container>
      {Boolean(getHeight) && (
        <div
          style={{
            width: "100%",
            height: getHeight,
            backgroundColor: "#A9A8A8",
            marginTop: -10
          }}
        ></div>
      )}
    </>
  )
}

export default Monster
