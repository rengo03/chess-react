import {tileIsEmptyOrOcuppiedByOpponent,tileIsOccupied, tileIsOccupiedByOpponent} from "./GeneralRules";

export function bishopMove(
    initialPosition,
    desiredPosition,
    team,
    boardState,
  ){
      //Movement and attack logic for the bishop 
      for(let i=1;i<8;i++)
      {
        // Up right movement 
        if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y){
          let passedPosition = {
            x: initialPosition.x + i,
            y: initialPosition.y + i
          };
          //Check if the tile is the destination
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            //Dealing with destination tile
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          } else{
            //Dealing with passing tile
            if(tileIsOccupied(passedPosition, boardState)){
              break;
            }
          }
        }
        // Bottom right movement 
        if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y){
          let passedPosition = {
            x: initialPosition.x + i,
            y: initialPosition.y - i
          };
          //Check if the tile is the destination
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            //Dealing with destination tile
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          } else{
            //Dealing with passing tile
            if(tileIsOccupied(passedPosition, boardState)){
              break;
            }
          }
        }
        // Bottom left movement 
        if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y){
          let passedPosition = {
            x: initialPosition.x - i,
            y: initialPosition.y - i
          };
          //Check if the tile is the destination
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            //Dealing with destination tile
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          } else{
            //Dealing with passing tile
            if(tileIsOccupied(passedPosition, boardState)){
              break;
            }
          }
        }
        // Top left movement 
        if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y){
          let passedPosition = {
            x: initialPosition.x - i,
            y: initialPosition.y + i
          };
          //Check if the tile is the destination
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            //Dealing with destination tile
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          } else{
            //Dealing with passing tile
            if(tileIsOccupied(passedPosition, boardState)){
              break;
            }
          }
        }
      } 
    return false;
  }

  export const getPossibleBishopMoves = (bishop,boardState) => {
    const possibleMoves = [];

    //upper right movement
    for(let i = 1;i < 8;i++){
      const destination = {x: bishop.position.x + i, y: bishop.position.y + i};
      
      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //bottom right movement
    for(let i = 1;i < 8;i++){
      const destination = {x: bishop.position.x + i, y: bishop.position.y - i};
      
      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //bottom left movement
    for(let i = 1;i < 8;i++){
      const destination = {x: bishop.position.x - i, y: bishop.position.y - i};
      
      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }
    //upper left movement
    for(let i = 1;i < 8;i++){
      const destination = {x: bishop.position.x - i, y: bishop.position.y + i};
      
      if(!tileIsOccupied(destination, boardState)){
        possibleMoves.push(destination);
      }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
        possibleMoves.push(destination);
        break;
      }else{
        break;
      }
    }

    return possibleMoves;
  }