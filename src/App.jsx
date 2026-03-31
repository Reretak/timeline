import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <NeatBox height={"15vh"} />
    </>
  )
}

function ImageBox(){
  return(
    <>
      <div
        style={{
          
        }}
      >
        <img src="https://i.imgur.com/Udb7dW3.jpeg"></img>
      </div>
    </>
  )
}

function Square({color,border}){
  return(
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: color,
        border: "0.5rem solid " + border,
        zIndex: "2"
      }}
    ></div>
  )
}

function NeatLine({thick}){
  return(
    <hr 
      style={{
        width: "100%",
        minWidth: "100vw",
        height: thick,
        border: "none",
        color: "#333",
        backgroundColor: "#333",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

function NeatBox({height}){
  return(
    <>
    <div
      style={{
        height: height,
        width: "fit-content",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "300vw",
        flex: "1 auto auto",
      }}
    >
      <NeatLine thick={"0.5rem"} />

      <Square color={"#ffffff"} border={"#6B0E0E"} />
      <Square color={"#ffffff"} border={"#6B0E0E"} />
      <Square color={"#ffffff"} border={"#6B0E0E"} />
      <Square color={"#ffffff"} border={"#6B0E0E"} />
      <Square color={"#ffffff"} border={"#6B0E0E"} />
      
    </div>
    </>
  )
}


export default App
