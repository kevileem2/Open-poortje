import styled from "styled-components"

export const Container = styled.div`
  z-index: 2;
  position: relative;
  margin-top: 80px;
  min-width: 100%;
  min-height: 100% - 80px;
  text-align: center;
`

export const InputMentor = styled.input`
  border: 0;
  color: #222;
  border-radius: 5px;
  padding: 0.3vw;
  width: 100%;
  max-width: 100px;
  background-color: #77dd77;
  transition: 0.3s all;
  font-size: 1vw;
  &:focus {
    background-color: rgba(119, 221, 119, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
    outline: 0;
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
