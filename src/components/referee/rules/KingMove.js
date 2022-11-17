import {tileIsEmptyOrOcuppiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";
import { samePosition } from "../../../Constants";
export function kingMove(
    initialPosition, 
    desiredPosition, 
    team, 
    boardState
){
    for(let i = 1; i < 2; i++) {
        //Diagonal
        let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0;
        let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0;
    
        let passedPosition = {
            x:initialPosition.x + (i * multiplierX), 
            y: initialPosition.y + (i * multiplierY)
        };

      if(samePosition(passedPosition,desiredPosition)) {
        if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if(tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    return false;
  }

  export const getPossibleKingMoves = (king,boardState) => {
    const possibleMoves = [];

     //upper right movement
  for(let i = 1;i < 2;i++){
    const destination = {x: king.position.x + i, y: king.position.y + i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //bottom right movement
  for(let i = 1;i < 2;i++){
    const destination = {x: king.position.x + i, y: king.position.y - i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //bottom left movement
  for(let i = 1;i < 2;i++){
    const destination = {x: king.position.x - i, y: king.position.y - i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //upper left movement
  for(let i = 1;i < 2;i++){
    const destination = {x: king.position.x - i, y: king.position.y + i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }

  //Top Movement
  for(let i=1;i<2;i++){
    const destination = {x: king.position.x, y:king.position.y+i};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Bottom Movement
  for(let i=1;i<2;i++){
    const destination = {x: king.position.x, y:king.position.y-i};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Right Movement
  for(let i=1;i<2;i++){
    const destination = {x: king.position.x+i, y:king.position.y};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Left Movement
  for(let i=1;i<2;i++){
    const destination = {x: king.position.x-i, y:king.position.y};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, king.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }

    return possibleMoves;
  }