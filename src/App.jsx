import { useState } from 'react'
import './App.css'
import checkWindowDimension from './checkWindowDimension';

function App() {
  return (
    <>
      <Card id={"1"} boxtext={"2024-2026 / 514-516PU"} text={{maintext: "Whether intentionally or not, the organization had revealed the existence of another world to the public. Negotiation, threat, and backroom deals would fill many chambers during these years. While Earth's world leaders were busy, the leaders on the other side were in no way relaxed. Yet, without internet, information travels slowly. Only a small part of the world knew what a human was, but soon, they would know them very well.",titletext:"First Contact"}} boximg={"https://i.imgur.com/JevQysk.png"}/>
      <Card id={"2"} boxtext={"2027-2030 / 517-520PU"} text={{maintext: "Real life wasn't full of sunshine and rainbows. Although the cultural exchange and aid program had gone off without a hitch, a new conflict brewed on the horizon. Meanwhile on earth, as speculation on magic reached a new feverish pitch, schemes began on bypassing the organization rules. The newly established United Nations Otherworldly Commission must handle one of the biggest events humankind has ever faced, and they are already tired.",titletext:"Early Conflict"}} boximg={"https://i.imgur.com/qNku1FH.jpeg"}/>
      <Card id={"3"} boxtext={"2031-2040 / 521-530 PU"} text={{maintext: "The dust settled, with humanity appearing on top. Treaties were signed. And the overcumbered UNOC and the organization must handle Earth nations' creeping influence on the other world, lest it become another ground for proxy war and colonization. The organization, however, was too busy making a new weapon, one that the world had never seen and wished they never would. Meanwhile, on Earth, the situation began heating up. The question is no longer 'Will it collapse?' But 'When will it collapse?' And the answer seems to be very, very soon.",titletext:"Messy Days"}} boximg={"https://i.imgur.com/g0pj1sC.jpeg"}/>
      <Card id={"4"} boxtext={"2041-2043 / 531-533PU"} text={{maintext: "With the UNOC influence left in the bin and the organization being fractured as ever. Earth nations began breaching in. Human ideas spread like a wildfire, and the otherworld seems to be infected, slowly but surely, with Earth descending to madness. On Earth, the clock had finally reached the number 12. ",titletext:"Beginning of an End"}} boximg={"https://i.imgur.com/DrHVWLG.jpeg"}/>
      <Card id={"5"} boxtext={"2044-2060 / 534-550PU"} text={{maintext: "The portals were all closed. Leaving millions of humans stranded in another world. Their new predicament was made worse by raids, infighting, and general chaos. As their modern settlements fell into ruin, the humans set out across the world, accompanied by those who they had helped before, as allies. Though not fully without enemies. Despite the closures, ideas don't die. And a new conflict that the otherworld had never seen before seems inevitable. Though it might seem to be fresh problems for them, to humanity, these were old problems, from the fiery spreads of nationalism to the absolute mess that is industrialization. Would the otherworld follow in Earth history's footsteps, or would they carve their own path?",titletext:"Fresh Problems"}} boximg={"https://i.imgur.com/tS2Hiqz.jpeg"}/>
    </>
  )
}
function CardText({text}){
  const { width, height } = checkWindowDimension();
  let textstuff;
  let subtextstuff;
  if(width < 600){
    textstuff = "2rem"
    subtextstuff = "1rem"
  }
  else{
    textstuff = "4rem"
    subtextstuff = "1.25rem"
  }
  return (
    <>
      <p
        style={{
          fontSize: textstuff,
          fontWeight: "bold",
          padding: "10px"
        }}
      >
        {text.titletext}
      </p>
      <p
        style={{
          fontSize: subtextstuff,
          padding: "20px"
        }}
      >
        {text.maintext}
      </p>
    </>
  )
}
function Card({ id,text,boxtext,boximg }){
  const { width, height } = checkWindowDimension();
  let firstBox;
  let secondBox;
  let dir;
  if(id % 2 == 0){
    firstBox = <Box id={id}><Boximg boximg={boximg}/></Box>
    secondBox = <Box id={id}><CardText text={text}></CardText></Box>
  }
  else{
    firstBox = <Box id={id}><CardText text={text}></CardText></Box>
    secondBox = <Box id={id}><Boximg boximg={boximg}/></Box>
  }
  if(width < 600){
    dir = "row"
  }
  else{
    dir = "column"
  }
  return (
    <>
      <div
        style={{
          width: "20vw",
          flex: "1",
          display: "flex",
          flexDirection: dir,
          minWidth: "700px",
          gap: "2%",
          height: "100vh",
        }}
      >
        {firstBox}
        <Line id={id} boxtext={boxtext}/>
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
function Boximg({boximg}){
  return (
    <>
      <img src={boximg}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      ></img>
    </>
  )
}
function Line({ id,boxtext }){
  const { width, height } = checkWindowDimension();
  let textstuff;
  let wrap;
  if(width < 600){
    textstuff = "1rem"
    wrap = "wrap"
  }
  else{
    textstuff = "2rem"
    wrap = "nowrap"
  }
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
        <Square color={"white"} border={"black"} id={id}>
          <p
          style={{
            fontSize: textstuff,
            pointerEvents: "none" ,
            textWrap: wrap,
          }}
          >{boxtext}</p>
        </Square>
      </div>
    </>
  )
}
function Square({color,border,id,children}){
  let w;
  let h;
  const { width, height } = checkWindowDimension();
  if(width < 600){
    w = "20px";
    h = "70px";
  }
  else{
    w = "50px";
    h = "50px";
  }
  return(
    <div
      style={{
        height: h,
        width: w,
        backgroundColor: color,
        border: "0.5rem solid " + border,
        zIndex: "2",
        position: "absolute",
        top: "50%",            
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "width 1s cubic-bezier(0.01, 0.37, 0.01, 0.99)",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={()=>{testfunc(id,width,height)}}
      onMouseLeave={()=>{testfunc(id,width,height)}}
      onTouchStart={()=>{testfunc(id,width,height)}}
      onTouchEnd={()=>{testfunc(id,width,height)}}
      id={id + "Square"}
    >
      {children}
    </div>
  )
}

function testfunc(id,width,height){
  let w;
  let h;
  let m;
  if(width < 600){
    w = "20"
    h = "70"
    m = "5"
  }
  else{
    w = "50"
    h = "50"
    m = "10"
  }
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
  
  if(parseInt(square.style.width) > w){
    console.log("Return back to og size")
    square.style.width = w+"px";
    square.style.height = h+"px";
  }
  else{
    square.style.width = w*m+"px";
    square.style.height = h+"px";
  }
}
export default App
