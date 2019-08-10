import React from "react";
import FaceCard from "./components/FaceCard";
// import Wrapper from "./components/Wrapper";
import faces from "./faces.json";
import "./App.css";

let maxNum = 20;

function shuffle(array, max){
  let out = [];
  
  while ( array.length > 0 && out.length < max) {
    let j = Math.floor(Math.random() * array.length);
    out.push(array[j]);
    array = array.filter((x, ind)=>{if(ind !== j) return x})
  }
  return out;
}

let newFaces = shuffle(faces, maxNum);

class App extends React.Component {
  
  state = {
    faces: newFaces,
    highestScore: 0,
    score: 0,
    clickedIds: []
  }
 
  clickMe = (event) => {
    let newArray = [], newScore, newHigh;
    let newClicked = this.state.clickedIds;
    let theId = event.target.id;
    console.log("====>   " + theId)
    
    if (this.state.clickedIds.indexOf(theId) < 0) {
      newArray = shuffle(this.state.faces, maxNum)
       newScore = this.state.score +1;
       newHigh = newScore > this.state.highestScore ? newScore : this.state.highestScore;
       newClicked.push(theId)
    } else {
      newArray = shuffle(faces, maxNum)
       newScore = 0;
       newHigh = this.state.highestScore;
       newClicked = [];
    }

    this.setState({faces: newArray,
                   score: newScore,
                   highestScore: newHigh,
                   clickedIds: newClicked
                  })
  }
  
  render () {
  return (
    <div id="game">
      <div id="score">
      <p>Current Score: {this.state.score} </p> 
      <p>Highest Score: {this.state.highestScore} </p>
      </div>
      {this.state.faces.map(e => {
        return <FaceCard
          key = {e.id}
          id = {e.id}
          
          image={e.image}
          // occupation={e.occupation}
          // location={e.location}
          clickMe = {this.clickMe}
          />
      })}
     </div>
    )};
}

export default App;
