import React, { Component } from "react";

function FaceCard(props) {
    return (
            <img src={props.image} width="100" height="100" alt={props.id}
              id={props.id}
              onClick={props.clickMe} 
            />
    )
} 

export default FaceCard; 