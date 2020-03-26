import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import Lottie from "react-lottie"
import dataLeefgroep from "../../../images/dataLeefgroep"
import { Container } from "./components"

const Leefgroep = ({ history }) => {
  const [getHeight, setHeight] = useState(0)
  const [animationDone, setAnimationDone] = useState(false)

  const defaultOptionsBackground = {
    loop: false,
    autoplay: true,
    animationData: dataLeefgroep
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
    }, 3100)

    getHeightDifference()
    window.addEventListener("resize", getHeightDifference)

    return () => {
      window.removeEventListener("resize", getHeightDifference)
    }
  }, [])

  const handleRedirectPrevious = () => {
    history.push("/zorgen")
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
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size="3x"
                color="#FFF"
              />
            </div>
          </>
        )}
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

export default Leefgroep
