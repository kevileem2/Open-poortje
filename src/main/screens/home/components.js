import styled, { keyframes } from "styled-components"

const FadeInAnimation = keyframes`  
  from { 
    opacity: 0;
    top: 130px; 
  }
  to { 
    opacity: 1;
    top:150px;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 70px;
  padding-left: 150px;
  text-align: center;
`

export const Row = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  animation: ${FadeInAnimation} 0.3s ease-in both;
  animation-delay: 1s;
`

export const ChildCard = styled.div`
  padding: 20px;
  min-width: 100px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
`

export const ChildCardAdd = styled.div`
  display: inline-block;
  width: 100px;
  cursor: pointer;
  padding: 20px 0px;
  border-radius: 5px;
  background-color: #ccc;
  border: 3px solid #222;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const GradientBorder = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 1rem;
  border-radius: 5px;
  background: linear-gradient(to bottom, #5581f1, #1153fc);
  padding: 3px;
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const HeaderModal = styled.div`
  width: 97%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 15px 0px 15px 15px;
  margin-left: 5px;
`

export const ContentModal = styled.div`
  width: 100%;
  margin: 15px 5px;
`

export const ActionsModal = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`

export const CloseModal = styled.a`
  color: #222;
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 20px;
  background: #fff;
  border: 1px solid #222;
  border-radius: 18px;
`

export const Bord = styled.div`
  position: absolute;
  z-index: 3;
  margin: auto;
  top: 150px;
  left: 150px;
  right: 0;
  width: 40%;
  background-color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  border: 10px solid #8e5326;
  animation: ${FadeInAnimation} 0.3s ease-in both;
`

export const Title = styled.h1`
  flex: 1;
  animation: ${FadeInAnimation} 0.3s ease-in both;
  animation-delay: 0.3s;
`

export const SubTitle = styled.h3`
  flex: 1;
  animation: ${FadeInAnimation} 0.3s ease-in both;
  animation-delay: 0.6s;
`
