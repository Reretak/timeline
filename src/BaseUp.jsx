import { useEffect, useState } from 'react'
import './App.css'
import checkWindowDimension from './checkWindowDimension';
import useHorizontalScroll  from './horizontalScroll';  

function BaseUp() {

  const scrollRef = useHorizontalScroll();

  return (
    <div style={{position: "relative",maxWidth: "100vw"}}>
      <div ref={scrollRef} id="fakeroot">
        <Card id={"1"} boxtext={"2024-2026 / 514-516PU"} text={{
          maintext: "Whether intentionally or not, the organization had revealed the existence of another world to the public. Negotiation, threat, and backroom deals would fill many chambers during these years. While Earth's world leaders were busy, the leaders on the other side were in no way relaxed. Yet, without internet, information travels slowly. Only a small part of the world knew what a human was, but soon, they would know them very well.",
          titletext:"First Contact",
          stories: [
            {id:0,name:"Humans dark secret",link:"https://www.reddit.com/r/HFY/comments/1kih1xq/humans_dark_secret"},
            {id:1,name:"Overreaction",link:"https://www.reddit.com/r/HFY/comments/1o5lw9y/overreaction"},
            {id:2,name:"Charisma",link:"https://www.reddit.com/r/HFY/comments/1oyjf1t/charisma"}
          ]
          }} 
          boximg={"https://i.imgur.com/JevQysk.png"}/>
        <Card id={"2"} boxtext={"2027-2030 / 517-520PU"} text={{
          maintext: "Real life wasn't full of sunshine and rainbows. Although the cultural exchange and aid program had gone off without a hitch, a new conflict brewed on the horizon. Meanwhile on earth, as speculation on magic reached a new feverish pitch, schemes began on bypassing the organization rules. The newly established United Nations Otherworldly Commission must handle one of the biggest events humankind has ever faced, and they are already tired.",
          titletext:"Early Conflict",
          stories: [
            {id:0,name:"Curiosity killed the catfolk",link:"https://www.reddit.com/r/HFY/comments/1nud823/curiosity_killed_the_catfolk"},
            {id:1,name:"Easy prey",link:"https://www.reddit.com/r/HFY/comments/1o4lpex/easy_prey"},
            {id:2,name:"An urgent letter",link:"https://www.reddit.com/r/HFY/comments/1omg6ms/an_urgent_letter"},
            {id:3,name:"USE parliament_bills_db;",link:"https://www.reddit.com/r/HFY/comments/1oo6ecp/use_parliament_bills_db"},
            {id:4,name:"Easy prey",link:"https://www.reddit.com/r/HFY/wiki/series/yes_i_am_a_human"},
            {id:5,name:"An urgent letter",link:"https://www.reddit.com/r/HFY/comments/1pom3c2/mere_influence/"}
          ]
          }} 
          boximg={"https://i.imgur.com/qNku1FH.jpeg"}/>
        <Card id={"3"} boxtext={"2031-2040 / 521-530 PU"} text={{
          maintext: "The dust settled, with humanity appearing on top. Treaties were signed. And the overcumbered UNOC and the organization must handle Earth nations' creeping influence on the other world, lest it become another ground for proxy war and colonization. The organization, however, was too busy making a new weapon, one that the world had never seen and wished they never would. Meanwhile, on Earth, the situation began heating up. The question is no longer 'Will it collapse?' But 'When will it collapse?' And the answer seems to be very, very soon.",
          titletext:"Messy Days",
          stories: [

          ]
          }} 
          boximg={"https://i.imgur.com/g0pj1sC.jpeg"}/>
        <Card id={"4"} boxtext={"2041-2043 / 531-533PU"} text={{
          maintext: "With the UNOC influence left in the bin and the organization being fractured as ever. Earth nations began breaching in. Human ideas spread like a wildfire, and the otherworld seems to be infected, slowly but surely, with Earth descending to madness. On Earth, the clock had finally reached the number 12. ",
          titletext:"Beginning of an End",
          stories: [

          ]
          }}  
          boximg={"https://i.imgur.com/DrHVWLG.jpeg"}/>
        <Card id={"5"} boxtext={"2044-2060 / 534-550PU"} text={{
          maintext: "The portals were all closed. Leaving millions of humans stranded in another world. Their new predicament was made worse by raids, infighting, and general chaos. As their modern settlements fell into ruin, the humans set out across the world, accompanied by those who they had helped before, as allies. Though not fully without enemies. Despite the closures, ideas don't die. And a new conflict that the otherworld had never seen before seems inevitable. Though it might seem to be fresh problems for them, to humanity, these were old problems, from the fiery spreads of nationalism to the absolute mess that is industrialization. Would the otherworld follow in Earth history's footsteps, or would they carve their own path?",
          titletext:"Fresh Problems",
          stories: [
            {id:0,name:"Call to arms",link:"https://www.reddit.com/r/HFY/comments/1orocdw/call_to_arms"},
            {id:1,name:"A step to far",link:"https://www.reddit.com/r/HFY/comments/1p17li4/a_step_to_far"},
            {id:2,name:"The Downfall of slavery",link:"https://www.reddit.com/r/HFY/comments/1p2xrvb/the_downfall_of_slavery"},
            {id:3,name:"An Undergraduate Draft Thesis",link:"https://www.reddit.com/r/HFY/comments/1p68vgn/an_undergraduate_draft_thesis"},
            {id:4,name:"A silly thought",link:"https://www.reddit.com/r/HFY/comments/1pb200w/a_silly_thought"},
            {id:5,name:"Just Humans being humans",link:"https://www.reddit.com/r/HFY/comments/1pd11vx/just_humans_being_humans"}
          ]
          }} 
          boximg={"https://i.imgur.com/tS2Hiqz.jpeg"}/>
      </div>
      <ArrowDown />
    </div>
  )
}
function ArrowDown() {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        opacity: "0.75",
        bottom: "10%",
        left: "50vw",
        height: "50px",
        transform: "translateX(-50%)",
        cursor: "pointer",
      }}
      onClick={() => { window.scrollBy({left:0,top:window.innerHeight,behavior: "smooth"}); console.log("FUCK") }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 80 L20 30 L80 30 Z" fill="black" />
    </svg>
  );
}
function CardText({text,setIsHovered}){
  const { width, height } = checkWindowDimension();
  const [stories, setStories] = useState(
    text.stories.map(s =>({...s, checked:false}))
  );
  useEffect(() => {
    if(localStorage.getItem("stories") != null){
      setStories(JSON.parse(localStorage.getItem("stories")))
    }
  },[]);
  console.log(stories)
  let textstuff;
  let subtextstuff;
  let linkstuff;
  if(width < 600){
    textstuff = "2rem"
    subtextstuff = "1rem"
    linkstuff = "1rem"
  }
  else{
    textstuff = "2.5rem"
    subtextstuff = "1rem"
    linkstuff = "2rem"
  }
  return (
    <div
      onMouseEnter={()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
      onTouchStart={()=>{setIsHovered(true)}}
      onTouchEnd={()=>{setIsHovered(false)}}
      style={{
        overflowY: "scroll",
        maxHeight: "100%",
      }}
      className="Scrollable"
    >
      <p className="Scrollable"
        style={{
          fontSize: textstuff,
          fontWeight: "bold",
          padding: "10px"
        }}
      >
        {text.titletext}
      </p>
      <p className="Scrollable"
        style={{
          fontSize: subtextstuff,
          padding: "20px"
        }}
      >
        {text.maintext}
      </p>
      <hr></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
        className="Scrollable"
      >
        {text.stories.map((s) => {
            return <StoryItem s={s} key={s.id} linkstuff={linkstuff} setStories={setStories} stories={stories}></StoryItem>
        })}
        </div>
    </div>
  )
}
function StoryItem({s,linkstuff,setStories,stories}){
  let flashy;
  let extra;
  if(!stories[s.id].checked){
    flashy={
      backgroundPosition: "left",
    }
  }
  else{
    flashy = {
      backgroundPosition: "center",
    }
  }
  if(s.id % 2 == 0){
    extra = {
      backgroundImage: "linear-gradient(to right, #ffffff, #979797)"
    }
  }
  else{
    extra = {
      backgroundImage: "linear-gradient(to right, #ffffff, #6b6b6b)"
    }
  }
  return <p key={s.id} className="Scrollable" 
  style={{
    ...extra,
    backgroundSize: "500% 100%",
    transition: "background-position 0.2s ease",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    maxWidth: "100%",
    paddingLeft: "10%",
    paddingRight: "20%",
    ...flashy
  }}><a href={s.link} target="_blank" rel="noopener noreferrer" className="Scrollable"
  style={{
    fontSize:linkstuff,
    alignSelf: "flex-start",
    justifySelf: "center",
  }}
  >{s.name}</a><input className="Scrollable" type="checkbox" id={s.id} name="story" value={s.name} style={{
    marginLeft: "20px",
    alignSelf: "flex-end",
    justifySelf: "center",
    accentColor: "black"
  }}
  onChange={
    (e) =>  {
      const newStories = stories.map((story) => {
      if(story.id == e.target.id){
        return {
          ...story, checked: !story.checked
        }
      }
      else{
        return {
          ...story
        }
      }
      });
      setStories(newStories);
      localStorage.setItem("stories",JSON.stringify(newStories));
      const allTrue = (c) => {return c.checked == true}
      if(newStories.every(allTrue)){alert("You have finished reading all the stories in this era!")}
    }
  }
  /></p>
}
function Card({ id,text,boxtext,boximg }){
  const { width, height } = checkWindowDimension();
  let firstBox;
  let secondBox;
  let dir;
  const [isHovered, setIsHovered] = useState(false);
  if(id % 2 == 0){
    firstBox = <Box  isHovered={isHovered}><Boximg boximg={boximg}/></Box>
    secondBox = <Box isHovered={isHovered}><CardText text={text} setIsHovered={setIsHovered}></CardText></Box>
  }
  else{
    firstBox = <Box  isHovered={isHovered}><CardText text={text} setIsHovered={setIsHovered}></CardText></Box>
    secondBox = <Box isHovered={isHovered}><Boximg boximg={boximg}/></Box>
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
          height: "95vh",
        }}
      >
        {firstBox}
        <Line boxtext={boxtext} isHovered={isHovered} setIsHovered={setIsHovered}/>
        {secondBox}
      </div>
    </>
  )
}
function Box({ children,isHovered }){
  let style = {}
  if(isHovered){ 
    style = {visibility: "visible", opacity: "1"}
  }
  else{
    style = {visibility: "hidden", opacity: "0"}
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          flex: "100",
          width: "100%", 
          visibility: "visible",
          opacity: "0",
          transition: "visibility 0.5s cubic-bezier(0.01, 0.37, 0.01, 0.99),opacity 1s cubic-bezier(0.01, 0.37, 0.01, 0.99)",
          minHeight: "10px",
          marginBottom: "30px",
          ...style
        }}
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
function Line({ boxtext,isHovered,setIsHovered }){
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
        <Square color={"white"} border={"black"} isHovered={isHovered} setIsHovered={setIsHovered}>
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
function Square({color,border,children,isHovered,setIsHovered}){
  let size;
  const { width, height } = checkWindowDimension();
  if(width < 600){
    size = {w: 20,h: 70, m: 5}
  }
  else{
    size = {w: 50,h: 50, m: 10}
  }

  let endwidth;
  if(isHovered){
    endwidth = size.w*size.m;
  }
  else{
    endwidth = size.w
  }

  let squareStyle = {
    height: size.h + "px",
    width: endwidth + "px",
    backgroundColor: color,
    border: "0.25rem solid " + border,
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
  }

  return(
    <div
      style={
        squareStyle
      }
      onMouseEnter={()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
      onTouchStart={()=>{setIsHovered(true)}}
      onTouchEnd={()=>{setIsHovered(false)}}
    >
      {children}
    </div>
  )
}


export default BaseUp
