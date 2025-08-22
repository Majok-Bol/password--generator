//build a password generator that expires in 5 seconds
//what do i need to build it?
//timer like time interval
//i need to know how to generate the password
//how to generate rate it randomly
//use math.random to select from the given characters
//how to store it
//how to print the results
//use timer like 5 seconds to make it valid
//after 5 seconds
//remove the results
//generate a new one

import {useState} from 'react';

export default function App(){

  //push it into the array
  //let there be fixed length

  //i need to manage state like 5 seconds timer
  //then count down and make it expire by removing the generate password
  //which states do i need to manage
  //click button
  //generate new password
  //let it be empty at first
  const [password,setPassword]=useState("");

  //handle password generation
  function handlePasswordGeneration(){
      const characters='uvwxyzABCDklmEFGHITUVabijnopqrst0123456789!WXYZ@JKLMNO#cdefgh$%^&*PQRS()';
  console.log('Charaters to choose from: ',characters);
  //split the characters
  const splitCharacters=characters.split("");
  console.log("Split characters: ",splitCharacters);
  //store them in an array
  const passwords=[];
  //pick numbers randomly from the split list 
  let startIndex=0;
  let endIndex=15;
  for(let i=startIndex;i<endIndex;i++){
  //   //generate random number to pick the password characters
      let randomNumber=Math.floor(Math.random()*splitCharacters.length);
    console.log("Random character: ",randomNumber);
    passwords.push(splitCharacters[randomNumber]);
  }
  console.log("New password: ",passwords);
  const newPassword=passwords.join("");
  console.log("New Generated password: ",newPassword);
  setPassword(newPassword);

  }
  return(
  <>
  <h1>Password Generator</h1>
  <button id="btn" onClick={handlePasswordGeneration}>Generate Password</button>

  <div className='password-container' id='password'>{password}

  </div>


  </>)

}
