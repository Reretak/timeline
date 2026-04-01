import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Card id={"1"}/>
      <Card id={"2"}/>
      <Card id={"3"}/>
      <Card id={"4"}/>
      <Card id={"5"}/>
    </>
  )
}
function Card({ id }){
  let firstBox;
  let secondBox;
  if(id % 2 == 0){
    firstBox = <Box id={id}><Boximg /></Box>
    secondBox = <Box></Box>
  }
  else{
    firstBox = <Box></Box>
    secondBox = <Box id={id}><Boximg /></Box>
  }
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
        {firstBox}
        <Line id={id}/>
        {secondBox}
      </div>
    </>
  )
}
function Box({ id,children }){
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          flex: "100",
          width: "100%",
          borderRadius: "30px",
          border: "black solid 1px",
          opacity: "0%",
          transition: "opacity 1s cubic-bezier(0.01, 0.37, 0.01, 0.99)",
          minHeight: "10px"
        }}
        className={id}
      >
        {children}
      </div>
    </>
  )
}
function Boximg(){
  return (
    <>
      <img src="https://placehold.co/600x400"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      ></img>
    </>
  )
}
function Line({ id }){
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          flex: "1",
          width: "100%",
          position: "relative"
        }}
      >
        <Square color={"white"} border={"black"} id={id}/>
      </div>
    </>
  )
}
function Square({color,border,id}){
  return(
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: color,
        border: "0.5rem solid " + border,
        zIndex: "2",
        position: "absolute",
        top: "50%",            
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "width 1s cubic-bezier(0.01, 0.37, 0.01, 0.99)"
      }}
      onMouseEnter={()=>{testfunc(id)}}
      onMouseLeave={()=>{testfunc(id)}}
      id={id + "Square"}
    ></div>
  )
}

function testfunc(id){
  let test = document.getElementsByClassName(id);
  for (let t of test) {
    if(t.style.opacity == 0){
      t.style.opacity = 1;
    }
    else{
      t.style.opacity = 0;
    }
    
  }
  let square = document.getElementById(id+"Square");
  
  if(parseInt(square.style.width) > 50){
    square.style.width = "50px";
  }
  else{
    square.style.width = "200px";
  }
}
export default App
