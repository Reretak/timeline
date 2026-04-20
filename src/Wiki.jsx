import { useState } from 'react'
import './App.css'
import checkWindowDimension from './checkWindowDimension';

function Wiki() {

  return(
    <div id="about">
      <TextBox />
    </div>
  )
  
}
function TextBox(){
   return (
    <div >
      <p>Dont mind me just testing in prod!</p>
    </div>
   )
}


export default Wiki
