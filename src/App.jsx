import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}
function Card(){
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "20vw",
          flex: "1",
          border: "solid black 1px", 
          display: "flex",
          flexDirection: "column",
          minWidth: "700px",
          gap: "2%",
          height: "100vh",
        }}
      >
        <Box />
        <Line />
        <Box />
      </div>
    </>
  )
}
function Box(){
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          flex: "100",
          width: "100%",
          borderRadius: "30px",
          border: "black solid 1px"

        }}
      >

      </div>
    </>
  )
}
function Line(){
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          flex: "1",
          width: "100%",
        }}
      >

      </div>
    </>
  )
}



export default App
