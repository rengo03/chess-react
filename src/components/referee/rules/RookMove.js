import {tileIsEmptyOrOcuppiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export function rookMove(
    initialPosition,
    desiredPosition,
    team,
    boardState,
  ){
      if(initialPosition.x === desiredPosition.x){  
      for(let i=1;i<8;i++){
        let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;
  
        let passedPosition = {
          x:initialPosition.x,
          y: initialPosition.y+(i*multiplier)
        };
        if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
          if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
            return true;
          }
        }else{
          if(tileIsOccupied(passedPosition, boardState)){
            break; 
          }
        }
      }
    }
      if(initialPosition.y === desiredPosition.y){
        for(let i=1;i<8;i++){
          let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;
  
          let passedPosition = {
            x:initialPosition.x + (i*multiplier),
            y: initialPosition.y
          };
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          }else{
            if(tileIsOccupied(passedPosition, boardState)){
              break; 
            }
          }
        }
      } 
    return false;
  }

  export const getPossibleRookMoves = (rook, boardState) => {
    const possibleMoves = [];

    //Top Movement
    for(let i=1;i<8;i++){
      const destination = {x: rook.position.x, y:rook.position.y+i};

      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //Bottom Movement
    for(let i=1;i<8;i++){
      const destination = {x: rook.position.x, y:rook.position.y-i};

      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //Right Movement
    for(let i=1;i<8;i++){
      const destination = {x: rook.position.x+i, y:rook.position.y};

      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //Left Movement
    for(let i=1;i<8;i++){
      const destination = {x: rook.position.x-i, y:rook.position.y};

      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }

    return possibleMoves;
  }