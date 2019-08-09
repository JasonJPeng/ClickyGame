import React, { Component } from "react";

function FaceCard(props) {
    return (
            <img src={props.image} width="100" heihjt="100" alt={props.id}
              id={props.name}
              onClick={props.clickMe} 
            />
    )
} 

export default FaceCard; 