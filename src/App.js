import React, { useEffect, useState } from "react";
import background from "./assets/background.jpg";

const App=()=> {

  const[userChoice, setUserChoice] = useState(null)
  const[computerChoice, setComputerChoice] = useState(null)
  const[result, setResult] = useState(null)

  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) =>{
    setUserChoice(value)
    generateComputerChoice()
  }
  
  const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor( Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }
  useEffect(()=>{
    checkResult()
  },[computerChoice,userChoice])

  const checkResult = () =>{
    switch(userChoice+computerChoice){
      case 'rockscissors':
      case 'scissorspaper':
      case 'paperrock':
        setResult('You Win!')
        break
      case 'scissorsrock':
      case 'paperscissors':
      case 'rockpaper':
        setResult('You loose...')
        break
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        setResult('It,s a draw')
        break                
    }
  }
  const winStyle={
    color:'green'
  }
  const looseStyle={
    color:'red'
  }
  
  if(result==='You Win!'){
    return (
      <div className="gameArea" style={{backgroundImage: `url(${background})`}}>
      <h1 className="userChoice">User choice is: {userChoice} </h1>
      <h1>Computer choice is: {computerChoice} </h1>
      {choices.map((choice,index)=>
      <button className="btn" key={index} onClick={()=>handleClick(choice)}>{choice}</button>
      )}
      <h1 style={winStyle}>{result}</h1>
    </div>
  )
}if(result==='You loose...'){
  return(
    <div className="gameArea" style={{backgroundImage: `url(${background})`}}>
      <h1 className="userChoice">User choice is: {userChoice} </h1>
      <h1>Computer choice is: {computerChoice} </h1>
      {choices.map((choice,index)=>
      <button className="btn" key={index} onClick={()=>handleClick(choice)}>{choice}</button>
      )}
      <h1 style={looseStyle}>{result}</h1>
    </div>
  )
}else{
  return(
    <div className="gameArea" style={{backgroundImage: `url(${background})`}}>
      <h1 className="userChoice">User choice is: {userChoice} </h1>
      <h1>Computer choice is: {computerChoice} </h1>
      {choices.map((choice,index)=>
      <button className="btn" key={index} onClick={()=>handleClick(choice)}>{choice}</button>
      )}
      <h1>{result}</h1>
    </div>
  )
}
};

export default App;
